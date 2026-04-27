export function formatPrice(rupees: number): string {
  return `₹${rupees.toLocaleString("en-IN")}`;
}
