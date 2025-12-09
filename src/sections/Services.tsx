import { Button } from "@/components/ui/button";
import { serviceHome, serviceInterior, serviceEngineering } from "@/constants/svgs";
import { Link } from "react-router-dom";
import ChooseUs from "@/sections/ChooseUs";

export default function Services() {
  const services = [
    {
      className: "bg-accent",
      svg: serviceHome,
      name: "Architecture Studio",
      description:
        "We at Tru Interiors design spaces and ambiances to best meet Clients' functional and reasonable standards.",
      link: "/services",
    },
    {
      className: "bg-secondary dark:bg-foreground dark:text-background shadow-xl",
      svg: serviceInterior,
      name: "Interior Design",
      description:
        "The interior of Tru Interiors dynamics of built spaces and reasonable standards to be greeting welcome.",
      link: "/services",
    },
    {
      className: "bg-accent",
      svg: serviceEngineering,
      name: "Engineering Works",
      description:
        "To covering and reasonable standards structure, mechanical, electrical and plumbing for (ΜΕΡ).",
      link: "/services",
    },
  ];
  return (
    <section
      id="services"
      className="w-full max-w-7xl mx-auto my-3 py-10 px-5 flex flex-col items-center justify-center gap-5"
    >
      <h5 className="w-full text-muted-foreground text-center text-lg">/ Our Services /</h5>

      <h6 className="w-full text-center text-4xl">
        Our Professional Services, <span className="text-muted-foreground">Your Dream Spaces</span>
      </h6>

      <p className="w-full md:w-1/2 text-center text-muted-foreground">
        We provide expert design and architecture services, transforming visions into functional,
        stylish, and inspiring dream spaces.
      </p>

      <div className="grid grid-cols-12 gap-5 my-10">
        {services.map(service => (
          <div
            className={`col-span-12 md:col-span-6 lg:col-span-4 px-3 py-5 md:p-4 lg:p-10 ${service.className} flex flex-col space-y-5`}
            key={service.name}
          >
            <div className="self-center p-3 bg-accent dark:bg-accent-foreground">{service.svg}</div>
            <h6 className="text-3xl text-center font-semibold">{service.name}</h6>
            <p className="text-lg text-center center-decorated pb-5 before:w-1/5 font-extralight">
              {service.description}
            </p>
            <Button asChild className="rounded-none mt-5">
              <Link to={service.link}>Read More</Link>
            </Button>
          </div>
        ))}
      </div>

      <ChooseUs />
    </section>
  );
}
