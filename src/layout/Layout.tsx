import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis, type LenisRef } from "lenis/react";
import Preloader from "@/components/pre-loader.js";
import ProgressBar from "@/components/progress-bar.js";
import Header from "./Header.js";
import Main from "./Main.js";
import Home from "@/sections/Home.js";
import { ModeToggle } from "@/components/mode-toggle.js";
import Footer from "./Footer.js";

gsap.registerPlugin(ScrollTrigger);

const options = {
  autoRaf: false,
  duration: 2,
  lerp: 0.1,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
};

const Layout = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const lenisRef = useRef<LenisRef>(null);

  // Drive Lenis with GSAP's ticker
  useEffect(() => {
    const update = (time: number) => {
      // GSAP gives seconds; Lenis expects ms
      lenisRef.current?.lenis?.raf(time * 1000);
    };
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  // Wire Lenis for ScrollTrigger
  useEffect(() => {
    if (!isLoaded) return; // wait until content is in the DOM
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onLenisScroll);

    // Use the root scroller  (<ReactLenis root />)
    const scroller = document.documentElement;

    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        if (value !== undefined) {
          lenis.scrollTo(value);
        } else {
          // Current scroll
          return window.scrollY || window.pageYOffset || 0;
        }
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: scroller.style.transform ? "transform" : "fixed",
    });

    // Scroll Trigger uses root scroller by default
    ScrollTrigger.defaults({ scroller });

    // First refresh after everything is mounted
    requestAnimationFrame(() => ScrollTrigger.refresh());

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      lenis.off("scroll", onLenisScroll);
      window.removeEventListener("resize", onResize);
      // Reset defaults if needed
      // ScrollTrigger.defaults({ scroller: window });
    };
  }, [isLoaded]);

  return (
    <>
      {!isLoaded ? (
        <Preloader onComplete={() => setIsLoaded(true)} />
      ) : (
        <>
          <ReactLenis root options={options} ref={lenisRef} />
          <ProgressBar />
          <Header />
          <Main className="p-2 sm:p-3 md:p-4">
            <Home />
          </Main>
          <ModeToggle className="fixed bottom-5 right-5" />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
