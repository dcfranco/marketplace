import React, { useEffect } from "react";
import AOS from 'aos';
import {
  Container,
  TitleH2,
} from "../../components/Section";
import Wrapper from "../../components/Section/Wrapper";
import img1 from '../../assets/img/icone-passo-a-passo_01.png';
import img2 from '../../assets/img/icone-passo-a-passo_02.png';
import img3 from '../../assets/img/icone-passo-a-passo_03.png';
import "aos/dist/aos.css";
import Cards, { Card, CardIcon, CardContainer, CardContent, CardTitle, CardSubtitle } from "../../components/Cards";
import RegisterStore from "../../components/Section/RegisterStore";
import useUpdateHash from "../../hooks/useUpdateHash";

const WhatYouNeedSection = () => {
  const element = useUpdateHash()
 
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Container
      ref={element}
      id="vendanavia"
      className="bg-success px-3 py-5 py-lg-0"
    >
      <Wrapper>
        <TitleH2 className="text-center text-white">O que precisa para começar?</TitleH2>
        <Cards className="text-white">
          <Card noBorder={true}>
            <CardIcon className="green">
              <img
                alt="Cadastro"
                className="img-fluid text-center"
                src={img1}
                style={{ height: "200px" }}
              />
            </CardIcon>
            <CardContainer className="col-md-12">
              <CardContent>
                <CardTitle className="text-center">Cadastro</CardTitle>
                <CardSubtitle className="text-center text-white">Nessa etapa, precisamos de todas as informações da sua loja</CardSubtitle>
              </CardContent>
            </CardContainer>
          </Card>
          <Card noBorder={true}>
            <CardIcon className="green">
              <img
                alt="Análise"
                className="img-fluid text-center"
                src={img2}
                style={{ height: "200px" }}
              />
            </CardIcon>
            <CardContainer className="col-md-12">
              <CardContent>
                <CardTitle className="text-center">Análise</CardTitle>
                <CardSubtitle className="text-center text-white">Aguarde. A análise dos dados enviados leva apenas alguns minutos</CardSubtitle>
              </CardContent>
            </CardContainer>
          </Card>
          <Card noBorder={true}>
            <CardIcon className="green">
              <img
                alt="Venda"
                className="img-fluid text-center"
                src={img3}
                style={{ height: "200px" }}
              />
            </CardIcon>
            <CardContainer className="col-md-12">
              <CardContent>
                <CardTitle className="text-center">Venda</CardTitle>
                <CardSubtitle className="text-center text-white">Pronto. Agora é só começar a vender nos maiores e-commerces do país</CardSubtitle>
              </CardContent>
            </CardContainer>
          </Card>
        </Cards>
        <RegisterStore className="d-block py-4 w-100 w-lg-30 mx-auto mt-5 strong" />
      </Wrapper>
    </Container>
  );
};

export default WhatYouNeedSection;
