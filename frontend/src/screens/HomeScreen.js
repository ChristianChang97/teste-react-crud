import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { listUsers } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import User from "../components/User";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(listUsers());
  }, []);

  const routeChange = () => {
    let path = "/cadastro";
    navigate(path);
  };

  return (
    <div className="container">
      <div className="row center">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="row center">
            {users.map((user) => (
              <User key={user._id} user={user}></User>
            ))}
          </div>
        )}
      </div>
      <div style={{ position: "absolute", right: "2rem" }}>
        <button className="add-button" onClick={routeChange}>
          Adicionar novo Usuário
        </button>
      </div>
    </div>
  );
}
