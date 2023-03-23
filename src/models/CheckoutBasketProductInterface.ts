import { IBasketProduct } from "./BasketProductInterface";
import { IShop } from "./ShopInterface";
import { ISubcategory } from "./SubcategryInterface";

export interface ICheckoutBasketProduct{
    id: number,
    basketProduct: IBasketProduct,
}