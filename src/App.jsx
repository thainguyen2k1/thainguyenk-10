import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./header/Header";
import NoteFound from "./pages/NoteFound";
import HomePage from "./pages/user/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { createContext, useEffect, useState } from "react";
import { getAll } from "./services/Crud";
import Footer from "./footer/Footer";
import FormProducts from "./pages/admin/FormProducts";
import Admin from "./pages/admin/Admin";
export const ProductsContext = createContext();
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const newProducts = await getAll("products");
      setProducts(newProducts);
    })();
  }, []);
  return (
    <>
      <Header />
      <ProductsContext.Provider value={[products, setProducts]}>
        <Routes>
          <Route path="*" element={<NoteFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="admin/productFrom/:id" element={<FormProducts />} />
          <Route path="admin/productFrom" element={<FormProducts />} />
          <Route path="admin" element={<Admin />}></Route>
        </Routes>
      </ProductsContext.Provider>
      <Footer />
    </>
  );
}

export default App;
