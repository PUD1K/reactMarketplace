import { IShop } from "./ShopInterface";
import { ISubcategory } from "./SubcategryInterface";

export interface ICategory{
    id: number;
    name: string,
    slug: string,
    image: string,
    subCategories: ISubcategory[],
    shop: IShop
}