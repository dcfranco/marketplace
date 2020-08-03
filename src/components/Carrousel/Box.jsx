import React from "react";
import Carousel from "react-multi-carousel";
import imgCasasBahia from "../../assets/img/logo-casas-bahia.svg";
import imgExtra from "../../assets/img/logo-extra.svg";
import imgPontofrio from "../../assets/img/logo-pontofrio.svg";
import "react-multi-carousel/lib/styles.css";
import { TitleH2 } from "../Section";

const CarrouselBox = () => {
  return (
    <div className="text-dark px-4 w-md-75 w-lg-60 mx-auto mb-0">
      <div className="container py-4 py-lg-5 bg-container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-6 col-xl-6 offset-xl-0 text-center">
            <h4 className="text-center">Em quais bandeiras da Via Varejo, meus produtos estarão expostos?</h4>
          </div>
          <div className="col-lg-6 col-xl-6">
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlay
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container-with-dots bg-container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass="d-flex align-items-center justify-content-center"
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1140,
                  },
                  items: 1,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 600,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1140,
                    min: 600,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={2}
              swipeable
            >
              <img src={imgCasasBahia} />
              <img src={imgExtra} />
              <img src={imgPontofrio} />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrouselBox;
