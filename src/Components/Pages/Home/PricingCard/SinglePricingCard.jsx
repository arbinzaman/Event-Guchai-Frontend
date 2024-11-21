import { useContext,  } from "react";
import { AuthContext } from "../../../../Api/Context/AuthProvider";
import toast from "react-hot-toast";
import { SlCalender } from "react-icons/sl";
import { MdDelete } from "react-icons/md";
import useUserRoles from "../../../../Hooks/UseUserRole";

// eslint-disable-next-line react/prop-types
const SinglePricingCard = ({ event }) => {
  // const [displayUser, setDisplayUser] = useState();
  const { user } = useContext(AuthContext);
  const customerEmail = user?.email;
  const roles = useUserRoles(user?.email);
  console.log(roles.roles);
  const {
    eventID,
    eventTitle,
    price,
    shortDescription,
    food,
    people,
    sound_system,
    decoration,
    media,
  } = event;
  // console.log(event);

  const handleBookEvent = () => {
    if (user) {
      const bookEvent = {
        customerEmail,
        eventTitle,
        price,
        food,
        people,
        sound_system,
        decoration,
        media,
      };
      // console.log(bookEvent);

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
          console.log(data);
          if (data.insertId) {
            toast.success("Event booked successful");
            // window.location.reload();
            console.log(data);
          } else {
            toast.error("Event book failed");
          }
        })
        .catch((err) => console.log(err));
    } else {
      toast.error("Please login to book event");
    }
  };

  // handleDeleteEvent
  const handleDeleteEvent = (eventID) => {
    console.log(eventID);
    fetch(`https://event-guchai-backend.vercel.app/events/${eventID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "event deleted successful") {
          toast.error("event deleted successful");
          window.location.reload();
          // const remainingUsers = displayUser.filter(
          //   (ent) => ent.eventID !== eventID
          // );
          // setDisplayUser(remainingUsers);
        }
      });
  };

  return (
    <div>
      <div className="card w-96 bg-white text-black shadow-xl">
        <div className="card-body">
          <div className="space-y-2">
            <h2 className="card-title text-3xl">{eventTitle}</h2>
            <p className="text-5xl mb-5 ">{price}</p>
            <p className="mt-5  leading-relaxed text-black-400">
              {shortDescription}
            </p>
            <ul className="flex-1 mb-6 text-black-400">
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
                <span>{food}</span>
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
                <span>{people}</span>
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
                <span>{sound_system}</span>
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
                <span>{decoration}</span>
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
                <span>{media}</span>
              </li>
            </ul>
            <div className="card-actions justify-end">
             {
                roles.roles == "user" && (
                  <button
                  onClick={handleBookEvent}
                  className="btn-xs text-lg btn-primary"
                >
                  <SlCalender className="text-2xl " />
                </button>
                )
             }
              <button>
                {" "}
                {roles.roles == "admin" && (
                  <button
                    onClick={() => handleDeleteEvent(eventID)}
                    className=" btn-xs text-lg btn-danger"
                  >
                    <MdDelete className="text-2xl " />
                  </button>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePricingCard;
