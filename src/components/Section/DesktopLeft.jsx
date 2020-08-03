import React from "react";
import PropTypes from 'prop-types'

const DesktopLeft = ({ className, children }) => {
  return (
    <div className={className}>
      { children }
    </div>
  );
};

DesktopLeft.propTypes = {
  className: PropTypes.string,
}

DesktopLeft.defaultProps = {
  className: 'col-md-7 col-lg-8 col-xl-7',
}

export default DesktopLeft;
