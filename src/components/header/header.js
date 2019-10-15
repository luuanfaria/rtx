import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./logo.png";

export default function Header() {
  return (
    <div className="headerfixo">
      <div className="headertopo">
        <Container>
          <Row className="headertexto">
            <p>
              Ligue <a href="tel:+551134160177">11 3416-0177</a> /{" "}
              <a href="tel:+551149410277">11 4941-0277</a> ou pelo{" "}
              <a href="https://wa.me/5511978104651?">WhatsApp 11 97810-4651</a>
            </p>
          </Row>
        </Container>
      </div>
      <div className="headermenu">
        <Container>
          <Row>
            <Col lg={4} md={4} sm={1} xs={2} className="Logo">
              <a href="/"><img src={Logo} alt="Logo da Empresa RTX"/></a>
            </Col>
            <Col lg={8} md={8} sm={11} xs={10} className="Menu">
              <nav className="menu-normal">
                <ul>
                  <li className="active" />
                  <li>
                    <a href="/">Página Inicial</a>
                  </li>
                  <li>
                    <a href="/sobre">Sobre</a>
                  </li>
                  <li>
                    <a href="/servicos">Serviços</a>
                  </li>
                  <li>
                    <a href="/produtos">Produtos</a>
                  </li>
                  <li>
                    <a href="/empilhadeiras">Empilhadeiras</a>
                  </li>
                  <li>
                    <a href="/contato">Contato</a>
                  </li>
                </ul>
              </nav>
              <div className="menu-mobile">
                <label for="toggle">&#9776;</label>
                <input type="checkbox" id="toggle" />
                <div className="menu-mobile2">
                  <a href="/">Página Inicial</a>
                  <a href="/sobre">Sobre</a>
                  <a href="/servicos">Serviços</a>
                  <a href="/produtos">Produtos</a>
                  <a href="/empilhadeiras">Empilhadeiras</a>
                  <a href="/contato">Contato</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
