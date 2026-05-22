import Image from "next/image";
import Link from "next/link";
import CartButton from "@/components/CartButton";
import Nav from "@/components/Nav";
import SearchButton from "@/components/SearchButton";

export default function Header() {
  return (
    <>
    <header className="sticky top-0 z-50 w-full bg-accent">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-5 px-6 py-8">
        <div className="justify-self-start">
          <Nav />
        </div>
        <Link
          href="/"
          className="flex items-center gap-5 transition-opacity hover:opacity-80"
        >
          <Image
            src="/habits-logo-white-v2.png"
            alt="The Habits logo"
            width={500}
            height={500}
            priority
            className="h-16 w-auto"
          />
          <h1 className="font-didot text-display-lg text-white">
            The Habits
          </h1>
        </Link>
        <div className="justify-self-end flex items-center gap-3">
          <SearchButton />
          <CartButton />
        </div>
      </div>
    </header>
    <div className="w-full bg-cream border-b border-ink/5">
      <p className="mx-auto max-w-6xl px-6 py-2.5 text-center text-xs uppercase tracking-[0.25em] text-ink-muted sm:text-sm">
        Rooted in Ayurveda &middot; Made for Modern Lifestyle
      </p>
    </div>
    </>
  );
}
