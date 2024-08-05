export interface ICategory {
    id: number|string
    name: string,
    image: string
}
export type FormCateData = Pick<ICategory,'name'|'image'>