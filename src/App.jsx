import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/pages/itemlistcontainer/ItemListContainer";
import { Home } from "./components/pages/home/Home";
import { ItemDetailContainer } from "./components/pages/itemdetail/ItemDetailContainer";
import { Layout } from "./components/layout/Layout";
import { CartView } from "./components/pages/cartview/CartView";
import { CheckoutContainer } from "./components/pages/checkout/CheckoutContainer";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="/checkout" element={<CheckoutContainer />} />
              <Route path="*" element={<h1>404 página no encontrada</h1>} />
            </Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
