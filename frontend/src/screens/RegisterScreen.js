import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../actions/userActions";
import MessageBox from "../components/MessageBox";

export default function RegisterScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    lastName: "",
    cpf: "",
    nationality: "",
    cep: "",
    state: "",
    city: "",
    street: "",
    email: "",
    tel: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isStateEmpty, setIsStateEmpty] = useState(false);

  const routeChange = () => {
    let path = "/";
    navigate(path);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    const formErrorsIsEmpty = Object.keys(formErrors).length === 0;
    if (formErrorsIsEmpty && formValues.state) {
      dispatch(
        register(
          formValues.name,
          formValues.lastName,
          formValues.cpf,
          formValues.nationality,
          formValues.cep,
          formValues.state,
          formValues.city,
          formValues.street,
          formValues.email,
          formValues.tel
        )
      );
      alert("Usuário cadastrado com Sucesso!");
      routeChange();
    } else {
      setIsStateEmpty(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "É obrigatório preencher este campo!";
    }
    if (!values.lastName) {
      errors.lastName = "É obrigatório preencher este campo!";
    }
    if (!values.cpf) {
      errors.cpf = "É obrigatório preencher este campo!";
    }
    if (!values.nationality) {
      errors.nationality = "É obrigatório preencher este campo!";
    }
    if (!values.cep) {
      errors.cep = "É obrigatório preencher este campo!";
    }
    if (!values.state) {
      errors.state = "É obrigatório selecionar o Estado";
    }
    if (!values.city) {
      errors.city = "É obrigatório preencher este campo!";
    }
    if (!values.street) {
      errors.street = "É obrigatório preencher este campo!";
    }
    if (!values.email) {
      errors.email = "É necessário preencher o campo de email!";
    } else if (!regex.test(values.email)) {
      errors.email = "O email não está correto!";
    }
    if (!values.tel) {
      errors.tel = "É obrigatório preencher este campo!";
    }
    return errors;
  };

  function handleStateTypeChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setIsStateEmpty(false);
  }

  return (
    <div>
      {isStateEmpty && (
        <MessageBox variant="danger">{formErrors.state}</MessageBox>
      )}
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Cadastro</h1>
        </div>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ex: João"
            required
            value={formValues.name}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form row">
          <div style={{ marginRight: "1rem" }}>
            <label htmlFor="lastName">Sobrenome</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Ex: da Silva"
              required
              value={formValues.lastName}
              onChange={handleChange}
            ></input>
          </div>
          <div style={{ margin: "0 1rem" }}>
            <label htmlFor="cpf">CPF</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="Ex: 234.922.375-42"
              required
              value={formValues.cpf}
              onChange={handleChange}
            ></input>
          </div>
          <div style={{ marginLeft: "1rem" }}>
            <label htmlFor="nationality">Nacionalidade</label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              placeholder="Ex: brasileira"
              required
              value={formValues.nationality}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="form row">
          <div style={{ marginRight: "1rem" }}>
            <label htmlFor="cep">CEP</label>
            <input
              type="text"
              id="cep"
              name="cep"
              placeholder="Ex: 01011-100"
              value={formValues.cep}
              onChange={handleChange}
            ></input>
          </div>
          <div style={{ margin: "0 1rem" }}>
            <label htmlFor="state">Estado</label>
            <select
              id="state"
              name="state"
              value={formValues.state}
              onChange={(e) => handleStateTypeChange(e)}
            >
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
              <option value="EX">Estrangeiro</option>
            </select>
          </div>
          <div style={{ marginLeft: "1rem" }}>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Ex: São Paulo"
              required
              value={formValues.city}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div>
          <label htmlFor="street">Logradouro</label>
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Ex: Rua Boa Vista 253"
            required
            value={formValues.street}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form row">
          <div style={{ marginRight: "1rem" }}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ex: email@gmail.com"
              required
              value={formValues.email}
              onChange={handleChange}
            ></input>
          </div>
          <div style={{ marginLeft: "1rem" }}>
            <label htmlFor="tel">Telefone</label>
            <input
              type="tel"
              id="tel"
              name="tel"
              placeholder="Ex: (11)2020-3030"
              required
              value={formValues.tel}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="button-div">
          <label />
          <button className="primary" type="submit">
            Cadastre-se
          </button>
          <Link to="/">
            <button
              className="secondary"
              type="submit"
              style={{ marginLeft: "1rem" }}
            >
              Voltar
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
