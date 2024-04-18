import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/pages/itemlistcontainer/ItemListContainer";
import { ItemDetailContainer } from "./components/pages/itemdetail/ItemDetailContainer";
import { Layout } from "./components/layout/Layout";
import { CartView } from "./components/pages/cartview/CartView";
import { CheckoutContainer } from "./components/pages/checkout/CheckoutContainer";
import { CartContextProvider } from "./context/CartContext";
import { FilterInputContextProvider } from "./context/FilterInputContext";
import { LoginContainer } from "./components/pages/login/LoginContainer";
import { LoginContextProvider } from "./context/LoginContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <FilterInputContextProvider>
            <LoginContextProvider>
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
                  <Route path="/login" element={<LoginContainer />} />
                  <Route
                    path="/*"
                    element={<h1>404 página no encontrada</h1>}
                  />
                </Route>
              </Routes>
            </LoginContextProvider>
          </FilterInputContextProvider>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
