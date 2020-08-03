import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Content = ({ className, children }) => {
  return (
    <div className={classNames("text-left hcenter m-0", className)}>
      { children }
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired
}

Content.defaultProps = {
  className: "",
}

export default Content;
