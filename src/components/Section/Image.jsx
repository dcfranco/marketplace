import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Image = ({ className, children }) => {
  return (
    <div className="row">
      <div className={classNames("col-12 col-md-5 col-lg-4 col-xl-5 align-self-center text-center", className)}>
        { children }
      </div>
    </div>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

Image.defaultProps = {
  className: '',
  children: '',
}

export default Image;
