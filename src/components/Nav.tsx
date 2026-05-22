"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const categories = [
  { href: "/shop/hair-care", label: "Hair Care" },
  { href: "/shop/face-care", label: "Face Care" },
  { href: "/shop/immunity-energy", label: "Immunity & Energy" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setHoverIdx(null);
    triggerRef.current?.focus();
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="shop-menu-overlay"
        onClick={() => (open ? close() : setOpen(true))}
        className="font-didot text-xl font-medium text-white transition-opacity hover:opacity-80"
      >
        {open ? "Close" : "Menu"}
      </button>
      <div
        id="shop-menu-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Shop menu"
        aria-hidden={!open}
        className={`fixed inset-x-0 bottom-0 top-[8rem] z-40 bg-cream transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="grid h-full grid-cols-1 lg:grid-cols-[3fr_2fr]">
          <div className="flex flex-col justify-center gap-10 px-10 py-16 sm:px-16 lg:px-24">
            <span className="font-didot text-xs uppercase tracking-[0.3em] text-ink-soft">
              The Collection
            </span>
            <ul
              className="flex flex-col gap-3"
              onMouseLeave={() => setHoverIdx(null)}
            >
              {categories.map((cat, i) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    onMouseEnter={() => setHoverIdx(i)}
                    onClick={close}
                    className={`block font-didot text-display-xl text-ink transition-opacity duration-300 hover:text-accent ${
                      hoverIdx !== null && hoverIdx !== i
                        ? "opacity-30"
                        : "opacity-100"
                    }`}
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/shop"
              onClick={close}
              className="inline-flex w-fit items-center gap-2 font-didot text-sm uppercase tracking-[0.25em] text-ink-muted transition-colors hover:text-accent"
            >
              View all products
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
          <div className="hidden border-l border-rule px-10 py-16 lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-6">
            <div className="flex aspect-[4/5] w-full max-w-sm items-center justify-center bg-bone">
              <span className="font-didot text-base text-ink-soft">
                Coming soon
              </span>
            </div>
            <p className="font-didot text-sm uppercase tracking-[0.25em] text-ink-soft">
              {hoverIdx !== null
                ? categories[hoverIdx].label
                : "Browse the collection"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
