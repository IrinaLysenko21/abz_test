import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import logo from '../images/logo.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="container header__wrapper">
        <Link className="logo" exact="true" to="/">
          <img className="logo__img" src={logo} alt="logo" />
        </Link>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
