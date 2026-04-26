import Image from "next/image";
import Carousel, { type CarouselSlide } from "@/components/Carousel";
import Nav from "@/components/Nav";

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
      <header className="sticky top-0 z-50 w-full bg-[#f27e00]">
        <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-5 px-6 py-8">
            <div className="justify-self-start">
              <Nav />
            </div>
            <div className="flex items-center gap-5">
              <Image
                src="/habits-logo-white-v2.png"
                alt="The Habits logo"
                width={500}
                height={500}
                preload
                className="h-16 w-auto"
              />
              <h1 className="font-didot text-5xl tracking-tight text-white">
                The Habits
              </h1>
            </div>
            <div className="justify-self-end flex items-center gap-3">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-transparent text-white transition hover:bg-white/10"
                aria-label="Search"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-transparent text-white transition hover:bg-white/10"
                aria-label="Shopping cart"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 6h15l-1.5 9h-13z" />
                  <circle cx="9" cy="20" r="1" />
                  <circle cx="18" cy="20" r="1" />
                  <path d="M6 6L4 2H2" />
                </svg>
              </button>
            </div>
          </div>
        </header>
      <main className="flex flex-col h-[calc(100svh-129px)]">
        <Carousel slides={slides} />
      </main>
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
              href="/about"
              className="inline-flex items-center justify-center bg-[#f27e00] px-8 py-3 font-didot text-lg text-white transition hover:bg-[#d96f00] sm:text-xl"
            >
              Explore Us
            </a>
          </div>
        </div>
      </section>
      <section className="bg-white px-6 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-didot text-4xl text-neutral-800 sm:text-5xl">
            Find Your Habit
          </h2>
        </div>
      </section>
    </>
  );
}
