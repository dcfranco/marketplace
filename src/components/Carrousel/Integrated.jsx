import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Wrapper, TitleH2, ContainerFluid } from "../Section";
import useUpdateHash from "../../hooks/useUpdateHash";

import _00k from "../../assets/img/integradoras/logo-ook.svg"
import _4price from "../../assets/img/integradoras/4Price Marketplace Monitoring.jpg"
import _commerceplus from "../../assets/img/integradoras/Commerceplus.svg"
import _ConnectHub from "../../assets/img/integradoras/Connect Hub.svg"
import _Epicom from "../../assets/img/integradoras/Epicom.svg"
import _HUB2B from "../../assets/img/integradoras/HUB2B.svg"
import _Ideris from "../../assets/img/integradoras/Ideris Store in Store.svg"
import _Koncili1 from "../../assets/img/integradoras/Koncili-01.svg"
import _Magazord from "../../assets/img/integradoras/Magazord.svg"
import _MINTEGRA from "../../assets/img/integradoras/MINTEGRA.svg"
import _NeoGest from "../../assets/img/integradoras/NeoGest.svg"
import _Olist from "../../assets/img/integradoras/Olist.svg"
import _Omni from "../../assets/img/integradoras/Omni Wapstore.svg"
import _Oruc from "../../assets/img/integradoras/Oruc - Plataforma de E-commerce.svg"
import _Betalabs from "../../assets/img/integradoras/Plataforma E-commerce Betalabs.svg"
import _Plugg from "../../assets/img/integradoras/Plugg.to.svg"
import _Precode from "../../assets/img/integradoras/Precode.svg"
import _Sondify from "../../assets/img/integradoras/Sondify.png"
import _Tiny from "../../assets/img/integradoras/Tiny ERP.svg"
import _TMW from "../../assets/img/integradoras/TMW E-commerce.svg"
import _Vanguarda from "../../assets/img/integradoras/Vanguarda TI.svg"
import _Venda from "../../assets/img/integradoras/Venda.La.svg"
import _Vtrina from "../../assets/img/integradoras/Vtrina.jpg"
import _Webstore from "../../assets/img/integradoras/Webstore.jpg"
import _Wevo from "../../assets/img/integradoras/Wevo.svg"
import _Bling from "../../assets/img/integradoras/logo-bling.png"
import _none from "../../assets/img/no-logo.png"

const capitalize = (str, lower = true) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
;

