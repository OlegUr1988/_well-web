import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useDashboardsStore from "../../store/dashboard";

const TrendSelectInput = () => {
  const { trend } = useDashboardsStore((s) => s.dashboardQuery);
  const setTrend = useDashboardsStore((s) => s.setTrend);

  return (
    <Menu>
      <MenuButton
        w={300}
        textAlign="left"
        size="sm"
        as={Button}
        variant="outline"
        rightIcon={<BsChevronDown />}
      >
        {trend.toUpperCase()}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setTrend("bad actors")}>Bad Actors</MenuItem>
        <MenuItem onClick={() => setTrend("production")}>Production</MenuItem>
        <MenuItem onClick={() => setTrend("energy consumption")}>
          Energy consumption
        </MenuItem>
        <MenuItem onClick={() => setTrend("specific energy consumption")}>
          Specific energy consumption
        </MenuItem>
        <MenuItem onClick={() => setTrend("CO2 emission")}>
          CO2 emission
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default TrendSelectInput;
