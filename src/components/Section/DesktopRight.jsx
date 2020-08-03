import React from "react";
import PropTypes from 'prop-types'

const DesktopRight = ({ className, children }) => {
  return (
    <div className={className}>
      { children }
    </div>
  );
};

DesktopRight.propTypes = {
  className: PropTypes.string,
}

DesktopRight.defaultProps = {
  className: 'col-auto col-md-5 col-lg-4 col-xl-5 align-self-center text-center',
}

export default DesktopRight;
