import { api } from "src/api"
import { Location } from "src/types"

export const getLocation = async (id: string): Promise<Location> => {
  return (await api.get<Location>('/localizacoes/' + id)).data;
}