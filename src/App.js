import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                greeting={"Hola, este es nuestro catálogo de productos"}
              />
            }
          />
          <Route path="/product/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer greeting={`Categoría en específico`} />}
          />
          <Route
            path="*"
            element={
              <div>
                <h1>Página no encontrada</h1>
              </div>
            }
          />
        </Routes>
      </CartContextProvider>
    </div>
  );
}

export default App;
