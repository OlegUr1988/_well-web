import { Box, Image } from "@chakra-ui/react";
import Factory from "../assets/factory.jpg";

const HomePage = () => {
  return (
    <Box height="100%">
      <Image
        src={Factory}
        alt="Home page image"
        position="fixed"
        objectFit="cover"
      />
    </Box>
  );
};

export default HomePage;
