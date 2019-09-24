import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import Foto from "./banneremp.jpg";
import Combustao from "./combustao2.jpg";
import Eletrica from "./eletrica2.jpg";
import Manual from "./manual2.jpg";

export default function EmpInside() {
  return (
    <section className="empilhadeiras-catalago">
      <div className="bannerbg d-flex">
        <div
          className="banneremp"
          style={{
            backgroundImage: `url(${Foto})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
        </div>
      </div>
      <Container>
        <Row className="emp-inside">
          <Col className="emp-alinhamento d-flex" lg={12}>
            <div className="empilhadeiras-inside">
              <div className="titulo">
                <h5>Novas</h5>
              </div>
              <div className="descricao">
                <p>
                  A RTX Empilhadeiras é uma organização que atua neste setor
                  <br />
                  desde 2007 e que acumula diversos clientes satisfeitos. <br />
                  Oferecemos garantia e boa procedência aos clientes.
                  <br />
                  <br /> Entre em contato para outras informações e receba
                  <br /> um orçamento sem compromisso
                </p>
              </div>
              <div className="emp-botao">
                <p>
                  <a href="/contato" target="_blank">SOLICITAR ORÇAMENTO</a>
                </p>
              </div>
            </div>
          </Col>
          <Col className="emp-categorias">
            <div
              className="categoria"
              style={{
                backgroundImage: `url(${Combustao})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              <p>Combustão</p>
            </div>
            <div
              className="categoria"
              style={{
                backgroundImage: `url(${Eletrica})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              <p>Elétricas</p>
            </div>
            <div
              className="categoria"
              style={{
                backgroundImage: `url(${Manual})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              <p>Manual</p>
            </div>
          </Col>
          <Col className="emp-alinhamento d-flex" lg={12}>
            <div className="empilhadeiras-inside">
              <div className="titulo">
                <h5>Usadas</h5>
              </div>
              <div className="descricao">
                <p>
                  O processo de venda é conduzido por uma equipe profissional e
                  <br />
                  experiente, que está apta a indicar ao cliente o melhor
                  <br />
                  modelo de empilhadeira para a sua atividade.
                  <br /> <br />
                  São vários modelos seminovos da Hangcha para venda, <br />
                  com empilhadeiras contrabalançadas elétricas e movidas <br />
                  por combustão, para 1.8 toneladas, 3 toneladas, 3.5
                  <br /> toneladas, 5 toneladas e 8 toneladas.
                </p>
              </div>
              <div className="emp-botao">
                <p>
                  <a href="/contato" target="_blank">SOLICITAR ORÇAMENTO</a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
