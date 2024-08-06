import React, { createContext, useEffect, useState } from "react";
import { FormCateData, ICategory } from "../interface/category";
import {
  AddCate,
  EditCate,
  GetAllCate,
  RemoveCate,
  GetCateById,
} from "../services/category.service";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export const CategoryCT = createContext({} as any);

const CategoryContext = ({ children }: Props) => {
  const [categories, setCategory] = useState<ICategory[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await GetAllCate();
      setCategory(data);
    })();
  }, []);

  const onDeleteCate = async (id: number | string) => {
    if (confirm("Bạn có chắc muốn xóa không?")) {
      try {
        await RemoveCate(id);
        alert("Xóa thành công!");
        const newcategories = categories.filter(
          (category) => category.id !== id
        );
        setCategory(newcategories);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onAddCate = async (data: FormCateData) => {
    try {
      const category = await AddCate(data);
      alert("Thêm danh mục thành công!");
      setCategory([...categories, category]);
      navigate("/admin/list-category");
    } catch (error) {
      console.error(error);
    }
  };

  const onEditCate = async (data: FormCateData, id: number | string) => {
    try {
      const resdata = await EditCate(data, id);
      alert("Sửa danh mục thành công!");
      const newcategory = categories.map((category) =>
        category.id === id ? resdata : category
      );
      setCategory(newcategory);
      navigate("/admin/list-category");
    } catch (error) {
      console.error(error);
    }
  };

  const getId = async (id: number | string) => {
    try {
      const category = await GetCateById(id);
      return category;
    } catch (error) {}
  };

  return (
    <CategoryCT.Provider
      value={{ categories, onAddCate, onDeleteCate, onEditCate, getId }}
    >
      {children}
    </CategoryCT.Provider>
  );
};

export default CategoryContext;
