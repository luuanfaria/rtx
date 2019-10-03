import React from "react";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Foto1 from "../assets/img/banner-toyota.jpg";
import Foto2 from "../assets/img/hangcha-banner.jpg";
import Foto3 from "../assets/img/hyster-banner.jpg";
import Banner from "../assets/img/bannerex.jpg";

export default function Hero() {
  return (
    <Carousel className="bannercarrosel">
      <div>
          <img src={Banner} alt="Imagem do banner" />          
      </div>
      <div>
          <img src={Foto2} alt="Imagem do banner" />
          <h3>Texto sobre a imagem</h3>
      </div>
      <div>
          <img src={Foto3} alt="Imagem do banner" />
      </div>
      <div>
          <img src={Banner} alt="Imagem do banner" />
      </div>
    </Carousel>
  );
}
