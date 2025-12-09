import { Button } from "@/components/ui/button";
import hero from "../assets/images/hero.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      id="home"
      style={{
        background: `url(${hero}) center / cover no-repeat fixed`,
      }}
      className="hero-bg w-full md:min-h-dvh flex flex-col items-center justify-center gap-1 pt-10 md:pt-0 pb-10 px-5 relative"
    >
      <div className="absolute inset-0 bg-foreground/30 dark:bg-background/20" />
      <p className="hidden md:block absolute right-5 top-5 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 text-lg text-center md:text-start text-accent dark:text-accent-foreground font-light">
        Discover timeless designs and functional elegance that turns every room into a home. At Tru
        Interior, we bring your dream space.
      </p>
      <div className="z-1 w-full h-full max-w-7xl mx-auto flex flex-col items-center justify-between gap-1 font-semibold text-muted text-shadow-2xs">
        <h1 className="w-full text-start text-5xl sm:text-8xl xl:text-9xl uppercase tracking-tight text-accent dark:text-accent-foreground font-extralight">
          Modern <span className="text-foreground dark:text-background">Furniture</span>
        </h1>
        <h1 className="w-full text-end text-5xl sm:text-8xl xl:text-9xl uppercase tracking-tighter text-accent dark:text-accent-foreground font-extralight">
          & <span className="text-foreground dark:text-background">Design</span> Services
        </h1>

        <p className="mt-5 md:hidden w-full sm:w-3/4 md:w-1/2 text-lg text-center md:text-start text-accent dark:text-accent-foreground font-normal">
          Discover timeless designs and functional elegance that turns every room into a home. At
          Tru Interior, we bring your dream space.
        </p>

        <div className="md:my-5 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="hidden md:flex items-center justify-center gap-3">
            <Button asChild variant="secondary" className="rounded-full">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild className="rounded-full">
              <Link to="/services">Services</Link>
            </Button>
          </div>
        </div>
        <div className="my-5 md:my-0 z-1 w-full flex items-center justify-center gap-3 md:hidden">
          <Button asChild variant="secondary" className="rounded-full">
            <Link to="/contact">Get In Touch</Link>
          </Button>
          <Button asChild className="rounded-full">
            <Link to="/services">Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Home;
