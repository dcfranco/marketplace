import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Title = ({ className, children }) => {
  return (
    <h1
      className={
        classNames("text-sm-center text-md-left font-weight-bolder d-flex justify-content-lg-center pulse animated", className)
      }>
        { children }
    </h1>
  );
};

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

Title.defaultProps = {
  className: '',
  children: '',
}

export default Title;
