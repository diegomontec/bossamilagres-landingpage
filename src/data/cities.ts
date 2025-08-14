// Estrutura otimizada para busca O(1) usando Map
export interface City {
  id: number;
  nome: string;
  estado: string;
  estado_sigla: string;
  display: string;
}

// Dados das principais cidades brasileiras (lista expandida)
export const citiesData: City[] = [
  // Alagoas
  { id: 1, nome: "Maceió", estado: "Alagoas", estado_sigla: "AL", display: "Maceió - AL" },
  { id: 2, nome: "Arapiraca", estado: "Alagoas", estado_sigla: "AL", display: "Arapiraca - AL" },
  { id: 3, nome: "Palmeira dos Índios", estado: "Alagoas", estado_sigla: "AL", display: "Palmeira dos Índios - AL" },
  { id: 4, nome: "Penedo", estado: "Alagoas", estado_sigla: "AL", display: "Penedo - AL" },
  { id: 5, nome: "Pilar", estado: "Alagoas", estado_sigla: "AL", display: "Pilar - AL" },
  { id: 6, nome: "Rio Largo", estado: "Alagoas", estado_sigla: "AL", display: "Rio Largo - AL" },
  { id: 7, nome: "Piranhas", estado: "Alagoas", estado_sigla: "AL", display: "Piranhas - AL" },
  { id: 8, nome: "União dos Palmares", estado: "Alagoas", estado_sigla: "AL", display: "União dos Palmares - AL" },
  { id: 9, nome: "Delmiro Gouveia", estado: "Alagoas", estado_sigla: "AL", display: "Delmiro Gouveia - AL" },
  { id: 10, nome: "Coruripe", estado: "Alagoas", estado_sigla: "AL", display: "Coruripe - AL" },
  { id: 11, nome: "Marechal Deodoro", estado: "Alagoas", estado_sigla: "AL", display: "Marechal Deodoro - AL" },
  { id: 12, nome: "São Miguel dos Campos", estado: "Alagoas", estado_sigla: "AL", display: "São Miguel dos Campos - AL" },
  { id: 13, nome: "Atalaia", estado: "Alagoas", estado_sigla: "AL", display: "Atalaia - AL" },
  { id: 14, nome: "Girau do Ponciano", estado: "Alagoas", estado_sigla: "AL", display: "Girau do Ponciano - AL" },
  { id: 15, nome: "Pão de Açúcar", estado: "Alagoas", estado_sigla: "AL", display: "Pão de Açúcar - AL" },
  
  // São Paulo
  { id: 16, nome: "São Paulo", estado: "São Paulo", estado_sigla: "SP", display: "São Paulo - SP" },
  { id: 17, nome: "Campinas", estado: "São Paulo", estado_sigla: "SP", display: "Campinas - SP" },
  { id: 18, nome: "Santos", estado: "São Paulo", estado_sigla: "SP", display: "Santos - SP" },
  { id: 19, nome: "Ribeirão Preto", estado: "São Paulo", estado_sigla: "SP", display: "Ribeirão Preto - SP" },
  { id: 20, nome: "Sorocaba", estado: "São Paulo", estado_sigla: "SP", display: "Sorocaba - SP" },
  { id: 21, nome: "Guarulhos", estado: "São Paulo", estado_sigla: "SP", display: "Guarulhos - SP" },
  { id: 22, nome: "São Bernardo do Campo", estado: "São Paulo", estado_sigla: "SP", display: "São Bernardo do Campo - SP" },
  { id: 23, nome: "Santo André", estado: "São Paulo", estado_sigla: "SP", display: "Santo André - SP" },
  { id: 24, nome: "Osasco", estado: "São Paulo", estado_sigla: "SP", display: "Osasco - SP" },
  { id: 25, nome: "São José dos Campos", estado: "São Paulo", estado_sigla: "SP", display: "São José dos Campos - SP" },
  { id: 26, nome: "Mogi das Cruzes", estado: "São Paulo", estado_sigla: "SP", display: "Mogi das Cruzes - SP" },
  { id: 27, nome: "Diadema", estado: "São Paulo", estado_sigla: "SP", display: "Diadema - SP" },
  { id: 28, nome: "Piracicaba", estado: "São Paulo", estado_sigla: "SP", display: "Piracicaba - SP" },
  { id: 29, nome: "Carapicuíba", estado: "São Paulo", estado_sigla: "SP", display: "Carapicuíba - SP" },
  { id: 30, nome: "Bauru", estado: "São Paulo", estado_sigla: "SP", display: "Bauru - SP" },
  
  // Rio de Janeiro
  { id: 31, nome: "Rio de Janeiro", estado: "Rio de Janeiro", estado_sigla: "RJ", display: "Rio de Janeiro - RJ" },
  { id: 32, nome: "Niterói", estado: "Rio de Janeiro", estado_sigla: "RJ", display: "Niterói - RJ" },
  { id: 33, nome: "Petrópolis", estado: "Rio de Janeiro", estado_sigla: "RJ", display: "Petrópolis - RJ" },
  { id: 34, nome: "Nova Iguaçu", estado: "Rio de Janeiro", estado_sigla: "RJ", display: "Nova Iguaçu - RJ" },
  { id: 35, nome: "Duque de Caxias", estado: "Rio de Janeiro", estado_sigla: "RJ", display: "Duque de Caxias - RJ" },
  { id: 36, nome: "São Gonçalo", estado: "Rio de Janeiro", estado_sigla: "RJ", display: "São Gonçalo - RJ" },
  { id: 37, nome: "Belford Roxo", estado: "Rio de Janeiro", estado_sigla: "RJ", display: "Belford Roxo - RJ" },
  { id: 38, nome: "Campos dos Goytacazes", estado: "Rio de Janeiro", estado_sigla: "RJ", display: "Campos dos Goytacazes - RJ" },
  { id: 39, nome: "Volta Redonda", estado: "Rio de Janeiro", estado_sigla: "RJ", display: "Volta Redonda - RJ" },
  { id: 40, nome: "Magé", estado: "Rio de Janeiro", estado_sigla: "RJ", display: "Magé - RJ" },
  
  // Minas Gerais
  { id: 41, nome: "Belo Horizonte", estado: "Minas Gerais", estado_sigla: "MG", display: "Belo Horizonte - MG" },
  { id: 42, nome: "Uberlândia", estado: "Minas Gerais", estado_sigla: "MG", display: "Uberlândia - MG" },
  { id: 43, nome: "Contagem", estado: "Minas Gerais", estado_sigla: "MG", display: "Contagem - MG" },
  { id: 44, nome: "Juiz de Fora", estado: "Minas Gerais", estado_sigla: "MG", display: "Juiz de Fora - MG" },
  { id: 45, nome: "Betim", estado: "Minas Gerais", estado_sigla: "MG", display: "Betim - MG" },
  { id: 46, nome: "Montes Claros", estado: "Minas Gerais", estado_sigla: "MG", display: "Montes Claros - MG" },
  { id: 47, nome: "Ribeirão das Neves", estado: "Minas Gerais", estado_sigla: "MG", display: "Ribeirão das Neves - MG" },
  { id: 48, nome: "Uberaba", estado: "Minas Gerais", estado_sigla: "MG", display: "Uberaba - MG" },
  { id: 49, nome: "Governador Valadares", estado: "Minas Gerais", estado_sigla: "MG", display: "Governador Valadares - MG" },
  { id: 50, nome: "Ipatinga", estado: "Minas Gerais", estado_sigla: "MG", display: "Ipatinga - MG" },
  
  // Bahia
  { id: 51, nome: "Salvador", estado: "Bahia", estado_sigla: "BA", display: "Salvador - BA" },
  { id: 52, nome: "Feira de Santana", estado: "Bahia", estado_sigla: "BA", display: "Feira de Santana - BA" },
  { id: 53, nome: "Vitória da Conquista", estado: "Bahia", estado_sigla: "BA", display: "Vitória da Conquista - BA" },
  { id: 54, nome: "Camaçari", estado: "Bahia", estado_sigla: "BA", display: "Camaçari - BA" },
  { id: 55, nome: "Itabuna", estado: "Bahia", estado_sigla: "BA", display: "Itabuna - BA" },
  { id: 56, nome: "Lauro de Freitas", estado: "Bahia", estado_sigla: "BA", display: "Lauro de Freitas - BA" },
  { id: 57, nome: "Ilhéus", estado: "Bahia", estado_sigla: "BA", display: "Ilhéus - BA" },
  { id: 58, nome: "Jequié", estado: "Bahia", estado_sigla: "BA", display: "Jequié - BA" },
  { id: 59, nome: "Barreiras", estado: "Bahia", estado_sigla: "BA", display: "Barreiras - BA" },
  { id: 60, nome: "Alagoinhas", estado: "Bahia", estado_sigla: "BA", display: "Alagoinhas - BA" },
  
  // Pernambuco
  { id: 61, nome: "Recife", estado: "Pernambuco", estado_sigla: "PE", display: "Recife - PE" },
  { id: 62, nome: "Jaboatão dos Guararapes", estado: "Pernambuco", estado_sigla: "PE", display: "Jaboatão dos Guararapes - PE" },
  { id: 63, nome: "Olinda", estado: "Pernambuco", estado_sigla: "PE", display: "Olinda - PE" },
  { id: 64, nome: "Caruaru", estado: "Pernambuco", estado_sigla: "PE", display: "Caruaru - PE" },
  { id: 65, nome: "Petrolina", estado: "Pernambuco", estado_sigla: "PE", display: "Petrolina - PE" },
  { id: 66, nome: "Paulista", estado: "Pernambuco", estado_sigla: "PE", display: "Paulista - PE" },
  { id: 67, nome: "Cabo de Santo Agostinho", estado: "Pernambuco", estado_sigla: "PE", display: "Cabo de Santo Agostinho - PE" },
  { id: 68, nome: "Camaragibe", estado: "Pernambuco", estado_sigla: "PE", display: "Camaragibe - PE" },
  { id: 69, nome: "Garanhuns", estado: "Pernambuco", estado_sigla: "PE", display: "Garanhuns - PE" },
  { id: 70, nome: "Vitória de Santo Antão", estado: "Pernambuco", estado_sigla: "PE", display: "Vitória de Santo Antão - PE" },
  
  // Ceará
  { id: 71, nome: "Fortaleza", estado: "Ceará", estado_sigla: "CE", display: "Fortaleza - CE" },
  { id: 72, nome: "Caucaia", estado: "Ceará", estado_sigla: "CE", display: "Caucaia - CE" },
  { id: 73, nome: "Juazeiro do Norte", estado: "Ceará", estado_sigla: "CE", display: "Juazeiro do Norte - CE" },
  { id: 74, nome: "Sobral", estado: "Ceará", estado_sigla: "CE", display: "Sobral - CE" },
  { id: 75, nome: "Maracanaú", estado: "Ceará", estado_sigla: "CE", display: "Maracanaú - CE" },
  { id: 76, nome: "Crato", estado: "Ceará", estado_sigla: "CE", display: "Crato - CE" },
  { id: 77, nome: "Itapipoca", estado: "Ceará", estado_sigla: "CE", display: "Itapipoca - CE" },
  { id: 78, nome: "Maranguape", estado: "Ceará", estado_sigla: "CE", display: "Maranguape - CE" },
  { id: 79, nome: "Iguatu", estado: "Ceará", estado_sigla: "CE", display: "Iguatu - CE" },
  { id: 80, nome: "Quixadá", estado: "Ceará", estado_sigla: "CE", display: "Quixadá - CE" },
  
  // Outras capitais e cidades importantes
  { id: 81, nome: "Brasília", estado: "Distrito Federal", estado_sigla: "DF", display: "Brasília - DF" },
  { id: 82, nome: "Curitiba", estado: "Paraná", estado_sigla: "PR", display: "Curitiba - PR" },
  { id: 83, nome: "Porto Alegre", estado: "Rio Grande do Sul", estado_sigla: "RS", display: "Porto Alegre - RS" },
  { id: 84, nome: "Manaus", estado: "Amazonas", estado_sigla: "AM", display: "Manaus - AM" },
  { id: 85, nome: "Belém", estado: "Pará", estado_sigla: "PA", display: "Belém - PA" },
  { id: 86, nome: "Goiânia", estado: "Goiás", estado_sigla: "GO", display: "Goiânia - GO" },
  { id: 87, nome: "São Luís", estado: "Maranhão", estado_sigla: "MA", display: "São Luís - MA" },
  { id: 88, nome: "Teresina", estado: "Piauí", estado_sigla: "PI", display: "Teresina - PI" },
  { id: 89, nome: "Natal", estado: "Rio Grande do Norte", estado_sigla: "RN", display: "Natal - RN" },
  { id: 90, nome: "João Pessoa", estado: "Paraíba", estado_sigla: "PB", display: "João Pessoa - PB" },
  { id: 91, nome: "Maceió", estado: "Alagoas", estado_sigla: "AL", display: "Maceió - AL" },
  { id: 92, nome: "Aracaju", estado: "Sergipe", estado_sigla: "SE", display: "Aracaju - SE" },
  { id: 93, nome: "Florianópolis", estado: "Santa Catarina", estado_sigla: "SC", display: "Florianópolis - SC" },
  { id: 94, nome: "Porto Velho", estado: "Rondônia", estado_sigla: "RO", display: "Porto Velho - RO" },
  { id: 95, nome: "Boa Vista", estado: "Roraima", estado_sigla: "RR", display: "Boa Vista - RR" },
  { id: 96, nome: "Palmas", estado: "Tocantins", estado_sigla: "TO", display: "Palmas - TO" },
  { id: 97, nome: "Macapá", estado: "Amapá", estado_sigla: "AP", display: "Macapá - AP" },
  { id: 98, nome: "Rio Branco", estado: "Acre", estado_sigla: "AC", display: "Rio Branco - AC" },
  { id: 99, nome: "Campo Grande", estado: "Mato Grosso do Sul", estado_sigla: "MS", display: "Campo Grande - MS" },
  { id: 100, nome: "Cuiabá", estado: "Mato Grosso", estado_sigla: "MT", display: "Cuiabá - MT" },
];

