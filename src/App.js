import "./App.css";
import Login from "./containers/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PAGE_PATHS } from "./utills/constants";

function App() {
  const { root, login } = PAGE_PATHS;
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={root} element={<Navigate to={login} />} />
        <Route path={login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
