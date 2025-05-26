"use client";

import Event from "./Event";
import EventsForm from "./EventsForm";
import { EventType } from "@/types";
import { motion } from "framer-motion";

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
  return (
    <main
      className="bg-cyan-200/10 px-[20px] pt-[120px] sm:px-[50px] lg:px-[60px] 2xl:px-[160px]"
      id="events"
    >
      <EventsForm />
      <h5 className="my-text-stroke relative mb-8 w-fit text-4xl font-extrabold text-cyan-900 after:absolute after:top-[118%] after:left-10 after:h-[5px] after:w-[45%] after:translate-x-[-50%] after:rounded-2xl after:border-[1px] after:border-amber-400 after:bg-cyan-900 after:content-['']">
        Results:
      </h5>
      <motion.ul className="mb-[50px] flex flex-col gap-12 md:mb-[80px]">
        {events.map((event, index) => {
          return <Event key={index} {...event} />;
        })}
      </motion.ul>
    </main>
  );
};

export default EventsSection;
