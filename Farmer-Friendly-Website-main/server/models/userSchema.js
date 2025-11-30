const mongoose = require("mongoose");
const validator =require("validator");
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");
const secretKey=process.env.KEY;
const userSchema =new mongoose.Schema({
        fname:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("not valid email address")
                }
            }
        },
        mobile:{
            type:String,
            required:true,
            minlength: 6

        },
        password:{
            type:String,
            required:true,
            unique:"true"

        },
        cpassword:{
            type:String,
            required:true

        },
        tokens :[
            {
                token : {
                    type:String,
                    required:true,

                }
            }
        ],
        carts : Array
});

// Hash password before saving
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});

//token generate 

userSchema.methods.generateAuthToken=async function(){
    try{
        let token=jwt.sign({_id:this._id},secretKey);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(error){
    console.log(error);


    }
}

//add tocart data
userSchema.methods.addcartdata=async function(cart){
    try{
        // Convert Mongoose document to plain object
        const cartItem = cart.toObject ? cart.toObject() : cart;
        
        // Check if item already exists in cart
        const existingItemIndex = this.carts.findIndex(item => item.id === cartItem.id);
        
        if (existingItemIndex !== -1) {
            // Item exists, increase quantity
            this.carts[existingItemIndex].quantity = (this.carts[existingItemIndex].quantity || 1) + 1;
            // Mark the carts array as modified so Mongoose saves it
            this.markModified('carts');
        } else {
            // Item doesn't exist, add with quantity 1
            cartItem.quantity = 1;
            this.carts.push(cartItem);
        }
        
        await this.save();
        return this.carts;
    }catch(error){
        console.log(error);
        
    }
}

const USER =new mongoose.model("USER",userSchema);
module.exports=USER;