const list = [
  { "name": "00K", "image": _00k },
  { "name": "4Price", "image": _4price },
  { "name": "Academia do E-commerce", "image": _none },
  { "name": "Achieve Leap", "image": _none },
  { "name": "Adena", "image": _none },
  { "name": "Agêncua Wing", "image": _none },
  { "name": "All Integra", "image": _none },
  { "name": "Ambar-X", "image": _none },
  { "name": "AnyMarket", "image": _none },
  { "name": "AudTax", "image": _none },
  { "name": "Becommerce", "image": _none },
  { "name": "Betalabs", "image": _Betalabs },
  { "name": "Bis2Bis", "image": _none },
  { "name": "BizCommerce", "image": _none },
  { "name": "Bling", "image": _Bling },
  { "name": "Ciashop", "image": _none },
  { "name": "Commerceplus", "image": _commerceplus },
  { "name": "Connect Hub", "image": _ConnectHub },
  { "name": "Convertize", "image": _none },
  { "name": "CWD", "image": _none },
  { "name": "DCG", "image": _none },
  { "name": "D LOJA Virtual", "image": _none },
  { "name": "E-Com Club", "image": _none },
  { "name": "Ecommet", "image": _none },
  { "name": "E-completo", "image": _none },
  { "name": "Linx", "image": _none },
  { "name": "F1 Commerce", "image": _none },
  { "name": "Fábrica de Códigos", "image": _none },
  { "name": "Fbits", "image": _none },
  { "name": "F-OmniChannel", "image": _none },
  { "name": "Fullhub", "image": _none },
  { "name": "Hub2b Software", "image": _HUB2B },
  { "name": "IDERIS LAB", "image": _Ideris },
  { "name": "INOVE COMMERCE", "image": _none },
  { "name": "INTEGRAÇÃO OPENK", "image": _none },
  { "name": "INTEGRATION EPICOM", "image": _Epicom, isHeightAuto: true },
  { "name": "INTERATIVA SHOP", "image": _none },
  { "name": "IRROBA", "image": _none },
  { "name": "JET E-COMMERCE", "image": _none },
  { "name": "KONCILIA", "image": _Koncili1, isHeightAuto: true },
  { "name": "LOJAS VIRTUAIS BR", "image": _none },
  { "name": "MAGAZORD", "image": _Magazord, isHeightAuto: true },
  { "name": "MAGIS5", "image": _none },
  { "name": "MILLENNIUM", "image": _none },
  { "name": "MINTEGRA", "image": _MINTEGRA },
  { "name": "MKX LOJAS VIRTUAIS", "image": _none },
  { "name": "MOOVIN", "image": _none },
  { "name": "NEOGEST", "image": _NeoGest },
  { "name": "OMNIK", "image": _Omni },
  { "name": "OLIST", "image": _Olist },
  { "name": "OPECO", "image": _none },
  { "name": "ORUC", "image": _Oruc },
  { "name": "PLUGGTO", "image": _Plugg },
  { "name": "PRECIFICA", "image": _none },
  { "name": "PRECODE", "image": _Precode },
  { "name": "QBIT", "image": _none },
  { "name": "RAKUTEN", "image": _none },
  { "name": "RJS TECNOLOGIA", "image": _none },
  { "name": "SALES HUB", "image": _none },
  { "name": "SIMPLIFIQUE", "image": _none },
  { "name": "SISECCOMMERCE", "image": _none },
  { "name": "SKYHUB", "image": _none },
  { "name": "SOFTVAR", "image": _none },
  { "name": "SONDIFY", "image": _Sondify, isHeightAuto: true },
  { "name": "STORENT", "image": _none },
  { "name": "TATILHUB", "image": _none },
  { "name": "TI WEBMASTER", "image": _none },
  { "name": "TINY", "image": _Tiny },
  { "name": "TMW E-COMMERCE", "image": _TMW },
  { "name": "TOPLOJAS", "image": _none },
  { "name": "TRAY", "image": _none },
  { "name": "VANGUARDA TI", "image": _Vanguarda, isHeightAuto: true },
  { "name": "VENDA.LA", "image": _Venda },
  { "name": "VERTISNET", "image": _none },
  { "name": "VISUAL ECOMMERCE", "image": _none },
  { "name": "VTEX", "image": _none },
  { "name": "VTRINA", "image": _Vtrina, isHeightAuto: true },
  { "name": "WAPSTORE", "image": _none },
  { "name": "WDNA", "image": _none },
  { "name": "WEBSTORE", "image": _Webstore, isHeightAuto: true },
  { "name": "WEBSTORM", "image": _none },
  { "name": "WEHUB", "image": _none },
  { "name": "WEVO SALES", "image": _Wevo }
]

const CarrouselIntegrated = () => {
  const element = useUpdateHash()
 
  const [search, updateSearch] = useState("")

  const listToShow = list.filter((i) => (i.name.toLowerCase().includes(search.toLowerCase()) > 0 || search === ""))
  return (
    <ContainerFluid
      ref={element}
      id="integradoravia"
      className="bg-white text-dark px-lg-4 py-0 w-md-75 w-lg-60 mx-auto small-box"
    >
      <Wrapper>
        <TitleH2 className="d-block text-center mb-5 w-lg-70 mx-auto">Somos parceiros das maiores integradoras do mercado</TitleH2>
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1 search">
            <input
              className="form-control form-control-lg border border-dark rounded font-size-sm" 
              onChange={(e) => {
                updateSearch(e.currentTarget.value)
              }}
              type="text"
              value={search}
              placeholder="Descubra se a sua integradora já é parceira do Via Varejo Marketplace"
            />
            <i className="fa fa-search" />
          </div>
        </div>
        <div className="row justify-content-center mt-4 mt-lg-5">
          <div className="col-12">
            { listToShow.length > 0 ? (
              <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlay
                autoPlaySpeed={2000}
                centerMode={false}
                className=""
                containerClass="container-with-dots content-brands"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass="selectDisable"
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
                    items: 6,
                    partialVisibilityGutter: 40,
                  },
                  mobile: {
                    breakpoint: {
                      max: 600,
                      min: 0,
                    },
                    items: 2,
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
                { listToShow.map((item) =>{
                  const name = capitalize(item.name)
                  return (
                    <div className="content-brands-div" key={item.name} draggable={false}>
                      <div className="logo">
                        <img
                          alt={name}
                          className="logo-integradora text-center selectDisable"
                          src={item.image}
                          style={ item.isHeightAuto ? { height: 'auto', width: 'fit-content' } : { height: 'fit-content', width: 'auto' }}
                          draggable={false}/>
                        </div>
                        <h3 className="h6 text-center hcenter selectDisable font-size-sm">{name}</h3>
                    </div>
                  )
                })}
              </Carousel>
            ) : (
              <div className="text-center font-weight-bold">Ops, integradora não encontrada</div>
            )}
          </div>
        </div>
      </Wrapper>
    </ContainerFluid>
  );
};

export default CarrouselIntegrated;
