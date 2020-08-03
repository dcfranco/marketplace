import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Card = ({ className, children, noBorder }) => {
  return (
    <div data-aos="slide-up" data-aos-duration="300" className={classNames("col-sm-12 col-lg-4 text-center mt-2 mt-lg-3", className)}>
      <div className="row align-items-center no-gutters">
        { children }
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  noBorder: PropTypes.bool,
  children: PropTypes.any.isRequired
}

Card.defaultProps = {
  className: "",
  noBorder: false,
}

export default Card;
