import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Nav() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };
  const menuStyle = {
    marginLeft: '25px',
  };
  const headerStyle = {
    height: '60px',

  };
  const wrapperStyle = {
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#18355B',
  };
  const h1Style = {
    flex: '1',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  };
  const navStyle = {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  };

  if (Auth.loggedIn()) {
    return (
      <header style={headerStyle}>
        <div className="wrapper" style={wrapperStyle}>
          <img src="/assets/images/orb.gif" height="40px" />
          <img src="/assets/images/logo_noBG.png" />

          <nav style={navStyle}>
            <div className="menu-item" style={menuStyle}>
              <Link style={linkStyle} to="/profile">
                Profile
              </Link>
            </div>
            <div className="menu-item" style={menuStyle}>
              <a href="/" style={linkStyle} onClick={() => Auth.logout()}>
                Logout
              </a>
            </div>
            <div className="menu-item" style={menuStyle}>
              <span>
                <FaShoppingCart />
              </span>
            </div>
          </nav>
        </div>
      </header>
    );
  } else {
    return (
      <header style={headerStyle}>
        <div className="wrapper" style={wrapperStyle}>
          <img src="/assets/images/orb.gif" height="40px" />
          <img src="/assets/images/logo_noBG.png" />

          <nav style={navStyle}>
            <div className="menu-item" style={menuStyle}>
              <Link style={linkStyle} to="/signup">
                Signup
              </Link>
            </div>
            <div className="menu-item" style={menuStyle}>
              <Link style={linkStyle} to="/login">
                Login
              </Link>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Nav;
