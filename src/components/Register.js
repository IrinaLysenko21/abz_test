import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Button from './Button';

function Register({ positions }) {
  const inputIds = {
    name: shortid.generate(),
    email: shortid.generate(),
    number: shortid.generate(),
  };

  return (
    <section className="register">
      <div className="container">
        <div className="register__content-wrapper">
          <div className>
            <h2 className="register__title section-title">
              Register to get a work
            </h2>
            <p className="register__subtitle section-paragraph">
              Attention! After successful registration and alert, update the
              list of users in the block from the top
            </p>
            <form className="register-form">
              <label className="register-form__label" htmlFor="nameId">
                <span className="register-form__label-text paragraph">
                  Enter name:
                </span>
                <input
                  id={inputIds.name}
                  className="register-form__input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  // value={name}
                  // onChange={this.handleChange}
                />
              </label>
              <label className="register-form__label" htmlFor={inputIds.email}>
                <span className="register-form__label-text paragraph">
                  Enter email:
                </span>
                <input
                  id={inputIds.email}
                  className="register-form__input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  // value={name}
                  // onChange={this.handleChange}
                />
              </label>
              <label className="register-form__label" htmlFor={inputIds.number}>
                <span className="register-form__label-text paragraph">
                  Enter number:
                </span>
                <input
                  id={inputIds.phone}
                  className="register-form__input register-form__number-input"
                  type="text"
                  name="number"
                  placeholder="+380 XX XXX XX XX"
                  // value={number}
                  // onChange={this.handleChange}
                />
                <span className="register-form__number-input-text">
                  Enter phone number in open format
                </span>
              </label>
              <div className="register-form__selector">
                <label
                  className="register-form__label"
                  htmlFor={inputIds.position}
                >
                  <span className="register-form__selector-title paragraph">
                    Select your position
                  </span>
                  {positions.length > 0 &&
                    positions.map(position => (
                      <label key={position.id} htmlFor={position.id}>
                        <input
                          id={position.id}
                          className="register-form__checkbox"
                          type="radio"
                          name="position"
                          value={position.name}
                          // checked={gender === Gender.FEMALE}
                          // onChange={this.handleChange}
                        />
                        <span className="paragraph">{position.name}</span>
                      </label>
                    ))}
                </label>
              </div>
              <Button text="Sign up now" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

Register.propTypes = {
  positions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default Register;
