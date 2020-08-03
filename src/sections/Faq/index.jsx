import React, { useEffect, useState, useCallback } from "react";
import AOS from 'aos';
import {
  Container,
  TitleH2,
} from "../../components/Section";

import Wrapper from "../../components/Section/Wrapper";
import "aos/dist/aos.css";
import Collapse, { CollapseHeader, CollapseBody } from "../../components/Collapse";
import RegisterStore from "../../components/Section/RegisterStore";
import useUpdateHash from "../../hooks/useUpdateHash";

const faq = [
  {
    id: 2, 
    question: 'Quais os documentos necessários?',
    answer: 'Para realizar o cadastro e dar início à parceria, é necessário informar o CNPJ da sua loja e seu e-mail. Assim, faremos a validação das informações para seguir com as etapas de aceite do contrato e integração da loja.'
  }, {
    id: 3, 
    question: 'Quanto custa para vender no marketplace da Via Varejo?',
    answer: 'Ao se tornar um parceiro, é cobrada apenas a comissão sobre as vendas realizadas, cujo percentual varia de acordo com a categoria de produtos.'
  }, {
    id: 4, 
    question: 'Em qual site meus produtos serão vendidos?',
    answer: 'Seus produtos estarão disponíveis nos sites das Casas Bahia, Pontofrio e Extra.com.br, ao alcance de milhões de clientes de todo o Brasil.'
  }, {
    id: 5, 
    question: 'Como funciona o repasse ao lojista?',
    answer: 'Você recebe pelas vendas realizadas duas vezes ao mês, de acordo com os ciclos de pagamento dos pedidos.'
  }, {
    id: 6, 
    question: 'Como faço para cadastrar minha loja?',
    answer: 'Você pode se cadastrar agora mesmo! Basta informar o CNPJ da sua loja e seu e-mail para dar início ao processo.'
  }, {
    id: 7, 
    question: 'Sou MEI, posso me cadastrar?',
    answer: 'Sim! Se você é Microempreendedor Individual, é só se cadastrar e contar com a força do Via Varejo Marketplace para vender ainda mais.'
  },
]

const FaqSection = () => {
  const [collapseOpened, changeCollapse] = useState(0)
  const element = useUpdateHash()
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const onChangeCollapse = useCallback((id) => {
    if (collapseOpened === id) {
      changeCollapse(0)
    } else {
      changeCollapse(id)
    }
  }, [collapseOpened])

  return (
    <Container
      ref={element}
      id="duvidas"
      className="bg-container text-dark px-lg-5 py-5 py-lg-2 mx-auto"
    >
      <Wrapper>
        <TitleH2 className="text-center pb-4">Tire suas dúvidas</TitleH2>
        <div className="row">
          <div className="col">
            <div role="tablist" data-aos="fade-up" data-aos-delay="150" id="accordion-1" className="w-100 w-lg-80 mx-auto">
              { faq.map((fq, i) => {
                return (
                  <Collapse key={fq.id} id={fq.id}>
                    <CollapseHeader isOpen={collapseOpened === fq.id} onClick={() => onChangeCollapse(fq.id)}>
                      { `${i + 1}. ${fq.question}` }
                    </CollapseHeader>
                    <CollapseBody isOpen={collapseOpened === fq.id}>              
                      { fq.answer }
                    </CollapseBody>
                  </Collapse>
                )
              })}
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-lg-4">
            <RegisterStore />
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default FaqSection;
