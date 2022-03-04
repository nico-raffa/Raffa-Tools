import { Link } from "react-router-dom";
import "./Item.css";
const Item =({ item }) => {
  return (
    <>
      <Link to={`/product/${item.id}`} className="card">
        <img src={item.imgUrl} alt={item.title} />
        <h1>{item.title}</h1>
        <p className="price">${item.price}</p>
      </Link>
    </>
  );
}
export default Item