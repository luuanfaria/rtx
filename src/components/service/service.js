import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Produto from "./foto.png";
import LazyLoad from "react-lazy-load";
import Produto1 from "./Produto 1.png";
import Produto2 from "./Produto 2.png";
import Produto3 from "./Produto 3.png";
import Produto4 from "./Produto 4.png";
import Produto5 from "./Produto 5.png";
import Produto6 from "./Produto 6.png";
import Produto7 from "./Produto 7.png";
import Produto8 from "./Produto 8.png";

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
      <div className="promo">
        <Container>
          <Row>
            <Col lg={12}>
              <h3>Promoções de Outubro</h3>
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
                        <img src={Produto1} alt="imagem do produto" />
                      </LazyLoad>
                    </div>
                    <div className="produto-titulo">
                      <p>Sapata de Freio</p>
                    </div>
                    <div className="produto-desc">
                      <p>
                        Sapata de Freio Lado Direito da Hyster - 
                      Código do Produto: 1565314
                      </p>
                    </div>
                    <div className="produto-valor">
                      <p>
                        R$ <span>135,00</span>
                      </p>
                    </div>
                  </a>
                </div>
                <div className="produto">
                  <a href="/contato">
                    <div className="produto-foto">
                      <LazyLoad>
                        <img src={Produto2} alt="imagem do produto" />
                      </LazyLoad>
                    </div>
                    <div className="produto-titulo">
                      <p>Sapata de Freio</p>
                    </div>
                    <div className="produto-desc">
                      <p>
                      Sapata de Freio Lado Eireito da Hyster - 
                      Código do Produto: 1565313
                      </p>
                    </div>
                    <div className="produto-valor">
                      <p>
                        R$ <span>135,00</span>
                      </p>
                    </div>
                  </a>
                </div>
                <div className="produto">
                  <a href="/contato">
                    <div className="produto-foto">
                      <LazyLoad>
                        <img src={Produto3} alt="imagem do produto" />
                      </LazyLoad>
                    </div>
                    <div className="produto-titulo">
                      <p>Hélice Toyota Motor 4Y</p>
                    </div>
                    <div className="produto-desc">
                      <p>
                      Hélice Toyota Motor 4Y - 
                      Código do Produto: 1603-41
                      </p>
                    </div>
                    <div className="produto-valor">
                      <p>
                        R$ <span>40,00</span>
                      </p>
                    </div>
                  </a>
                </div>
                <div className="produto">
                  <a href="/contato">
                    <div className="produto-foto">
                      <LazyLoad>
                        <img src={Produto4} alt="imagem do produto" />
                      </LazyLoad>
                    </div>
                    <div className="produto-titulo">
                      <p>Kit Junta Motor 4G63/64</p>
                    </div>
                    <div className="produto-desc">
                      <p>
                      Kit Junta Motor 4G63/64 - 
                      Código do Produto: MD972032
                      </p>
                    </div>
                    <div className="produto-valor">
                      <p>
                        R$ <span>140,00</span>
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
                        <img src={Produto5} alt="imagem do produto" />
                    </div>
                    <div className="produto-titulo">
                      <p>Cabo de Vela Mazda 2.0/2.2</p>
                    </div>
                    <div className="produto-desc">
                      <p>
                      Cabo de Vela Mazda 2.0/2.2 - 
                      Código do Produto: 1369893/5059765-93
                      </p>
                    </div>
                    <div className="produto-valor">
                      <p>
                        R$ <span>43,00</span>
                      </p>
                    </div>
                  </a>
                </div>
                <div className="produto">
                  <a href="/contato">
                    <div className="produto-foto">
                        <img src={Produto6} alt="imagem do produto" />
                    </div>
                    <div className="produto-titulo">
                      <p>Kit Junta Toyota Motor 4Y</p>
                    </div>
                    <div className="produto-desc">
                      <p>
                      Kit Junta Toyota Motor 4Y - 
                      Código do Produto: 1101-00k
                      </p>
                    </div>
                    <div className="produto-valor">
                      <p>
                        R$ <span>170,00</span>
                      </p>
                    </div>
                  </a>
                </div>
                <div className="produto">
                  <a href="/contato">
                    <div className="produto-foto">
                        <img src={Produto7} alt="imagem do produto" />
                    </div>
                    <div className="produto-titulo">
                      <p>Kit Junta Motor Mazda 2.0</p>
                    </div>
                    <div className="produto-desc">
                      <p>
                      Kit Junta Motor Mazda 2.0 - 
                      Código do Produto: 1367190
                      </p>
                    </div>
                    <div className="produto-valor">
                      <p>
                        R$ <span>185,00</span>
                      </p>
                    </div>
                  </a>
                </div>
                <div className="produto">
                  <a href="/contato">
                    <div className="produto-foto">
                        <img src={Produto8} alt="imagem do produto" />
                    </div>
                    <div className="produto-titulo">
                      <p>Kit Junta Motor Mazda 2.2</p>
                    </div>
                    <div className="produto-desc">
                      <p>
                      Kit Junta Motor Mazda 2.2 - 
                      Código do Produto: 2045036
                      </p>
                    </div>
                    <div className="produto-valor">
                      <p>
                        R$ <span>185,00</span>
                      </p>
                    </div>
                  </a>
                </div>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>
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
