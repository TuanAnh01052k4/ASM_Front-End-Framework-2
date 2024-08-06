import { useContext } from "react";
import ProductPageMain from "../productPageMain/product-main";
import { CategoryCT } from "../../../context/category.context";
import { ICategory } from "../../../interface/category";
import { ProductCT } from "../../../context/product.context";
import { IProduct } from "../../../interface/product";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const { products } = useContext(ProductCT);
  const { categories } = useContext(CategoryCT);
  // Tính số lượng sản phẩm cho từng danh mục
  const categoryProductCount = categories.reduce(
    (acc: { [key: string]: number }, category: ICategory) => {
      acc[category.name] = products.filter(
        (product: IProduct) => product.category === category.name
      ).length;
      return acc;
    },
    {} as { [key: string]: number }
  );
  // Kết hợp thông tin số lượng sản phẩm với danh mục
  const categoriesWithCount = categories.map((category: ICategory) => ({
    ...category,
    productCount: categoryProductCount[category.name] || 0,
  }));
  // Sắp xếp danh mục theo số lượng sản phẩm giảm dần
  const sortedCategories = categoriesWithCount.sort(
    (
      a: ICategory & { productCount: number },
      b: ICategory & { productCount: number }
    ) => b.productCount - a.productCount
  );
  // Chỉ lấy 4 danh mục có số lượng sản phẩm nhiều nhất
  const displayedCategories = sortedCategories.slice(0, 4);

  return (
    <div>
      <div className="w-full h-[163px] flex items-center [background:linear-gradient(97.31deg,_#b5dcb0,_rgba(249,_243,_238,_0))]">
        <h1 className="mx-auto w-full px-12 py-6 text-[40px] text-[#505F4E] font-Baloo font-medium">
          Sản Phẩm
        </h1>
      </div>
      {/* End banner */}
      <div className="flex items-center justify-around py-12 bg-white ">
        {displayedCategories.map((category: ICategory) => (
          <Link to={`/category/${category.id}`}>
            <div
              key={category.id}
              className="flex space-x-4 items-center p-4 bg-[#C6E3C1] rounded-md shadow-md hover:bg-gray-100"
            >
              <img src={category.image} alt="img" className="w-20 h-auto" />
              <p className="mt-2 text-gray-700">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
      {/* end */}
      <ProductPageMain />
    </div>
  );
};

export default ProductPage;