// Classe otimizada para busca O(1) usando Map e Trie
export class CitySearchEngine {
  private citiesMap: Map<string, City>;
  private citiesByState: Map<string, City[]>;
  private searchIndex: Map<string, City[]>;

  constructor(cities: City[]) {
    this.citiesMap = new Map();
    this.citiesByState = new Map();
    this.searchIndex = new Map();
    
    this.buildIndexes(cities);
  }

  private buildIndexes(cities: City[]): void {
    // Index por display (O(1) lookup)
    cities.forEach(city => {
      this.citiesMap.set(city.display, city);
      
      // Index por estado
      if (!this.citiesByState.has(city.estado_sigla)) {
        this.citiesByState.set(city.estado_sigla, []);
      }
      this.citiesByState.get(city.estado_sigla)!.push(city);
      
      // Index de busca por prefixo
      this.addToSearchIndex(city);
    });
  }

  private addToSearchIndex(city: City): void {
    const searchTerms = [
      city.nome.toLowerCase(),
      city.estado.toLowerCase(),
      city.estado_sigla.toLowerCase(),
      city.display.toLowerCase()
    ];

    searchTerms.forEach(term => {
      for (let i = 1; i <= term.length; i++) {
        const prefix = term.substring(0, i);
        if (!this.searchIndex.has(prefix)) {
          this.searchIndex.set(prefix, []);
        }
        this.searchIndex.get(prefix)!.push(city);
      }
    });
  }

