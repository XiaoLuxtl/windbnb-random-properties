import { useContext } from "react";
import { LocationContext } from "../context/location";

export function Navbar() {
  const { country, city } = useContext(LocationContext);
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 transition-all ease-in">
        <div className="w-11/12 max-w-11/12 md:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8">
          {/* Logo  */}
          <a href="#" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
            >
              <path
                d="M6.22724 1.5C7.38194 -0.500001 10.2687 -0.5 11.4234 1.5L17.0526 11.25C18.2073 13.25 16.7639 15.75 14.4545 15.75H3.19615C0.88675 15.75 -0.556624 13.25 0.598076 11.25L6.22724 1.5Z"
                fill="#EB5757"
              />
            </svg>

            <span className="pl-2 self-center text-2xl poppins font-bold whitespace-nowrap dark:text-white">
              windbnb
            </span>
          </a>

          {/* Search */}
          <div className="flex rounded-xl dark:shadow-stone-600 shadow md:order-2">
            {/* Location */}
            <div className="text-gray-900 text-sm border-r dark:border-stone-600 dark:text-stone-100 p-2.5 ">
              {city}, {country}
            </div>
            {/* Geusts */}
            <div className="text-gray-900 text-sm border-r dark:border-stone-600 dark:text-stone-100 p-2.5">
              Add guests
            </div>
            {/* Search icon */}
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="text-[#EB5757] hover:text-[rgb(237,120,120)] text-sm p-2.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="currentColor"
              >
                <path
                  d="M12.5006 11.0006H11.7106L11.4306 10.7306C12.6306 9.33063 13.2506 7.42063 12.9106 5.39063C12.4406 2.61063 10.1206 0.390626 7.32063 0.0506256C3.09063 -0.469374 -0.469374 3.09063 0.0506256 7.32063C0.390626 10.1206 2.61063 12.4406 5.39063 12.9106C7.42063 13.2506 9.33063 12.6306 10.7306 11.4306L11.0006 11.7106V12.5006L15.2506 16.7506C15.6606 17.1606 16.3306 17.1606 16.7406 16.7506C17.1506 16.3406 17.1506 15.6706 16.7406 15.2606L12.5006 11.0006ZM6.50063 11.0006C4.01063 11.0006 2.00063 8.99063 2.00063 6.50063C2.00063 4.01063 4.01063 2.00063 6.50063 2.00063C8.99063 2.00063 11.0006 4.01063 11.0006 6.50063C11.0006 8.99063 8.99063 11.0006 6.50063 11.0006Z"
                  fill="currentColor"
                  fillOpacity="0.9"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            {/* Hamburguer icon */}
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Mexico..."
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
