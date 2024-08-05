import { useContext } from "react";
import { FormCateData } from "./../../../interface/category";
import { useForm } from "react-hook-form";
import { CategoryCT } from "./../../../context/category.context";

const AddCategory = () => {
  const { onAddCate } = useContext(CategoryCT);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormCateData>();
  const onSubmit = (data: FormCateData) => {
    onAddCate(data);
  };

  return (
    <div className="min-h-[610px]">
      <div className="p-6 mx-auto mt-10">
        <h1 className="my-5 text-3xl font-bold text-center">THÊM DANH MỤC</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-10"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Tên Danh Mục"
              {...register("name", { required: true, min: 3 })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <span className="absolute left-0 mt-1 text-red-600 text-s top-full">
                Tên danh mục tối thiểu 3 kí tự!
              </span>
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Link Ảnh Danh Mục"
              {...register("image", { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.image && (
              <span className="absolute left-0 mt-1 text-red-600 text-s top-full">
                Vui lòng thêm ảnh!
              </span>
            )}
          </div>
          <button
            type="submit"
            className="flex items-center justify-center p-2 mx-auto mt-auto font-semibold text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Thêm Danh Mục
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
