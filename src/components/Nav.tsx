"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const shopLinks = [
  { href: "/shop/hair-care", label: "Hair Care Habits" },
  { href: "/shop/face-care", label: "Face Care Habits" },
  { href: "/shop/immunity-energy", label: "Immunity and Energy" },
  { href: "/shop", label: "All Products" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav aria-label="Primary" className="ml-[-5rem]">
      <ul className="flex items-center gap-20 text-xl font-medium text-white font-didot">
        <li>
          <Link
            href="/"
            className="transition-colors hover:text-neutral-800" 
          >
            Home
          </Link>
        </li>
        <li
          className="relative"
          ref={wrapperRef}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-1 transition-colors hover:text-black"
          >
            Shop
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {open && (
            <ul
              role="menu"
              className="absolute left-0 top-full z-20 w-56 overflow-hidden rounded-md border border-black/10 bg-white py-1 shadow-lg"
            >
              {shopLinks.map((item) => (
                <li key={item.href} role="none">
                  <Link
                    href={item.href}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 text-sm text-neutral-800 transition-colors hover:bg-neutral-50 hover:text-[#f27e00]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
