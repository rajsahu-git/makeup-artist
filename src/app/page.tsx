import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Gallery />
      <Services />
      <Testimonials />
      <Booking />
    </main>
  );
}
