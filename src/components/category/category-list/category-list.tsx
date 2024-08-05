import { useContext } from "react";
import { CategoryCT } from "../../../context/category.context";
import { ICategory } from "../../../interface/category";
import { Link } from "react-router-dom";

const ListCate = () => {
  const { categories, onDeleteCate } = useContext(CategoryCT);
  return (
    <>
      <div className="min-h-auto">
        <h1 className="my-5 text-3xl font-bold text-center">
          DANH SÁCH DANH MỤC
        </h1>
        <table className="min-w-full text-center bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 text-xs font-semibold tracking-wider text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                STT
              </th>
              <th className="px-4 py-2 text-xs font-semibold tracking-wider text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Tên Danh Mục
              </th>
              <th className="px-4 py-2 text-xs font-semibold tracking-wider text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Ảnh Danh Mục
              </th>
              <th className="px-4 py-2 text-xs font-semibold tracking-wider text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Thao Tác
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category: ICategory, i: number) => (
              <tr key={category.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b border-gray-200">{i + 1}</td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {category.name}
                </td>
                <td className="flex items-center justify-center px-4 py-2 border-b border-gray-200">
                  <img src={category.image} width={90} />
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  <Link
                    to={`edit-category/${category.id}`}
                    className="px-4 py-1 mr-2 text-sm text-white bg-yellow-500 rounded"
                  >
                    Sửa
                  </Link>
                  <button
                    onClick={() => onDeleteCate(category.id)}
                    className="px-4 py-1 text-sm text-white bg-red-500 rounded"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListCate;
