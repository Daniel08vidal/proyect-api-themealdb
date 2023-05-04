import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Main = ({ handleContador }) => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast";

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDatos(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <aside className="presentacion">
        <div className="informacion">
          <h1>Los mejores platos los encuentras aquí</h1>
          <div>
            <p>Hola, tenemos los mejores platos esta esperando por ti,</p>
            <p>ademas puedes agregarlos a favoritos y verlos cuando quieras</p>
          </div>
          <div className="informacion--boton">
            <button type="button" onClick={() => navigate(`/categorias`)}>
              Explorar Comida
            </button>
          </div>
        </div>
        <div className="presentacion--imagen">
          <img src="design3.png" alt="Imagen presentacion" />
        </div>
      </aside>

      <main className="comida">
        <h2 className="comida--titulo">Platos populares</h2>
        {/* <Loader/> */}
        {loading && <Loader />}
        <div className="platos">
          {datos.meals?.map((dato, index) => (
            <article key={index} className="plato">
              <img src={`${dato.strMealThumb}`} alt="Hamburguesa" />
              <h2> {dato.strMeal}</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="informacion--boton btn-categoria">
                <button
                  type="button"
                  onClick={() => navigate(`/plato/${dato.idMeal}`)}
                >
                  Ver Preparación
                </button>
                <button
                  type="button"
                  onClick={() =>
                    handleContador({
                      id: dato.idMeal,
                      nombre: dato.strMeal,
                      img: dato.strMealThumb,
                    })
                  }
                >
                  Agregar a favorito
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
};

export default Main;
