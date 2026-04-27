export type ProductCategorySlug = "hair-care" | "face-care" | "immunity-energy";

export type Category = {
  slug: ProductCategorySlug;
  label: string;
  href: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategorySlug;
  categoryLabel: string;
  price: number;
  size: string;
  image?: string;
  href: string;
};

export const categories: Category[] = [
  { slug: "hair-care", label: "Hair Care Habits", href: "/shop/hair-care" },
  { slug: "face-care", label: "Face Care Habits", href: "/shop/face-care" },
  {
    slug: "immunity-energy",
    label: "Immunity & Energy",
    href: "/shop/immunity-energy",
  },
];

const categoryLabel = (slug: ProductCategorySlug): string =>
  categories.find((c) => c.slug === slug)?.label ?? slug;

const product = (
  category: ProductCategorySlug,
  slug: string,
  name: string,
  price: number,
  size: string,
  image?: string,
): Product => ({
  id: slug,
  slug,
  name,
  category,
  categoryLabel: categoryLabel(category),
  price,
  size,
  image,
  href: `/shop/${category}/${slug}`,
});

export const products: Product[] = [
  product("face-care", "mukhkantivardhak-facepack", "Mukhkantivardhak Facepack", 750, "50gms"),
  product("face-care", "mukhkantivardhak-ubtan", "Mukhkantivardhak Ubtan", 750, "50gms"),
  product("face-care", "tarunyapidikahar-lepa", "Tarunyapidikahar Lepa", 750, "50gms"),
  product("face-care", "kumkumadi-oil", "Kumkumadi Oil", 850, "10ml"),
  product("hair-care", "waves-curls-hair-oil", "Waves & Curls Hair Oil", 700, "100ml", "/products/waves-curls-oil.png"),
  product("hair-care", "waves-curls-hair-pack", "Waves & Curls Hair Pack", 750, "50gms"),
  product("hair-care", "nilotpaladi-hair-pack", "Nilotpaladi Hair Pack", 750, "50gms"),
  product("immunity-energy", "musli-pak", "Musli Pak", 2200, "500gms"),
  product("immunity-energy", "supari-pak", "Supari Pak", 1200, "500gms"),
];

export type SearchResults = {
  categories: Category[];
  products: Product[];
};

export function searchCatalog(query: string): SearchResults {
  const q = query.trim().toLowerCase();
  if (!q) {
    return { categories, products };
  }
  const matchedCategories = categories.filter((c) =>
    c.label.toLowerCase().includes(q),
  );
  const matchedProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q),
  );
  return { categories: matchedCategories, products: matchedProducts };
}
