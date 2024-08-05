import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IProduct } from "../../interface/product";
import { GetCateById } from "../../services/category.service"; // Service mới tạo

const CategoryProducts = () => {
  const { id } = useParams();
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      const data = await GetCateById(id as string | number);
      setProducts(data);
    })();
  }, [id]);

  return (
    <div>
      <h1>Products in Category {id}</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-48"
            />
            <h2 className="mt-2 text-xl font-bold">{product.name}</h2>
            <p className="mt-1 text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
