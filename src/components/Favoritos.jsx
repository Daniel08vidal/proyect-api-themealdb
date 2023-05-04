import { useNavigate } from "react-router-dom";

const Favoritos = ({ contador, DeleteFromFavoritos, closeModal }) => {
  let navigate = useNavigate();
  return (
    <div className="barra-scroll">
      <table>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {contador.misFavoritos.length > 0 ? (
            contador.misFavoritos.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    className="img-favorito"
                    onClick={() => (
                      navigate(`/plato/${item.id}`), closeModal()
                    )}
                    src={`${item.img}`}
                    alt={`${item.nombre}`}
                  />
                </td>
                <td>{item.nombre}</td>
                <td>
                  <button
                    className="btn-table"
                    onClick={() => DeleteFromFavoritos(item.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin Datos...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Favoritos;
