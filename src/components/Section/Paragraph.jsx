import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Paragraph = ({ className, children }) => {
  return (
    <p
      className={
        classNames("text-sm-center text-md-left mb-5", className)
      }>
        { children }
    </p>
  );
};

Paragraph.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

Paragraph.defaultProps = {
  className: '',
  children: '',
}

export default Paragraph;
