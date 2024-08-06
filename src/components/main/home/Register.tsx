import { useContext } from "react";
import { AppCT } from "../../../context/appContext";
import { useForm } from "react-hook-form";
import api from "../../../config/axios";
export interface IUser {
  id?: number | string;
  name?: string;
  email: string;
  password: string;
}

const Register = () => {
  const { dispatch } = useContext(AppCT);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();
  const submitForm = async (STdata: IUser, e: any) => {
    try {
      const { data } = await api.post(`users`, STdata);
      e.preventDefault();
      dispatch({ type: "message", value: true, text: "Đăng ký thành công!" });
    } catch (error) {
      alert("Tên đăng nhập & Email đã tồn tại!");
    }
  };
  return (
    <div className="bg-black bg-opacity-50 fixed top-[0%] w-full h-full z-50 pt-52">
      <div className="p-10 border border-solid box-user">
        <h3 className="text-center text-[24px]">Đăng ký</h3>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(submitForm)}
        >
          <input
            type="text"
            className="px-6 py-2 border border-solid rounded"
            placeholder="Họ tên"
            {...register("name", { required: true, min: 6 })}
          />
          {errors.name && (
            <span className="absolute left-0 mt-1 text-red-600 text-s top-full">
              Họ tên tối thiểu 6 kí tự!
            </span>
          )}
          <input
            type="text"
            className="px-6 py-2 border border-solid rounded"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^\S+@(\S+\.)+\S{2,6}$/,
            })}
          />
          {errors.email && (
            <span className="absolute left-0 mt-1 text-red-600 text-s top-full">
              Email không đúng định dạng!
            </span>
          )}
          <input
            type="password"
            className="px-6 py-2 border border-solid rounded"
            placeholder="Mật khẩu"
            {...register("password", { required: true, min: 6 })}
          />
          {errors.password && (
            <span className="text-red-600">Tối thiểu 6 kí tự</span>
          )}
          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="p-3 border border-transparent rounded-lg hover:bg-gray-100"
            >
              Đăng ký
            </button>
            <button
              className="p-3 ml-1 border border-transparent rounded-lg hover:bg-gray-100"
              onClick={() => dispatch({ type: "register", value: false })}
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

export default Register;
