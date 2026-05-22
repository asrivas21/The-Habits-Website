import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductActions from "@/components/ProductActions";
import { formatPrice } from "@/lib/format";

const product = {
  id: "waves-curls-hair-oil",
  name: "Waves & Curls Hair Oil",
  price: 700,
  size: "100ml",
  image: "/products/waves-curls-oil.png",
};

export default function WavesCurlsHairOilPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-square w-full bg-bone">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-contain p-12"
              />
            </div>
            <div className="flex flex-col justify-center gap-6">
              <h1 className="font-didot text-3xl uppercase tracking-[0.15em] text-ink sm:text-4xl">
                {product.name}
              </h1>
              <p className="font-didot text-2xl text-ink-muted">{formatPrice(product.price)}</p>
              <p className="font-didot text-sm uppercase tracking-[0.2em] text-ink-soft">
                {product.size}
              </p>
              <ProductActions product={product} />
              <div className="mt-4 flex flex-col gap-6 border-t border-rule pt-6">
                <section>
                  <h2 className="font-didot text-sm uppercase tracking-[0.2em] text-ink">
                    Description
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nourishing
                    blend crafted to bring out the best in waves and curls, leaving hair
                    soft, defined, and full of life.
                  </p>
                </section>
                <section>
                  <h2 className="font-didot text-sm uppercase tracking-[0.2em] text-ink">
                    How to Use
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    Lorem ipsum dolor sit amet. Apply a small amount to damp or dry hair,
                    working through mid-lengths to ends. Use daily or as needed for best
                    results.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-bone px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="font-didot text-xs uppercase tracking-[0.3em] text-ink-soft">
                Key Ingredients
              </span>
              <h2 className="mt-4 font-didot text-display text-ink">
                What goes in.
              </h2>
              <p className="mx-auto mt-4 max-w-xl font-didot text-lead italic text-ink-muted">
                Three heritage ingredients, sourced and prepared the old way.
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
              <article className="flex flex-col gap-5">
                <div className="relative flex aspect-square w-full items-center justify-center bg-white">
                  <span className="font-didot text-base text-ink-soft">Coming soon</span>
                </div>
                <h3 className="font-didot text-2xl text-ink">Bhringraj</h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  Known in Ayurveda as the &lsquo;king of hair.&rsquo; Strengthens the root,
                  supports natural shine, and is traditionally used to bring out wave and
                  curl definition.
                </p>
              </article>
              <article className="flex flex-col gap-5">
                <div className="relative flex aspect-square w-full items-center justify-center bg-white">
                  <span className="font-didot text-base text-ink-soft">Coming soon</span>
                </div>
                <h3 className="font-didot text-2xl text-ink">Amla</h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  The fruit of the Indian gooseberry, rich in vitamin C and tannins.
                  Conditions without weight, and works at the shaft to slow brittleness
                  over time.
                </p>
              </article>
              <article className="flex flex-col gap-5">
                <div className="relative flex aspect-square w-full items-center justify-center bg-white">
                  <span className="font-didot text-base text-ink-soft">Coming soon</span>
                </div>
                <h3 className="font-didot text-2xl text-ink">Coconut &amp; Sesame</h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  Two heritage carrier oils, cold-pressed and slow-infused. Coconut for
                  deep moisture, sesame for warming nourishment &mdash; a combination as
                  old as the practice itself.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
