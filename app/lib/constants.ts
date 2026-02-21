/**
 * Theme – modern clean: slate + teal
 */
export const THEME = {
  darkBlue: "#0f172a",
  darkBlueLight: "#1e293b",
  darkBlueDark: "#020617",
  white: "#ffffff",
  green: "#0d9488",
  greenLight: "#2dd4bf",
  grayLight: "#f8fafc",
  grayText: "#64748b",
  black: "#0f172a",
} as const;

export const ORDER_FORM_ID = "order";

export const CTA_LABEL = "অর্ডার করতে চাই";

export const CONTACT_PHONES = ["01500000000", "01540000000"] as const;

export const PRODUCTS = [
  { id: "y100", name: "Y100 Smartwatch with 11 Straps", priceBdt: 2490 },
  { id: "m8", name: "M8 Pro Smart Band", priceBdt: 1890 },
  { id: "x5", name: "X5 Ultra Smartwatch", priceBdt: 2990 },
  { id: "band2", name: "Smart Band 2 with 6 Straps", priceBdt: 1490 },
] as const;

export type ProductId = (typeof PRODUCTS)[number]["id"];

export const PRODUCT_NAME = PRODUCTS[0].name;
export const ORDER_UNIT_PRICE_BDT = PRODUCTS[0].priceBdt;
export const REGULAR_PRICE_BDT = 3000;

export const SHIPPING_INSIDE_DHAKA_BDT = 60;
export const SHIPPING_OUTSIDE_DHAKA_BDT = 90;
