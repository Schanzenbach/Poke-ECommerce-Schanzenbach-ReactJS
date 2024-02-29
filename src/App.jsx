import "./App.css";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemlistcontainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
    </>
  );
}

export default App;
