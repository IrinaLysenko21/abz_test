import React from 'react';
import { NavLink } from 'react-router-dom';

const active = {
  color: '#007bff',
};

const Navigation = () => {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <NavLink exact to="/" className="nav__link" activeStyle={active}>
            About me
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink
            to="/relationships"
            className="nav__link"
            activeStyle={active}
          >
            Relationships
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink
            to="/requirements"
            className="nav__link"
            activeStyle={active}
          >
            Requirements
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/users" className="nav__link" activeStyle={active}>
            Users
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/signup" className="nav__link" activeStyle={active}>
            Sign up
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
