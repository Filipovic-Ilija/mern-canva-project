import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Index from "./pages/Index.jsx";
import Layout from "./pages/Layout.jsx";
import Home from "./components/Home.jsx";
import Templates from "./components/Templates.jsx";
import Projects from "./components/Projects.jsx";
import CreateDesign from "./components/CreateDesign.jsx";
import Main from "./pages/Main.jsx";
import { token_decode } from "./utils/index.js";

const userInfo = token_decode(localStorage.getItem("canva_token"));

const router = createBrowserRouter([
  {
    path: "/",
    element: userInfo ? <Layout /> : <Index />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/templates",
        element: <Templates />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
  {
    path: "/design/create",
    element: userInfo ? <CreateDesign /> : <Navigate to="/" />,
  },
  {
    path: "/design/:design_id/edit",
    element: userInfo ? <Main /> : <Navigate to="/" />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
