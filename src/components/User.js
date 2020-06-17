import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => {
  return (
    <div className="user">
      <img className="user__photo" src={user.photo} alt={`User ${user.name}`} />
      <p className="user__name section-title-2">{user.name}</p>
      <p className="user__info paragraph">{user.position}</p>
      <p className="user__info paragraph">{user.email}</p>
      <p className="user__info paragraph">{user.phone}</p>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
