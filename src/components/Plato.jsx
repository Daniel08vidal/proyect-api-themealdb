import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";

const Plato = () => {
  let { id } = useParams();
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDatos(data);
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="plato-descripcion">
      <button className="btn-atras" onClick={() => navigate(-1)}>
        ⬅️
      </button>
      {loading && <Loader />}
      {datos.meals?.map((item) => (
        <article key={item.idMeal}>
          <img src={`${item.strMealThumb}`} />
          <div className="plato-contenedor">
            <h2>{item.strMeal}</h2>
            <p>{item.strInstructions}</p>
            <h3>Ingredients:</h3>
            <li>
              {item.strMeasure1} - {item.strIngredient1}
            </li>
            <li>
              {item.strMeasure2} - {item.strIngredient2}
            </li>
            <li>
              {item.strMeasure3} - {item.strIngredient3}
            </li>
            <li>
              {item.strMeasure4} - {item.strIngredient4}
            </li>
            <li>
              {item.strMeasure5} - {item.strIngredient5}
            </li>
            {item.strIngredient6 ? (
              <li>
                {item.strMeasure6} - {item.strIngredient6}
              </li>
            ) : (
              ""
            )}
            {item.strIngredient7 ? (
              <li>
                {item.strMeasure7} - {item.strIngredient7}
              </li>
            ) : (
              ""
            )}
            {item.strIngredient8 ? (
              <li>
                {item.strMeasure8} - {item.strIngredient8}
              </li>
            ) : (
              ""
            )}
            {item.strIngredient9 ? (
              <li>
                {item.strMeasure9} - {item.strIngredient9}
              </li>
            ) : (
              ""
            )}
            {item.strIngredient10 ? (
              <li>
                {item.strMeasure10} - {item.strIngredient10}
              </li>
            ) : (
              ""
            )}
          </div>
        </article>
      ))}
    </div>
  );
};

export default Plato;
