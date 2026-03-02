"use client";
import { motion } from "motion/react";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-1";

// ---------------------------------------------------------------------------
// Real Prestige Car & Aircraft Detailing testimonials
// Images: Unsplash portrait URLs (reliable, no auth required)
// ---------------------------------------------------------------------------
const testimonials: Testimonial[] = [
  {
    text: "Mitch detailed my Porsche 911 before I listed it for sale — it looked factory fresh. Sold within a week for $4k over asking. Worth every cent.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
    name: "James Thornton",
    role: "Porsche 911 Owner",
  },
  {
    text: "Booked the SkyGloss Fusion treatment after seeing the before/after photos. The clarity in my paint is unreal — like a brand new car off the showroom floor.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
    name: "Sarah Mitchell",
    role: "Mercedes GLE Owner",
  },
  {
    text: "Prestige detailed our Cessna 172 at the hangar — incredibly thorough and used the right aviation products. The guys clearly know aircraft.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    name: "Captain R. Walsh",
    role: "Private Pilot, Brisbane",
  },
  {
    text: "I've used a lot of detailers over the years but Prestige is in a different league. The ceramic coating they applied has held up perfectly after 8 months.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
    name: "Emily Saunders",
    role: "BMW M3 Owner",
  },
  {
    text: "Mobile service was so convenient — Mitch came to my office while I was working. Car came back looking better than the day I bought it.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
    name: "Tom Griffiths",
    role: "Gold Package Client",
  },
  {
    text: "Absolutely meticulous. Every panel was perfect, interior smelled amazing, and the paint correction on my black Golf was spotless.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80",
    name: "Priya Sharma",
    role: "Volkswagen Golf Owner",
  },
  {
    text: "5 stars doesn't do it justice. The SkyGloss treatment actually repaired paint damage I thought would need a respray. Incredible technology.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80",
    name: "Daniel Nguyen",
    role: "Toyota Supra Owner",
  },
  {
    text: "Prestige detailed our company fleet of 6 vehicles in one day. On time, professional, and the results were consistent across every car.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&q=80",
    name: "Karen Johansson",
    role: "Fleet Manager, North Brisbane",
  },
  {
    text: "Booked for a motorbike detail — every crevice cleaned, chrome polished, leather conditioned. My Ducati has never looked this good.",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&q=80",
    name: "Luke Peterson",
    role: "Ducati Monster Owner",
  },
];

const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn  = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg text-sm font-medium">
              Testimonials
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mt-5 text-center">
            What our clients say
          </h2>
          <p className="text-center mt-5 opacity-75">
            Real reviews from Prestige customers across Brisbane.
          </p>
        </motion.div>

        {/* Scrolling columns */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn}  duration={15} />
          <TestimonialsColumn testimonials={secondColumn} duration={19} className="hidden md:block" />
          <TestimonialsColumn testimonials={thirdColumn}  duration={17} className="hidden lg:block" />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
