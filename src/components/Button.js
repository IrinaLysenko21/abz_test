import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ btnClass, text, flat }) => {
  const btnClassName = flat ? `${btnClass} button_flat` : `${btnClass} button`;

  return (
    <button className={btnClassName} type="button">
      {text}
    </button>
  );
};

Button.defaultProps = {
  btnClass: '',
  flat: false,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
  flat: PropTypes.bool,
};

export default Button;