  // Busca O(1) por display exato
  public getByDisplay(display: string): City | undefined {
    return this.citiesMap.get(display);
  }

  // Busca O(1) por estado
  public getByState(state: string): City[] {
    return this.citiesByState.get(state) || [];
  }

  // Busca otimizada por termo de pesquisa
  public search(searchTerm: string, limit: number = 10): City[] {
    if (searchTerm.length < 2) return [];
    
    const term = searchTerm.toLowerCase();
    const results = this.searchIndex.get(term) || [];
    
    // Remove duplicatas e ordena por relevância
    const uniqueResults = Array.from(new Set(results));
    
    return uniqueResults
      .sort((a, b) => {
        // Prioriza matches exatos no início
        const aStartsWith = a.display.toLowerCase().startsWith(term);
        const bStartsWith = b.display.toLowerCase().startsWith(term);
        
        if (aStartsWith && !bStartsWith) return -1;
        if (!aStartsWith && bStartsWith) return 1;
        
        // Depois ordena alfabeticamente
        return a.display.localeCompare(b.display);
      })
      .slice(0, limit);
  }

  // Busca fuzzy para termos similares
  public fuzzySearch(searchTerm: string, limit: number = 10): City[] {
    if (searchTerm.length < 2) return [];
    
    const term = searchTerm.toLowerCase();
    const results: City[] = [];
    
    for (const city of this.citiesMap.values()) {
      const display = city.display.toLowerCase();
      const nome = city.nome.toLowerCase();
      const estado = city.estado.toLowerCase();
      
      // Verifica se o termo está contido em qualquer parte
      if (display.includes(term) || nome.includes(term) || estado.includes(term)) {
        results.push(city);
      }
    }
    
    return results
      .sort((a, b) => {
        // Prioriza matches no início
        const aStartsWith = a.display.toLowerCase().startsWith(term);
        const bStartsWith = b.display.toLowerCase().startsWith(term);
        
        if (aStartsWith && !bStartsWith) return -1;
        if (!aStartsWith && bStartsWith) return 1;
        
        return a.display.localeCompare(b.display);
      })
      .slice(0, limit);
  }

