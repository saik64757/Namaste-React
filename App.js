import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header/Header";
import Body from "./src/Components/Body/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/Components/About/About";
import Error from "./src/Components/Errorpage/Error";
import ContactusPage from "./src/Components/ContactusPage/ContactusPage";
import Footer from "./src/Components/Footer/Footer";
import RestrauntDetails from "./src/Components/RestrauntDetails/RestrauntDetails";
import ProfileofMe from "./src/Components/ProfileofMe/ProfileofMe";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", //if we put //profile here react router dom will consider this as //LocalHost:1234/profile
            element: <ProfileofMe />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <ContactusPage />,
      },
      {
        path: "/restraunt/:id",
        element: <RestrauntDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} errorElement={<Error />} />);
