import { CiDatabase } from "react-icons/ci";
import { TbRulerMeasure } from "react-icons/tb";
import { TiTags } from "react-icons/ti";
import { IoKeyOutline } from "react-icons/io5";

export default [
  {
    name: "Units",
    url: "/config/units",
    icon: TbRulerMeasure,
    isAuthRequired: false,
  },
  {
    name: "PHD Tags",
    url: "/config/tags",
    icon: TiTags,
    isAuthRequired: false,
  },
  {
    name: "Data Source",
    url: "/config/datasource",
    icon: CiDatabase,
    isAuthRequired: false,
  },
  {
    name: "Change Password",
    url: "/config/change-password",
    icon: IoKeyOutline,
    isAuthRequired: true,
  },
];
