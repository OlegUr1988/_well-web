import { createBrowserRouter } from "react-router-dom";
import AssetDetailPage from "./pages/AssetDetailPage";
import AssetsPage from "./pages/AssetsPage";
import ConfigPanelPage from "./pages/ConfigPanelPage";
import EquipmentsPage from "./pages/EquipmentsPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import NewAssetPage from "./pages/NewAssetPage";
import QueriesPage from "./pages/QueriesPage";
import NewEquipmentPage from "./pages/NewEquipmentPage";
import EquipmentDetailPage from "./pages/EquipmentDetailPage";

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
      { path: "equipments/new", element: <NewEquipmentPage /> },
      { path: "equipments/:id", element: <EquipmentDetailPage /> },
      { path: "queries", element: <QueriesPage /> },
    ],
  },
]);

export default router;
