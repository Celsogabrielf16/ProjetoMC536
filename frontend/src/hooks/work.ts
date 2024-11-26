import { useQuery } from "@tanstack/react-query"
import { getWork } from "src/services/work"

export const useGetWork = (id: string) => {
  return useQuery({
    queryKey: ['work', id],
    queryFn: async () => await getWork(id),
  })
}