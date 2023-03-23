import { IShop } from "./ShopInterface";
import { ISubcategory } from "./SubcategryInterface";

export interface ICategory{
    name: string,
    slug: string,
    image: string,
    subCategories: ISubcategory[],
    shop: IShop
}