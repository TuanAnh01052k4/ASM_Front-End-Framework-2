import api from "../config/axios"

export const GetAlls = async ()=>{
    try {
        const {data} = await api.get('products')
        return data;
    } catch (error) {
        throw new Error('Lỗi')
    }
}

export const GetById = async (id:number|string) => {
    try {
        const {data} = await api.get(`products/${id}`)
        return data;
    } catch (error) {
        throw new Error('Lỗi')
    }
}

export const Add =  async (productData:FormData) =>{
    try {
        const {data} = await api.post(`products`,productData)
        return data;
    } catch (error) {
        throw new Error('Lỗi')
    }
}

export const Edit = async (productData:FormData, id:number|string) =>{
    try {
        const {data} = await api.put(`products/${id}`,productData)
        return data
    } catch (error) {
        throw new Error('Lỗi')
    }
}

export const Remove = async (id:number|string) =>{
    try {
        const {data} = await api.delete(`products/${id}`)
        return data
    } catch (error) {
        throw new Error('Lỗi')
    }
}