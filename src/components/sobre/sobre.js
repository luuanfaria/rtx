import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Foto from "./forklift1.jpg";
import LazyLoad from "react-lazy-load";

export default function Sobre() {
  return (
    <section className="sobre">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="sobre-titulo">
              <h5>Sobre a RTX</h5>
            </div>
            <div className="sobre-desc">
              <p>
                A RTX Empilhadeiras é uma empresa que oferece garantia e boa
                procedência aos clientes que compram empilhadeiras seminovas. A
                empresa está há anos no mercado, disponibilizando os melhores
                produtos para os clientes, com agilidade, qualidade,
                comprometimento e respeito. Com especialização em locação de
                máquinas, assistência técnica, venda de peças e equipamentos
                usados. Trabalhamos com todas as marcas para poder oferecer aos
                nossos clientes equipamentos de primeira qualidade no segmento.
                <br />
                <br />
                Se o seu problema é movimentação de carga, qualidade ou preços.
                Consulte-nos.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="sobre-foto">
              <LazyLoad>
                <img src={Foto} alt="imagem empilhadeira" />
              </LazyLoad>
            </div>
          </Col>
          <Col lg={12}>
            <div className="sobre-serv">
              <h5>O que podemos fazer por você hoje?</h5>
            </div>
          </Col>
          <Col className="serv-sobre d-flex" lg={6} md={12}>
            <a href="/servicos">
              <div className="servico-sobre text-center borda">
                <div className="servico-titulo-sobre">
                  <h5>Locação de Empilhadeiras</h5>
                </div>
                <div className="servico-desc-sobre">
                  <p>
                    Aluguel de empilhadeiras elétricas e à combustão, atendendo
                    com compromisso e respeito ao cliente.
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col className="serv-sobre d-flex" lg={6} md={12}>
            <a href="/servicos">
              <div className="servico-sobre text-center borda">
                <div className="servico-titulo-sobre">
                  <h5>Manutenção de Empilhadeiras</h5>
                </div>
                <div className="servico-desc-sobre">
                  <p>
                    Manutenção preventiva e corretiva de empilhadeiras
                    multimarcas, com troca de peças danificadas por novas.
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col className="serv-sobre d-flex" lg={6} md={12}>
            <a href="/empilhadeiras">
              <div className="servico-sobre text-center borda">
                <div className="servico-titulo-sobre">
                  <h5>Venda de Empilhadeiras</h5>
                </div>
                <div className="servico-desc-sobre">
                  <p>
                    O processo de venda é conduzido por uma equipe profissional
                    e experiente, indicando ao cliente o melhor modelo de
                    empilhadeira para a sua atividade.
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col className="serv-sobre d-flex" lg={6} md={12}>
            <a href="/produtos">
              <div className="servico-sobre text-center borda">
                <div className="servico-titulo-sobre">
                  <h5>Peças de Empilhadeiras</h5>
                </div>
                <div className="servico-desc-sobre">
                  <p>
                    Peças para todos os modelos de empilhadeiras do mercado,
                    onde o destaque são marcas como Hangcha, Toyota, Hyster,
                    Mitsubishi e Clark.
                  </p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
