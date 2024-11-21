import { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Api/Context/AuthProvider";

const CustomizationPlan = () => {
  const { user } = useContext(AuthContext);
  const [foodValue, setFoodValue] = useState(0);
  const [soundSystemValue, setSoundSystemValue] = useState(0);
  const [mediaSelection, setMediaSelection] = useState(null);
  const [decoration, setDecoration] = useState({
    moderate: false,
    premium: true,
    luxurious: false,
  });
  const [totalCost, setTotalCost] = useState(0);

  const customerEmail = user?.email;

  const handleFood = (e) => {
    const value = parseInt(e.target.value, 10);
    setFoodValue(value);
    // toast.success(`Food value set to ${value}`);
  };

  const handleSoundSystem = (e) => {
    const value = parseInt(e.target.value, 10);
    setSoundSystemValue(value);
    // toast.success(`Sound system value set to ${value}`);
  };

  const handleMediaSelection = (selection) => {
    setMediaSelection(selection);
    toast.success(`${selection} selected`);
  };

  const handleDecorationChange = (type) => {
    setDecoration((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
    toast.success(
      `${type.charAt(0).toUpperCase() + type.slice(1)} decoration ${
        decoration[type] ? "deselected" : "selected"
      }`
    );
  };

  const calculateTotalCost = (data) => {
    let total = 0;
    total += data.food.price;
    total += data.soundSystem.price;

    if (data.media) {
      switch (data.media) {
        case "Team Alpha":
          total += 110000;
          break;
        case "Team Beta":
          total += 240000;
          break;
        case "Team Charlie":
          total += 1420000;
          break;
        default:
          break;
      }
    }

    if (data.decoration.moderate) total += 150000;
    if (data.decoration.premium) total += 750000;
    if (data.decoration.luxurious) total += 1500000;

    return total;
  };

  useEffect(() => {
    const data = {
      food: {
        value: foodValue,
        price: foodValue * 250,
      },
      soundSystem: {
        value: soundSystemValue,
        price: soundSystemValue * 5000,
      },
      media: mediaSelection,
      decoration,
    };

    const total = calculateTotalCost(data);
    setTotalCost(total);
  }, [foodValue, soundSystemValue, mediaSelection, decoration]);

  const handleSubmit = async () => {
    let mediaPrice = 0;
    if (mediaSelection === "Team Alpha") mediaPrice = 110000;
    else if (mediaSelection === "Team Beta") mediaPrice = 240000;
    else if (mediaSelection === "Team Charlie") mediaPrice = 1420000;

    let decorationTitle = "";
    let decorationPrice = 0;
    if (decoration.moderate) {
      decorationTitle = "Moderate Decoration";
      decorationPrice = 150000;
    } else if (decoration.premium) {
      decorationTitle = "Premium Decoration";
      decorationPrice = 750000;
    } else if (decoration.luxurious) {
      decorationTitle = "Luxurious Decoration";
      decorationPrice = 1500000;
    }

    const data = {
      customerEmail,
      foodQuantity: foodValue,
      foodPrice: foodValue * 250,
      mediaTeam: mediaSelection,
      mediaPrice,
      soundSystemQuantity: soundSystemValue,
      soundSystemPrice: soundSystemValue * 5000,
      decorationTitle,
      decorationPrice,
    };

    console.log(data);
    fetch("https://event-guchai-backend.vercel.app/custom-package", {
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
          toast.success("Event added successfully");
          console.log(data);
        } else {
          toast.error("Event addition failed");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleClear = () => {
    setFoodValue(100);
    setSoundSystemValue(1);
    setMediaSelection(null);
    setDecoration({
      moderate: false,
      premium: false,
      luxurious: false,
    });
    toast.success("All selections cleared");
  };

  return (
    <div>
      {/* Food Area Start */}
      <div className="flex flex-col ml-5">
        <h1 className="text-3xl mb-5 font-bold">Food</h1>
        <fieldset className="space-y-1 sm:w-60 text-gray-100">
          <input
            type="range"
            className="w-full accent-cyan-400"
            min="100"
            max="2000"
            value={foodValue}
            onChange={handleFood}
          />
        </fieldset>
        <label htmlFor="foodValue" className="text-sm flex mb-3">
          Number of People
        </label>
        <input
          type="text"
          value={foodValue}
          className="input input-bordered w-full max-w-xs justify-items-start"
          id="foodValue"
          disabled
        />
        <label htmlFor="foodPrice" className="text-sm flex mt-3">
          Estimate price
        </label>
        <input
          type="text"
          value={foodValue * 250}
          className="input input-bordered w-full max-w-xs justify-items-start mt-2"
          id="foodPrice"
          disabled
        />
      </div>

      {/* Food Area End */}

      {/* Sound System Area Start */}
      <div className="flex flex-col ml-5">
        <h1 className="text-3xl mb-5 font-bold">Sound System</h1>
        <fieldset className="space-y-1 sm:w-60 text-gray-100">
          <input
            type="range"
            className="w-full accent-cyan-400"
            min="1"
            max="30"
            value={soundSystemValue}
            onChange={handleSoundSystem}
          />
        </fieldset>
        <label htmlFor="soundSystemValue" className="text-sm flex mb-3">
          Number of Pair
        </label>
        <input
          type="text"
          value={soundSystemValue}
          className="input input-bordered w-full max-w-xs justify-items-start"
          id="soundSystemValue"
          disabled
        />
        <label htmlFor="soundSystemPrice" className="text-sm flex mt-3">
          Estimate price
        </label>
        <input
          type="text"
          value={soundSystemValue * 5000}
          className="input input-bordered w-full max-w-xs justify-items-start mt-2"
          id="soundSystemPrice"
          disabled
        />
      </div>

      {/* Sound System Area End */}

      {/* Media Area Start */}
      <h1 className="text-3xl mb-5 font-bold">Media</h1>
      <div className="ml-10 grid grid-cols-2 mt-10">
        {["Alpha", "Beta", "Charlie"].map((team, index) => (
          <div key={index} className="card w-96 bg-white text-black shadow-xl mt-10">
            <div className="card-body">
              <h2 className="card-title">Team {team}</h2>
              <p>
                {team === "Alpha" && (
                  <>
                    <p>
                      1 Senior Photographer, 2 Junior Photographers, 1
                      Cinematographer{" "}
                    </p>
                    <p>Team Alpha Price : 110000</p>
                  </>
                )}
                {team === "Beta" && (
                  <>
                    {" "}
                    <p>
                      2 Senior Photographers, 3 Junior Photographers, 2
                      Cinematographers
                    </p>
                    <p>Team Beta Price : 240000</p>
                  </>
                )}
                {team === "Charlie" && (
                  <>
                    <p>
                      5 Senior Photographers, 7 Junior Photographers, 3 Senior
                      Cinematographers, 2 Junior Cinematographers{" "}
                    </p>
                    <p>Team Charlie Price : 1420000</p>
                  </>
                )}
              </p>
              <div className="card-actions justify-end">
                <button
                  className={`btn ${
                    mediaSelection === `Team ${team}`
                      ? "bg-green-500 text-white"
                      : "btn-primary"
                  }`}
                  onClick={() => handleMediaSelection(`Team ${team}`)}
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Media Area End */}

      {/* Decoration Area Start */}
      <div className="mt-10 ml-10">
        <h1 className="text-3xl mb-5 font-bold">Decoration</h1>
        {[
          "moderate Price : 110000",
          "premium Price : 240000",
          "luxurious Price : 1420000",
        ].map((type, index) => (
          <div key={index} className="flex mb-2">
            <p className="text-2xl ml-5">
              {index + 1}. {type.charAt(0).toUpperCase() + type.slice(1)}{" "}
              Decoration
            </p>
            {/* <p>
                {type === "moderate" &&
                  "Price : 110000"}
                {type === "premium" &&
                  "Price : 240000"}
                {type === "luxurious" &&
                  "Price : 1420000"}
              </p> */}

            <input
              type="checkbox"
              className={`checkbox ${
                decoration[type] ? "bg-green-500 border-green-500" : ""
              }`}
              checked={decoration[type]}
              onChange={() => handleDecorationChange(type)}
            />
          </div>
        ))}
      </div>
      {/* Decoration Area End */}

      <div className="mt-10 ml-10">
        <h1 className="text-3xl mb-5 font-bold">Total</h1>
        <input
          type="text"
          value={totalCost}
          className="input input-bordered w-full max-w-xs justify-items-start mt-2"
          id="totalCost"
          disabled
        />
        <button className="btn bg-cyan-300 mt-5" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btn btn-secondary mt-5 ml-3" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default CustomizationPlan;
