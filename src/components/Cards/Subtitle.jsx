import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Subtitle = ({ className, children }) => {
  return (
    <h3 className={classNames("h5 text-left text-lg-center font-weight-normal hcenter m-0", className)}>
      { children }
    </h3>
  );
};

Subtitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired
}

Subtitle.defaultProps = {
  className: "",
}

export default Subtitle;
