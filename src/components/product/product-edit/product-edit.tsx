import { useContext, useEffect } from "react";
import { ProductCT } from "../../../context/product.context";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { GetById } from "../../../services/product.service";
import { CategoryCT } from "../../../context/category.context";
import { ICategory } from "../../../interface/category";

const ProductEdit = () => {
  const { onEdit } = useContext(ProductCT);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const param = useParams();
  const { categories } = useContext(CategoryCT);

  useEffect(() => {
    (async () => {
      const product = await GetById(param?.id as string | number);
      if (product) {
        reset({
          name: product.name,
          image: product.image,
          price: product.price,
          category: product.category,
        });
      }
    })();
  }, []);
  const onSubmit = (data: FormData) => {
    onEdit(data, param?.id as string | number);
  };
  return (
    <div className="min-h-[610px]">
      <div className="p-6 mx-auto mt-10">
        <h1 className="my-5 text-3xl font-bold text-center">
          CẬP NHẬT SẢN PHẨM
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-10"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Tên Sản Phẩm"
              {...register("name", { required: true, min: 6 })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <span className="absolute left-0 mt-1 text-red-600 text-s top-full">
                Tên sản phẩm tối thiểu 6 kí tự!
              </span>
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Link Ảnh Sản Phẩm"
              {...register("image", { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.image && (
              <span className="absolute left-0 mt-1 text-red-600 text-s top-full">
                Vui lòng thêm ảnh!
              </span>
            )}
          </div>
          <div className="relative">
            <input
              type="number"
              placeholder="Giá Sản Phẩm"
              {...register("price", { required: true, pattern: /^\d*$/ })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.price && (
              <span className="absolute left-0 mt-1 text-red-600 text-s top-full">
                Giá sản phẩm không âm!
              </span>
            )}
          </div>
          <div className="relative">
            <select
              {...register("category", { required: true, min: 3 })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Chọn Danh Mục</option>
              {categories.map((category: ICategory, index: number) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <span className="absolute left-0 mt-1 text-red-600 text-s top-full">
                Danh mục tối thiểu 3 kí tự!
              </span>
            )}
          </div>
          <button
            type="submit"
            className="flex items-center justify-center p-2 px-5 mx-auto font-semibold text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Cập Nhật Sản Phẩm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductEdit;
