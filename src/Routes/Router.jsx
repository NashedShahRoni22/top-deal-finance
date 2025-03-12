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
import BookingForm from "../Components/Shared/BookingForm";
import Services from "../Pages/Service/Services";
import ServiceDetails from "../Pages/Service/ServiceDetails";
import AdminAddBlog from "../Pages/Admin/AdminAddBlog";
import GetBlog from "../Pages/Admin/GetBlog";
import UpdateBlog from "../Pages/Admin/UpdateBlog";
import Blogs from "../Pages/Blog/Blogs";
import BlogDetails from "../Pages/Blog/BlogDetails";

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
      {
        path: "/book-appointment",
        element: <BookingForm />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service/:url",
        element: <ServiceDetails />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog/:url",
        element: <BlogDetails />,
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
        path: "/admin/update_service/:slug/:id",
        element: <UpdateService />,
      },
      {
        path: "/admin/contact_message",
        element: <ContactMessage />,
      },
      {
        path: "/admin/add_blog",
        element: <AdminAddBlog />,
      },
      {
        path: "/admin/manage_blog",
        element: <GetBlog />,
      },
      {
        path: "/admin/update_blog/:slug/:id",
        element: <UpdateBlog />,
      },
    ],
  },
  {
    path:"*",
    element:<NotFound/>
  }
]);
