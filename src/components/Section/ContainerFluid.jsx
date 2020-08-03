import React, { forwardRef } from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

const ContainerFluid = forwardRef(({ id, className, containerClassName, children }, ref) => {
  return (
    <section id={id} className={className} ref={ref}>
      <div className={classNames("container-fluid", containerClassName)}>
        { children }
      </div>
    </section>
  );
});

ContainerFluid.propTypes = {
  id: PropTypes.any.isRequired,
  className: PropTypes.string,
  containerClassName: PropTypes.string
}

ContainerFluid.defaultProps = {
  className: '',
  containerClassName: '',
}

export default ContainerFluid;
