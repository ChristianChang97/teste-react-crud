import React, { useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteUser, detailsUser } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function UserScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();
  const { loading, error, user } = userDetails;

  const routeChange = () => {
    let path = "/";
    navigate(path);
  };

  useEffect(() => {
    dispatch(detailsUser(id));
  }, [dispatch, id]);

  const handleDeleteUser = () => {
    dispatch(deleteUser(id));
    alert("Usuário Excluído com Sucesso!!");
    routeChange();
  };

  const redirectToUpdateScreen = () => {
    navigate(`/alteracao-usuario/${id}`);
  };

  return (
    <div style={{ height: "100%" }}>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div style={{ height: "100%" }}>
          <Link to="/">Voltar para o início</Link>
          <div className="row top" style={{ height: "100%" }}>
            <div
              className="col-2"
              style={{
                marginTop: "1.5rem",
                flex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80%",
              }}
            >
              <FaUserAlt style={{ fontSize: "15rem" }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "60rem",
                height: "90%",
                backgroundColor: "#f8f8f8",
              }}
            >
              <ul
                style={{
                  height: "80%",
                  width: "80%",
                }}
              >
                <li>
                  <h1 style={{ textAlign: "start" }}>
                    {user.name + " " + user.lastName}
                  </h1>
                </li>
                <li>CPF: {user.cpf}</li>
                <li>Nacionalidade: {user.nationality}</li>
                <li>CEP: {user.cep}</li>
                <li>Estado: {user.state}</li>
                <li>Cidade: {user.city}</li>
                <li>Logradouro: {user.street}</li>
                <li>E-mail: {user.email}</li>
                <li>Tel: {user.tel}</li>
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "1",
                alignItems: "flex-end",
              }}
            >
              <button
                className="update-button"
                onClick={redirectToUpdateScreen}
              >
                Alterar
              </button>
              <button className="delete-button" onClick={handleDeleteUser}>
                Deletar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
