import { useContext, useState, useEffect } from "react";
import ProductItem from "../product-item/product-item";
import { ProductCT } from "../../../context/product.context";
import { IProduct } from "../../../interface/product";
import { CategoryCT } from "../../../context/category.context";
import { ICategory } from "../../../interface/category";
import { Link, useLocation } from "react-router-dom";

const ProductPageMain = () => {
  const { products } = useContext(ProductCT);
  const { categories } = useContext(CategoryCT);
  const location = useLocation();

  // State để lưu trữ danh mục được chọn (theo name)
  const [selectedCategoryName, setSelectedCategoryName] = useState<
    string | null
  >(null);

  useEffect(() => {
    // Lấy id từ URL và tìm name tương ứng từ danh mục
    const params = new URLSearchParams(location.search);
    const categoryId = params.get("category");

    if (categoryId) {
      const category = categories.find((cat: any) => cat.id === categoryId);
      setSelectedCategoryName(category ? category.name : null);
    } else {
      setSelectedCategoryName(null);
    }
  }, [location.search, categories]);

  // Hàm để xử lý khi checkbox thay đổi và cập nhật URL
  const handleCategoryChange = (categoryId: string) => {
    const category = categories.find((cat: any) => cat.id === categoryId);
    const newCategoryName =
      selectedCategoryName === category?.name ? null : category?.name;

    setSelectedCategoryName(newCategoryName);

    // Cập nhật URL
    const url = new URL(window.location.href);
    url.searchParams.set("category", newCategoryName ? categoryId : "");
    window.history.pushState({}, "", url.toString());
  };

  // Lọc sản phẩm dựa trên danh mục được chọn
  const filteredProducts =
    selectedCategoryName === null
      ? products
      : products.filter(
          (product: IProduct) => product.category === selectedCategoryName
        );

  return (
    <div>
      <div className="container px-4 py-12 mx-auto">
        <div className="flex items-center mb-6 ml-6 space-x-24">
          <div className="flex items-center space-x-4">
            <label htmlFor="sort" className="text-gray-700">
              Sort By:
            </label>
            <select id="sort" className="p-2 border border-gray-300 rounded-md">
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="show" className="text-gray-700">
              Show:
            </label>
            <select id="show" className="p-2 border border-gray-300 rounded-md">
              <option>Default</option>
              <option>50 per page</option>
              <option>100 per page</option>
            </select>
          </div>
        </div>

        <div className="flex">
          <div className="grid flex-grow grid-cols-3 gap-6">
            {filteredProducts.map((product: IProduct) => (
              <Link to={`/deital/${product.id}`}>
                <ProductItem key={product.id} product={product} />
              </Link>
            ))}
          </div>

          <div className="w-1/4 ml-6">
            <h2 className="text-[#505F4E] font-Baloo font-medium text-[36px] mb-2">
              Kategorien
            </h2>
            <div className="p-4 mb-6 bg-white rounded-md shadow-md">
              <ul className="space-y-2">
                {categories.map(
                  (category: ICategory, index: number | string) => (
                    <li key={index}>
                      <label>
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={selectedCategoryName === category.name}
                          onChange={() => handleCategoryChange(category.id)}
                        />
                        {category.name}
                      </label>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="relative max-w-sm overflow-hidden bg-white rounded-lg shadow-md">
              <img
                src="/public/anniesprattncq2sguvlgounsplash-1@2x.png"
                alt="Plants"
                className="object-cover w-full h-auto"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-center p-6 bg-black bg-opacity-25">
                <h2 className="absolute mb-2 text-2xl font-bold leading-tight text-white top-12">
                  Grow your own
                  <br />
                  favourite plant
                </h2>
                <button className="absolute px-4 py-2 mt-4 font-semibold text-gray-900 transition bg-white rounded-md shadow-md bottom-12 hover:bg-gray-100">
                  Shop Now <span className="ml-2">&rarr;</span>
                </button>
              </div>
            </div>
            <div className="p-4 bg-white rounded-md shadow-md">
              <h4 className="mb-2 text-lg text-gray-700">Filter By Price</h4>
              <div className="space-y-4">
                <p>From $0 to $500</p>
                <input type="range" className="w-full" min="0" max="500" />
              </div>
              <div className="mt-6">
                <h4 className="mb-2 text-lg text-gray-700">Filter By Size</h4>
                <div className="space-y-4">
                  <p>2 mm by 50</p>
                  <input type="range" className="w-full" min="0" max="50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageMain;
