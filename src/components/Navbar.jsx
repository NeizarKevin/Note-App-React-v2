import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { LocalizationContext } from "../contexts/LocalizationContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { useLocalization } from "../hooks/useLocalization";
import { SiGoogletranslate } from "react-icons/si";
import { BsMoonFill, BsFillSunFill, BsFolderFill } from "react-icons/bs";
import { TbLogout, TbHome } from "react-icons/tb";

export const Navbar = () => {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const { toggleLocalization } = useContext(LocalizationContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const text = useLocalization("nav");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthUser(null);
    navigate("/");
  };
  return (
    <div className="px-10 flex justify-between items-center border-b-2 border-base-dark dark:bg-primary-dark">
      <h1 className="text-3xl my-10 text-center font-extrabold bg-gradient-to-r from-emerald-400 to-fuchsia-400 bg-clip-text text-transparent">
        DaftNote
      </h1>

      <div className="hidden lg:flex items-center">
        {authUser && (
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row">
            <Link
              to={"/"}
              className="flex items-center mx-2 font-semibold hover:border-b-4 hover:border-base-dark hover:text-base-dark dark:hover:border-white dark:text-white"
            >
              <TbHome />
              <span className="ml-2">{text.home}</span>
            </Link>
            <Link
              to={"/archive"}
              className="flex items-center mx-2 font-semibold hover:border-b-4 hover:border-base-dark hover:text-base-dark dark:hover:border-white dark:text-white"
            >
              <BsFolderFill />
              <span className="ml-2">{text.archive}</span>
            </Link>
          </div>
        )}

        <div>
          <button onClick={toggleLocalization} className="dark:text-white">
            <p className="flex items-center mx-2 font-semibold hover:border-b-4 hover:border-base-dark hover:text-base-dark dark:hover:border-white dark:text-white">
              <SiGoogletranslate />
              <span className="ml-2">{text.lang}</span>
            </p>
          </button>

          <button onClick={toggleTheme} className=" dark:text-white">
            {theme === "light" ? (
              <p className="flex items-center mx-2 font-semibold hover:border-b-4 hover:border-base-dark hover:text-base-dark dark:hover:border-white dark:text-white">
                <BsFillSunFill />
                <span className="ml-2">{text.light}</span>
              </p>
            ) : (
              <p className="flex items-center mx-2 font-semibold hover:border-b-4 hover:border-base-dark hover:text-base-dark dark:hover:border-white dark:text-white">
                <BsMoonFill />
                <span className="ml-2">{text.dark}</span>
              </p>
            )}
          </button>

          {authUser && (
            <button onClick={() => logout()}>
              <p className="flex items-center mx-2 font-semibold hover:border-b-4 hover:border-base-dark hover:text-base-dark dark:hover:border-white dark:text-white">
                <TbLogout />
                <span className="ml-2">{text.logout}</span>
              </p>
            </button>
          )}
        </div>
      </div>
      <button className="block lg:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-600 group">
        <div className="w-5 h-1 bg-secondary-dark mb-1"></div>
        <div className="w-5 h-1 bg-secondary-dark mb-1"></div>
        <div className="w-5 h-1 bg-secondary-dark mb-1"></div>
        <div className="absolute z-50 top-0 -right-full h-screen w-8/12 bg-white dark:bg-base-dark dark:text-white opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
          {authUser && (
            <div className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
              <Link
                to={"/"}
                className="hover:text-violet-600 m-auto py-4 w-full"
              >
                <span className="ml-2">{text.home}</span>
              </Link>
              <Link
                to={"/archive"}
                className="hover:text-violet-600 m-auto py-4 w-full"
              >
                <span className="ml-2">{text.archive}</span>
              </Link>
              <button onClick={toggleLocalization}>
                <p className="hover:text-violet-600 m-auto py-4 w-full">
                  <span className="ml-2">{text.lang}</span>
                </p>
              </button>

              <button onClick={toggleTheme}>
                {theme === "light" ? (
                  <p className="hover:text-violet-600 m-auto py-4 w-full">
                    <span className="ml-2">{text.light}</span>
                  </p>
                ) : (
                  <p className="hover:text-violet-600 m-auto py-4 w-full">
                    <span className="ml-2">{text.dark}</span>
                  </p>
                )}
              </button>

              {authUser && (
                <button onClick={() => logout()}>
                  <p className="hover:text-violet-600 m-auto py-4 w-full">
                    <span className="ml-2">{text.logout}</span>
                  </p>
                </button>
              )}
            </div>
          )}
        </div>
      </button>
    </div>
  );
};
