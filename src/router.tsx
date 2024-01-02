import { createBrowserRouter } from "react-router-dom";
import ConfigPanelPage from "./pages/ConfigPanelPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ModelsPage from "./pages/ModelsPage";
import { PHDTagsPage, UnitsPage } from "./pages/configs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
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
]);

export default router;
