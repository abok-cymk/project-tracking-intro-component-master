import { useState, useRef } from "react";
import Logo from "./Logo";
import { useEffect } from "react";
import MobileMenu from "./MobileMenu";

const baseImagePath = import.meta.env.BASE_URL;

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <header className="px-6 lg:px-0 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <div className="justify-end hidden md:flex gap-[6rem] text-lg font-bold uppercase text-Very-Dark-Blue">
          {/* Nav links */}
          <nav>
            <ul className="flex items-center gap-12">
              <li>
                <a href="#">product</a>
              </li>
              <li>
                <a href="#">features</a>
              </li>
              <li>
                <a href="#">pricing</a>
              </li>
            </ul>
          </nav>
          {/* CTA */}
          <nav>
            <ul className="flex items-center text-Grayish-Blue">
              <li className="flex items-center relative before:content-['●'] before:absolute before:pointer-events-none before:-left-12 before:text-sm before:text-Grayish-Blue">
                <a href="#">login</a>
              </li>
            </ul>
          </nav>
        </div>
        <button
          type="button"
          onClick={() => setShowMenu((prev) => !prev)}
          ref={buttonRef}
          className="hidden max-md:block cursor-pointer relative"
          aria-label={showMenu ? "Close Menu" : "Open Menu"}
        >
          {showMenu ? (
            <img src={`${baseImagePath}/icon-close.svg`} alt="" />
          ) : (
            <img src={`${baseImagePath}/icon-hamburger.svg`} alt="" />
          )}
        </button>
        {showMenu && <MobileMenu ref={menuRef} />}
      </div>
    </header>
  );
}
export default Navbar;
