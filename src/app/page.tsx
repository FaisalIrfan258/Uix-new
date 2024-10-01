import Card from "./components/Card";
import ScrollComponent from "./components/ScrollTrigger";
import AboutComponent from "./components/AboutComponent";
import HeroComponent from "./components/Hero";


export default function Home() {
  return (
    <div>
      <HeroComponent />
      <ScrollComponent />
      <AboutComponent />
      <Card />

      </div>
  );
}