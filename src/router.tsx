import { createBrowserRouter } from "react-router-dom";
import ConfigPanelPage from "./pages/ConfigPanelPage";
import DashboardPage from "./pages/DashboardPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import ModelsPage from "./pages/ModelsPage";
import { DataSourcePage, PHDTagsPage, UnitsPage } from "./pages/configs";
import ChangePasswordPage from "./pages/configs/ChangePasswordPage";
import UsersPage from "./pages/configs/UsersPage";

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
