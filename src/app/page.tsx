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
          <h2 className="font-didot text-display text-ink">
            Back to Roots <span className="text-ink-soft">&mdash;</span> Made for Modern Living &amp; Attitudes
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-didot text-lg leading-relaxed text-ink-muted sm:text-xl">
            Inspired by ingredients passed through generations, once found in our
            grandmother&apos;s kitchen and her old yellow-paged diary &mdash; now
            reimagined as self-care for a modern lifestyle.
          </p>
        </div>
      </section>
      <div className="bg-white px-6">
        <hr className="mx-auto max-w-3xl border-t border-rule" />
      </div>
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-6">
            <span className="font-didot text-xs uppercase tracking-[0.3em] text-ink-soft">
              About us
            </span>
            <h2 className="font-didot text-display-lg text-ink">
              Not nostalgia. Not ritual. <span className="text-accent">Habit.</span>
            </h2>
            <p className="font-didot text-lead italic text-ink-muted">
              Ayurveda, for the way you live now.
            </p>
            <div className="flex flex-col gap-4 font-didot text-lg leading-relaxed text-ink-muted sm:text-xl">
              <p>
                The Habits was never about <em>ingredients</em> or <em>science</em> &mdash; it was about <em>pace</em>.
              </p>
              <p>
                Beauty has never been a product, but a melody: oils warmed slowly, ubtans mixed fresh, massage given <em>time</em>.
              </p>
              <p>
                Our products carry these rituals forward. We&apos;re not preserving the past &mdash; we&apos;re letting it become a <em>habit</em>.
              </p>
            </div>
            <div className="pt-2">
              <a
                href="/shop"
                className="inline-flex items-center justify-center bg-accent px-8 py-3 font-didot text-lg text-white transition hover:bg-accent-hover sm:text-xl"
              >
                Explore Us
              </a>
            </div>
          </div>
          <div className="relative flex aspect-[4/5] w-full items-center justify-center bg-bone">
            <span className="font-didot text-base text-ink-soft">Coming soon</span>
          </div>
        </div>
      </section>
      <section className="bg-cream px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 text-center md:grid-cols-3">
          <div className="flex flex-col items-center gap-4">
            <span className="font-didot text-sm uppercase tracking-[0.3em] text-ink">01</span>
            <p className="font-didot text-xl leading-relaxed text-ink sm:text-2xl">
              From grandmother&apos;s kitchen to modern habits of care
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="font-didot text-sm uppercase tracking-[0.3em] text-ink">02</span>
            <p className="font-didot text-xl leading-relaxed text-ink sm:text-2xl">
              Formulated with ingredients passed through generations
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="font-didot text-sm uppercase tracking-[0.3em] text-ink">03</span>
            <p className="font-didot text-xl leading-relaxed text-ink sm:text-2xl">
              What once nurtured generations, now nurtures YOU!
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white px-6 pt-20 pb-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-didot text-display text-ink">
            Find Your Habit
          </h2>
        </div>
      </section>
      <section className="bg-white px-6 pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
          <a
            href="/shop/hair-care/waves-curls-hair-oil"
            className="group relative block aspect-[3/4] overflow-hidden bg-cream"
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
              <span className="inline-flex items-center justify-center bg-white px-6 py-2 text-xs font-medium uppercase tracking-[0.2em] text-ink transition group-hover:bg-accent group-hover:text-white">
                Shop Hair
              </span>
            </div>
          </a>
          <a
            href="/shop/face-care"
            className="group relative block aspect-[3/4] overflow-hidden bg-cream-deep"
          >
            <div className="absolute inset-0 flex items-center justify-center text-ink-soft">
              <span className="font-didot text-lg">Coming soon</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 bg-gradient-to-t from-black/40 to-transparent px-6 pb-10 pt-24 text-center">
              <h3 className="font-didot text-2xl uppercase tracking-[0.15em] text-white drop-shadow sm:text-3xl">
                Musli Pak
              </h3>
              <span className="inline-flex items-center justify-center bg-white px-6 py-2 text-xs font-medium uppercase tracking-[0.2em] text-ink transition group-hover:bg-accent group-hover:text-white">
                Shop Face
              </span>
            </div>
          </a>
          <a
            href="/shop/immunity-energy"
            className="group relative block aspect-[3/4] overflow-hidden bg-cream"
          >
            <div className="absolute inset-0 flex items-center justify-center text-ink-soft">
              <span className="font-didot text-lg">Coming soon</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 bg-gradient-to-t from-black/40 to-transparent px-6 pb-10 pt-24 text-center">
              <h3 className="font-didot text-2xl uppercase tracking-[0.15em] text-white drop-shadow sm:text-3xl">
                Immunity &amp; Energy
              </h3>
              <span className="inline-flex items-center justify-center bg-white px-6 py-2 text-xs font-medium uppercase tracking-[0.2em] text-ink transition group-hover:bg-accent group-hover:text-white">
                Shop Immunity
              </span>
            </div>
          </a>
        </div>
      </section>
      <section className="bg-bone px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 flex aspect-[4/5] w-full items-center justify-center bg-white lg:order-1">
            <span className="font-didot text-base text-ink-soft">Coming soon</span>
          </div>
          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <span className="font-didot text-xs uppercase tracking-[0.3em] text-ink-soft">
              Behind The Habits
            </span>
            <h2 className="font-didot text-display text-ink">
              Made by hand. Rooted in study.
            </h2>
            <div className="flex flex-col gap-4 font-didot text-lg leading-relaxed text-ink-muted sm:text-xl">
              <p>
                Every formula begins in a small workshop, where ingredients passed through generations are weighed, warmed, and combined slowly. No outsourcing, no shortcuts &mdash; just the time each formula deserves.
              </p>
              <p>
                Decades spent studying classical Ayurvedic texts shape the recipes. Years of practice perfect them. What reaches your shelf is the same care once given inside the family.
              </p>
            </div>
            <p className="pt-2 text-xs uppercase tracking-[0.3em] text-ink-soft">
              Small batches &middot; Hand-poured &middot; Always
            </p>
          </div>
        </div>
      </section>
      <section className="bg-cream px-6 py-28">
        <p className="mx-auto max-w-4xl text-center font-didot text-display leading-tight text-ink">
          Inspired by time-honoured ingredients passed through generations, suited for modern lifestyle and attitudes.
        </p>
      </section>
      <Footer />
    </>
  );
}
