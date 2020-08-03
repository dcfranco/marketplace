import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({ className, children, ...props }) => {
  return (
    <button { ...props } className={classNames("btn btn-secondary wobble animated mt-2", className)} type="button">
      { children }
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

Button.defaultProps = {
  className: '',
  children: '',
}

export default Button;
