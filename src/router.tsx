import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import {
  ChangePasswordPage,
  ConfigPanelPage,
  DataSourcePage,
  LoginPage,
  ModelsPage,
  PHDTagsPage,
  UnitsPage,
  UsersPage,
} from "./pages/configs";

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
          { path: "datasource", element: <DataSourcePage /> },
          { path: "change-password", element: <ChangePasswordPage /> },
        ],
      },
    ],
  },
  { path: "dashboards/:areaName/:assetName", element: <DashboardPage /> },
]);

export default router;
