import { IProduct } from "../../../interface/product";
import { Link } from "react-router-dom";

type Props = {
  product: IProduct;
};

const ProductItem = ({ product }: Props) => {
  return (
    <>
      <div className="mx-auto">
        <div className="group bg-white p-4 rounded-lg shadow-md max-w-xs mx-auto w-[350px]">
          <div className="relative mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[300px] object-contain rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black opacity-0 bg-opacity-20 group-hover:opacity-100">
              <div className="flex space-x-4">
                <button className="p-2 text-gray-900 bg-white rounded-full shadow-md hover:bg-lime-700">
                  <svg
                    className="w-6 h-6 text-gray-800 svg-icon hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="button-svg-path"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.1"
                      d="M6 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V9a3 3 0 0 0-3-3h-3m1.5-2-2 2 2 2"
                    />
                  </svg>
                </button>
                <button className="p-2 text-gray-900 bg-white rounded-full shadow-md hover:bg-lime-700">
                  <svg
                    className="w-6 h-6 text-gray-800 svg-icon hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="button-svg-path"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.1"
                      d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
                    />
                  </svg>
                </button>
                <button className="p-2 text-gray-900 bg-white rounded-full shadow-md hover:bg-lime-700">
                  <svg
                    className="w-6 h-6 text-gray-800 svg-icon hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="button-svg-path"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.1"
                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Link
              to={`/product-single/${product.id}`}
              className="text-lg font-semibold text-stone-600 group-hover:text-red-400"
            >
              {product.name}
            </Link>
            <div className="flex mt-3 space-x-6">
              <p className="text-sm font-semibold group-hover:text-red-400 text-stone-600">
                {product.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
