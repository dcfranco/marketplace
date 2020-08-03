import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Cards = ({ className, children }) => {
  return (
    <div className={classNames("row flex-column flex-md-row my-2", className)}>
      { children }
    </div>
  );
};

Cards.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired
}

Cards.defaultProps = {
  className: "",
}

export { default as CardContainer } from './Container';
export { default as CardTitle } from './Title';
export { default as CardSubtitle } from './Subtitle';
export { default as CardIcon } from './Icon'; 
export { default as CardContent } from './Content';
export { default as Card } from './Card';

export default Cards;
