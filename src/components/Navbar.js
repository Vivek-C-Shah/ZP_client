import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
// import {showCart} from '../redux/actions/cartActions';
import { logout } from "../redux/actions/userActions";

const NavBar = () => {
  const dispatch = useDispatch();
  // const showCartStatus = useSelector((state)=> state.cart.showCart);
  // const cartItems = useSelector((state)=> state.cart.cartItems);
  const userInfo = useSelector((state)=> state.userPanelLogin.userInfo);
  let isLoggedin = false;
  let userName = '';
  
  if(typeof userInfo !== 'undefined' && Object.keys(userInfo).length !== 0){
    userName = userInfo.data[0].name;
    isLoggedin = true;
  }

  // let cartItemsCount = cartItems.reduce((total, item)=>{
  //  return total + item.qty
  // }, 0);


  // const toggleCart = () => {
  //  dispatch(showCart(!showCartStatus))
  // }

  const logoutHandler = () => {
      dispatch(logout());    
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900">Home</Link>
              <Link to="/products" className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900">Products</Link>
              <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900">About</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="auth-section">
                <div className="auth-container">
                  {
                    !isLoggedin ?
                    (
                      <Link to="/login" className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900">Login</Link>
                    ) :
                    (
                      <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          {userName}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          {/* <Link className="dropdown-item" to="#">Profile</Link> */}
                          <Link className="dropdown-item" onClick={logoutHandler} to="#">Log Out</Link>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
              <div className="toggle-container">
                {/* <button className="toggle-cart" onClick={toggleCart}>
                  <i className="fas fa-shopping-cart" />
                </button> */}
                {/* <span className="cart-item-count">{cartItemsCount}</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900">Home</Link>
          <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900">Products</Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900">About</Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-5">
            <div className="auth-section">
              <div className="auth-container">
                {
                  !isLoggedin ?
                  (
                    <Link to="/login" className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900">Login</Link>
                  ) :
                  (
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {userName}
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {/* <Link className="dropdown-item" to="#">Profile</Link> */}
                        <Link className="dropdown-item" onClick={logoutHandler} to="#">Log Out</Link>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
            <div className="toggle-container">
              {/* <button className="toggle-cart" onClick={toggleCart}>
                <i className="fas fa-shopping-cart" />
              </button> */}
              {/* <span className="cart-item-count">{cartItemsCount}</span> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
