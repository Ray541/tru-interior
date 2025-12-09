import aboutImg from "../assets/images/about-img3.jpg";

export default function AboutUs() {
  return (
    <section id="about-us" className="w-full max-w-7xl mx-auto my-3 py-10 px-5 flex flex-col gap-3">
      <p className="w-full text-muted-foreground text-lg">/ About Our Company /</p>
      <div className="w-full flex items-center justify-end lg:text-end text-4xl">
        <h1 className="lg:w-3/4">
          Crafting Architectural Excellence With a{" "}
          <span className="text-muted-foreground">Passion</span> For{" "}
          <span className="text-muted-foreground">Innovation</span> and Timeless Design
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 overflow-hidden">
          <img src={aboutImg} alt="about-img2" className="w-full" />
        </div>
        <div className="flex-1 flex flex-col items-start justify-between gap-3 lg:gap-7">
          <div className="w-full flex flex-col gap-3 items-start justify-center">
            <h5 className="w-full text-2xl md:text-3xl pb-3 after:w-3/4 after:h-px before:w-1/5 before:h-1 heading-decorated">
              Our Mission
            </h5>
            <p className="w-full xl:w-3/4">
              Our mission is to design spaces that not only serve functional needs but also inspire
              creativity, & connection.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3 items-start justify-center">
            <h5 className="w-full text-2xl md:text-3xl pb-3 after:w-3/4 after:h-px before:w-1/5 before:h-1 heading-decorated">
              Our Vision
            </h5>
            <p className="w-full xl:w-3/4">
              Our vision is to be a leading force in architecture and interior design, shaping the
              future of modern living.
            </p>
          </div>
          <p className="w-full xl:w-1/2 text-muted-foreground">
            We combine creativity, detail, and vision to craft exceptional spaces that inspire and
            elevate everyday living.
          </p>
          <ul className="w-full list-[square] list-inside">
            <li>Unique, creative to your vision and lifestyle.</li>
            <li>From concept to completion, handled with precision and care.</li>
            <li>Bespoke pieces that enhance your space’s character.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
