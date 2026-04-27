"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/format";

export default function CartView() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-2xl border border-neutral-200 px-8 py-16 text-center">
          <p className="font-didot text-xl text-neutral-700">
            Your cart is empty.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex items-center justify-center bg-[#f27e00] px-8 py-3 font-didot text-base text-white transition hover:bg-[#d96f00]"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 pb-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]">
        <ul className="flex flex-col divide-y divide-neutral-200 border-y border-neutral-200">
          {items.map((item) => (
            <li
              key={item.id}
              className="grid grid-cols-[96px_1fr_auto] items-center gap-6 py-6 sm:grid-cols-[120px_1fr_auto]"
            >
              <div className="relative aspect-square w-full bg-[#f5f5f3]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="120px"
                  className="object-contain p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-didot text-lg text-neutral-800 sm:text-xl">
                  {item.name}
                </h3>
                <p className="font-didot text-sm text-neutral-600">
                  {formatPrice(item.price)} each
                </p>
                <div className="mt-2 inline-flex w-fit items-center border border-neutral-300">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="flex h-9 w-9 items-center justify-center text-neutral-700 transition hover:bg-neutral-50"
                  >
                    &minus;
                  </button>
                  <span className="flex h-9 w-10 items-center justify-center font-didot text-sm text-neutral-800">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="flex h-9 w-9 items-center justify-center text-neutral-700 transition hover:bg-neutral-50"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="mt-1 self-start text-xs uppercase tracking-[0.2em] text-neutral-500 transition hover:text-neutral-800"
                >
                  Remove
                </button>
              </div>
              <p className="font-didot text-lg text-neutral-800 sm:text-xl">
                {formatPrice(item.price * item.quantity)}
              </p>
            </li>
          ))}
        </ul>
        <aside className="flex h-fit flex-col gap-5 border border-neutral-200 p-6">
          <h3 className="font-didot text-sm uppercase tracking-[0.2em] text-neutral-800">
            Order Summary
          </h3>
          <div className="flex items-center justify-between font-didot text-base text-neutral-700">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="text-xs text-neutral-500">
            Shipping and taxes calculated at checkout.
          </p>
          <button
            type="button"
            className="mt-2 inline-flex items-center justify-center bg-[#f27e00] px-6 py-3 font-didot text-sm uppercase tracking-[0.2em] text-white transition hover:bg-[#d96f00]"
          >
            Checkout
          </button>
          <Link
            href="/shop"
            className="text-center text-xs uppercase tracking-[0.2em] text-neutral-600 transition hover:text-neutral-900"
          >
            Continue Shopping
          </Link>
        </aside>
      </div>
    </section>
  );
}
