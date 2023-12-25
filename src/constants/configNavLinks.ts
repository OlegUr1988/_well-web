import { GrConfigure } from "react-icons/gr";
import { LiaHashtagSolid } from "react-icons/lia";
import { MdOutlineQueryBuilder, MdOutlineWebAsset } from "react-icons/md";

export default [
  {
    id: 1,
    name: "Configure Assets",
    url: "/config/assets",
    icon: MdOutlineWebAsset,
  },
  {
    id: 2,
    name: "Configure Equipments",
    url: "/config/equipments",
    icon: GrConfigure,
  },
  {
    id: 3,
    name: "PHD Tags",
    url: "/config/phd-tags",
    icon: LiaHashtagSolid,
  },
  {
    id: 4,
    name: "Configure Queries",
    url: "/config/queries",
    icon: MdOutlineQueryBuilder,
  },
];
