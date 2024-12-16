import AboutCard from "./components/AboutCard";
import ScrollComponent from "./components/ScrollTrigger";
import AboutComponent from "./components/AboutComponent";
import HeroComponent from "./components/Hero";
import AboutVideo from "./components/AboutVideo";
// import TestimonialsSection from "./components/TestimonialsSection";
// import Footer from "./components/Footer";
import BlogSlider from "./components/BlogCard";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm"

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <ScrollComponent />
      <AboutComponent />
      <AboutCard />
      <AboutVideo />
      <Services />
      <BlogSlider />
      <ContactForm />
      
      </div>
  );
}
