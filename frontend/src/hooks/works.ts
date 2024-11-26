import { useQuery } from "@tanstack/react-query"
import { getWorks } from "src/services/works"

export const useGetWorks = () => {
  return useQuery({
    queryKey: ['works'],
    queryFn: getWorks
  })
}