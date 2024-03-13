import { RxHamburgerMenu } from "react-icons/rx";
import "./Hamburger.css";
export default function Hamburger() {
  return (
    <>
      <div className="drawer-content">
        <label htmlFor="sidebar" className="hamburger">
          <RxHamburgerMenu />
        </label>
      </div>
      <div className="drawer-side z-[999]">
        <label
          htmlFor="sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-2 w-[80%] md:w-80 min-h-full bg-base-200">
          <img src="men.webp" alt="Men" className="header-image" />
          <ul className="mt-3 hamburger-lists">
            <li>
              <a href="index.html">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
