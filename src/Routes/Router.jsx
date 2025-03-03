import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Layouts/Login";
import PrivateRoute from "../Components/Shared/PrivateRoute";
import Admin from "../Layouts/Admin";
import Appointment from "../Pages/Admin/Appointment";
import AdminAddService from "../Pages/Admin/AdminAddService";
import GetService from "../Pages/Admin/GetService";
import UpdateService from "../Pages/Admin/UpdateService";
import ContactMessage from "../Pages/Admin/ContactMessage";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import NotFound from "../Components/Shared/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <Admin />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/admin",
        element: <Appointment />,
      },
      {
        path: "/admin/add_service",
        element: <AdminAddService />,
      },
      {
        path: "/admin/manage_service",
        element: <GetService />,
      },
      {
        path: "/admin/update_service/:slug",
        element: <UpdateService />,
      },
      {
        path: "/admin/contact_message",
        element: <ContactMessage />,
      },
    ],
  },
  {
    path:"*",
    element:<NotFound/>
  }
]);
