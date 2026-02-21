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

export default function Home() {
  return (
    <div className="min-h-screen font-body bg-white">
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
