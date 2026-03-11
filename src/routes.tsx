import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import ProductionDashboard from "./pages/ProductionDashboard";
import ConfigPage from "./pages/ConfigPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // The new Production Dashboard is the home page and the only dashboard
      { index: true, element: <ProductionDashboard /> },
      // This keeps the old URL working and points to the new dashboard
      { path: "dashboards/plant/:plantName", element: <ProductionDashboard /> },
      // The new configuration page
      { path: "models", element: <ConfigPage /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;