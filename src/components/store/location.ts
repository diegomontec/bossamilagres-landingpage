import { create } from 'zustand'

interface Estado {
    id: number
    nome: string,
    sigla: string
}

interface Cidade {
    id: number
    nome: string
}

interface location {
    estados: Estado[];
    cidades: Cidade[];
    fetchEstados: () => Promise<void>;
    fetchCidades: (uf: string) => Promise<void>;
}
export const Location = create<location>((set) => ({
    estados: [],
    cidades: [],
    fetchEstados: async () => {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        const data = await response.json()
        set({ estados: data })
    },
    fetchCidades: async (uf: string) => {
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        const data = await response.json()
        set({ cidades: data })
    }
}))