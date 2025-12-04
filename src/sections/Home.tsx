import { Button } from "@/components/ui/button";
import hero from "../assets/images/hero.jpg";

function Home() {
  return (
    <section
      id="home"
      className="w-full md:min-h-dvh flex flex-col items-center justify-center gap-5"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between gap-1 font-semibold">
        <h1 className="w-full text-start text-7xl sm:text-8xl xl:text-9xl tracking-tight pt-15 sm:pt-10 lg:pt-20">
          Modern <span className="text-muted-foreground font-bold">Furniture</span>
        </h1>
        <h1 className="w-full text-end text-7xl sm:text-8xl xl:text-9xl tracking-tighter">
          & <span className="text-muted-foreground font-bold">Design</span> Services
        </h1>

        <div className="block md:hidden w-full">
          <img src={hero} alt="Hero" className="w-full h-full" />
        </div>

        <div className="mt-3 mb-5 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 text-center md:text-start">
            Discover timeless designs and functional elegance that turns every room into a home. At
            Tru Interior, we bring your dream space.
          </p>

          <div className="hidden md:flex items-center justify-center gap-3">
            <Button asChild variant="secondary" className="rounded-full">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button asChild className="rounded-full">
              <a href="#services">Services</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-full">
        <img src={hero} alt="Hero" className="w-full h-full" />
      </div>
      <div className="w-full flex items-center justify-center gap-3 md:hidden">
        <Button asChild variant="secondary" className="rounded-full">
          <a href="#contact">Get In Touch</a>
        </Button>
        <Button asChild className="rounded-full">
          <a href="#services">Services</a>
        </Button>
      </div>
    </section>
  );
}

export default Home;
