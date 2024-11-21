import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Pages/Home/Home";
import ContactUs from "../../Pages/ContactUS/ContactUs";
import EventMainPage from "../../Pages/Event/EventMainPage";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import DashboardLayouts from "../DashboardLayouts/DashboardLayouts";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import AllUsers from "../../Dashboard/AllUsers";
import ALlBookings from "../../Dashboard/CustomerBookings/AllBookings";
import AdminRoute from "./AdminRoute/AdminRoute";
import SoundSystem from "../../Dashboard/SoundSystem/SoundSystem";
import PendingWorkSound from "../../Dashboard/SoundSystem/PendingWorkSound";
import CustomerBooking from "../../Dashboard/CustomerBookings/CustomerBooking";
import Decorator from "../../Dashboard/Decorator/Decorator";
import PendingWorkDecorator from "../../Dashboard/Decorator/PendingWorkDecorator";
import Catering from "../../Dashboard/Catering/Catering";
import PendingWorkCatering from "../../Dashboard/Catering/PendingWorkCatering";
import Media from "../../Dashboard/Media/Media";
import PendingWorkMedia from "../../Dashboard/Media/PendingWorkMedia";
import UpdateEvent from "../../Pages/Event/UpdateEvent";
import Profile from "../../Dashboard/Profile/Profile";
import CustomizeEvent from "../../Dashboard/CustomizationPlan/CustomizationPlan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/events",
        element: <EventMainPage></EventMainPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayouts></DashboardLayouts>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/customize-plan",
        element: (
          <AdminRoute>
            <CustomizeEvent></CustomizeEvent>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/booking",
        element: (
          <AdminRoute>
            <ALlBookings />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/update-event",
        element: (
          <AdminRoute>
            <UpdateEvent></UpdateEvent>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/sound-system",
        element: <SoundSystem />,
      },
      {
        path: "/dashboard/pending-works-sound",
        element: <PendingWorkSound />,
      },
      {
        path: "/dashboard/decorator",
        element: <Decorator />,
      },
      {
        path: "/dashboard/pending-works-decorator",
        element: <PendingWorkDecorator />,
      },
      {
        path: "/dashboard/catering",
        element: <Catering />,
      },
      {
        path: "/dashboard/pending-works-media",
        element: <PendingWorkMedia />,
      },
      {
        path: "/dashboard/media",
        element: <Media />,
      },
      {
        path: "/dashboard/pending-works-catering",
        element: <PendingWorkCatering />,
      },
      {
        path: "/dashboard/my-bookings",
        element: <CustomerBooking />,
      },
    ],
  },
]);
export default router;
