import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Unit, UnitQuery } from "../../entities/units";
import { FetchResponse } from "../../services/api-client";
import { units } from "../../services/unitsServices";

const useUnits = (query: UnitQuery) => {
  return useQuery<FetchResponse<Unit>, Error>({
    queryKey: ["units", query],
    queryFn: () => units.getFetchResponse({ params: query }),
    placeholderData: keepPreviousData,
  });
};

export default useUnits;
