import React from "react";
import imgHero from "../../assets/img/img-hero-bottom-setaamarela-v3.svg";

const Delimiter = () => {
  return (
    <div
      className="text-justify align-self-center flex-nowrap my-auto justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center visible text-center"
    >
      <a href="#numeros">
        <img
          className="img-fluid d-flex bg-container"
          src={imgHero}
          width="100%"
          height="100%"
        />
      </a>
    </div>
  );
};

export default Delimiter;
