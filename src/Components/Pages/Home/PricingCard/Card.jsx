import { useQuery } from "@tanstack/react-query";
import SinglePricingCard from "./SinglePricingCard";

const Card = () => {
  const url = `https://event-guchai-backend.vercel.app/events`;
  const { data: events = [] } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <>
      <div className="max-w-2xl mx-auto mb-16 text-center">
        <span className="font-bold tracking-wider uppercase text-cyan-300">
          Pricing
        </span>
        <h2 className="text-4xl font-bold lg:text-5xl text-black">
          Choose your best plan
        </h2>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 text-justify">
        {events.map((event) => (
          <SinglePricingCard
            key={event.eventsID}
            event={event}
          ></SinglePricingCard>
        ))}
      </div>
    </>
  );
};

export default Card;
