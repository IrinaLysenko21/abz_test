import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => {
  return (
    <li className="users__list-item">
      <p>{user.name}</p>
      <p>{user.position}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </li>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
