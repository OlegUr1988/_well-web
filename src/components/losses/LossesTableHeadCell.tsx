import { Th } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  p?: number;
  w?: string;
  whiteSpace?: "normal" | "nowrap";
  textAlign?: "initial" | "start" | "left" | "center" | "right";
  children: ReactNode;
}

const LossesTableHeadCell = ({
  p = 2,
  w = "10%",
  whiteSpace = "normal",
  textAlign = "center",
  children,
}: Props) => {
  return (
    <Th p={p} w={w} whiteSpace={whiteSpace} textAlign={textAlign}>
      {children}
    </Th>
  );
};

export default LossesTableHeadCell;
