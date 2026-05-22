import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Product = {
  category: "hair-care" | "face-care" | "immunity-energy";
  slug: string;
  name: string;
  image?: string;
};

const products: Product[] = [
  {
    category: "face-care",
    slug: "mukhkantivardhak-facepack",
    name: "Mukhkantivardhak Facepack",
  },
  {
    category: "face-care",
    slug: "mukhkantivardhak-ubtan",
    name: "Mukhkantivardhak Ubtan",
  },
  {
    category: "face-care",
    slug: "tarunyapidikahar-lepa",
    name: "Tarunyapidikahar Lepa",
  },
  {
    category: "face-care",
    slug: "kumkumadi-oil",
    name: "Kumkumadi Oil",
  },
  {
    category: "hair-care",
    slug: "waves-curls-hair-oil",
    name: "Waves & Curls Hair Oil",
    image: "/products/waves-curls-oil.png",
  },
  {
    category: "hair-care",
    slug: "waves-curls-hair-pack",
    name: "Waves & Curls Hair Pack",
  },
  {
    category: "hair-care",
    slug: "nilotpaladi-hair-pack",
    name: "Nilotpaladi Hair Pack",
  },
  {
    category: "immunity-energy",
    slug: "musli-pak",
    name: "Musli Pak",
  },
  {
    category: "immunity-energy",
    slug: "supari-pak",
    name: "Supari Pak",
  },
];

export default function AllProductsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="px-6 pt-16 pb-10 text-center">
          <h2 className="font-didot text-display text-ink">
            All Products
          </h2>
        </section>
        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <a
                key={`${product.category}-${product.slug}`}
                href={`/shop/${product.category}/${product.slug}`}
                className="group flex flex-col border border-rule bg-white transition hover:border-ink/40"
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
                    <span className="font-didot text-base text-ink-soft">
                      Coming soon
                    </span>
                  )}
                </div>
                <div className="border-t border-rule px-6 py-5 text-center">
                  <h3 className="font-didot text-xl text-ink sm:text-2xl">
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
