import React from "react";
import "aos/dist/aos.css";

const Collapse = ({ children }) => {
  return (
    <div className="card border-0">
      {children}
    </div>
  );
};

export { default as CollapseHeader} from './Header'
export { default as CollapseBody} from './Body'

export default Collapse;
