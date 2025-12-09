import { Button } from "@/components/ui/button";
import chooseusImg from "../assets/images/chooseus-img2.jpg";
import { Link } from "react-router-dom";

export default function ChooseUs() {
  const whys = [
    {
      title: "Expertise You Can Trust",
      description:
        "Our team brings years of experience, combining technical skill and creative deliver exceptional results.",
      link: "/services",
    },
    {
      title: "Attention to Detail",
      description:
        "From layouts to finishes, meticulously refine every aspect achieve perfection in design execution.",
      link: "/services",
    },
    {
      title: "Timely Project Delivery",
      description:
        "Our efficient workflow ensures projects are completed schedule compromising quality or creativity.",
      link: "/services",
    },
  ];

  return (
    <section id="choose-us" className="w-full max-w-7xl mx-auto my-3">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
        <div className="flex-1 flex flex-col text-end items-end justify-between gap-3">
          <p className="w-full text-start text-muted-foreground text-lg">/ Why Choose Us /</p>
          <h1 className="lg:w-3/4 text-4xl">
            Crafting Architectural <span className="text-muted-foreground">Excellence</span> With a{" "}
            <span className="text-muted-foreground">Passion</span> For{" "}
            <span className="text-muted-foreground">Innovation</span> and Timeless Design
          </h1>
          <p className="w-full md:w-3/4 text-center md:text-end text-muted-foreground">
            We transform everyday spaces into extraordinary environments by combining creativity,
            precision, and innovative design solutions.
          </p>
          <Button asChild className="rounded-none">
            <Link to="/contact">Contact Us</Link>
          </Button>

          <div className="lg:w-full xl:w-auto grid grid-cols-12 gap-3">
            {whys.map((why, index) => (
              <div
                className="relative col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6 px-3 py-5 bg-accent flex flex-col space-y-3"
                key={why.title}
              >
                <h6 className="text-xl text-start font-semibold pb-3 after:w-1/2 after:h-px before:w-1/5 before:h-1 heading-decorated">
                  {why.title}
                </h6>
                <p className="text-lg text-start font-extralight">{why.description}</p>
                <span
                  className="absolute right-5 bottom-3
                 text-muted-foreground text-6xl font-black"
                >
                  {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:hidden xl:block lg:w-1/2 overflow-hidden">
          <img src={chooseusImg} alt="about-img2" className="w-full" />
        </div>
      </div>
    </section>
  );
}
