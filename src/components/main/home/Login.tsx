import { useContext } from "react";
import { AppCT } from "../../../context/appContext";

const Login = () => {
  const { dispatch } = useContext(AppCT);
  return (
    <div className="bg-black bg-opacity-50 fixed top-[0%] w-full h-full z-50 pt-52">
      <div className="p-10 border border-solid box-user">
        <h3 className="text-center text-[24px]">Đăng nhập</h3>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            className="px-6 py-2 border border-solid rounded"
            placeholder="Email"
          />
          <input
            type="password"
            className="px-6 py-2 border border-solid rounded"
            placeholder="Mật khẩu"
          />
          <div className="flex justify-center gap-4">
            <button type="submit">Đăng nhập</button>
            <button
              onClick={() => dispatch({ type: "login", value: false })}
              type="button"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
