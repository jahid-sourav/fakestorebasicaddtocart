import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";

export default function Products({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoader(false);
      });
  }, []);
  return (
    <>
      {loader ? (
        <div className="h-[100vh] flex items-center justify-center">
          <img src="spinnergif.gif" alt="Loader" />
        </div>
      ) : (
        <div className="template-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
Products.propTypes = {
  addToCart: PropTypes.func.isRequired,
};
