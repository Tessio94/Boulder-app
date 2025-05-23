import Event from "./Event";

type eventType = {
  title: string;
  date: string;
  description: string;
};

const events: eventType[] = [
  {
    title: "ISLAND meets HAUS Cup",
    date: "24.04. - 24.05.2025",
    description:
      "ISLAND meets HAUS - Fun Cup  -  Wir veranstalten einen Fun Cup für die Mannheimer Boulder Community!",
  },
  {
    title: "Kräftedreieck 2025",
    date: "28.04. - 14.06.2025",
    description:
      "Der jährliche Wettkampf im Zenit für Dreier-Teams mit Quali und Finale",
  },
  {
    title: "Eastercup 2025",
    date: "26.04.2025",
    description: "Boulder-Wettkampf mit Musik & Specials",
  },
];

const EventsSection = () => {
  return (
    <main className="bg-cyan-200/10 pt-[120px]">
      <ul
        className="mb-[50px] flex flex-col gap-12 px-[20px] sm:px-[50px] md:mb-[80px] lg:px-[60px] 2xl:px-[160px]"
        id="events"
      >
        {events.map((event, index) => {
          return <Event key={index} {...event} />;
        })}
      </ul>
    </main>
  );
};

export default EventsSection;
