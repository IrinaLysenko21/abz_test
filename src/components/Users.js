import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import Button from './Button';

function Users({ users }) {
  return (
    <section className="users">
      <div className="container">
        <h2 className="users__title section-title">Our cheerful users</h2>
        <p className="users__subtitle section-paragraph">
          Attention! Sorting users by registration date
        </p>
        <ul className="users__list">
          {users.map(user => (
            <li className="users__list-item" key={user.id}>
              <User user={user} />
            </li>
          ))}
        </ul>
        <Button text="Show more" />
      </div>
    </section>
  );
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Users;
