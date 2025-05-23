"use client";

import { containerVariants } from "@/lib/animation";
import Event from "./Event";
import EventsForm from "./EventsForm";
import { EventType } from "@/types";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const events: EventType[] = [
  {
    title: "ISLAND meets HAUS Cup",
    date: "24.04. - 24.05.2025",
    description:
      "ISLAND meets HAUS - Fun Cup  -  Wir veranstalten einen Fun Cup für die Mannheimer Boulder Community!",
    link: "",
  },
  {
    title: "Kräftedreieck 2025",
    date: "28.04. - 14.06.2025",
    description:
      "Der jährliche Wettkampf im Zenit für Dreier-Teams mit Quali und Finale",
    link: "",
  },
  {
    title: "Eastercup 2025",
    date: "26.04.2025",
    description: "Boulder-Wettkampf mit Musik & Specials",
    link: "",
  },
];

const EventsSection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <main className="bg-cyan-200/10 pt-[120px]" id="events">
      <EventsForm />
      <motion.ul
        className="mb-[50px] flex flex-col gap-12 px-[20px] sm:px-[50px] md:mb-[80px] lg:px-[60px] 2xl:px-[160px]"
        ref={ref}
        animate={isInView ? "show" : "hidden"}
        variants={containerVariants(0.2)}
      >
        {events.map((event, index) => {
          return <Event key={index} {...event} />;
        })}
      </motion.ul>
    </main>
  );
};

export default EventsSection;
