import PropTypes from "prop-types";
import "./Header.css";
import Cart from "./cart/Cart";
export default function Header({ productsInCart, removeItem }) {
  return (
    <header className="header">
      <div className="template-container">
        <div className="flex items-center justify-between">
          <a href="index.html" className="logo">
            Logo
          </a>
          <div className="drawer drawer-end w-auto">
            <input id="sidebar" type="checkbox" className="drawer-toggle" />
            <Cart productsInCart={productsInCart} removeItem={removeItem} />
          </div>
        </div>
      </div>
    </header>
  );
}
Header.propTypes = {
  productsInCart: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
};
