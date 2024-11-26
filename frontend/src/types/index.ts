export interface Work {
  id: string
  id_localizacao: string
  data_inicio: string
  data_previsao: string
  data_conclusao?: string
  orcamento: number
  nome: string
  descricao: string
  tipo: string
  status: string
}

export interface Location {
  id: string
  nome: string
}
