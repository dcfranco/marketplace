import React from "react";
import { Container, Desktop, Title, Subtitle, Paragraph, Mobile } from "../../components/Section";
import DesktopLeft from "../../components/Section/DesktopLeft";
import DesktopRight from "../../components/Section/DesktopRight";
import RegisterStore from "../../components/Section/RegisterStore";
import useUpdateHash from "../../hooks/useUpdateHash";

const HeroSection = ({ id, className }) => {
  const element = useUpdateHash()
  return (
    <Container ref={element} id="hero" className="hero">
        <Desktop>
          <DesktopLeft>
            <Title className="mb-5">
              A maior força de vendas do Brasil para o seu negócio
            </Title>
            <Subtitle className="font-weight-bold">
              Com o Via Varejo Marketplace, você expõe e vende seus produtos nos
              maiores e-commerces do país
            </Subtitle>
            <Paragraph>
              Cadastre sua loja e faça parte!
              <br />
              Somos Casas Bahia, Pontofrio e Extra.com.br
            </Paragraph>
            <RegisterStore className="w-60">
              <strong>CADASTRAR MINHA LOJA</strong>
            </RegisterStore>
          </DesktopLeft>
          <DesktopRight>
          </DesktopRight>
        </Desktop>
        <Mobile>
            <Title
              className="text-center pulse animated mb-4"
            >
              <strong>
                Via Varejo Marketplace, seus produtos nos maiores e-commerces do
                país
              </strong>
            </Title>
            <Subtitle className="font-weight-light text-center text-white-70 pb-2">
              Cadastre sua loja e faça parte!
              <br />
              Somos Casas Bahia, Pontofrio <br />e Extra.com.br
            </Subtitle>
            <RegisterStore>
              <strong>CADASTRAR MINHA LOJA</strong>
            </RegisterStore>
          </Mobile>
    </Container>
  );
};

export default HeroSection;
