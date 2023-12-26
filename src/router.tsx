import { createBrowserRouter } from "react-router-dom";
import ConfigPanelPage from "./pages/ConfigPanelPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ModelsPage from "./pages/ModelsPage";
import { NewPHDTagPage, PHDTagDetailPage, PHDTagsPage } from "./pages/PHDTags";
import QueriesPage from "./pages/QueriesPage";
import { AssetDetailPage, AssetsPage, NewAssetPage } from "./pages/assets/";
import {
  EquipmentDetailPage,
  EquipmentsPage,
  NewEquipmentPage,
} from "./pages/equipments";

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
      { path: "assets", element: <AssetsPage /> },
      { path: "assets/new", element: <NewAssetPage /> },
      { path: "assets/:id", element: <AssetDetailPage /> },
      { path: "equipments", element: <EquipmentsPage /> },
      { path: "equipments/new", element: <NewEquipmentPage /> },
      { path: "equipments/:id", element: <EquipmentDetailPage /> },
      { path: "phd-tags", element: <PHDTagsPage /> },
      { path: "phd-tags/new", element: <NewPHDTagPage /> },
      { path: "phd-tags/:id", element: <PHDTagDetailPage /> },
      { path: "queries", element: <QueriesPage /> },
    ],
  },
]);

export default router;
