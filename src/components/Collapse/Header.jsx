import React from "react";
import classNames from 'classnames'
import "aos/dist/aos.css";

const CollapseHeader = ({ children, onClick, isOpen }) => {
  return (
    <div className={classNames("card-header cursor-pointer m-0 py-3", {
      'bg-success text-white is-open': isOpen,
      'bg-container border-bottom border-dark': !isOpen,
    })} role="tab" onClick={onClick}>
      <h3 className="h6 mb-0 ml-lg-3 font-weight-bold">
        {children}
      </h3>
      <i className="ml-auto fa fa-chevron-down" />
    </div>
  );
};

export default CollapseHeader;
