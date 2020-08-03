import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Container = ({ className, children }) => {
  return (
    <div className={classNames("col-auto text-left text-lg-center", className)}>
      { children }
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired
}

Container.defaultProps = {
  className: "col-lg-12",
}

export default Container;
