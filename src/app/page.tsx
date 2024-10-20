import Card from "./components/Card";
import ScrollComponent from "./components/ScrollTrigger";
import AboutComponent from "./components/AboutComponent";
import HeroComponent from "./components/Hero";
import AboutVideo from "./components/AboutVideo";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <ScrollComponent />
      <AboutComponent />
      <Card />
      <AboutVideo />
      <TestimonialsSection />
      <Footer />
      
      </div>
  );
}
