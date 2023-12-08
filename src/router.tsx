import { createBrowserRouter } from "react-router-dom";
import AssetDetailPage from "./pages/AssetDetailPage";
import AssetsPage from "./pages/AssetsPage";
import ConfigPanelPage from "./pages/ConfigPanelPage";
import EquipmentsPage from "./pages/EquipmentsPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import NewAssetPage from "./pages/NewAssetPage";
import QueriesPage from "./pages/QueriesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "config",
    element: <ConfigPanelPage />,
    children: [
      { path: "assets", element: <AssetsPage /> },
      { path: "assets/new", element: <NewAssetPage /> },
      { path: "assets/:id", element: <AssetDetailPage /> },
      { path: "equipments", element: <EquipmentsPage /> },
      { path: "queries", element: <QueriesPage /> },
    ],
  },
]);

export default router;
