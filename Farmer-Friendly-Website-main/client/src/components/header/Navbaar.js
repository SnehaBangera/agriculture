import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Rightheader from './Rightheader';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import { LoginContext } from '../context/ContextProvider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./navbaar.css";
import { List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { ToastContainer, toast } from 'react-toastify';
import {useSelector} from "react-redux"

const Navbaar = () => {
  const { account, setAccount } = useContext(LoginContext);

  const history = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [text, setText] = useState("");
  const [liopen, setLiopen] = useState(true);
  const [searchFocused, setSearchFocused] = useState(false);
  const { products } = useSelector(state => state.getproductsdata);

  // Wishlist state (stored in localStorage)
  const [wishlistCount, setWishlistCount] = useState(0);
  
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlistCount(wishlist.length);
    
    // Listen for wishlist changes
    const handleWishlistChange = () => {
      const updated = JSON.parse(localStorage.getItem('wishlist') || '[]');
      setWishlistCount(updated.length);
    };
    window.addEventListener('wishlistUpdated', handleWishlistChange);
    return () => window.removeEventListener('wishlistUpdated', handleWishlistChange);
  }, []);

  const [dropen, setDropen] = useState(false);
  const [cartAnimation, setCartAnimation] = useState(false);

  // Listen for cart updates to trigger animation
  useEffect(() => {
    const handleCartUpdate = () => {
      setCartAnimation(true);
      setTimeout(() => setCartAnimation(false), 600);
    };
    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  const getDetailValidUser = async () => {
    try {
      const res = await fetch("/validuser", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      if (res.status === 201) {
        const data = await res.json();
        setAccount(data);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleOpen = () => {
    setDropen(true);
  };

  const handleCloseDrawer = () => {
    setDropen(false);
  };

  const logoutuser = async () => {
    try {
      const res2 = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data2 = await res2.json();

      if (res2.status !== 201) {
        console.log("Error");
      } else {
        toast.success("Logged out successfully! 👋", {
          position: "top-center",
        });
        setAccount(false);
        history("/");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const getText = (items) => {
    setText(items);
    setLiopen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      history(`/?search=${encodeURIComponent(text)}`);
      setLiopen(true);
    }
  };

  const filteredProducts = products?.filter(product =>
    product.title.longTitle.toLowerCase().includes(text.toLowerCase()) ||
    product.title.shortTitle.toLowerCase().includes(text.toLowerCase())
  ) || [];

  useEffect(() => {
    getDetailValidUser();
  }, []);

  return (
    <>
      <header>
        <nav>
          <div className="hamburgur">
            <IconButton onClick={handleOpen}>
              <MenuIcon style={{ color: "#fff" }} />
            </IconButton>
            <Drawer open={dropen} onClose={handleCloseDrawer}>
              <Rightheader Logclose={handleCloseDrawer} Logoutuser={logoutuser} />
            </Drawer>
          </div>

          <div className="navlogo">
            <NavLink to="/">
              <div className="logo_container">
                <span className="logo_icon">🌾</span>
                <div className="logo_text">
                  <span className="logo_name">AgriMart</span>
                  <span className="logo_tagline">Farm Fresh</span>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="left">
            <form className={`nav_searchbaar ${searchFocused ? 'focused' : ''}`} onSubmit={handleSearchSubmit}>
              <input
                type="text"
                onChange={(e) => getText(e.currentTarget.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                placeholder='Search for fresh produce, fertilizers, seeds...'
                value={text}
              />
              <button type="submit" className="search_icon">
                <SearchIcon id="search" />
              </button>
              {/* Enhanced search dropdown */}
              {text && !liopen && filteredProducts.length > 0 && (
                <List className='extrasearch'>
                  <p className="search_results_title">
                    {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} found
                  </p>
                  {filteredProducts.slice(0, 6).map(product => (
                    <ListItem key={product.id} className="search_result_item">
                      <NavLink to={`/getproductsone/${product.id}`} onClick={() => { setLiopen(true); setText(''); }}>
                        <img src={product.url} alt="" className="search_result_img" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=50&h=50&fit=crop'; }} />
                        <div className="search_result_info">
                          <span className="search_result_name">{product.title.shortTitle}</span>
                          <span className="search_result_price">₹{product.price.cost}</span>
                        </div>
                      </NavLink>
                    </ListItem>
                  ))}
                  {filteredProducts.length > 6 && (
                    <p className="search_view_all" onClick={handleSearchSubmit}>
                      View all {filteredProducts.length} results →
                    </p>
                  )}
                </List>
              )}
              {text && !liopen && filteredProducts.length === 0 && (
                <List className='extrasearch'>
                  <p className="search_no_results">No products found for "{text}"</p>
                </List>
              )}
            </form>
          </div>

          <div className="right">
            {!account && (
              <div className="nav_btn">
                <NavLink to="/login">Sign In</NavLink>
              </div>
            )}
            
            {/* Wishlist Icon */}
            <div className="wishlist_nav_btn" title="Wishlist">
              <NavLink to="/wishlist">
                <Badge badgeContent={wishlistCount} color="error">
                  <FavoriteIcon className="wishlist_icon" />
                </Badge>
              </NavLink>
            </div>
            
            <div className={`cart_btn ${cartAnimation ? 'cart_bounce' : ''}`}>
              {account ? (
                <NavLink to="/buynow">
                  <Badge badgeContent={account.carts?.length || 0} color="primary">
                    <ShoppingCartIcon id="icon" />
                  </Badge>
                </NavLink>
              ) : (
                <NavLink to="/login">
                  <Badge badgeContent={0} color="primary">
                    <ShoppingCartIcon id="icon" />
                  </Badge>
                </NavLink>
              )}
              <ToastContainer />
              <p>Cart</p>
            </div>
            {account ? (
              <Avatar
                className='avtar2'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                {account.fname?.[0]?.toUpperCase()}
              </Avatar>
            ) : (
              <Avatar
                className='avtar'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              />
            )}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              className="user_menu"
            >
              {account && (
                <div className="menu_header">
                  <p className="menu_greeting">Hello, {account.fname || 'User'}!</p>
                </div>
              )}
              <MenuItem onClick={handleClose}>
                <PersonIcon style={{ fontSize: 18, marginRight: 8 }} />
                My Account
              </MenuItem>
              <MenuItem onClick={() => { handleClose(); history('/buynow'); }}>
                <LocalShippingIcon style={{ fontSize: 18, marginRight: 8 }} />
                My Orders
              </MenuItem>
              {account && (
                <MenuItem onClick={logoutuser} className="logout_menu_item">
                  <LogoutIcon style={{ fontSize: 18, marginRight: 8 }} />
                  Logout
                </MenuItem>
              )}
            </Menu>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbaar;
