import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ImpactSection } from "@/components/solution-section";
import { PartnersSection } from "@/components/partners-section";
import { ProductsSection } from "@/components/products-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
      <HeroSection />
      <ProductsSection />
      <ImpactSection />
      <PartnersSection />
      <TestimonialsSection />
      {/* <Footer /> */}
    </div>
  );
}
