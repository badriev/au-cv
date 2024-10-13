import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  { path: "*", element: <Navigate to="/" /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
