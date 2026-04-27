"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/format";

type ProductActionsProps = {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
};

export default function ProductActions({ product }: ProductActionsProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const decrement = () => setQuantity((q) => Math.max(1, q - 1));
  const increment = () => setQuantity((q) => q + 1);

  const onAddToCart = () => {
    addItem(product, quantity);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1600);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="inline-flex w-fit items-center border border-neutral-300">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={decrement}
          className="flex h-11 w-11 items-center justify-center text-neutral-700 transition hover:bg-neutral-50"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <span
          aria-live="polite"
          className="flex h-11 w-12 items-center justify-center font-didot text-base text-neutral-800"
        >
          {quantity}
        </span>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={increment}
          className="flex h-11 w-11 items-center justify-center text-neutral-700 transition hover:bg-neutral-50"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
      <button
        type="button"
        onClick={onAddToCart}
        className="inline-flex w-full items-center justify-center border border-neutral-300 bg-white px-6 py-3 font-didot text-sm uppercase tracking-[0.2em] text-neutral-800 transition hover:bg-neutral-900 hover:text-white sm:w-auto sm:min-w-[280px]"
      >
        {justAdded
          ? "Added to Cart \u2713"
          : `Add to Cart \u00b7 ${formatPrice(product.price * quantity)}`}
      </button>
    </div>
  );
}
