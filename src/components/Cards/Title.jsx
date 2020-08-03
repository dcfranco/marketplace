import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Title = ({ className, children }) => {
  return (
    <h2 className={classNames("d-block text-lg-center font-weight-bold font-size-lg-3xl mb-0 text-truncate", className)}>
      { children }
    </h2>
  );
};

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired
}

Title.defaultProps = {
  className: "",
}

export default Title;
