import React from "react";
import LazyLoad from "react-lazy-load";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Foto1 from "./emp.jpg";

export default function Service3() {
  return (
    <section className="service">
      <Container>
        <div className="service-bg">
          <LazyLoad>
            <img src={Foto1} alt="imagem empilhadeira" />
          </LazyLoad>
        </div>
        <Row className="service-inside borda">
          <Col className="service-coluna d-flex" lg={6} md={12}>
            <div className="servico text-center borda">
              <div className="servico-titulo">
                <h5>Locação de Empilhadeiras</h5>
              </div>
              <div className="servico-desc">
                <p>
                  Planos de locação curto e a longo prazo. Não importa o tipo do
                  seu negócio, nós temos o plano ideal.
                </p>
              </div>
              <div className="serv-botao">
                <p>
                  <a href="/servicos">VER MAIS INFORMAÇÕES</a>
                </p>
              </div>
            </div>
          </Col>
          <Col className="service-coluna d-flex" lg={6} md={12}>
            <div className="servico text-center borda2">
              <div className="servico-titulo">
                <h5>Manutenção de Empilhadeiras</h5>
              </div>
              <div className="servico-desc">
                <p>
                  Com experiência em manutenção e assistência técnica em
                  empilhadeiras, oferecemos serviço de excelência para nossos
                  clientes.
                </p>
              </div>
              <div className="serv-botao">
                <p>
                  <a href="/servicos">VER MAIS INFORMAÇÕES</a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
