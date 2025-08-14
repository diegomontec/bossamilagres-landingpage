import React, { useEffect, useState, useRef } from "react";
import {
  CForm,
  CFormInput,
  CFormCheck,
  CFormSelect,
  CFormLabel,
  CAlert,
} from "@coreui/react";
import Button from "../button/Button";
import { 
  citySearchEngine, 
  type City, 
  ESTADOS_COMPLETOS 
} from "../../data/cities";

// Componente de Autocomplete Otimizado com opção "Outros"
const CityStateAutocomplete = ({ 
  value, 
  onChange, 
  onSelect, 
  disabled, 
  placeholder = "Digite sua cidade..." 
}: {
  value: string;
  onChange: (value: string) => void;
  onSelect: (cidade: string, estado: string) => void;
  disabled?: boolean;
  placeholder?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<City[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customInput, setCustomInput] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Debounce para otimizar performance
  const searchTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setShowCustomInput(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (inputValue: string) => {
    onChange(inputValue);
    setIsTyping(true);
    setShowCustomInput(false);
    
    // Limpa timeout anterior
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    
    // Debounce de 300ms para otimizar performance
    searchTimeoutRef.current = setTimeout(() => {
      if (inputValue.length < 2) {
        setFilteredOptions([]);
        setIsOpen(false);
        setIsTyping(false);
        return;
      }

      // Usa o motor de busca otimizado
      const results = citySearchEngine.fuzzySearch(inputValue, 12);
      setFilteredOptions(results);
      
      // Abre o dropdown apenas se há resultados OU se não há resultados (para mostrar opção personalizada)
      setIsOpen(true);
      setIsTyping(false);
    }, 300);
  };

  const handleSelect = (city: City) => {
    onSelect(city.nome, city.estado_sigla);
    onChange(city.display);
    setIsOpen(false);
    setIsTyping(false);
    setShowCustomInput(false);
  };

  const handleCustomInput = () => {
    setShowCustomInput(true);
    setIsOpen(false);
    setCustomInput(value);
  };

  const handleCustomInputChange = (inputValue: string) => {
    setCustomInput(inputValue);
  };

  const handleCustomInputSubmit = () => {
    if (customInput.trim()) {
      // Aceita qualquer texto como cidade personalizada
      onSelect(customInput.trim(), "Personalizado");
      onChange(customInput.trim());
      setShowCustomInput(false);
      setCustomInput("");
    }
  };

  const handleFocus = () => {
    if (value.length >= 2) {
      const results = citySearchEngine.fuzzySearch(value, 12);
      setFilteredOptions(results);
      setIsOpen(true);
    }
  };

  return (
    <div ref={wrapperRef} className="relative">
      {!showCustomInput ? (
        <>
          <CFormInput
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => handleInputChange(e.target.value)}
            onFocus={handleFocus}
            placeholder={placeholder}
            disabled={disabled}
            autoFocus={false}
            className="pr-10" // Espaço para ícone
          />
          
          {/* Ícone de busca */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {isTyping ? (
              <div className="animate-spin w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full"></div>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )}
          </div>
          
          {isOpen && (
            <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
              {filteredOptions.length === 0 ? (
                <div className="px-4 py-2 text-gray-500 text-sm">
                  <div className="mb-2">Nenhuma cidade encontrada</div>
                  <button
                    type="button"
                    onClick={handleCustomInput}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    + Adicionar cidade personalizada
                  </button>
                </div>
              ) : (
                filteredOptions.map((city) => (
                  <div
                    key={city.id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800 border-b border-gray-100 last:border-b-0"
                    onClick={() => handleSelect(city)}
                  >
                    <div className="font-medium">{city.nome}</div>
                    <div className="text-sm text-gray-500">{city.estado}</div>
                  </div>
                ))
              )}
            </div>
          )}
        </>
      ) : (
        <div className="space-y-2">
          <CFormInput
            type="text"
            value={customInput}
            onChange={(e) => handleCustomInputChange(e.target.value)}
            placeholder="Digite o nome da sua cidade"
            disabled={disabled}
            autoFocus={true}
          />
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={handleCustomInputSubmit}
              disabled={disabled || !customInput.trim()}
              className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50"
            >
              Confirmar
            </button>
            <button
              type="button"
              onClick={() => {
                setShowCustomInput(false);
                setCustomInput("");
              }}
              disabled={disabled}
              className="px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 disabled:opacity-50"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Componente de Seleção de Valor de Investimento
const InvestmentValueSelect = ({ 
  value, 
  onChange, 
  disabled, 
  placeholder = "Selecione um valor..." 
}: {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Opções de valor de investimento
  const opcoesInvestimento = [
    { value: "", label: "Selecione" },
    { value: "2950000-5000000", label: "De R$ 2.950.000 a R$ 5.000.000" },
    { value: "acima-5-milhoes", label: "Acima de 5 milhões" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const getDisplayValue = () => {
    const option = opcoesInvestimento.find(opt => opt.value === value);
    return option ? option.label : "";
  };

  return (
    <div ref={wrapperRef} className="relative">
      <CFormInput
        ref={inputRef}
        type="text"
        value={getDisplayValue()}
        onFocus={handleFocus}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={false}
        className="pr-10 cursor-pointer" // Espaço para ícone e cursor pointer
        readOnly
      />
      
      {/* Ícone de dropdown */}
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {opcoesInvestimento.map((opcao) => (
            <div
              key={opcao.value}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800 border-b border-gray-100 last:border-b-0"
              onClick={() => handleSelect(opcao.value)}
            >
              <div className="font-medium">{opcao.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const FormComponent = () => {
  const [data, setData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidadeEstado: "", // Campo vazio para o usuário escolher
    valorInvestimento: "",
    corretor: "Não", // Valor padrão: Não
    comunicacao: false,
  });

  const [errors, setErrors] = useState<{ 
    telefone?: string; 
    submit?: string;
    nome?: string;
    email?: string;
    cidadeEstado?: string;
    valorInvestimento?: string;
    corretor?: string;
  }>({});
  
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Limpar erro quando o usuário começar a editar
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCidadeEstadoChange = (value: string) => {
    setData(prev => ({ ...prev, cidadeEstado: value }));
    if (errors.cidadeEstado) {
      setErrors(prev => ({ ...prev, cidadeEstado: undefined }));
    }
  };

  const handleCidadeEstadoSelect = (cidade: string, estado: string) => {
    if (estado === "Personalizado") {
      // Para cidades personalizadas, usa apenas o nome da cidade
      setData(prev => ({ 
        ...prev, 
        cidadeEstado: cidade,
        cidade: cidade,
        estado: "Não especificado"
      }));
    } else {
      // Para cidades da lista, usa o formato padrão
      const estadoCompleto = ESTADOS_COMPLETOS[estado] || estado;
      setData(prev => ({ 
        ...prev, 
        cidadeEstado: `${cidade} - ${estado}`,
        cidade: cidade,
        estado: estadoCompleto
      }));
    }
  };

  const handleValorInvestimentoChange = (value: string) => {
    setData(prev => ({ ...prev, valorInvestimento: value }));
    if (errors.valorInvestimento) {
      setErrors(prev => ({ ...prev, valorInvestimento: undefined }));
    }
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    
    // Validação do telefone
    if (data.telefone.length < 12) {
      newErrors.telefone = "Este campo deve ter no mínimo 12 caracteres";
    }

    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      newErrors.email = "Email inválido";
    }

    // Validação do nome
    if (data.nome.trim().length < 2) {
      newErrors.nome = "Nome deve ter pelo menos 2 caracteres";
    }

    // Validação da cidade/estado
    if (!data.cidadeEstado.trim()) {
      newErrors.cidadeEstado = "Selecione sua cidade";
    }

    // Validação do valor de investimento
    if (!data.valorInvestimento) {
      newErrors.valorInvestimento = "Selecione um valor de investimento";
    }

    // Validação do corretor
    if (!data.corretor) {
      newErrors.corretor = "Selecione uma opção";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(" Iniciando envio do formulário...");
    console.log("📋 Dados do formulário:", data);

    const validationErrors = validate();
    console.log("✅ Validação:", validationErrors);
    
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      
      try {
        const webhookUrl = import.meta.env.VITE_MAKE_WEBHOOK;
        console.log(" Webhook URL:", webhookUrl);
        
        if (!webhookUrl) {
          throw new Error("Webhook não configurado. Verifique o arquivo .env.local");
        }

        // Determina cidade e estado baseado no valor
        let cidade = data.cidadeEstado;
        let estado = "Não especificado";

        // Se contém " - ", é uma cidade da lista
        if (data.cidadeEstado.includes(' - ')) {
          const [cidadePart, estadoSigla] = data.cidadeEstado.split(' - ');
          cidade = cidadePart;
          estado = ESTADOS_COMPLETOS[estadoSigla] || estadoSigla;
        }

        const payload = {
          nome: data.nome,
          email: data.email,
          telefone: data.telefone,
          cidade: cidade,
          estado: estado,
          valorInvestimento: data.valorInvestimento,
          corretor: data.corretor,
          comunicacao: data.comunicacao,
          timestamp: new Date().toISOString(),
          source: "Bossa Eco Luxury Villas Landing Page"
        };

        console.log(" Payload para envio:", payload);

        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        console.log("📥 Resposta do webhook:", response.status, response.statusText);

        if (!response.ok) {
          const errorText = await response.text();
          console.error("❌ Erro na resposta:", errorText);
          throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }

        const responseData = await response.text();
        console.log("✅ Resposta completa:", responseData);

        setSubmitted(true);
        setData({
          nome: "",
          email: "",
          telefone: "",
          cidadeEstado: "", // Campo vazio após envio
          valorInvestimento: "",
          corretor: "Não", // Mantém o valor padrão
          comunicacao: false,
        });

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error("❌ Erro ao enviar para o Make: ", error);
        setErrors(prev => ({
          ...prev,
          submit: `Erro ao enviar formulário: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
        }));
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log("❌ Formulário com erros de validação");
    }
  };

  return (
    <CForm
      onSubmit={handleSubmit}
      className="w-full max-w-2xl text-white space-y-6"
    >
      <div>
        <CFormLabel htmlFor="nome">Nome *</CFormLabel>
        <CFormInput
          type="text"
          id="nome"
          name="nome"
          required
          value={data.nome}
          onChange={handleChange}
          autoFocus={false}
          disabled={isLoading}
        />
        {errors.nome && (
          <div className="text-danger text-sm mt-1">{errors.nome}</div>
        )}
      </div>

      <div>
        <CFormLabel htmlFor="email">Email *</CFormLabel>
        <CFormInput
          type="email"
          id="email"
          name="email"
          required
          value={data.email}
          onChange={handleChange}
          autoFocus={false}
          disabled={isLoading}
        />
        {errors.email && (
          <div className="text-danger text-sm mt-1">{errors.email}</div>
        )}
      </div>

      <div>
        <CFormLabel htmlFor="telefone">Telefone *</CFormLabel>
        <CFormInput
          type="tel"
          id="telefone"
          name="telefone"
          placeholder="+55"
          required
          value={data.telefone}
          onChange={handleChange}
          invalid={!!errors.telefone}
          autoFocus={false}
          disabled={isLoading}
        />
        {errors.telefone && (
          <div className="text-danger text-sm mt-1">{errors.telefone}</div>
        )}
      </div>

      <div>
        <CFormLabel htmlFor="cidadeEstado">Cidade *</CFormLabel>
        <CityStateAutocomplete
          value={data.cidadeEstado}
          onChange={handleCidadeEstadoChange}
          onSelect={handleCidadeEstadoSelect}
          disabled={isLoading}
          placeholder="Digite sua cidade..."
        />
        {errors.cidadeEstado && (
          <div className="text-danger text-sm mt-1">{errors.cidadeEstado}</div>
        )}
      </div>

      <div>
        <CFormLabel htmlFor="valorInvestimento">
          Qual valor deseja investir em sua casa em Milagres? *
        </CFormLabel>
        <InvestmentValueSelect
          value={data.valorInvestimento}
          onChange={handleValorInvestimentoChange}
          disabled={isLoading}
          placeholder="Selecione um valor..."
        />
        {errors.valorInvestimento && (
          <div className="text-danger text-sm mt-1">{errors.valorInvestimento}</div>
        )}
      </div>

      <div>
        <CFormLabel>Corretor de imóveis? *</CFormLabel>
        <div className="space-y-2 mt-2">
          <CFormCheck
            type="radio"
            id="corretor-sim"
            name="corretor"
            value="Sim"
            label="Sim"
            checked={data.corretor === "Sim"}
            onChange={handleChange}
            disabled={isLoading}
            autoFocus={false}
          />
          <CFormCheck
            type="radio"
            id="corretor-nao"
            name="corretor"
            value="Não"
            label="Não"
            checked={data.corretor === "Não"}
            onChange={handleChange}
            disabled={isLoading}
            autoFocus={false}
          />
        </div>
        {errors.corretor && (
          <div className="text-danger text-sm mt-1">{errors.corretor}</div>
        )}
      </div>

      <div className="mt-6">
        <CFormCheck
          type="checkbox"
          id="comunicacao"
          name="comunicacao"
          label="Eu concordo em receber comunicações."
          checked={data.comunicacao}
          onChange={handleChange}
          autoFocus={false}
          disabled={isLoading}
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-red-800 text-white"
        disabled={isLoading}
      >
        {isLoading ? "Enviando..." : "Saber mais!"}
      </Button>

      {submitted && (
        <CAlert color="success" className="mt-4">
          Formulário enviado com sucesso! Entraremos em contato em breve.
        </CAlert>
      )}

      {errors.submit && (
        <CAlert color="danger" className="mt-4">
          {errors.submit}
        </CAlert>
      )}
    </CForm>
  );
};

export default FormComponent;
