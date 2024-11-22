import Board from "./components/board/board"
import Layout from "./components/layout/Layout";
import Login from "./components/login/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rules from "./components/rules/Rules";
function App() {

    return (
        <>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="gra" element={<Board />} />
          <Route path="ruchy" element={<Rules />} />
        </Route>
      </Routes>
    </BrowserRouter>




        </>
    )
}

export default App
