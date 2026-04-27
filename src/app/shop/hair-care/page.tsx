import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Product = {
  slug: string;
  name: string;
  image?: string;
};

const products: Product[] = [
  {
    slug: "waves-curls-hair-oil",
    name: "Waves & Curls Hair Oil",
    image: "/products/waves-curls-oil.png",
  },
  {
    slug: "scalp-root-hair-oil",
    name: "Scalp & Root Hair Oil",
  },
  {
    slug: "straight-fine-hair-oil",
    name: "Straight & Fine Hair Oil",
  },
];

export default function HairCarePage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="px-6 pt-16 pb-10 text-center">
          <h2 className="font-didot text-4xl text-neutral-800 sm:text-5xl">
            Hair Care Habits
          </h2>
        </section>
        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <a
                key={product.slug}
                href={`/shop/hair-care/${product.slug}`}
                className="group flex flex-col border border-neutral-200 bg-white transition hover:border-neutral-400"
              >
                <div className="relative flex aspect-square w-full items-center justify-center bg-white">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-10 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="font-didot text-base text-neutral-400">
                      Coming soon
                    </span>
                  )}
                </div>
                <div className="border-t border-neutral-200 px-6 py-5 text-center">
                  <h3 className="font-didot text-xl text-neutral-800 sm:text-2xl">
                    {product.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
