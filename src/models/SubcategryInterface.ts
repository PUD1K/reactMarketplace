import { ICategory } from "./CategoryInterface";

export interface ISubcategory{
    id: number,
    name: string,
    slug: string,
    description: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    category: ICategory,
}