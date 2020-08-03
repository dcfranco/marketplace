import React, { forwardRef } from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

const SectionContainer = forwardRef(({ id, className, containerClassName, children }, ref) => {
  return (
    <section id={id} className={className} ref={ref}>
      <div className={classNames("container", containerClassName)}>
        { children }
      </div>
    </section>
  );
});

SectionContainer.propTypes = {
  id: PropTypes.any.isRequired,
  className: PropTypes.string,
  containerClassName: PropTypes.string
}

SectionContainer.defaultProps = {
  className: '',
  containerClassName: '',
}

export default SectionContainer;
