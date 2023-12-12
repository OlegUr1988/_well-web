import { Skeleton } from "@chakra-ui/react";

const AssetFormSkeleton = () => {
  return (
    <>
      <Skeleton h={6} w={120} my={1} borderRadius={5} />
      <Skeleton h={12} w={400} mb={5} borderRadius={10} />
      <Skeleton h={12} w={100} borderRadius={10} />
    </>
  );
};

export default AssetFormSkeleton;
