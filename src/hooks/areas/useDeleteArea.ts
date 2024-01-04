import { useMutation } from "@tanstack/react-query";
import { areas } from "../../services/areasServices";

const useDeleteArea = () => {
  return useMutation({
    mutationFn: (id: string | number) => areas.delete(id),
  });
};

export default useDeleteArea;
