import { useContext } from "react";
import { ProductCT } from "../../../context/product.context";
import { IProduct } from "../../../interface/product";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products, onDelete } = useContext(ProductCT);
  return (
    <>
      <div className="min-h-auto">
        <h1 className="my-5 text-3xl font-bold text-center">
          DANH SÁCH SẢN PHẨM
        </h1>
        <table className="min-w-full text-center bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 text-xs font-semibold tracking-wider text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                STT
              </th>
              <th className="px-4 py-2 text-xs font-semibold tracking-wider text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Tên Sản Phẩm
              </th>
              <th className="px-4 py-2 text-xs font-semibold tracking-wider text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Ảnh Sản Phẩm
              </th>
              <th className="px-4 py-2 text-xs font-semibold tracking-wider text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Giá Sản Phẩm
              </th>
              <th className="px-4 py-2 text-xs font-semibold tracking-wider text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Danh Mục
              </th>
              <th className="px-4 py-2 text-xs font-semibold tracking-wider text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Thao Tác
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: IProduct, i: number) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b border-gray-200">{i + 1}</td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {product.name}
                </td>
                <td className="flex items-center justify-center px-4 py-2 border-b border-gray-200">
                  <img src={product.image} width={90} alt={product.name} />
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {product.price}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {product.category}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  <Link
                    to={`edit/${product.id}`}
                    className="px-4 py-1 mr-2 text-sm text-white bg-yellow-500 rounded"
                  >
                    Sửa
                  </Link>
                  <button
                    onClick={() => onDelete(product.id)}
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

export default ProductList;
