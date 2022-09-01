import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationality, setNationality] = useState("");
  const [cep, setCep] = useState("");
  const [stateAddress, setStateAddress] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      "Nome: " + name,
      "Sobrenome: " + lastName,
      "Nacionalidade: " + nationality,
      "CEP: " + cep,
      "Estado: " + stateAddress,
      "Cidade: " + city,
      "Logradouro: " + street,
      "E-mail: " + email,
      "Tel: " + telephone
    );
  };

  function handleStateTypeChange(e) {
    setStateAddress(e.target.value);
  }

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Cadastro</h1>
        </div>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Ex: João"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="form row">
          <div style={{ marginRight: "1rem" }}>
            <label htmlFor="lastName">Sobrenome</label>
            <input
              type="text"
              id="lastName"
              placeholder="Ex: da Silva"
              required
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
          <div style={{ marginLeft: "1rem" }}>
            <label htmlFor="nationality">Nacionalidade</label>
            <input
              type="text"
              id="nationality"
              placeholder="Ex: brasileira"
              required
              onChange={(e) => setNationality(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="form row">
          <div style={{ marginRight: "1rem" }}>
            <label htmlFor="cep">CEP</label>
            <input
              type="text"
              id="cep"
              placeholder="Ex: 01011-100"
              required
              onChange={(e) => setCep(e.target.value)}
            ></input>
          </div>
          <div style={{ margin: "0 1rem" }}>
            <label htmlFor="state">Estado</label>
            <select
              id="estado"
              name="estado"
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
              placeholder="Ex: São Paulo"
              required
              onChange={(e) => setCity(e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <label htmlFor="address">Logradouro</label>
          <input
            type="text"
            id="address"
            placeholder="Ex: Rua Boa Vista 253"
            required
            onChange={(e) => setStreet(e.target.value)}
          ></input>
        </div>
        <div className="form row">
          <div style={{ marginRight: "1rem" }}>
            <label htmlFor="lastName">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Ex: email@gmail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div style={{ marginLeft: "1rem" }}>
            <label htmlFor="tel">Telefone</label>
            <input
              type="tel"
              id="tel"
              placeholder="Ex: (11)2020-3030"
              required
              onChange={(e) => setTelephone(e.target.value)}
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
