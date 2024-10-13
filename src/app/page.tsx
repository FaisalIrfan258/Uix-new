import Card from "./components/Card";
import ScrollComponent from "./components/ScrollTrigger";
import AboutComponent from "./components/AboutComponent";
import HeroComponent from "./components/Hero";
import AboutVideo from "./components/AboutVideo";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <ScrollComponent />
      <AboutComponent />
      <Card />
      <AboutVideo />
      
      </div>
  );
}
