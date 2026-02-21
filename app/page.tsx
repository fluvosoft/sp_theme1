import {
  Hero,
  ProductDescription,
  Features,
  ProductGrid,
  RefundPolicy,
  Contact,
  OrderForm,
  Footer,
} from "./components/landing";
import { THEME } from "./lib/constants";

export default function Home() {
  return (
    <div
      className="min-h-screen font-body"
      style={{ backgroundColor: THEME.darkBlue }}
    >
      <Hero />
      <ProductDescription />
      <Features />
      <ProductGrid />
      <RefundPolicy />
      <Contact />
      <OrderForm />
      <Footer />
    </div>
  );
}
