import { useContext } from "react";
import { CategoryCT } from "../../../context/category.context";
import { ICategory } from "../../../interface/category";
import { Link } from "react-router-dom";

const Kategorien = () => {
  const { categories } = useContext(CategoryCT);
  // console.log(categories);

  return (
    <div>
      <h1 className="mx-auto w-full px-12 py-4 text-[30px] text-[#505F4E] font-Baloo font-medium">
        Kategorien
      </h1>
      {/* end span */}
      <div className="w-full h-[0px] border border-gray-200"></div>
      {/* end hr */}
      <div className="w-full p-12 mx-auto">
        <div className="grid grid-cols-4 gap-1">
          {categories.map((category: ICategory) => (
            <Link to={`category/${category.id}`}>
              <div
                key={category.id}
                className=" group relative w-[303px] h-[374px] mx-auto "
              >
                <img
                  className="object-contain "
                  src={category.image}
                  alt="Beleuchtung"
                />
                <div className="absolute p-1 text-sm font-semibold text-white shadow-lg group-hover:underline top-4 right-4">
                  {category.name}
                  <br />
                  30 items
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kategorien;
