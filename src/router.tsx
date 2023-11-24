import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ConfigPage from "./pages/ConfigPage";
import AssetsPage from "./pages/AssetsPage";
import QueriesPage from "./pages/QueriesPage";
import EquipmentsPage from "./pages/EquipmentsPage";
import AssetDetailPage from "./pages/AssetDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "config", element: <ConfigPage /> },
      { path: "config/assets", element: <AssetsPage /> },
      { path: "config/assets/:id", element: <AssetDetailPage /> },
      { path: "config/equipments", element: <EquipmentsPage /> },
      { path: "config/queries", element: <QueriesPage /> },
    ],
  },
]);

export default router;
