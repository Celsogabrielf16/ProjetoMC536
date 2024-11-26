import { useQuery } from "@tanstack/react-query"
import { getLocation } from "src/services/location"

export const useGetLocation = (id: string) => {
  return useQuery({
    queryKey: ['Location', id],
    queryFn: async () => await getLocation(id),
  })
}