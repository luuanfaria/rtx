import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../header/logo3.png";
import Wpp from "./whatsapp.jpg";
import Tel from "./telefone.png";
import Email from "./email.png";
import Place from "./place.png";

export default function Contato() {
  return (
    <section className="contato">
      <div className="contato-inside">
        <Container>
          <Row className="contato-info">
            <Col lg={4}>
              <div className="contato-sobre">
                <div className="sobre-logo">
                  <img src={Logo} alt="Logo da empresa RTX"/>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="sobre-titulo">
                <p className="contato-titulo">ENTRE EM CONTATO</p>
              </div>
              <div className="sobre-info">
                <div className="sobre-tel">
                  <img src={Tel} alt="icone telefone"/>
                  <p>
                    <a href="tel:+551134160177" target="_blank">11 3416-0177 </a>/ <a href="tel:+1149410277" target="_blank">11 4941-0277</a>
                  </p>
                </div>
                <div className="sobre-email">
                  <img src={Email} alt="icone email" />
                  <p>
                    <a href="mailto:comercial@rtxempilhadeiras.com.br" target="_blank"> 
                    comercial@rtxempilhadeiras.com.br
                    </a>
                  </p>
                </div>
                <div className="sobre-wpps">
                  <a href="https://wa.me/5511978104651?" className="wpps-a" target="_blank">
                    <img src={Wpp} alt="icone whatsapp" />
                    <p>11 97810-4651</p>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="local">
                <div className="local-titulo">
                  <p className="contato-titulo">ENDEREÇO</p>
                </div>
                <div className="local-info">
                  <img src={Place} img="icone localização" />
                  <p>
                    Praça Padre Salvador Pires Santiago, 27 -<br /> Vila
                    Gonçalves - São Bernardo do Campo
                  </p>
                </div>
                <div className="local-mapa">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14611.779582412017!2d-46.55989756401443!3d-23.71366177750491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce417de3e603e5%3A0x6bc6481dc05aa0cd!2sPra%C3%A7a+Padre+Salvador+P%C3%ADres+Santiago%2C+27+-+Vila+Goncalves%2C+S%C3%A3o+Bernardo+do+Campo+-+SP%2C+09720-580!5e0!3m2!1spt-BR!2sbr!4v1565205585017!5m2!1spt-BR!2sbr"
                    width="300"
                    height="200"
                    frameborder="0"
                    style={{ border: "0" }}
                    allowfullscreen
                    rel="dns-prefetch"
                  />
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="detag">
                <p>Desenvolvido por <a href="https://detag.com.br/" target="_blank">Detag</a></p>
                <p class="copyp">Todos direitos reservados a RTX.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
