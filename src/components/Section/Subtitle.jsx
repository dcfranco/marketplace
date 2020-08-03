import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Subtitle = ({ className, children, ...props }) => {
  return (
    <h2
      {...props}
      className={
        classNames("h4 font-weight-lighter mb-4", className)
      }>
        { children }
    </h2>
  );
};

Subtitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

Subtitle.defaultProps = {
  className: '',
  children: '',
}

export default Subtitle;
