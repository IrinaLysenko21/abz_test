import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ btnClass, text, flat, type }) => {
  const btnClassName = flat ? `${btnClass} button_flat` : `${btnClass} button`;

  return (
    <button className={btnClassName} type={type}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  btnClass: '',
  flat: false,
  type: 'button',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
  flat: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
