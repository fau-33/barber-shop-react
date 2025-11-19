"use client";
import Image from "next/image";
import { FiSun, FiMoon } from "react-icons/fi";
import estilos from "./Header.module.css"; // Caminho ajustado

export default function Header({ temaDark, alterarTema, Logo }) {
  const handleScrollToGallery = () => {
    const gallerySection = document.getElementById("nossos-trabalhos");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={estilos.header_container}>
      <div>
        <Image src={Logo} alt="logo" />
        <nav>
          <button onClick={handleScrollToGallery} className={estilos.nav_button}>Nossos Trabalhos</button>
          <button onClick={alterarTema} aria-label={temaDark ? "Ativar modo claro" : "Ativar modo escuro"}>
            {temaDark ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
      </div>
    </header>
  );
}
