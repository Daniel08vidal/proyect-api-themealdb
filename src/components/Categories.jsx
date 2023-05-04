import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Categories = () => {
  const [categ, setCateg] = useState([]);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  // console.log(categ);

  useEffect(() => {
    setLoading(true);
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        setCateg(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="comida">
      <h2 className="comida--titulo">Categorias de Comidas</h2>
      <div className="platos">
        {loading && <Loader />}
        {categ.categories?.map((item) => (
          <article
            key={item.idCategory}
            className="plato categories"
            onClick={() => navigate(`/categorias/${item.strCategory}`)}
          >
            <img src={`${item.strCategoryThumb}`} alt="Hamburguesa" />
            <h2>{item.strCategory}</h2>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Categories;
