import React, { useEffect } from "react";
import AOS from 'aos';

const HowMuch = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div  id="vendanavia" className="container-fluid py-4 py-lg-5 bg-green">
      <div className="row">
        <div className="col-12 mt-3 mb-3 col-md-6 col-lg-6 my-lg-0">
          <h3 className="p-0 text-secondary font-weight-bold mb-0 w-xl-70 ml-xl-auto">Quanto custa para vender no Via Varejo Marketplace?</h3>
        </div>
        <div className="col-12 mb-3 col-md-6 mt-md-3 col-lg-6 my-lg-0">
          <p className="d-lg-flex p-0 font-weight-lighter text-white mb-0 w-xl-60">É cobrado de você somente uma comissão sobre a venda, de acordo com a categoria do produto</p>
        </div>
      </div>
    </div>
  );
};

export default HowMuch;
