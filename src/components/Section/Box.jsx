import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Box = ({ className, children }) => {
  return (
    <div className={classNames("col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 offset-xl-0 text-center", className)}>
      { children }
    </div>
  );
};

Box.propTypes = {
  className: PropTypes.string,
}

Box.defaultProps = {
  className: "",
}

export default Box;
