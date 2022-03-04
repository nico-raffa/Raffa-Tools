import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebase";
export function getItems(category) {
  const itemsCollection = collection(db, "items");

  if (!category) {
    return getDocs(itemsCollection);
  } else {
    const q = query(itemsCollection, where("category", "==", category));
    return getDocs(q);
  }
}
