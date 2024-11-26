import { api } from "src/api"
import { Work } from "src/types"

export const getWork = async (id: string): Promise<Work> => {
  return (await api.get<Work>('/obras/' + id)).data;
}