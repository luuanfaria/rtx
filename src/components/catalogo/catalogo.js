import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import PdfBomba from "../catalogo/Bomba.pdf";
import PdfCabo from "./Cabo.pdf";
import PdfFiltro from "./Filtro de Ar.pdf";
import PdfMotor from "./Motor de Partida.pdf";
import PdfVela from "./Vela de Ignição.pdf";
import PdfAlternador from "./Catálogo Alternador.pdf";
import PdfCorreias from "./Catálogo Correias.pdf";
import PdfEletrica from "./Catálogo Elétrica.pdf";
import PdfFiltro2 from "./Catálogo Filtro de Oleo.pdf";
import PdfFreio from "./Catálogo Freio.pdf";
import PdfJuntas from "./Catálogo Juntas.pdf";
import PdfLinha from "./Catálogo Linha Aerosol.pdf";
import PdfLubri from "./Catálogo-Lubrificantes.pdf";
import PdfDiversas from "./Catálogo-Diversas.pdf";
import PdfRolamentos from "./Catálogo-Roletes-Rolamentos.pdf";
import PdfRotor from "./Catálogo Rotor.pdf";
import PdfTampa from './Catálogo-Tampa-Distribuidor.pdf';
import PdfTensor from "./Catálogo-Tensor-Correia.pdf";

