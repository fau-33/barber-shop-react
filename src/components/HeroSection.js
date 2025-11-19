"use client";
import Image from "next/image";
import estilos from "./HeroSection.module.css";

export default function HeroSection({ bannerSrc }) {
  return (
    <section className={estilos.secao_banner}>
      <Image src={bannerSrc} alt="banner" />
    </section>
  );
}
