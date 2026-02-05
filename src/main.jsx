import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Manlyout from "./AllComponent/Manlyout";
import HOME from "./AllComponent/HOME";
import ERROR from "./AllComponent/ERROR";
import { ThemeProvider } from "./AllComponent/ThemeContext";

import Reviews from './AllComponent/Reviews';
import AddReviews from './AllComponent/AddReviews';
import MyReviews from './AllComponent/MyReviews';
import GameWatchList from './AllComponent/GameWatchList';
import Login from './AllComponent/AutSection/login';
import SignUp from './AllComponent/AutSection/Signup';
import ReviewDetails from "./AllComponent/ReviewDetails ";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./AllComponent/AutSection/AuthoProvider";
import PrivateRoute from "./AllComponent/AutSection/PrivateRoute";
import UpdateReview from "./AllComponent/UpdateReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Manlyout />,
    errorElement: <ERROR />,
    children: [
      { path: "/", element: <HOME /> },
      { path: "home", element: <HOME /> },
      {
        path: "reviews",
        element:
          <PrivateRoute>
            element: <Reviews />
          </PrivateRoute>,
        loader: () => fetch('https://gaming-server-six.vercel.app/')
      },
      {
        path: "reviews/:id",
        element: <ReviewDetails />,
        loader: async ({ params }) => fetch(`https://gaming-server-six.vercel.app/${params.id}`)
      },
      {
        path: "addreviews",
        element: (
          <PrivateRoute>
            <AddReviews />
          </PrivateRoute>
        )
      },
      {
        path: "myreviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        )
      },
      {
        path: "gamewatchlist",
        element: (
          <PrivateRoute>
            <GameWatchList />
          </PrivateRoute>
        )
      },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      {
        path: "/updateReview/:id",
        element: (
          <PrivateRoute>
            <UpdateReview></UpdateReview>
          </PrivateRoute>
        )
      },
      {
        path: "GameWatchList",
        element: (
          <PrivateRoute>
            <GameWatchList></GameWatchList>
          </PrivateRoute>
        )
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