export default function Catalogo() {
  const [catalogoState, setCatalogoState] = useState("Alternador");

  function mudarCatalogo(opcao) {
    if (opcao === "Alternador") {
      setCatalogoState(opcao);
    }
    if (opcao === "Bomba") {
      setCatalogoState(opcao);
    }
    if (opcao === "Cabo de Vela") {
      setCatalogoState(opcao);
    }
    if (opcao === "Correias") {
      setCatalogoState(opcao);
    }
    if (opcao === "Elétrica") {
      setCatalogoState(opcao);
    }
    if (opcao === "Filtro de Ar") {
      setCatalogoState(opcao);
    }
    if (opcao === "Filtro de Oleo") {
      setCatalogoState(opcao);
    }
    if (opcao === "Freio") {
      setCatalogoState(opcao);
    }
    if (opcao === "Juntas") {
      setCatalogoState(opcao);
    }
    if (opcao === "Linha Aerosol") {
      setCatalogoState(opcao);
    }
    if (opcao === "Lubri") {
      setCatalogoState(opcao);
    }    
    if (opcao === "Motor de Partida") {
      setCatalogoState(opcao);
    }
    if (opcao === "Peças Diversas") {
      setCatalogoState(opcao);
    }
    if (opcao === "Roletes e Rolamentos") {
      setCatalogoState(opcao);
    }
    if (opcao === "Rotor") {
      setCatalogoState(opcao);
    }
    if (opcao === "Tampa Distribuidor") {
      setCatalogoState(opcao);
    }
    if (opcao === "Tensor de Correia") {
      setCatalogoState(opcao);
    }
    if (opcao === "Vela de Ignição") {
      setCatalogoState(opcao);
    }
  }
  return (
    <section className="nosso-catalogo">
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="titulo-pdf">Nosso Catálogo</h3>
            <p className="desc-pdf">
              Possuimos grande variedade de peças das principais marcas de
              empilhadeiras. <br />
              Enviamos para todo o Brasil.
            </p>
          </Col>
          <Col lg={3}>
            <div className="menu-catalogo">
              <div className="menu-inside">
                <h6>Categorias</h6>
                <ul>
                  <li onClick={() => mudarCatalogo("Alternador")}>Alternador</li>
                  <li onClick={() => mudarCatalogo("Bomba")}>Bomba D'agua</li>
                  <li onClick={() => mudarCatalogo("Cabo de Vela")}>Cabo de Vela</li>
                  <li onClick={() => mudarCatalogo("Correias")}>Correias</li>
                  <li onClick={() => mudarCatalogo("Elétrica")}>Elétrica</li>
                  <li onClick={() => mudarCatalogo("Filtro de Ar")}>Filtro de Ar</li>
                  <li onClick={() => mudarCatalogo("Filtro de Oleo")}>Filtro de Oleo</li>
                  <li onClick={() => mudarCatalogo("Freio")}>Freio</li>
                  <li onClick={() => mudarCatalogo("Juntas")}>Juntas</li>
                  <li onClick={() => mudarCatalogo("Linha Aerosol")}>Linha Aerosol</li>
                  <li onClick={() => mudarCatalogo("Lubri")}>Lubrificantes</li>                  
                  <li onClick={() => mudarCatalogo("Motor de Partida")}>Motor de Partida</li>
                  <li onClick={() => mudarCatalogo("Peças Diversas")}>Peças Diversas</li>
                  <li onClick={() => mudarCatalogo("Roletes e Rolamentos")}>Roletes e Rolamentos</li>
                  <li onClick={() => mudarCatalogo("Rotor")}>Rotor</li>
                  <li onClick={() => mudarCatalogo("Tampa Distribuidor")}>Tampa Distribuidor</li>
                  <li onClick={() => mudarCatalogo("Tensor de Correia")}>Tensor de Correia</li>
                  <li onClick={() => mudarCatalogo("Vela de Ignição")}>Vela de Ignição</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={9}>
          {catalogoState === "Tensor de Correia" ? (
              <object className="arquivo-pdf" type="application/pdf" data={PdfTensor}>
                <a href={PdfTensor}>Ver PDF</a>
              </object>
            ) : (
              ""
            )}
          {catalogoState === "Tampa Distribuidor" ? (
              <object className="arquivo-pdf" type="application/pdf" data={PdfTampa}>
                <a href={PdfTampa}>Ver PDF</a>
              </object>
            ) : (
              ""
            )}
          {catalogoState === "Rotor" ? (
              <object className="arquivo-pdf" type="application/pdf" data={PdfRotor}>
                <a href={PdfRotor}>Ver PDF</a>
              </object>
            ) : (
              ""
            )}
          {catalogoState === "Roletes e Rolamentos" ? (
              <object className="arquivo-pdf" type="application/pdf" data={PdfRolamentos}>
                <a href={PdfRolamentos}>Ver PDF</a>
              </object>
            ) : (
              ""
            )}
          {catalogoState === "Peças Diversas" ? (
              <object className="arquivo-pdf" type="application/pdf" data={PdfDiversas}>
                <a href={PdfDiversas}>Ver PDF</a>
              </object>
            ) : (
              ""
            )}
          {catalogoState === "Lubri" ? (
              <object className="arquivo-pdf" type="application/pdf" data={PdfLubri}>
                <a href={PdfLubri}>Ver PDF</a>
              </object>
            ) : (
              ""
            )}
          {catalogoState === "Linha Aerosol" ? (
              <object className="arquivo-pdf" type="application/pdf" data={PdfLinha}>
                <a href={PdfLinha}>Ver PDF</a>
              </object>
            ) : (
              ""
            )}
          {catalogoState === "Juntas" ? (
              <object className="arquivo-pdf" type="application/pdf" data={PdfJuntas}>
                <a href={PdfJuntas}>Ver PDF</a>
              </object>
            ) : (
              ""
            )}
          {catalogoState === "Freio" ? (
              <object className="arquivo-pdf" type="application/pdf" data={PdfFreio}>
                <a href={PdfFreio}>Ver PDF</a>
              </object>
            ) : (
              ""
            )}
          {catalogoState === "Filtro de Oleo" ? (
              <object className="arquivo-pdf" type="application/pdf" data={PdfFiltro2}>
                <a href={PdfFiltro2}>Ver PDF</a>
              </object>
            ) : (
              ""
            )}
          {catalogoState === "Alternador" ? (
              <object className="arquivo-pdf" type="application/pdf" data={PdfAlternador}>
                <a href={PdfAlternador}>Ver PDF</a>
              </object>
            ) : (
              ""
            )}
            {catalogoState === "Bomba" ? (
              <object className="arquivo-pdf" type="application/pdf" data={PdfBomba}>
                <a href={PdfBomba}>Ver PDF</a>
              </object>
            ) : (
              ""
            )}
            {catalogoState === "Cabo de Vela" ? (
              <object className="arquivo-pdf" type="application/pdf" data={PdfCabo}>
                <a href={PdfCabo}>Ver PDF</a>
              </object>
            ) : (
              ""
            )}
            {catalogoState === "Correias" ? (
              <object className="arquivo-pdf" type="application/pdf" data={PdfCorreias}>
                <a href={PdfCorreias}>Ver PDF</a>
              </object>
            ) : (
              ""
            )}
            {catalogoState === "Elétrica" ? (
              <object className="arquivo-pdf" type="application/pdf" data={PdfEletrica}>
                <a href={PdfEletrica}>Ver PDF</a>
              </object>
            ) : (
              ""
            )}
            {catalogoState === "Filtro de Ar" ? (
              <object className="arquivo-pdf" type="application/pdf" data={PdfFiltro}>
                <a href={PdfFiltro}>Ver PDF</a>
              </object>
            ) : (
              ""
            )}
            {catalogoState === "Motor de Partida" ? (
              <object className="arquivo-pdf" type="application/pdf" data={PdfMotor}>
                <a href={PdfMotor}>Ver PDF</a>
              </object>
            ) : (
              ""
            )}
            {catalogoState === "Vela de Ignição" ? (
              <object className="arquivo-pdf" type="application/pdf" data={PdfVela}>
                <a href={PdfVela}>Ver PDF</a>
              </object>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Container>
      <div className="chamada">
        <Container>
          <Row className="chamada-inside text-center">
            <Col lg={12}>
              <h5>
                <a href="/contato">Quer algum produto que não encontrou no catálogo?</a>
              </h5>
            </Col>
            <Col lg={12}>
              <p>
                <a href="/contato">
                  Entre em contato e faça seu pedido por encomenda, <br />{" "}
                  enviamos para todo o Brasil.
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
