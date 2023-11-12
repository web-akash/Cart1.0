import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 w-full z-[9999] ">
      <nav className="bg-[#F5F5F5] border-b border-[#e2e9ee]">
        <div className="max-w-screen-2xl mx-auto relative px-2 md:px-20">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-2xl font-bold">Shop Cart</h1>
              </Link>
            </div>
            {/* <div className="md:block hidden">
              <Search onClick={handleSearch}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search…"
                  sx={{ border: "1px solid black", borderRadius: "25px" }}
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </div> */}

            {/* Large Devices */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                <Link to="/">
                  <button
                    className="btn2 text-xs  px-6 py-2 relative border rounded-md text-[white] border-[#F5F5F5]  tracking-wider leading-none overflow-hidden hover:text-white"
                    type="button"
                  >
                    <span className="absolute inset-0 bg-black"></span>
                    <span className="absolute inset-0 flex justify-center items-center">
                      Home
                    </span>
                    Home
                  </button>
                </Link>
                <Link to="/cart">
                  <button
                    className="btn2 text-xs  px-6 py-2 relative border rounded-md text-[white] border-[#F5F5F5]  tracking-wider leading-none overflow-hidden hover:text-white"
                    type="button"
                  >
                    <span className="absolute inset-0 bg-black"></span>
                    <span className="absolute inset-0 flex justify-center items-center">
                      Shop
                    </span>
                    Shop
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Toogle */}
          <div className="-mr-2 flex md:hidden absolute right-5 top-3">
            <button
              onClick={toggleNavbar}
              type="button"
              className="text-[#333] inline-flex items-center justify-center p-2 rounded-md  hover:text-[#333]  focus:outline-none    "
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Devices */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden `}>
          <div className="px-2 pt-2 pb-3 space-y-1  sm:px-3 h-[100vh] text-center mt-20">
            <Link
              onClick={() => setIsOpen(!isOpen)}
              to="/"
              className="text-[white] hover:border-b block px-3 py-2 rounded-md  text-lg font-medium"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              to="/cart"
              className="text-[white] hover:border-b block px-3 py-2 rounded-md  text-lg font-medium"
            >
              Services
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
