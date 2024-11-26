import { api } from "src/api"
import { Work } from "src/types"

export const getWorks = async (): Promise<Work[]> => {
  return (await api.get<Work[]>('/obras')).data;
}