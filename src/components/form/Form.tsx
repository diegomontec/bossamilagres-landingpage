import React, { useEffect, useState } from 'react';
import {
  CForm,
  CFormInput,
  CFormCheck,
  CFormSelect,
  CFormLabel,
  CAlert,
} from '@coreui/react';
import { Location } from '../store/location'; 
import Button from '../button/Button';

const FormComponent = () => {
  const { estados, cidades, fetchEstados, fetchCidades } = Location();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    estado: '',
    cidade: '',
    captcha: '',
    comunicacao: false,
  });

  const [errors, setErrors] = useState<{ telefone?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetchEstados();
  }, [fetchEstados]);

  useEffect(() => {
    if (formData.estado) {
      fetchCidades(formData.estado);
    }
  }, [fetchCidades, formData.estado]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'estado' && { cidade: '' }),
    }));
  };
  const validate = () => {
    const newErrors: typeof errors = {};
    if (formData.telefone.length < 12) {
      newErrors.telefone = 'Este campo deve ter no mínimo 12 caracteres';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        estado: '',
        cidade: '',
        captcha: '',
        comunicacao: false,
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 2000);
    }
  };

  return (
    <CForm onSubmit={handleSubmit} className="w-full max-w-2xl text-white space-y-6">
      <div>
        <CFormLabel htmlFor="nome">Nome *</CFormLabel>
        <CFormInput
          type="text"
          id="nome"
          name="nome"
          required
          value={formData.nome}
          onChange={handleChange}
        />
      </div>

      <div>
        <CFormLabel htmlFor="email">Email *</CFormLabel>
        <CFormInput
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
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
          value={formData.telefone}
          onChange={handleChange}
          invalid={!!errors.telefone}
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
          value={formData.estado}
          onChange={handleChange}
        >
          <option value="">Selecione um estado</option>
          {estados.map((estado) => (
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
          value={formData.cidade}
          onChange={handleChange}
          disabled={!formData.estado}
        >
          <option value="">Selecione uma cidade</option>
          {cidades.map((cidade) => (
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
          checked={formData.comunicacao}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" className="w-full text-white bg-">Saber mais!</Button>

      {submitted && (
        <CAlert color="success" className="mt-4 ">
          Formulário enviado com sucesso!
        </CAlert>
      )}
    </CForm>
  );
};

export default FormComponent;
