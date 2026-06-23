import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <section className="hero-section" aria-label="Featured jewelry">
          <Image
            src="/hero_img.JPG"
            alt="Handmade jewelry by Bonny"
            fill
            priority
            sizes="100vw"
          />
          
          <p className="hero-text uppercase pb-10">Jewelry Created </p>
          <p className="hero-text uppercase"> Around Your Story</p>
        </section>
        <p className="intro-text p-2">
          Bespoke fine jewelry handcrafted in Belgium using exceptional
          gemstones, precious metals, and traditional craftsmanship.
        </p>
      </main>
    </>
  );
}
