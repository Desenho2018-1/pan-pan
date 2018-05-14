import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = (props) => {
  const { value } = props;

  return (
    <div>
      <input type="submit" className="button" value={value} />
    </div>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
