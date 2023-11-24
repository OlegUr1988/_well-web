import { Box, Card, CardHeader, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  link: string;
}

const ConfigurationCard = ({ name, link }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s easy-in",
      }}
    >
      <Link to={link}>
        <Card backgroundColor="whitesmoke">
          <CardHeader>
            <Heading fontSize="x-large">{name}</Heading>
          </CardHeader>
        </Card>
      </Link>
    </Box>
  );
};

export default ConfigurationCard;
