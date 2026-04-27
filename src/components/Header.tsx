import Image from "next/image";
import CartButton from "@/components/CartButton";
import Nav from "@/components/Nav";
import SearchButton from "@/components/SearchButton";

export default function Header() {
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
            priority
            className="h-16 w-auto"
          />
          <h1 className="font-didot text-5xl tracking-tight text-white">
            The Habits
          </h1>
        </div>
        <div className="justify-self-end flex items-center gap-3">
          <SearchButton />
          <CartButton />
        </div>
      </div>
    </header>
    <div className="w-full bg-[#fdf3e7] border-b border-black/5">
      <p className="mx-auto max-w-6xl px-6 py-2.5 text-center font-didot text-xs uppercase tracking-[0.25em] text-neutral-700 sm:text-sm">
        Rooted in Ayurveda &middot; Made for Modern Lifestyle
      </p>
    </div>
    </>
  );
}
