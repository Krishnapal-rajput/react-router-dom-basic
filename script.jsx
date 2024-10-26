import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact"

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/blog",
        element: <Blog/>,
    },
    {
        path: "/contact",
        element: <Contact/>,
    }
  ]);


const root = createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router} />);
