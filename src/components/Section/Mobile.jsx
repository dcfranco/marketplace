import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Mobile = ({ className, children }) => {
  return (
    <div className={classNames("row d-print-none d-lg-none px-3", className)}>
      <div className="col-md-12 col-lg-8">
        { children }
      </div>
    </div>
  );
};

Mobile.propTypes = {
  className: PropTypes.string,
}

Mobile.defaultProps = {
  className: '',
}

export default Mobile;
