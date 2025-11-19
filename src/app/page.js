"use client";
import { useState } from "react";
import estilos from "./page.module.css";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import GallerySection from "../components/GallerySection";
import Banner from "../../public/banner.jpg";
import Logo from "../../public/logo.png";

const galleryImages = [
  {
    src: "https://img.freepik.com/fotos-gratis/homem-num-salao-de-barbearia-a-cortar-o-cabelo-e-a-barba_1303-20953.jpg?semt=ais_hybrid&w=740&q=80",
    alt: "Homem cortando cabelo e barba",
    width: 740,
    height: 493,
  },
  {
    src: "https://i.pinimg.com/originals/f8/6d/48/f86d48e761a7dde1c4ba6386d9a8863b.jpg",
    alt: "Corte de cabelo e barba",
    width: 736,
    height: 981,
  },
  {
    src: "https://img.freepik.com/fotos-gratis/mulher-penteando-homem-elegante_23-2147737078.jpg?semt=ais_hybrid&w=740&q=80",
    alt: "Mulher penteando homem",
    width: 740,
    height: 493,
  },
  {
    src: "https://img.freepik.com/psd-gratuitas/flyer-quadrado-para-redes-sociais-de-barbearia-e-modelo-de-banner-de-postagem-de-corte-de-cabelo-no-instagram_505751-7323.jpg?semt=ais_incoming&w=740&q=80",
    alt: "Flyer de barbearia",
    width: 740,
    height: 740,
  },
  {
    src: "https://media.gettyimages.com/id/1973194125/pt/foto/hairdresser-shaping-eyebrows-of-man-client-using-razor-in-barbershop.jpg?s=612x612&w=gi&k=20&c=sYPSl457MdByoEP8qnPO7XPDG2NwJrBe00rkIS90yC4=",
    alt: "Barbeiro aparando sobrancelha",
    width: 612,
    height: 408,
  },
  {
    src: "https://media.istockphoto.com/id/1773270658/pt/foto/professional-hairdresser-working-with-bearded-client-in-barbershop-closeup-black-and-white.jpg?s=612x612&w=0&k=20&c=8pxiSlaIkonkkyM1uFwqfEqr76PcKZ9io_3CdArvfWg=",
    alt: "Barbeiro trabalhando com cliente barbudo",
    width: 612,
    height: 408,
  },
];

export default function Home() {
  const [temaDark, setTemaDark] = useState(false);

  function alterarTema() {
    setTemaDark(!temaDark);
  }

  return (
    <div className={temaDark ? estilos.modo_escuro : estilos.modo_claro}>
      <Header temaDark={temaDark} alterarTema={alterarTema} Logo={Logo} />
      <main className={estilos.main_container}>
        <HeroSection bannerSrc={Banner} />
        <AboutSection />
        <GallerySection images={galleryImages} />{" "}
      </main>
    </div>
  );
}
