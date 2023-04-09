import { ICategory } from "./CategoryInterface"
import { IProduct } from "./ProductInterface"
import { IUser } from "./UserInterface"

export interface IShop{
    id: number,
    name: string,
    slug: string,
    description: string,
    image: string,
    categories: ICategory[],
    products: IProduct[],
    users: IUser[],
    createdAt: string,
    updatedAt: string
}