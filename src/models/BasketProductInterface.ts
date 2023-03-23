import { IColor } from "./ColorInterface,";
import { IProduct } from "./ProductInterface";
import { IShop } from "./ShopInterface";
import { ISize } from "./SizeInterface";
import { ISubcategory } from "./SubcategryInterface";

export interface IBasketProduct{
    count: string,
    product: IProduct,
    color: IColor,
    Size: ISize
}