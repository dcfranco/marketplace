import React, { useState, useRef, useEffect } from "react";
import Carousel from "react-multi-carousel";
import imgCasasBahia from "../../assets/img/logo-casas-bahia.svg";
import imgExtra from "../../assets/img/logo-extra.svg";
import imgPontofrio from "../../assets/img/logo-pontofrio.svg";
import "react-multi-carousel/lib/styles.css";
import useWindowSize from "../../hooks/useWindowSize";

const CarrouselComp = () => {
  const [enableInfinite, toggleInfinite] = useState(false)

  const carRef = useRef()
  const size = useWindowSize()

  useEffect(() => {
    if (!size) return;
    if (!['LG', 'MD'].includes(size)) {
      toggleInfinite(true)
      setTimeout(() => carRef.current.onResize())
    } else {
      toggleInfinite(false)
      setTimeout(() => setTimeout(() => carRef.current.onResize()))
    }
  }, [size, carRef])
  return (
    <div className="container-fluid py-4 py-lg-5 bg-white">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8">
          <Carousel
            ref={carRef}
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            infinite={enableInfinite}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            itemClass="d-flex align-items-center justify-content-center selectDisable"
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
                items: 3,
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
            <img src={imgCasasBahia} alt="Casas Bahia" className="px-3 selectDisable" draggable={false} />
            <img src={imgExtra} alt="Extra" className="px-3 selectDisable" draggable={false} />
            <img src={imgPontofrio} alt="Ponto Frio" className="px-3 selectDisable" draggable={false} />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarrouselComp;
