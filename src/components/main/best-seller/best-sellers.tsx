import { useContext } from "react";
import { ProductCT } from "../../../context/product.context";
import { IProduct } from "../../../interface/product";
import { Link } from "react-router-dom";

const Sellers = () => {
  const { products } = useContext(ProductCT);
  //sort product by price in assending order and take the first 4
  const sortedProducts = [...products]
    .sort((a, b) => a.price - b.price)
    .slice(0, 4);

  return (
    <div>
      <h1 className="mx-auto w-full px-12 py-6 text-[30px] text-[#505F4E] font-Baloo font-medium">
        Best Sellers
      </h1>
      <div className="w-full h-[0px] border border-gray-200"></div>
      <div className="w-full overflow-x-auto bg-white">
        <div
          className="flex p-4 pl-4 space-x-4 "
          style={{
            width: "calc(100% - 8px)",
            overflowX: "auto",
            whiteSpace: "nowrap",
          }}
        >
          {sortedProducts.map((product: IProduct) => (
            <Link to={`/deital/:${product.id}`}>
              <div
                key={product.id}
                className="max-w-xs p-4 mx-auto bg-white border border-gray-100 rounded-lg shadow-md group"
                style={{ display: "inline-block", minWidth: "350px" }}
              >
                {" "}
                {/* border border-gray-100 rounded-lg shadow-md*/}
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
                  <div className="text-lg font-semibold text-stone-600 group-hover:underline">
                    {product.name}
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="text-xs font-semibold capitalize text-neutral-500 font-open-sans group-hover:underline ">
                      {product.category}
                    </div>
                    <div className="text-xs font-semibold capitalize text-stone-600 font-open-sans group-hover:underline">
                      ${product.price}.00
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sellers;
