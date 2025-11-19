"use client";
import Image from "next/image";
import estilos from "./GallerySection.module.css";

export default function GallerySection({ images }) {
  return (
    <section id="nossos-trabalhos" className={estilos.gallery_container}>
      <h2>Nossos Trabalhos</h2>
      <div className={estilos.image_grid}>
        {images.map((img, index) => (
          <div key={index} className={estilos.image_item}>
            <Image src={img.src} alt={img.alt} width={img.width} height={img.height} layout="responsive" />
          </div>
        ))}
      </div>
    </section>
  );
}
