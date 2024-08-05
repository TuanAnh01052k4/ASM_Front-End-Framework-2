import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { AppCT } from "../../context/appContext";
import Login from "../main/home/Login";
import Register from "../main/home/Register";
import MessageBox from "../main/home/Message";
import { cartCT } from "../../context/cart";

const Header = () => {
  const [info, setInfo] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const { cart } = useContext(cartCT);
  const { AppState, dispatch } = useContext(AppCT);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    const { keywords } = data;
    navigate(`/search?keywords=${keywords}`);
  };
  return (
    <header className="w-full bg-custom-gradient">
      <div className="container flex items-center justify-between max-w-4xl px-4 py-4 mx-auto">
        <div className="relative w-full max-w-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("keywords")}
              placeholder="Search here..."
              className="w-full py-2 pl-4 pr-12 text-gray-700 placeholder-gray-500 transition duration-300 ease-in-out border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-4.35-4.35m2.35-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                ></path>
              </svg>
            </button>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-4">
            <div className="flex items-center px-16 space-x-2 text-white group">
              <a href="#" className="group-hover:text-yellow-300">
                En
              </a>
              <svg
                className="w-4 h-4 text-gray-800 dark:text-white group-hover:text-amber-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <div className="px-6">
                <div className="relative ml-3">
                  <div>
                    <button
                      onClick={() => setInfo(!info)}
                      type="button"
                      className="relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>
                  {info && (
                    <div
                      className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex={-1}
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-1"
                      >
                        Settings
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-2"
                      >
                        Sign out
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-white hover:text-yellow-300">
              <svg
                className="hover:text-yellow-300 w-[24px] h-[24px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                />
              </svg>
              <a href="#" className="hover:text-yellow-300">
                Cart
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End top header */}
      <div className="w-[1200px] h-[0px] border border-neutral-200 mx-auto"></div>
      {/* end hr */}
      <nav className="w-full py-4">
        <ul className="flex justify-center px-6 mx-auto space-x-16 ">
          <li className="flex"></li>
          <div className="flex items-center justify-center px-4 py-2 mx-auto">
            <nav className="flex items-center space-x-1.5">
              <NavLink to={""} className="flex items-center px-10 text-white">
                Trang Chủ
              </NavLink>
              <NavLink
                to={"products"}
                className="flex items-center px-10 text-white"
              >
                Loại Sản Phẩm
                <img className="pl-1" src="/src/assets/image/down.svg" />
              </NavLink>
              <NavLink to={""} className="flex items-center px-10 text-white">
                Giỏ hàng
                ({cart})
              </NavLink>
              <NavLink
                to={""}
                className="flex items-center px-10 text-white"
                onClick={() => {
                  dispatch({ type: "register", value: true });
                  dispatch({ type: "login", value: false });
                }}
              >
                Đăng ký
              </NavLink>
              <NavLink
                to={""}
                className="flex items-center px-10 text-white"
                onClick={() => {
                  dispatch({ type: "login", value: true });
                  dispatch({ type: "register", value: false });
                }}
              >
                Đăng nhập
              </NavLink>
            </nav>
          </div>
        </ul>
      </nav>
      {AppState.isLogin && (
        <>
          <Login />
        </>
      )}
      {AppState.isRegister && (
        <>
          <Register />
        </>
      )}
      {AppState.Message.status && (
        <>
          <MessageBox />
        </>
      )}
    </header>
  );
};

export default Header;
