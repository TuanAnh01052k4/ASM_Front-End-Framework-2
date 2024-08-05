import api from "../config/axios";
import { FormCateData } from "../interface/category";

export const GetAllCate = async () => {
  try {
    const { data } = await api.get("categories");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const GetCateById = async (id: number | string) => {
  try {
    const { data } = await api.get(`categories/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const AddCate = async (CateData: FormCateData) => {
  try {
    const { data } = await api.post(`categories`, CateData);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const EditCate = async (CateData: FormCateData, id: number | string) => {
  try {
    const { data } = await api.put(`categories/${id}`, CateData);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const RemoveCate = async (id: number | string) => {
  try {
    const { data } = await api.delete(`categories/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};
