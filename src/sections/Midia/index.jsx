import React, { useEffect } from "react";
import AOS from 'aos';
import {
  Desktop,
  Subtitle,
  Container,
  Title,
  Paragraph,
  Image,
  TitleH2,
  Mobile,
} from "../../components/Section";
import "aos/dist/aos.css";
import DesktopLeft from "../../components/Section/DesktopLeft";
import DesktopRight from "../../components/Section/DesktopRight";
import imgHero from "../../assets/img/icone-ads.png"
import useUpdateHash from "../../hooks/useUpdateHash";

const MidiaSection = () => {
  const element = useUpdateHash()

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Container
      ref={element}
      id="midiaads"
      className="bg-container text-dark px-4 py-5 py-lg-0 mx-auto mb-0 small-box"
    >
      <Desktop>
        <DesktopLeft>
          <TitleH2 className="mb-3 font-weight-bold">
            Conte com uma força a mais
          </TitleH2>
          <Paragraph className="pr-lg-5">
            Quer aumentar a exposição dos seus produtos e impulsionar o seu negócio? Nós temos a solução:
          </Paragraph>
          <h3 className="h4 mb-0">
            Via Varejo Ads
          </h3>
          <Paragraph>
            <a className="text-dark text-underline" href="https://www.viavarejo.com.br/ads" target="blank">Clique aqui</a> e saiba mais
          </Paragraph>
        </DesktopLeft>
        <DesktopRight>
          <img
            alt="Via Varejo Ads"
            className="img-fluid d-none d-md-inline pulse animated mx-auto h-100 w-100"
            src={imgHero}
            data-aos="fade-down"
            data-aos-delay="100"
          />
        </DesktopRight>
      </Desktop>
      <Mobile>
        <Title
          className="pulse animated mb-4 text-dark"
        >
          <strong>
            Conte com uma força a mais
          </strong>
        </Title>
        <Subtitle className="font-weight-normal text-dark">
          Quer aumentar a exposição dos seus produtos e impulsionar o seu negócio? Nós temos a solução:
        </Subtitle>
        <h3 className="h4 pulse animated text-dark">
          Via Varejo Ads
        </h3>
        <Subtitle className="font-weight-normal pb-2 text-dark">
          <a className="text-dark" href="https://www.viavarejo.com.br/ads" target="blank">Clique aqui e veja</a>
        </Subtitle>
        <Image className="align-items-center align-content-center text-center pt-3 pb-3">
          <img
            alt="Via Varejo Ads"
            className="img-fluid pulse animated"
            style={{ maxHeight: '200px', height: '100%', marginLeft: 'auto'}}
            src={imgHero}
          />
        </Image>
      </Mobile>
    </Container>
  );
};

export default MidiaSection;
