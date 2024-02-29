import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemlistcontainer/ItemListContainer";
import { Home } from "./components/pages/home/Home";
import { ItemDetailContainer } from "./components/pages/itemdetail/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/plushies" element={<ItemListContainer />}></Route>
          <Route
            path="/plushies/item/:id"
            element={<ItemDetailContainer />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
