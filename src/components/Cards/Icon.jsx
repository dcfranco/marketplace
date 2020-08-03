import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Icon = ({ children, className, isRow }) => {
  return (
    <div
      className={classNames({
        "col-12 mb-4": !isRow,
        "col-5 col-lg-12 mb-lg-4": isRow
      })}
      data-aos="fade-up-right"
      data-aos-delay="100"
    >
      <div className={classNames("img-border", { "mt-0 is-row": isRow }, className)}>
        { children }
      </div>
    </div>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired
}

Icon.defaultProps = {
  className: "",
}

export default Icon;
