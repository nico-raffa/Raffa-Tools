import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import Loader from "./Loader";
import ItemDetail from "./ItemDetail";
const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState([])
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams()
    useEffect(() => {
        const itemRef = doc(db, "items", itemId);    
        getDoc(itemRef)
        .then((snapshot) => {          
          if(snapshot.exists()) {
            setItemDetail({ id: snapshot.id, ...snapshot.data()})
          }    
        })
        .catch(error => {
          console.log(error)
        }).finally(()=>{
            setLoading(false)
        })    
      }, [itemId]);
    return(
        <>
            {loading ? (
                <Loader/>
            ) : (
                <>
                    <ItemDetail item={itemDetail}/>
                </>
            )}            
        </>
    )
}
export default ItemDetailContainer