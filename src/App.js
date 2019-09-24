import React from "react";
import "./App.css";
import Header from "./components/header/header.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Hero from "./components/hero/hero.js";
import Service from "./components/service/service.js";
import Service2 from "./components/service2/service2.js";
import Service3 from "./components/service3/service3.js";
import Contato from "./components/contato/contato.js";
import Sobre from "./components/sobre/sobre.js";
import ServiceInside from "./components/servicos/servicos.js";
import Catalogo from "./components/catalogo/catalogo.js";
import Empilhadeiras from "./components/empilhadeiras/empilhadeiras.js";
import FaleConosco from "./components/faleconosco/faleconosco.js";

const Fale = () => (
  <div>
    <Header />
    <FaleConosco />
    <Contato />
  </div>
);
const Emp = () => (
  <div>
    <Header />
    <Empilhadeiras />
    <Contato />
  </div>
);
const Produtos = () => (
  <div>
  <Header />
  <Catalogo />
  <Contato />
  </div>
);
const Servicos = () => (
  <div>
    <Header />
    <ServiceInside />
    <Contato />
  </div>
);
const RTX = () => (
  <div>
    <Header />
    <Sobre />
    <Contato />
  </div>
);
const Home = () => (
  <div>
    <Header />
    <Hero />
    <Service />
    <Service2 />
    <Service3 />
    <Contato />
  </div>
);
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sobre" component={RTX} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/empilhadeiras" component={Emp} />
        <Route path="/contato" component={Fale} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
