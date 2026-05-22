"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { searchCatalog } from "@/lib/products";
import { formatPrice } from "@/lib/format";

export default function SearchButton() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (panelRef.current?.contains(t) || buttonRef.current?.contains(t)) return;
      setOpen(false);
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

  const results = useMemo(() => searchCatalog(query), [query]);
  const close = () => setOpen(false);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-label="Search"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-transparent text-white transition hover:bg-white/10"
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
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Search the catalog"
          className="fixed inset-x-0 top-[129px] z-40 max-h-[calc(100svh-129px)] overflow-y-auto border-b border-rule bg-white shadow-lg"
        >
          <div className="mx-auto max-w-6xl px-6 py-6">
            <label className="sr-only" htmlFor="search-input">
              Search products and categories
            </label>
            <div className="flex items-center gap-3 border-b border-rule pb-3">
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
                className="text-ink-soft"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                id="search-input"
                ref={inputRef}
                type="search"
                placeholder="Search by category or product name..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-base text-ink placeholder:text-ink-soft focus:outline-none sm:text-lg"
              />
              <button
                type="button"
                onClick={close}
                aria-label="Close search"
                className="text-xs uppercase tracking-[0.2em] text-ink-soft transition hover:text-ink"
              >
                Close
              </button>
            </div>
            <div className="mt-6 grid gap-8 sm:grid-cols-[1fr_2fr]">
              <section>
                <h3 className="font-didot text-xs uppercase tracking-[0.2em] text-ink-soft">
                  Categories
                </h3>
                {results.categories.length === 0 ? (
                  <p className="mt-3 text-sm text-ink-soft">No matching categories.</p>
                ) : (
                  <ul className="mt-3 flex flex-col gap-2">
                    {results.categories.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={c.href}
                          onClick={close}
                          className="font-didot text-base text-ink transition hover:text-accent"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
              <section>
                <h3 className="font-didot text-xs uppercase tracking-[0.2em] text-ink-soft">
                  Products
                </h3>
                {results.products.length === 0 ? (
                  <p className="mt-3 text-sm text-ink-soft">No matching products.</p>
                ) : (
                  <ul className="mt-3 flex flex-col divide-y divide-rule">
                    {results.products.map((p) => (
                      <li key={p.id}>
                        <Link
                          href={p.href}
                          onClick={close}
                          className="grid grid-cols-[56px_1fr_auto] items-center gap-4 py-3 transition hover:bg-bone"
                        >
                          <div className="relative aspect-square w-14 bg-bone">
                            {p.image && (
                              <Image
                                src={p.image}
                                alt={p.name}
                                fill
                                sizes="56px"
                                className="object-contain p-1"
                              />
                            )}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-didot text-base text-ink">{p.name}</span>
                            <span className="text-xs uppercase tracking-[0.2em] text-ink-soft">
                              {p.categoryLabel} &middot; {p.size}
                            </span>
                          </div>
                          <span className="font-didot text-sm text-ink-muted">
                            {formatPrice(p.price)}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
