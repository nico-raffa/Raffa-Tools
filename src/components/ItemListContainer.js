import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getItems } from "../api";
import Loader from "./Loader";
import "./ItemListContainer.css";


const ItemListContainer = ({ greeting }) => {
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getItems(categoryName)
      .then((snapshot) =>{
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(products)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryName]);
  
  return (
    <>
      <h3 className="greeting">{greeting=categoryName}</h3>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ItemList items={items} />
        </>
      )}
    </>
  );
}
export default ItemListContainer