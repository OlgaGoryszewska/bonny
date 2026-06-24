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
        <section className="ring-card" aria-label="Pink gemstone ring">
          <Image
            src="/ring_pink.png"
            alt="Pink gemstone ring"
            className="ring-card-image"
            width={406}
            height={319}
          />
          <span className="ring-card-label">Hand Crafted</span>
        </section>
        <div className="consultation-action">
          <a className="consultation-link" href="#contact">
            Book consultation
          </a>
        </div>
        <section className="heirloom-card">
          <h2>Where Stories Become Heirlooms</h2>
          <ul className="heirloom-list">
            <li>Craftsmanship over mass production</li>
            <li>Personal relationships with clients</li>
            <li>Exceptional gemstones</li>
            <li>Timeless design</li>
          </ul>
          <div className="heirloom-logo">
            <Image
              src="/gray_logo.png"
              alt="Bonny gray logo"
              width={40}
              height={38}
            />
          </div>
        </section>
        <section className="sketch-section" aria-label="Jewelry artist sketch">
          <Image
            src="/sketch.png"
            alt="Sketch of a jewelry artist working by hand"
            className="sketch-image"
            width={366}
            height={517}
          />
        </section>
        <section className="craft-text-section">
          <p>
            Crafted for Those Who Value the Exceptional
            <br />
            In a world of mass production, true craftsmanship has become
            increasingly rare.
          </p>
          <Image
            src="/sep_01.png"
            alt=""
            aria-hidden="true"
            className="craft-separator"
            width={38}
            height={27}
          />
          <p>
            Every piece created in my atelier begins with a conversation. Not
            about jewelry, but about the person who will wear it. A milestone. A
            promise. A celebration. A story that deserves to be preserved in
            precious materials and exceptional craftsmanship.
          </p>
        </section>

      </main>
    </>
  );
}
