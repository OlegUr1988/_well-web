import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import {
  ChangePasswordPage,
  ConfigPanelPage,
  ConstantsPage,
  DataSourcePage,
  LoginPage,
  ModelsPage,
  PHDTagsPage,
  UnitsPage,
  UsersPage,
} from "./pages/configs";
import {
  AreaLevelDashboard,
  AssetLevelDashboard,
  PlantLevelDashboard,
} from "./pages/dashboards/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      {
        path: "models",
        element: <ModelsPage />,
      },
      {
        path: "config",
        element: <ConfigPanelPage />,
        children: [
          { path: "users", element: <UsersPage /> },
          { path: "tags", element: <PHDTagsPage /> },
          { path: "units", element: <UnitsPage /> },
          { path: "constants", element: <ConstantsPage /> },
          { path: "datasource", element: <DataSourcePage /> },
          { path: "change-password", element: <ChangePasswordPage /> },
        ],
      },
    ],
  },
  { path: "dashboards/plant/:plantName", element: <PlantLevelDashboard /> },
  { path: "dashboards/areas/:areaName", element: <AreaLevelDashboard /> },
  {
    path: "dashboards/assets/:areaName/:assetName",
    element: <AssetLevelDashboard />,
  },
]);

export default router;
