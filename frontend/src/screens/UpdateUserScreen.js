import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { detailsUser, updateUserProfile } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { USER_UPDATE_RESET } from "../constants/userConstants";

export default function UpdateUserScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [nationality, setNationality] = useState("");
  const [cep, setCep] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_RESET });
      dispatch(detailsUser(user.id));
    } else {
      setName(user.name);
      setLastName(user.lastName);
      setCpf(user.cpf);
      setNationality(user.nationality);
      setCep(user.cep);
      setState(user.state);
      setCity(user.city);
      setStreet(user.street);
      setEmail(user.email);
      setTel(user.tel);
    }
  }, [dispatch, id, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUserProfile({
        userId: user._id,
        name,
        lastName,
        cpf,
        nationality,
        cep,
        state,
        city,
        street,
        email,
        tel,
      })
    );
  };

  function handleStateTypeChange(e) {
    setState(e.target.value);
  }

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>{`Bem vindo, ${user.name}`}</h1>
        </div>
        <>
          {loadingUpdate && <LoadingBox></LoadingBox>}
          {errorUpdate && (
            <MessageBox variant="danger">{errorUpdate}</MessageBox>
          )}
          {successUpdate && (
            <MessageBox variant="success">
              Usu??rio Atualizado com Sucesso
            </MessageBox>
          )}
        </>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Ex: Jo??o"
            required
            value={name}
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
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
          <div style={{ margin: "0 1rem" }}>
            <label htmlFor="cpf">CPF</label>
            <input
              type="text"
              id="cpf"
              placeholder="Ex: 234.922.375-42"
              required
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            ></input>
          </div>
          <div style={{ marginLeft: "1rem" }}>
            <label htmlFor="nationality">Nacionalidade</label>
            <input
              type="text"
              id="nationality"
              placeholder="Ex: brasileira"
              required
              value={nationality}
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
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            ></input>
          </div>
          <div style={{ margin: "0 1rem" }}>
            <label htmlFor="state">Estado</label>
            <select
              id="estado"
              name="estado"
              value={state}
              onChange={(e) => handleStateTypeChange(e)}
            >
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amap??</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Cear??</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Esp??rito Santo</option>
              <option value="GO">Goi??s</option>
              <option value="MA">Maranh??o</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Par??</option>
              <option value="PB">Para??ba</option>
              <option value="PR">Paran??</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piau??</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rond??nia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">S??o Paulo</option>
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
              placeholder="Ex: S??o Paulo"
              required
              value={city}
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
            value={street}
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
              value={email}
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
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="button-div">
          <label />
          <button className="update" type="submit">
            Atualizar
          </button>
          <Link to={`/usuario/${id}`}>
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
