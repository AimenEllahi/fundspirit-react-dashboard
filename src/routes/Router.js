import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const Campaigns = lazy(() => import("../views/ui/Campaigns.js"));
const Organization = lazy(() => import("../views/ui/Organization.js"));
const CreateCampaign = lazy(() => import("../views/ui/CreateCampaign.js"));
const OrgRequests = lazy(() => import("../views/ui/OrgRequests.js"));
// const Packages = lazy(() => import("../views/ui/Packages.js"));

const Users = lazy(() => import("../components/dashboard/UserTable.js"));

// const SignIn = lazy(() => import("../components/Auth/SignIn"));

const user = localStorage.getItem("TourismSecurityTokenAdmin");

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to='/starter' /> },
      {
        path: "/starter",
        exact: true,
        // element: user ? <Starter /> : <Navigate to='/signin' />,
        element: <Starter />,
      },

      // {
      //   path: "/packages",
      //   exact: true,
      //   // element: user ? <Packages /> : <Navigate to='/signin' />,
      //   element: <Packages />,
      // },
      {
        path: "/campaigns",
        exact: true,
        // element: user ? <Campaigns /> : <Navigate to='/signin' />,
        element: <Campaigns />,
      },
      {
        path: "/npos",
        exact: true,
        // element: user ? <Organization /> : <Navigate to='/signin' />,
        element: <Organization />,
      },
      {
        path: "/npos/request",
        exact: true,
        // element: user ? <Organization /> : <Navigate to='/signin' />,
        element: <OrgRequests />,
      },
      {
        path: "/campaign/create",
        exact: true,
        // element: user ? <CreateCampaign /> : <Navigate to='/signin' />,
        element: <CreateCampaign />,
      },
      {
        path: "/about",
        exact: true,
        // element: user ? <Users /> : <Navigate to='/signin' />,
        element: <Users />,
      },
    ],
  },
  // { path: "/signin", exact: true, element: user ? <Starter /> : <SignIn /> },
];

export default ThemeRoutes;
