import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./components/commonStyles/CommonStyles.css";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
function App() {
  const getLocalCartData = () => {
    let localCartData = localStorage.getItem("productsInCart");
    if (!localCartData || localCartData === "[]") {
      return [];
    } else {
      return JSON.parse(localCartData);
    }
  };
  const removeItem = (productId) => {
    toast.error("Product Removed !");
    const updatedProductsInCart = productsInCart.filter(
      (item) => item.id !== productId
    );
    setProductsInCart(updatedProductsInCart);
    localStorage.setItem(
      "productsInCart",
      JSON.stringify(updatedProductsInCart)
    );
  };
  const [productsInCart, setProductsInCart] = useState(getLocalCartData());
  const addToCart = (product) => {
    const isProductInCart = productsInCart.some(
      (item) => item.id === product.id
    );
    if (!isProductInCart) {
      toast.success("Product Added !");
      const newProductsInCart = [...productsInCart, product];
      setProductsInCart(newProductsInCart);
    } else {
      toast.warning("Sorry One Click Please !");
    }
  };
  useEffect(() => {
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
  }, [productsInCart]);
  return (
    <>
      <Header productsInCart={productsInCart} removeItem={removeItem} />
      <main>
        <section className="section-gap">
          <Products addToCart={addToCart} />
          <ToastContainer />
        </section>
      </main>
    </>
  );
}

export default App;
