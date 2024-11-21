import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Components/Layouts/Routes/Routes";
import Loader from "./Components/Shared/Loader/Loader";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider
          fallbackElement={<Loader></Loader>}
          router={router}
        ></RouterProvider>
        <Toaster position="top-center" />
      </div>
    </>
  );
}

export default App;
