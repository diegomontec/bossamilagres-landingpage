import React, { useState } from 'react';
import {
  CForm,
  CFormInput,
  CFormCheck,
  CFormSelect,
  CFormLabel,
  CAlert,
} from '@coreui/react';
import Button from '../button/Button';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    captcha: '',
    comunicacao: false,
  });

  const [errors, setErrors] = useState<{ telefone?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (e.target instanceof HTMLInputElement) {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    } else {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
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
        <CFormLabel htmlFor="nome">Nome*</CFormLabel>
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
        <CFormLabel htmlFor="email">Email*</CFormLabel>
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
        <CFormLabel htmlFor="telefone">Telefone*</CFormLabel>
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
        <CFormLabel htmlFor="cidade">Cidade*</CFormLabel>
        <CFormSelect
            id="cidade"
            name="cidade"
            required
            value={formData.cidade}
            onChange={handleChange}
            >
            <option value="">Selecione um estado *</option>
            <option value="Acre">Acre</option>
            <option value="Alagoas">Alagoas</option>
            <option value="Amapá">Amapá</option>
            <option value="Amazonas">Amazonas</option>
            <option value="Bahia">Bahia</option>
            <option value="Ceará">Ceará</option>
            <option value="Distrito Federal">Distrito Federal</option>
            <option value="Espírito Santo">Espírito Santo</option>
            <option value="Goiás">Goiás</option>
            <option value="Maranhão">Maranhão</option>
            <option value="Mato Grosso">Mato Grosso</option>
            <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
            <option value="Minas Gerais">Minas Gerais</option>
            <option value="Pará">Pará</option>
            <option value="Paraíba">Paraíba</option>
            <option value="Paraná">Paraná</option>
            <option value="Pernambuco">Pernambuco</option>
            <option value="Piauí">Piauí</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Rio Grande do Norte">Rio Grande do Norte</option>
            <option value="Rio Grande do Sul">Rio Grande do Sul</option>
            <option value="Rondônia">Rondônia</option>
            <option value="Roraima">Roraima</option>
            <option value="Santa Catarina">Santa Catarina</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Sergipe">Sergipe</option>
            <option value="Tocantins">Tocantins</option>
            </CFormSelect>
      </div>

      {/* <div>
        <CFormLabel htmlFor="captcha">2 + 1 = ?</CFormLabel>
        <CFormInput
          type="text"
          id="captcha"
          name="captcha"
          required
          value={formData.captcha}
          onChange={handleChange}
        />
      </div> */}

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

      <Button type="submit" className="w-full">Enviar</Button>

      {submitted && (
        <CAlert color="success" className="mt-4">
          Formulário enviado com sucesso!
        </CAlert>
      )}
    </CForm>
  );
};

export default FormComponent;
