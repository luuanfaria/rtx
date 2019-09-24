import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import Phone from "./phone.png";
import Envelope from "./envelope.png";
import Whatts from "./whatsapp-square.png";
import Mapa from "./map.png";
import { Formik } from "formik";
import axios from "axios";
import querystring from "querystring";

export default function Fale() {
  return (
    <section className="faleconosco">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="fale-titulo" />
          </Col>
          <Col lg={7}>
            <div className="sobre-info">
              <p className="contato-titulo">Contato</p>
              <div className="sobre-tel">
                <img src={Phone} alt="icone telefone" />
                <p>
                  <a href="tel:+551134160177" target="_blank">
                    11 3416-0177{" "}
                  </a>
                  /{" "}
                  <a href="tel:+1149410277" target="_blank">
                    11 4941-0277
                  </a>
                </p>
              </div>
              <div className="sobre-email">
                <img src={Envelope} alt="icone email" />
                <p>
                  <a
                    href="mailto:comercial@rtxempilhadeiras.com.br"
                    target="_blank"
                  >
                    comercial@rtxempilhadeiras.com.br
                  </a>
                </p>
              </div>
              <div className="sobre-wpps">
                <a
                  href="https://wa.me/5511978104651?"
                  className="wpps-a"
                  target="_blank"
                >
                  <img src={Whatts} alt="icone whatsapp" />
                  <p>11 97810-4651</p>
                </a>
              </div>
            </div>
            <div className="local">
              <div className="local-info">
                <img src={Mapa} alt="icone localização" />
                <p>
                  Praça Padre Salvador Pires Santiago, 27 <br />- Vila Gonçalves
                  - São Bernardo do Campo
                </p>
              </div>
              <div className="local-mapa">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14611.779582412017!2d-46.55989756401443!3d-23.71366177750491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce417de3e603e5%3A0x6bc6481dc05aa0cd!2sPra%C3%A7a+Padre+Salvador+P%C3%ADres+Santiago%2C+27+-+Vila+Goncalves%2C+S%C3%A3o+Bernardo+do+Campo+-+SP%2C+09720-580!5e0!3m2!1spt-BR!2sbr!4v1565205585017!5m2!1spt-BR!2sbr"
                  width="300"
                  height="200"
                  frameBorder="0"
                  style={{ border: "0" }}
                  allowFullScreen
                  rel="dns-prefetch"
                />
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="area_formulario">
              <div className="formulario">
                <p className="contato-titulo">Fale Conosco</p>
                <Formik
                  initialValues={{ nome: "", email: "", tel: "", assunto: "Contato", mensagem: "" }}
                  onSubmit={(values, actions) => {
                    setTimeout(() => {
                      axios({
                        method: "post",
                        url: "http://ec2-18-222-87-106.us-east-2.compute.amazonaws.com:3000/enviar-formulario",
                        data: querystring.stringify(values),
                        config: { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
                      })
                        .then(function(response) {
                          //handle success
                          console.log(response);
                        })
                        .catch(function(response) {
                          //handle error
                          console.log(response);
                        });
                    }, 1000);
                  }}
                  render={props => (
                    <form
                      className="form-contact"
                      onSubmit={props.handleSubmit}
                    >
                      <input
                        onBlur={props.handleBlur}
                        onChange={props.handleChange}
                        className="form-contact-input"
                        type="text"
                        value={props.values.nome}
                        name="nome"
                        placeholder="Nome"
                        required
                      />
                      <input
                        onBlur={props.handleBlur}
                        onChange={props.handleChange}
                        className="form-contact-input"
                        type="email"
                        value={props.values.email}
                        name="email"
                        placeholder="Email"
                        required
                      />
                      <input
                        onBlur={props.handleBlur}
                        onChange={props.handleChange}
                        className="form-contact-input"
                        type="tel"
                        value={props.values.tel}
                        name="tel"
                        placeholder="Telefone"
                      />
                      <textarea
                        onBlur={props.handleBlur}
                        onChange={props.handleChange}
                        className="form-contact-textarea"
                        value={props.values.mensagem}
                        name="mensagem"
                        placeholder="Deixe uma mensagem"
                        required
                      />
                      {props.errors.nome && (
                        <div id="feedback">{props.errors.nome}</div>
                      )}
                      {props.errors.email && (
                        <div id="feedback">{props.errors.email}</div>
                      )}
                      {props.errors.tel && (
                        <div id="feedback">{props.errors.tel}</div>
                      )}
                      {props.errors.mensagem && (
                        <div id="feedback">{props.errors.mensagem}</div>
                      )}
                      <button
                        className="form-contact-button"
                        type="submit"
                        disabled={props.isSubmitting}
                      >
                        Enviar
                      </button>
                    </form>
                  )}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
