import React, { useEffect } from "react";
import AOS from 'aos';
import logo from "../../assets/img/logo-viavarejo-white.svg";
import logoInstagram from "../../assets/img/logo-instagram.svg";
import logoYoutube from "../../assets/img/logo-youtube.svg";

const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="container-fluid py-4 py-lg-4 grad-green" id="footer">
      <div className="row no-gutters">
        <div className="col-md-6 col-lg-6 col-xl-3 my-auto text-center m-0">
          <img className="img-fluid" alt="Logo" src={logo} style={{ width: "300px" }} />
        </div>
        <div className="col-md-6 col-lg-5 col-xl-3 text-left align-self-center my-auto p-0">
          <h4 className="h6 font-size-sm text-center text-white font-weight-lighter py-3">
            Via Varejo S.A. Rua Samuel Klein, n° 83 <br />
                São Caetano do Sul - SP - CEP: 09520-010 <br />
                CNPJ: 33.041.260/0652-90
              </h4>
        </div>
        <div className="col-lg-3 col-xl-2 offset-xl-1 text-left d-none d-xl-block align-self-center my-auto">
          <div className="media text-left d-xl-flex align-items-xl-center">
            <img alt="Instagram" className="mr-3" src={logoInstagram} />
            <div className="media-body align-items-xl-center">
              <h5 className="h6 font-size-sm text-white pt-1">
                <a href="https://www.instagram.com/viavarejomarketplace" target="blank">/viavarejomarketplace</a>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-xl-2 offset-xl-0 text-left d-none d-xl-block align-self-center my-auto">
          <div className="media d-xl-flex align-items-xl-center">
            <img alt="YouTube" className="mr-3" src={logoYoutube} />
            <div className="media-body align-items-xl-center">
              <h5 className="h6 font-size-sm text-white pt-1">
                <a href="https://www.youtube.com/viavarejomarketplace" target="blank">/viavarejomarketplace</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
