import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CartView from "@/components/CartView";

export default function CartPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="px-6 pt-16 pb-10 text-center">
          <h2 className="font-didot text-4xl text-neutral-800 sm:text-5xl">
            Your Cart
          </h2>
        </section>
        <CartView />
      </main>
      <Footer />
    </>
  );
}
