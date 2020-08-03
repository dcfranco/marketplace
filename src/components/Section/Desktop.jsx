import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Desktop = ({ className, children }) => {
  return (
    <div className={classNames(className)}>
      { children }
    </div>
  );
};

Desktop.propTypes = {
  className: PropTypes.string,
}

Desktop.defaultProps = {
  className: "row d-none d-sm-none d-lg-inline-flex align-items-center",
}

export default Desktop;
