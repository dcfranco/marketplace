import React, { useEffect } from "react";
import AOS from 'aos';
import {
  Container,
  TitleH2,
  Subtitle,
} from "../../components/Section";
import imgIcon2 from  "../../assets/img/icone_01.svg";
import imgIcon1 from  "../../assets/img/icone_02.svg";
import imgIcon3 from  "../../assets/img/icone_03.svg";
import Wrapper from "../../components/Section/Wrapper";
import "aos/dist/aos.css";
import Cards, { Card, CardIcon, CardContainer, CardContent, CardTitle, CardSubtitle } from "../../components/Cards";
import useUpdateHash from "../../hooks/useUpdateHash";

const NumbersSection = () => {
  const element = useUpdateHash()

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Container
      ref={element}
      id="numeros"
      className="bg-container text-dark px-3 py-5 py-lg-0 small-box-sm"
    >
      <Wrapper>
        <TitleH2 className="text-center">A solução ideal para quem vende</TitleH2>
        <Subtitle className="text-center" data-aos="fade-up" data-aos-delay="100">Todo mês, nossos sites recebem:</Subtitle>
        <Cards>
          <Card>
            <CardIcon isRow={true}>
              <img
                alt="A solução ideal para quem vende"
                className=""
                src={imgIcon2}
                style={{ maxHeight: "200px" }}
              />
            </CardIcon>
            <CardContainer>
              <CardContent>
                <CardTitle className="text-success">+ 200 milhões</CardTitle>
                <CardSubtitle className="text-dark">de visitas</CardSubtitle>
              </CardContent>
            </CardContainer>
          </Card>
          <Card>
            <CardIcon isRow={true}>
              <img
                alt="A solução ideal para quem vende"
                className=""
                src={imgIcon1}
                style={{ maxHeight: "200px" }}
              />
            </CardIcon>
            <CardContainer>
              <CardContent>
                <CardTitle className="text-success">+ 150 milhões</CardTitle>
                <CardSubtitle className="text-dark">de buscas</CardSubtitle>
              </CardContent>
            </CardContainer>
          </Card>
          <Card>
            <CardIcon isRow={true}>
              <img
                alt="A solução ideal para quem vende"
                className=""
                src={imgIcon3}
                style={{ maxHeight: "200px" }}
              />
            </CardIcon>
            <CardContainer>
              <CardContent>
                <CardTitle className="text-success">+ 3 milhões</CardTitle>
                <CardSubtitle className="text-dark">de transações</CardSubtitle>
              </CardContent>
            </CardContainer>
          </Card>
        </Cards>
        </Wrapper>
    </Container>
  );
};

export default NumbersSection;
