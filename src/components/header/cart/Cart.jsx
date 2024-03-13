import PropTypes from "prop-types";
import "./Cart.css";
export default function Cart({ productsInCart, removeItem }) {
  const totalPrice = productsInCart.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <>
      <div className="drawer-content">
        <label htmlFor="sidebar" className="indicator cart">
          <span className="indicator-item badge badge-secondary left-[-38px]">
            {productsInCart.length}
          </span>
          Cart
        </label>
      </div>
      <div className="drawer-side z-[999]">
        <label
          htmlFor="sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="p-4 w-[80%] md:w-80 min-h-full bg-base-200">
          <p className="mb-2">Total Items - {productsInCart.length}</p>
          <p className="mb-4">Total Price - ${totalPrice}</p>
          {productsInCart.map((product) => (
            <div className="cart-card" key={product.id}>
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <p>${product.price}</p>
              <div className="text-center">
                <button
                  className="cart-card-button"
                  onClick={() => removeItem(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
Cart.propTypes = {
  productsInCart: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
};
