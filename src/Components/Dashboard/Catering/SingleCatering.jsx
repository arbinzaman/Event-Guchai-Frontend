import { useContext, useState } from "react";
import { MdOutlinePendingActions } from "react-icons/md";
import { AuthContext } from "../../../Api/Context/AuthProvider";
import toast from "react-hot-toast";

const SingleSoundSystem = ({ booking }) => {
  const { user } = useContext(AuthContext);
  const customerEmail = user?.email;
  const { food, bookingID } = booking;
  // console.log(booking);
  const description = food;

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const status = "not done";

  const handleBookSoundSystem = () => {
    const bookSoundSystem = {
      customerEmail,
      description,
      status,
    };
    console.log(bookSoundSystem);

    fetch("https://event-guchai-backend.vercel.app/catering", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookSoundSystem),
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
          toast.success("sound system booked successful");
          setIsButtonDisabled(true);
          window.location.reload();
          console.log(data);
        } else {
          toast.error("sound system book failed");
        }
      })
      .catch((err) => console.log(err));

    fetch(`https://event-guchai-backend.vercel.app/bookings/catering/${bookingID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Sound_system data deleted successful") {
          toast.error("Sound_system data deleted successful");
          window.location.reload();
        } else {
          toast.error("Sound_system data delete failed");
          window.location.reload();
        }
      });
  };

  return (
    <div>
      <div className="card mt-5 w-96 bg-white text-black shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{food}</h2>
          <div className="card-actions justify-end">
            <button
              className="btn btn-xs text-xl "
              onClick={() => handleBookSoundSystem(bookingID)}
              disabled={isButtonDisabled}
            >
              <MdOutlinePendingActions />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSoundSystem;
