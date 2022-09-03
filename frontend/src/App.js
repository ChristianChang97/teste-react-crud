import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UpdateUserScreen from "./screens/UpdateUserScreen";
import UserScreen from "./screens/UserScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              React CRUD Teste
            </Link>
          </div>
          <div></div>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>
            <Route exact path="/cadastro" element={<RegisterScreen />}></Route>
            <Route exact path="/usuario/:id" element={<UserScreen />}></Route>
            <Route
              exact
              path="/alteracao-usuario/:id"
              element={<UpdateUserScreen />}
            ></Route>
          </Routes>
        </main>
        <footer className="row center"></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
