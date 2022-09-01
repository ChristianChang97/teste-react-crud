import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <div className="container">
      <Link to="#" className="view" style={{ backgroundColor: "#166fe5" }}>
        CONSULTAR
      </Link>
      <Link to="#" className="view" style={{ backgroundColor: "#36a420" }}>
        LISTAR
      </Link>
      <Link
        to="/cadastrar"
        className="view"
        style={{ backgroundColor: "#FF6F00" }}
      >
        ADICIONAR
      </Link>
      <Link to="#" className="view" style={{ backgroundColor: "#f0c040" }}>
        ALTERAR
      </Link>
      <Link to="#" className="view" style={{ backgroundColor: "#203040" }}>
        EXCLUIR
      </Link>
    </div>
  );
}
