import React from "react";
import LazyLoad from "react-lazy-load";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Foto from "../servicos/emp3.jpg";
import Check from "../servicos/check.png";
import Foto1 from "../servicos/foto1.jpg";

export default function ServiceInside() {
  return (
    <section className="servicos">
      <div className="banner">
        <LazyLoad>
          <img src={Foto} alt="imagem banner" />
        </LazyLoad>
      </div>
      <div className="sec1">
        <Container>
          <Row>
            <Col lg={12} sm={12}>
              <div className="sec-servico">
                <div className="titulo">
                  <h5>Locação de Empilhadeiras</h5>
                </div>
                <div className="desc">
                  <p>
                    {" "}
                    Ao alugar, o cliente não precisa comprar empilhadeiras por
                    um preço elevado, nem gastar com manutenção e peças. <br />
                    Para solicitar um orçamento sob medida para a sua
                    necessidade, faça contato agora mesmo com a equipe da RTX
                    Empilhadeiras!
                  </p>
                </div>
                <div className="desc-check row">
                  <div className="check-inside col-6 col-lg-3">
                    <LazyLoad>
                      <img src={Check} alt="icone check" />
                    </LazyLoad>
                    <p>Mensal ou Diária</p>
                  </div>
                  <div className="check-inside col-6 col-lg-3">
                    <LazyLoad>
                      <img src={Check} alt="icone check" />
                    </LazyLoad>
                    <p>Preço Econômico</p>
                  </div>
                  <div className="check-inside col-6 col-lg-3">
                    <LazyLoad>
                      <img src={Check} alt="icone check" />
                    </LazyLoad>
                    <p>Manutenção em dia</p>
                  </div>
                  <div className="check-inside col-6 col-lg-3">
                    <LazyLoad>
                      <img src={Check} alt="icone check" />
                    </LazyLoad>
                    <p>Atendemos toda São Paulo</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="sec2">
        <Container>
          <Row className="sec2-border">
            <Col lg={7} sm={12}>
              <div className="sec-servico">
                <div className="titulo">
                  <h5>Manutenção de Empilhadeiras</h5>
                </div>
                <div className="desc">
                  <p>
                    {" "}
                    A RTX Empilhadeiras é especializada na manutenção de
                    empilhadeira para garantir pleno funcionamento, segurança e
                    ótimo desempenho no ambiente de trabalho.
                  </p>
                </div>
                <div className="desc-check row">
                  <div className="check-inside col-6 col-lg-3">
                    <LazyLoad>
                      <img src={Check} alt="icone check" />
                    </LazyLoad>
                    <p>Manutenção Preventiva</p>
                  </div>
                  <div className="check-inside col-6 col-lg-3">
                    <LazyLoad>
                      <img src={Check} alt="icone check" />
                    </LazyLoad>
                    <p>Peças Originais</p>
                  </div>
                  <div className="check-inside col-6 col-lg-3">
                    <LazyLoad>
                      <img src={Check} alt="icone check" />
                    </LazyLoad>
                    <p>Reformas</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5} sm={12}>
              <div className="manutencao">
                <LazyLoad>
                  <img src={Foto1} alt="imagem empilhadeira" />
                </LazyLoad>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
