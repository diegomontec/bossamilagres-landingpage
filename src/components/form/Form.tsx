import React, { useEffect, useState } from "react";
import {
  CForm,
  CFormInput,
  CFormCheck,
  CFormSelect,
  CFormLabel,
  CAlert,
} from "@coreui/react";
import { Location } from "../store/location";
import Button from "../button/Button";

const FormComponent = () => {
  const [data, setData] = useState({
    nome: "",
    email: "",
    telefone: "",
    estado: "",
    cidade: "",
    captcha: "",
    comunicacao: false,
  });

  const [errors, setErrors] = useState<{ telefone?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const { estados, cidades, fetchEstados, fetchCidades } = Location();

  useEffect(() => {
    fetchEstados();
  }, [fetchEstados]);

  useEffect(() => {
    if (data.estado) {
      fetchCidades(data.estado);
    }
  }, [fetchCidades, data.estado]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "estado" && { cidade: "" }),
    }));
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    if (data.telefone.length < 12) {
      newErrors.telefone = "Este campo deve ter no mínimo 12 caracteres";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await fetch(process.env.REACT_APP_MAKE_WEBHOOK as string, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });


        setSubmitted(true);
        setData({
          nome: "",
          email: "",
          telefone: "",
          estado: "",
          cidade: "",
          captcha: "",
          comunicacao: false,
        });

        setTimeout(() => {
          setSubmitted(false);
        }, 2000);
      } catch (error) {
        console.error("Erro ao enviar para o Make: ", error);
      }
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
        />
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
        />
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
        />
        {errors.telefone && (
          <div className="text-danger text-sm mt-1">{errors.telefone}</div>
        )}
      </div>

      <div>
        <CFormLabel htmlFor="estado">Estado *</CFormLabel>
        <CFormSelect
          id="estado"
          name="estado"
          required
          value={data.estado}
          onChange={handleChange}
          autoFocus={false}
        >
          <option value="">Selecione um estado</option>
          {estados
            .sort((a, b) => a.nome.localeCompare(b.nome))
            .map((estado) => (
              <option key={estado.id} value={estado.sigla}>
                {estado.nome}
              </option>
            ))}
        </CFormSelect>
      </div>

      <div>
        <CFormLabel htmlFor="cidade">Cidade *</CFormLabel>
        <CFormSelect
          id="cidade"
          name="cidade"
          required
          value={data.cidade}
          onChange={handleChange}
          disabled={!data.estado}
          autoFocus={false}
        >
          <option value="">Selecione uma cidade</option>
          {cidades
            .sort((a, b) => a.nome.localeCompare(b.nome))
            .map((cidade) => (
              <option key={cidade.id} value={cidade.nome}>
                {cidade.nome}
              </option>
            ))}
        </CFormSelect>
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
        />
      </div>

      <Button type="submit" className="w-full bg-red-800 text-white bg-">
        Saber mais!
      </Button>

      {submitted && (
        <CAlert color="success" className="mt-4 ">
          Formulário enviado com sucesso!
        </CAlert>
      )}
    </CForm>
  );
};
export default FormComponent;
