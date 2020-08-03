import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Wrapper = ({ className, children }) => {
  return (
    <div className={classNames("row", className)}>
      <div className="col-md-12 col-lg-12 col-xl-12">
        { children }
      </div>
    </div>
  );
};

Wrapper.propTypes = {
  className: PropTypes.string,
}

Wrapper.defaultProps = {
  className: "",
}

export default Wrapper;
