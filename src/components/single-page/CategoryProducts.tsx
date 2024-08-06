import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductCT } from "../../context/product.context";
import { CategoryCT } from "../../context/category.context";
import { IProduct } from "../../interface/product";
import ProductItem from "../product/product-item/product-item";

const CategoryProducts = () => {
  const { id } = useParams();
  const { products } = useContext(ProductCT);
  const { categories } = useContext(CategoryCT);
  const [selectedCategoryName, setSelectedCategoryName] = useState<
    string | null
  >(null);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    // Lấy tên danh mục từ ID
    const category = categories.find((cat) => cat.id.toString() === id);
    if (category) {
      setSelectedCategoryName(category.name);
      const filtered = products.filter(
        (product) => product.category === category.name
      );
      setFilteredProducts(filtered);
    } else {
      setSelectedCategoryName(null);
      setFilteredProducts([]);
    }
  }, [id, categories, products]);

  return (
    <div className="container mx-auto my-10">
      <h1>Sản phẩm thuộc danh mục: {selectedCategoryName}</h1>
      
        <div className="grid grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (<Link to={`/deital/${product.id}`}>
              <ProductItem key={product.id} product={product} /></Link>
            ))
          ) : (
            <p>Không có sản phẩm nào trong danh mục này.</p>
          )}
        </div>
      
    </div>
  );
};

export default CategoryProducts;
