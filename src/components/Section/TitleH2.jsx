import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

const TitleH2 = ({ className, children }) => {
  return (
    <h2
      data-aos="fade-up"
      className={
        classNames("font-weight-bold mb-2", className)
      }>
        { children }
    </h2>
  );
};

TitleH2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

TitleH2.defaultProps = {
  className: '',
  children: '',
}

export default TitleH2;
