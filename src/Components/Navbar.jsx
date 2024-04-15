import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { style } from "../style";
import { close, logo, menu } from "../assets";
import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {}, []);

  return (
    <nav
      className={`${style.paddingX} py-5 w-full bg-transparent  backdrop-blur flex items-center justify-between fixed top-0 z-10`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-2"
        >
          <img src={logo} className="w-9 h-9 object-contain" alt="Logo " />
          <p className="text-white font-bold text-[18px] cursor-pointer">
            Sharp
            <span className="hidden sm:inline-block ps-0 sm:ps-2">
              | Digital Agency
            </span>
          </p>
        </Link>

        <ul className="hidden sm:flex items-center flex-row gap-10 justify-between">
          {navLinks.map((link) => (
            <li
              className={`text-secondary text-[18px] ${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              key={link.id}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex flex-1 justify-end items-center sm:hidden">
          <img
            src={!toggle ? menu : close}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[-140px] z-10 rounded-xl`}
          >
            <ul className="flex  flex-col gap-4 justify-end items-start">
              {navLinks.map((link) => (
                <li
                  className={`text-secondary text-[16px] ${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer font-poppins`}
                  key={link.id}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
