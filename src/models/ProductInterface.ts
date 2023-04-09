import { IComment } from "./CommentInterface";
import { IShop } from "./ShopInterface";
import { ISubcategory } from "./SubcategryInterface";

export interface IProduct{
    id: number,
    name: string,
    description: string,
    manufacturer: string,
    count: string,
    article: string,
    price: number,

    volume: string,
    sctructure: string,
    color: string,
    size: string,
    material: string,
    country: string,
    configuration: string,
    cpu: string,
    gpu: string,
    ram: string,
    matrix: string,
    diagonal: string,
    image: string,
    subCategory: ISubcategory,
    shop: IShop,
    comments: IComment[],

    totalRating: number,
    commentsCount: number
}