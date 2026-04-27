import Image from "next/image";
import Carousel, { type CarouselSlide } from "@/components/Carousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const slides: CarouselSlide[] = [
  { src: "/images/IMG_0500.jpeg", alt: "The Habits photo 1" },
  { src: "/images/IMG_0501.jpeg", alt: "The Habits photo 2" },
  { src: "/images/IMG_0502.jpeg", alt: "The Habits photo 3" },
  { src: "/images/IMG_0503.jpeg", alt: "The Habits photo 4" },
  { src: "/images/IMG_0504.jpeg", alt: "The Habits photo 5" },
  { src: "/images/IMG_0505.jpeg", alt: "The Habits photo 6" },
  { src: "/images/IMG_0506.jpeg", alt: "The Habits photo 7" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col h-[calc(100svh-166px)]">
        <Carousel slides={slides} />
      </main>
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-didot text-4xl text-neutral-800 sm:text-5xl">
            Back to Roots <span className="text-neutral-400">&mdash;</span> Made for Modern Living &amp; Attitudes
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-didot text-lg leading-relaxed text-neutral-600 sm:text-xl">
            Inspired by ingredients passed through generations, once found in our
            grandmother&apos;s kitchen and her old yellow-paged diary &mdash; now
            reimagined as self-care for a modern lifestyle.
          </p>
        </div>
      </section>
      <div className="bg-white px-6">
        <hr className="mx-auto max-w-3xl border-t border-neutral-200" />
      </div>
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-center font-didot text-xl leading-relaxed text-neutral-800 sm:text-2xl">
          <h2 className="font-didot text-4xl text-neutral-800 sm:text-5xl">
            About us
          </h2>
          <p>
            The Habits, ayurveda for the modern lifestyle was not about
            ingredients or science but PACE.
          </p>
          <p>
            For us beauty has never been a product but a melody of oils warmed
            slowly, ubtans mixed fresh, massage given time.
          </p>
          <p>
            Our products carry these rituals forward, we are making these
            rituals —Habits
          </p>
          <p>Not as Nostalgia — Not as Ritual — But as Habit</p>
          <div className="pt-4">
            <a
              href="/shop"
              className="inline-flex items-center justify-center bg-[#f27e00] px-8 py-3 font-didot text-lg text-white transition hover:bg-[#d96f00] sm:text-xl"
            >
              Explore Us
            </a>
          </div>
        </div>
      </section>
      <section className="bg-[#fdf3e7] px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 text-center md:grid-cols-3">
          <div className="flex flex-col items-center gap-4">
            <span className="block h-px w-12 bg-[#f27e00]" aria-hidden="true" />
            <p className="font-didot text-xl leading-relaxed text-neutral-800 sm:text-2xl">
              From grandmother&apos;s kitchen to modern habits of care
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="block h-px w-12 bg-[#f27e00]" aria-hidden="true" />
            <p className="font-didot text-xl leading-relaxed text-neutral-800 sm:text-2xl">
              Formulated with ingredients passed through generations
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="block h-px w-12 bg-[#f27e00]" aria-hidden="true" />
            <p className="font-didot text-xl leading-relaxed text-neutral-800 sm:text-2xl">
              What once nurtured generations, now nurtures YOU!
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white px-6 pt-20 pb-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-didot text-4xl text-neutral-800 sm:text-5xl">
            Find Your Habit
          </h2>
        </div>
      </section>
      <section className="bg-white px-6 pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
          <a
            href="/shop/hair-care/waves-curls-hair-oil"
            className="group relative block aspect-[3/4] overflow-hidden bg-[#fdf3e7]"
          >
            <Image
              src="/products/waves-curls-oil.png"
              alt="Waves & Curls Hair Oil"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 bg-gradient-to-t from-black/40 to-transparent px-6 pb-10 pt-24 text-center">
              <h3 className="font-didot text-2xl uppercase tracking-[0.15em] text-white drop-shadow sm:text-3xl">
                Waves &amp; Curls Hair Oil
              </h3>
              <span className="inline-flex items-center justify-center bg-white px-6 py-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-800 transition group-hover:bg-[#f27e00] group-hover:text-white">
                Shop Hair
              </span>
            </div>
          </a>
          <a
            href="/shop/face-care"
            className="group relative block aspect-[3/4] overflow-hidden bg-[#fbe5c8]"
          >
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
              <span className="font-didot text-lg">Coming soon</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 bg-gradient-to-t from-black/40 to-transparent px-6 pb-10 pt-24 text-center">
              <h3 className="font-didot text-2xl uppercase tracking-[0.15em] text-white drop-shadow sm:text-3xl">
                Musli Pak
              </h3>
              <span className="inline-flex items-center justify-center bg-white px-6 py-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-800 transition group-hover:bg-[#f27e00] group-hover:text-white">
                Shop Face
              </span>
            </div>
          </a>
          <a
            href="/shop/immunity-energy"
            className="group relative block aspect-[3/4] overflow-hidden bg-[#fdf3e7]"
          >
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
              <span className="font-didot text-lg">Coming soon</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 bg-gradient-to-t from-black/40 to-transparent px-6 pb-10 pt-24 text-center">
              <h3 className="font-didot text-2xl uppercase tracking-[0.15em] text-white drop-shadow sm:text-3xl">
                Immunity &amp; Energy
              </h3>
              <span className="inline-flex items-center justify-center bg-white px-6 py-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-800 transition group-hover:bg-[#f27e00] group-hover:text-white">
                Shop Immunity
              </span>
            </div>
          </a>
        </div>
      </section>
      <section className="bg-[#f27e00] px-6 py-20">
        <p className="mx-auto max-w-4xl text-center font-didot text-2xl leading-relaxed text-white sm:text-3xl">
          Inspired by time-honoured ingredients passed through generations,
          suited for modern lifestyle and attitudes.
        </p>
      </section>
      <Footer />
    </>
  );
}
