import { useContext } from "react";
import { ProductCT } from "../../../context/product.context";
import { IProduct } from "../../../interface/product";
import { Link } from "react-router-dom";
import ProductItem from "../../product/product-item/product-item";

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
            <Link to={`/deital/${product.id}`}>
              <div style={{ display: "inline-block", minWidth: "350px" }}>
                <ProductItem key={product.id} product={product} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sellers;
