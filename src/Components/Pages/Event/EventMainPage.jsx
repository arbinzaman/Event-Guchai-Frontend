import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import toast from "react-hot-toast";
import { SlCalender } from "react-icons/sl";
import { AuthContext } from "../../../Api/Context/AuthProvider";
import useUserRoles from "../../../Hooks/UseUserRole";

const EventMainPage = () => {
  const { user } = useContext(AuthContext);
  const customerEmail = user?.email;
  const roles = useUserRoles(user?.email);

  const handleBookEvent = (event) => {
    if (user) {
      const bookEvent = {
        customerEmail,
        eventTitle: event.eventTitle,
        price: event.price,
        food: event.food,
        people: event.people,
        sound_system: event.sound_system,
        decoration: event.decoration,
        media: event.media,
      };

      fetch("https://event-guchai-backend.vercel.app/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookEvent),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          if (data.insertId) {
            toast.success("Event booked successfully");
          } else {
            toast.error("Event booking failed");
          }
        })
        .catch((err) => console.log(err));
    } else {
      toast.error("Please login to book an event");
    }
  };

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
    <div className="mb-10 mt-10 bg-white text-black">
      <section className="p-4 lg:p-8 text-black-100">
        <div className="container mx-auto space-y-12">
          {events.map((event, index) => (
            <div
              key={event.eventID}
              className={`flex flex-col overflow-hidden rounded-md lg:flex-row ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              } shadow-2xl`}
            >
              <img
                src={event.img}
                alt={event.eventTitle}
                className="h-96 mt-10 aspect-video"
              />
              <div className="card bg-white text-black">
                <div className="card-body">
                  <div className="space-y-2">
                    <h2 className="font-bold text-5xl">{event.eventTitle}</h2>
                    <p className="text-5xl mb-5">{event.price}</p>
                    <p className="mt-5 leading-relaxed text-black-400">
                      {event.shortDescription}
                    </p>
                    <ul className="flex-1 mb-6 text-black-400 text-justify">
                      <li className="flex mb-2 mt-5 space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="flex-shrink-0 w-6 h-6 text-cyan-300"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>{event.food}</span>
                      </li>
                      <li className="flex mb-2 space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="flex-shrink-0 w-6 h-6 text-cyan-300"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>{event.people}</span>
                      </li>
                      <li className="flex mb-2 space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="flex-shrink-0 w-6 h-6 text-cyan-300"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>{event.sound_system}</span>
                      </li>
                      <li className="flex mb-2 space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="flex-shrink-0 w-6 h-6 text-cyan-300"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>{event.decoration}</span>
                      </li>
                      <li className="flex mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="flex-shrink-0 w-6 h-6 text-cyan-300"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>{event.media}</span>
                      </li>
                    </ul>
                    <div className="card-actions justify-end">
                      {roles.roles == "user" && (
                        <>
                          <button
                            className="btn bg-cyan-400"
                            onClick={() => handleBookEvent(event)}
                          >
                            <SlCalender className="text-xl" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventMainPage;
