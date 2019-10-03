import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Produto from "./foto.png";
import LazyLoad from "react-lazy-load";

export default function Service() {
  return (
    <section className="promo-ofertas">
      <div className="texto">
        <Container>
          <Row className="texto1 text-center">
            <p>
              Tudo para empilhadeiras, você encontra na RTX.
              <br />
              Enviamos para todo o Brasil.
            </p>
          </Row>
        </Container>
      </div>
      {/* <div className="promo">
        <Container>
          <Row>
            <Col lg={12}>
              <h3>Promoções e Ofertas</h3>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="promo-carrosel">
        <Carousel>
          <Carousel.Item>
            <Container>
              <Row className="promo-carrosel1">
                <div className="produto">
                  <a href="/contato">
                    <div className="produto-foto">
                      <LazyLoad>
                        <img src={Produto} alt="imagem do produto" />
                      </LazyLoad>
                    </div>
                    <div className="produto-titulo">
                      <p>Nome do Produto</p>
                    </div>
                    <div className="produto-desc">
                      <p>
                        Campo para descrever algumas informações sobre o produto
                        a ser anunciado
                      </p>
                    </div>
                    <div className="produto-valor">
                      <p>
                        R$ <span>89,90</span>
                      </p>
                    </div>
                  </a>
                </div>
                <div className="produto">
                  <a href="/contato">
                    <div className="produto-foto">
                      <LazyLoad>
                        <img src={Produto} alt="imagem do produto" />
                      </LazyLoad>
                    </div>
                    <div className="produto-titulo">
                      <p>Nome do Produto</p>
                    </div>
                    <div className="produto-desc">
                      <p>
                        Campo para descrever algumas informações sobre o produto
                        a ser anunciado
                      </p>
                    </div>
                    <div className="produto-valor">
                      <p>
                        R$ <span>89,90</span>
                      </p>
                    </div>
                  </a>
                </div>
                <div className="produto">
                  <a href="/contato">
                    <div className="produto-foto">
                      <LazyLoad>
                        <img src={Produto} alt="imagem do produto" />
                      </LazyLoad>
                    </div>
                    <div className="produto-titulo">
                      <p>Nome do Produto</p>
                    </div>
                    <div className="produto-desc">
                      <p>
                        Campo para descrever algumas informações sobre o produto
                        a ser anunciado
                      </p>
                    </div>
                    <div className="produto-valor">
                      <p>
                        R$ <span>89,90</span>
                      </p>
                    </div>
                  </a>
                </div>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row className="promo-carrosel1">
                <div className="produto">
                  <a href="/contato">
                    <div className="produto-foto">
                      <LazyLoad>
                        <img src={Produto} alt="imagem do produto" />
                      </LazyLoad>
                    </div>
                    <div className="produto-titulo">
                      <p>Nome do Produto</p>
                    </div>
                    <div className="produto-desc">
                      <p>
                        Campo para descrever algumas informações sobre o produto
                        a ser anunciado
                      </p>
                    </div>
                    <div className="produto-valor">
                      <p>
                        R$ <span>89,90</span>
                      </p>
                    </div>
                  </a>
                </div>
                <div className="produto">
                  <a href="/contato">
                    <div className="produto-foto">
                      <LazyLoad>
                        <img src={Produto} alt="imagem do produto" />
                      </LazyLoad>
                    </div>
                    <div className="produto-titulo">
                      <p>Nome do Produto</p>
                    </div>
                    <div className="produto-desc">
                      <p>
                        Campo para descrever algumas informações sobre o produto
                        a ser anunciado
                      </p>
                    </div>
                    <div className="produto-valor">
                      <p>
                        R$ <span>89,90</span>
                      </p>
                    </div>
                  </a>
                </div>
                <div className="produto">
                  <a href="/contato">
                    <div className="produto-foto">
                      <LazyLoad>
                        <img src={Produto} alt="imagem do produto" />
                      </LazyLoad>
                    </div>
                    <div className="produto-titulo">
                      <p>Nome do Produto</p>
                    </div>
                    <div className="produto-desc">
                      <p>
                        Campo para descrever algumas informações sobre o produto
                        a ser anunciado
                      </p>
                    </div>
                    <div className="produto-valor">
                      <p>
                        R$ <span>89,90</span>
                      </p>
                    </div>
                  </a>
                </div>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div> */}
      <div className="chamada">
        <Container>
          <Row className="chamada-inside text-center">
            <Col lg={12}>
              <h5>
                <a href="">Consulte nosso catálogo</a>
              </h5>
            </Col>
            <Col lg={12}>
              <p>
                <a href="">
                  Clique para acessar nosso catálogo de peças para
                  empilhadeiras
                </a>
              </p>
            </Col>
            <Col className="botao-chamada" lg={12}>
              <p>
                <a href="/produtos">ACESSAR</a>
              </p>
            </Col>
            <Col className="barra" lg={12}>
              <span />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
