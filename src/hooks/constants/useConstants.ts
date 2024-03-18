import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Constant, ConstantQuery } from "../../entities/constants";
import { FetchResponse } from "../../services/api-client";
import { constants } from "../../services/constantsServices";

const useConstants = (query: ConstantQuery) => {
  return useQuery<FetchResponse<Constant>, Error>({
    queryKey: ["constant", query],
    queryFn: () => constants.getFetchResponse({ params: query }),
    placeholderData: keepPreviousData,
  });
};

export default useConstants;
