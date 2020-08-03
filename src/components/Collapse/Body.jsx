import React from "react";
import { Collapse } from 'react-collapse';

const CollapseBody = ({ children, isOpen }) => {
  return (
    <Collapse isOpened={isOpen}>
      <div className="card-body">
        <p className="card-text">
          { children }
        </p>
      </div>
    </Collapse>
  );
};

export default CollapseBody;
