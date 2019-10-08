import React from "react";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Produto1 from "../assets/img/Produto 1.png";
import Produto2 from "../assets/img/Produto 2.png";
import Produto3 from "../assets/img/Produto 3.png";
import Produto4 from "../assets/img/Produto 4.png";
import Produto5 from "../assets/img/Produto 5.png";
import Produto6 from "../assets/img/Produto 6.png";
import Produto7 from "../assets/img/Produto 7.png";
import Produto8 from "../assets/img/Produto 8.png";
import Letreiro from "../assets/img/Letreiro.png";

export default function Hero() {
  return (
    <Carousel className="bannercarrosel">
      <div class="bg bg1">
        <div class="letreiro">
        <img src={Letreiro} alt="Letreiro de Promoção" />
        </div>          
        <div class="bannerprodutos">
          <img src={Produto1} alt="Produto" />
          <img src={Produto2} alt="Produto" />
          <img src={Produto3} alt="Produto" />
          <img src={Produto4} alt="Produto" />
        </div>
        <div class="bannerprodutos produtos2">
          <img src={Produto5} alt="Produto" />
          <img src={Produto6} alt="Produto" />
          <img src={Produto7} alt="Produto" />
          <img src={Produto8} alt="Produto" />
        </div>
        <p>PROMOÇÃO VÁLIDA PARA O MÊS VIGENTE OU ENQUANTO DURAREM OS ESTOQUES.</p>         
      </div>
      <div class="bg bg2">
          <img src="#" alt="Imagem do banner" />
      </div>
      <div class="bg bg3">
      </div>
      <div class="bg bg4 text-center">
        <h3>Trabalhamos com as melhores marcas do mercado</h3>
      </div>
    </Carousel>
  );
}
