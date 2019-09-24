import React, { useState } from "react";
import LazyLoad from "react-lazy-load";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Foto1 from "./forklift2.jpg";

export default function Service2() {
  const [descState, setDescState] = useState(true);
  return (
    <section className="service2">
      <div className="titulo text-center">
        <h3>Empilhadeiras</h3>
      </div>
      <div className="conteudo">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="inside-titulo">
                <p className={descState ? "desc-titulo ativo":"desc-titulo"} onClick={() => setDescState(true)}>
                  Novas
                </p>
                <p
                  className={!descState ? "desc-titulo ativo":"desc-titulo"}
                  onClick={() => setDescState(false)}
                >
                  Usadas
                </p>
              </div>
              <div className="inside-desc">
                {" "}
                
                <p className="novas-desc">
                {descState
                  ? "A vantagem de comprar empilhadeiras na RTX é contar com atendimento especializado, produtos de qualidade, peças de primeira linha e garantia nas empilhadeiras seminovas. As empilhadeiras da RTX passam por revisão programada, troca de peças danificadas por peças de primeira linha, entre outros procedimentos necessários para manter a empilhadeira operando dentro do esperado por muito tempo, com ampla vida útil."
                  : "A RTX Empilhadeiras também tem uma linha completa de empilhadeiras manuais para o cliente conhecer e comprar por um valor mais barato. São empilhadeiras seminovas de alto desempenho, os equipamentos passaram por todas as manutenções, troca de peças de primeira linha, entre outros procedimentos."}
                </p>
              </div>
              <div className="inside-botao">
                <p><a href="/contato">SOLICITAR ORÇAMENTO</a></p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="moldura">
              <LazyLoad><img src={Foto1} alt="imagem empilhadeira" /></LazyLoad>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
