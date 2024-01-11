import { createBrowserRouter } from "react-router-dom";
import ConfigPanelPage from "./pages/ConfigPanelPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ModelsPage from "./pages/ModelsPage";
import { PHDTagsPage, UnitsPage } from "./pages/configs";
import DashboardPage from "./pages/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "models",
        element: <ModelsPage />,
      },
      {
        path: "config",
        element: <ConfigPanelPage />,
        children: [
          { path: "tags", element: <PHDTagsPage /> },
          { path: "units", element: <UnitsPage /> },
        ],
      },
    ],
  },
  { path: "dashboards/:areaName/:assetName", element: <DashboardPage /> },
]);

export default router;
