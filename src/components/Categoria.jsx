import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";

const Categoria = ({ handleContador }) => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="comida">
      <button className="btn-atras" onClick={() => navigate(-1)}>
        ⬅️
      </button>
      <h2 className="comida--titulo">
        Categoria: <span id="titulo-categoria">{id}</span>
      </h2>

      <div className="platos">
        {loading && <Loader />}
        {data.meals?.map((item) => (
          <article key={item.idMeal} className="plato">
            <img src={`${item.strMealThumb}`} alt="Hamburguesa" />
            <h2>{item.strMeal}</h2>
            <div className="informacion--boton btn-categoria">
              <button
                type="button"
                onClick={() => navigate(`/plato/${item.idMeal}`)}
              >
                Ver Preparación
              </button>
              <button
                type="button"
                onClick={() =>
                  handleContador({
                    id: item.idMeal,
                    nombre: item.strMeal,
                    img: item.strMealThumb,
                  })
                }
              >
                Agregar a favorito
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Categoria;
