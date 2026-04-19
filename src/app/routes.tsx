import { createBrowserRouter, ScrollRestoration, Outlet } from "react-router";
import LandingPage from "./components/LandingPage";
import Network from "./components/Network";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollRestoration />
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        Component: LandingPage,
      },
      {
        path: "network",
        Component: Network,
      },
    ],
  },
]);
