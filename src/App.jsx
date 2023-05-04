import "./App.css";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import MenuHeader from "./components/MenuHeader";
import Categories from "./components/Categories";
import Categoria from "./components/Categoria";
import Error404 from "./components/Error404";
import Plato from "./components/Plato";
import { useState } from "react";
import { useModal } from "./hooks/useModal";
import Modal from "./components/Modal";
import Favoritos from "./components/Favoritos";
import Footer from "./components/Footer";

let initialCont = JSON.parse(localStorage.getItem("contador")) || {
  misFavoritos: [],
};

function App() {
  const [contador, setContador] = useState(initialCont);
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);

  localStorage.setItem("contador", JSON.stringify(contador));

  const handleContador = (dato) => {
    let newItem = contador.misFavoritos.find((cont) => cont.id === dato.id);
    newItem
      ? setContador({
          ...contador,
          misFavoritos: [...contador.misFavoritos],
        })
      : setContador({
          ...contador,
          misFavoritos: [...contador.misFavoritos, { ...dato }],
        });
  };

  const DeleteFromFavoritos = (id) => {
    // console.log(id);
    let newItem = contador.misFavoritos.find((item) => item.id === id);

    newItem
      ? setContador({
          ...contador,
          misFavoritos: contador.misFavoritos.filter((item) => item.id !== id),
        })
      : setContador({
          ...contador,
          misFavoritos: [...contador.misFavoritos],
        });
  };

  return (
    <div className="App">
      <div className="contenedor">
        <HashRouter>
          <MenuHeader
            contador={contador.misFavoritos.length}
            openModal1={openModal1}
          />
          <Routes>
            <Route
              path="/"
              element={<Main handleContador={handleContador} />}
            />
            <Route path="/categorias" element={<Categories />} />
            <Route
              path="/categorias/:id"
              element={<Categoria handleContador={handleContador} />}
            />
            <Route path="/plato/:id" element={<Plato />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <h2>Mis Platos Favoritos</h2>
            <Favoritos
              contador={contador}
              DeleteFromFavoritos={DeleteFromFavoritos}
              closeModal={closeModal1}
            />
          </Modal>
          <Footer />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
