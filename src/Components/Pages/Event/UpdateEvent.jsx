import toast from "react-hot-toast";

const UpdateEvent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const eventTitle = form.eventTitle.value;
    const price = form.price.value;
    const shortDescription = form.shortDescription.value;
    const food = form.food.value;
    const people = form.people.value;
    const media = form.media.value;
    const sound_system = form.sound_system.value;
    const decoration = form.decoration.value;
    const img = form.imgURl.value;

    const data = {
      eventTitle,
      price,
      shortDescription,
      food,
      people,
      sound_system,
      decoration,
      media,
      img,
    };
    console.log(data);

    fetch("https://event-guchai-backend.vercel.app/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertId) {
          toast.success("event added success");
          console.log(data);
        } else {
          toast.error("event added failed");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <section className="p-6 bg-white text-black">
        <form
          action=""
          onSubmit={handleSubmit}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-lg bg-white text-black  ">
            <div className="text-4xl space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Update Event</p>
              {/* <p className="text-xs">
                Stay informed with the latest updates! Join us as we unveil
                exciting new developments and enhancements to our event.
                Don&apos;t miss out on the opportunity to be part of something
                special. Your presence matters!
              </p> */}
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="eventTitle" className="text-sm">
                  eventTitle
                </label>
                <input
                  id="eventTitle"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 border bg-white"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="price" className="text-sm">
                  price
                </label>
                <input
                  id="price"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 border bg-white"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="shortDescription" className="text-sm">
                  shortDescription
                </label>
                <input
                  id="shortDescription"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 border bg-white"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="food" className="text-sm">
                  food
                </label>
                <input
                  id="food"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 border bg-white"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="people" className="text-sm">
                  people
                </label>
                <input
                  id="people"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 border bg-white"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="sound_system" className="text-sm">
                  sound_system
                </label>
                <input
                  id="sound_system"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 border bg-white"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="decoration" className="text-sm">
                  decoration
                </label>
                <input
                  id="decoration"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 border bg-white"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="media" className="text-sm">
                  media
                </label>
                <input
                  id="media"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 border bg-white"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="imgURl" className="text-sm">
                  imgURl
                </label>
                <input
                  id="imgURl"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 border bg-white"
                />
              </div>
            </div>
          </fieldset>
          <button type="submit" className="btn btn-ghost bg-cyan-200">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default UpdateEvent;