  // Retorna todas as cidades
  public getAllCities(): City[] {
    return Array.from(this.citiesMap.values());
  }
}

// Instância global do motor de busca
export const citySearchEngine = new CitySearchEngine(citiesData);

// Valor padrão (Maceió - AL)
export const DEFAULT_CITY = "Maceió - AL";

// Mapeamento de siglas para nomes completos dos estados
export const ESTADOS_COMPLETOS: Record<string, string> = {
  "AC": "Acre",
  "AL": "Alagoas",
  "AP": "Amapá",
  "AM": "Amazonas",
  "BA": "Bahia",
  "CE": "Ceará",
  "DF": "Distrito Federal",
  "ES": "Espírito Santo",
  "GO": "Goiás",
  "MA": "Maranhão",
  "MT": "Mato Grosso",
  "MS": "Mato Grosso do Sul",
  "MG": "Minas Gerais",
  "PA": "Pará",
  "PB": "Paraíba",
  "PR": "Paraná",
  "PE": "Pernambuco",
  "PI": "Piauí",
  "RJ": "Rio de Janeiro",
  "RN": "Rio Grande do Norte",
  "RS": "Rio Grande do Sul",
  "RO": "Rondônia",
  "RR": "Roraima",
  "SC": "Santa Catarina",
  "SP": "São Paulo",
  "SE": "Sergipe",
  "TO": "Tocantins"
};
