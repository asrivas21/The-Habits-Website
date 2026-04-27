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
            <div className="relative aspect-square w-full bg-[#f5f5f3]">
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
              <h1 className="font-didot text-3xl uppercase tracking-[0.15em] text-neutral-800 sm:text-4xl">
                {product.name}
              </h1>
              <p className="font-didot text-2xl text-neutral-600">{formatPrice(product.price)}</p>
              <p className="font-didot text-sm uppercase tracking-[0.2em] text-neutral-500">
                {product.size}
              </p>
              <ProductActions product={product} />
              <div className="mt-4 flex flex-col gap-6 border-t border-neutral-200 pt-6">
                <section>
                  <h2 className="font-didot text-sm uppercase tracking-[0.2em] text-neutral-800">
                    Description
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nourishing
                    blend crafted to bring out the best in waves and curls, leaving hair
                    soft, defined, and full of life.
                  </p>
                </section>
                <section>
                  <h2 className="font-didot text-sm uppercase tracking-[0.2em] text-neutral-800">
                    Ingredients
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    Lorem ipsum, dolor sit amet, consectetur, adipiscing elit, sed do
                    eiusmod, tempor incididunt, ut labore et dolore, magna aliqua.
                  </p>
                </section>
                <section>
                  <h2 className="font-didot text-sm uppercase tracking-[0.2em] text-neutral-800">
                    How to Use
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    Lorem ipsum dolor sit amet. Apply a small amount to damp or dry hair,
                    working through mid-lengths to ends. Use daily or as needed for best
                    results.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
