import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const MenuHeader = ({ contador, openModal1 }) => {
  let location = useLocation();
  // console.log(contador);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlato, setIsPlato] = useState(false);

  useEffect(() => {
    location.pathname.includes("/plato/")
      ? setIsPlato(true)
      : setIsPlato(false);
  }, [location.pathname]);

  // console.log(location.pathname);
  return (
    <header className="header">
      <div className="logo">
        <p>
          FAST<span>FOOD</span>
        </p>
      </div>
      <div className="hamburguesa">
        <button
          className={`panel-btn ${isOpen && "is-active"}`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav className={`menu ${isOpen && "is-active"}`}>
        <ul className="navegacion" onClick={() => setIsOpen(!isOpen)}>
          <li>
            <NavLink to="/" activeclassname="active">
              Inicio
            </NavLink>
          </li>
          {/* <li><a href="#">Inicio</a></li> */}
          {/* <li><a href="#">Categorias</a></li> */}
          <li>
            <NavLink to="/categorias" activeclassname="active">
              Categorias
            </NavLink>
          </li>
          <li>
            {/* <a href="#">Plato</a> */}
            <NavLink
              to="/Plato"
              activeclassname="active"
              className={`${!isPlato && "disabled"} pointer`}
              // style={!isPlato && { pointerEvents: "none" }}
            >
              Plato
            </NavLink>
          </li>
          <li onClick={openModal1}>
            <a>
              Mis Favoritos &nbsp;<b> {contador} </b>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MenuHeader;
