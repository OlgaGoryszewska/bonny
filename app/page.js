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
            className="craft-separator craft-separator-large"
            width={36}
            height={36}
          />
          <p>
            Every piece created in my atelier begins with a conversation. Not
            about jewelry, but about the person who will wear it. A milestone. A
            promise. A celebration. A story that deserves to be preserved in
            precious materials and exceptional craftsmanship.
          </p>
          <Image
            src="/sep_03.png"
            alt=""
            aria-hidden="true"
            className="craft-separator craft-separator-large"
            width={36}
            height={36}
          />
          <p>
            I work directly with every client from the first consultation to the
            final delivery. No intermediaries. No production lines. No
            compromises. Whether creating an engagement ring, a family heirloom,
            a commemorative piece, or an entirely unique design, my goal remains
            the same: to transform personal stories into timeless objects that
            can be treasured for generations.
          </p>
          <Image
            src="/sep_02.png"
            alt=""
            aria-hidden="true"
            className="craft-separator craft-separator-large"
            width={36}
            height={36}
          />
          <p>
            I work directly with every client from the first consultation to the
            final delivery. No intermediaries. No production lines. No
            compromises. Whether creating an engagement ring, a family heirloom,
            a commemorative piece, or an entirely unique design, my goal remains
            the same: to transform personal stories into timeless objects that
            can be treasured for generations.
          </p>

          <Image
            src="/sep_04.png"
            alt=""
            aria-hidden="true"
            className="craft-separator craft-separator-large"
            width={36}
            height={36}
          />
          <p>
            Every gemstone is selected individually. Every detail is considered.
            Every piece is made to exist only once. Because true luxury is not
            about owning what everyone else has. It is about owning something
            that was created exclusively for you.
          </p>
          <div className="consultation-action">
            <a className="consultation-link" href="#contact">
              START PROCESS
            </a>
          </div>
        </section>

        <section
          className="selected-creations"
          aria-labelledby="selected-creations-title"
        >
          <div className="selected-creations-inner">
            <h2 id="selected-creations-title">Selected Creations</h2>
            <div className="selected-creations-grid">
              <article className="creation-panel creation-panel-photo">
                <Image
                  src="/bride.png"
                  alt="Bride wearing an engagement ring"
                  fill
                  sizes="(max-width: 720px) 100vw, 360px"
                />
                <p>Engagement Rings</p>
              </article>
              <article className="creation-panel creation-panel-ring">
                <Image
                  src="/engagement_ring.png"
                  alt="Gold engagement ring with diamonds"
                  fill
                  sizes="(max-width: 720px) 100vw, 360px"
                />
                <p>Hand Crafted</p>
              </article>
            </div>
            <div className="creation-story">
              <div className="creation-story-kicker">The story behind</div>
              <h3>The Parallel Promise</h3>
              <p>
                They met at the wrong time, in the wrong place, with lives
                already moving in different directions.
              </p>
              <p>Neither asked the other to change.</p>
              <p>Instead, they chose to walk side by side.</p>
              <p>
                The two gold bands represent two independent journeys. The
                diamond between them symbolizes the life they built together,
                not by becoming one person, but by growing as two people who
                chose the same future.
              </p>
              <p>A reminder that the strongest love is not about holding on.</p>
              <p>It is about moving forward, together.</p>
              <a href="#contact">Discover</a>
            </div>
            <div className="selected-creations-grid selected-creations-grid-next">
              <article className="creation-panel creation-panel-photo">
                <Image
                  src="/model_signet.png"
                  alt="Model wearing a swan signet ring"
                  fill
                  sizes="(max-width: 720px) 50vw, 360px"
                />
                <p>Model Signet</p>
              </article>
              <article className="creation-panel creation-panel-ring creation-panel-signet">
                <Image
                  src="/signet.png"
                  alt="Gold swan signet ring"
                  fill
                  sizes="(max-width: 720px) 50vw, 360px"
                />
                <p>Signet</p>
              </article>
            </div>
            <div className="creation-story">
              <div className="creation-story-kicker">The story behind</div>
              <h3>The Swan Signet</h3>
              <p>
                Long before it became a ring, it was a sketch hidden in the
                corner of an old notebook.
              </p>
              <p>A swan, drawn with a few simple lines.</p>
              <p>Not a symbol of perfection, but of quiet strength.</p>
              <p>
                Swans glide effortlessly across the water, yet beneath the
                surface they move with determination and purpose. The signet was
                created for the same kind of person: someone who doesn&apos;t
                need to be the loudest in the room to be remembered.
              </p>
              <p>
                Carved into solid gold, the swan becomes a personal emblem. A
                reminder that elegance is not something you wear.
              </p>
              <p>It&apos;s something you carry.</p>
              <p>A seal of grace, resilience, and confidence.</p>
              <a href="#contact">Discover</a>
            </div>
            <div className="selected-creations-grid selected-creations-grid-next">
              <article className="creation-panel creation-panel-photo">
                <Image
                  src="/model_ring.png"
                  alt="Model wearing a one of a kind ring"
                  fill
                  sizes="(max-width: 720px) 50vw, 360px"
                />
                <p>One of a Kind Pieces</p>
              </article>
              <article className="creation-panel creation-panel-ring creation-panel-one">
                <Image
                  src="/ring_one.png"
                  alt="Hand crafted Secret Garden ring"
                  fill
                  sizes="(max-width: 720px) 50vw, 360px"
                />
                <p>Hand Crafted</p>
              </article>
            </div>
            <div className="creation-story">
              <div className="creation-story-kicker">The story behind</div>
              <h3>The Secret Garden Ring</h3>
              <p>She found the garden by accident.</p>
              <p>
                Hidden behind an old stone wall, untouched by maps and forgotten
                by time, it bloomed in colors she had never seen before.
                Sapphire blue beside wild amethyst, golden petals beside emerald
                leaves, each flower different, yet perfectly belonging.
              </p>
              <p>Before she left, she picked nothing.</p>
              <p>Instead, she carried the memory home.</p>
              <p>Years later, that memory became a ring.</p>
              <p>
                Each gemstone represents a moment worth keeping: a dream
                pursued, a place discovered, a person loved, a version of
                yourself you never want to forget.
              </p>
              <p>
                No two stones are the same, just as no life is made from a
                single color.
              </p>
              <p>A tiny secret garden, captured forever in gold.</p>
              <a href="#contact">Discover</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
