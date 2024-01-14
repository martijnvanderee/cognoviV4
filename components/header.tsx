import Nav from "./nav";
import { FaSearch, FaBars } from "react-icons/fa";
import { Logo } from "./logo";

import { useIsMenuOpen } from "../state/isMenuOpen";
import { useIsSearchMenuOpen } from "../state/isSearchMenuOpen";

export const Header = () => {
  const { dispatch, state } = useIsMenuOpen();
  const {
    dispatchMenu,
    state: { isSearchMenuOpen },
  } = useIsSearchMenuOpen();

  const isMenuOpen = state.isMenuOpen;
  const menuAction = isMenuOpen ? "close" : "open";
  const SearchmenuAction = isSearchMenuOpen ? "close" : "open";

  const handleClickSearch = () => {
    dispatchMenu({ type: SearchmenuAction });
    dispatch({ type: "close" });
  };

  const handleClickMenu = () => {
    dispatch({ type: menuAction });
    dispatchMenu({ type: "close" });
  };
  return (
    <header className="sticky top-0 z-20 bg-purple">
      <section className="mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 justify-between max-w-screen-lg mx-auto px-4 h-16 md:h-20 ">
          <div className="hidden md:block"></div>

          <Logo></Logo>

          <div className="flex my-auto justify-end">
            <button
              className="flex my-auto cursor-pointer"
              onClick={handleClickSearch}
            >
              {/* search icon small */}
              <div className="flex items-center justify-content mr-4 md:hidden focus:outline-none focus:ring focus:border-blue-300">
                <FaSearch size="2em" color="white" />
              </div>

              {/* bar icon small */}
              <div className="flex items-center justify-content mr-1 hidden md:block">
                <FaSearch color="white" size="2.5em" />
              </div>

              <div className="text-white my-auto text-lg md:text mr-4 hidden md:block">
                Zoeken
              </div>
            </button>

            <button
              className="flex my-auto cursor-pointer "
              onClick={handleClickMenu}
            >
              {/* search icon big */}
              <div className="flex items-center justify-content mr-1 md:hidden">
                <FaBars color="white" size="2em" />
              </div>

              {/* bar icon big */}

              <div className="flex items-center justify-content mr-1 hidden md:block">
                <FaBars color="white" size="2.5em" />
              </div>

              <span className="text-white text-lg my-auto md:text">Menu</span>
            </button>
          </div>
        </div>
      </section>
      <Nav />
    </header>
  );
};
