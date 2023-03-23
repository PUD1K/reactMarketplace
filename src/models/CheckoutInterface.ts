import { ICheckoutBasketProduct } from "./CheckoutBasketProductInterface";
import { IShop } from "./ShopInterface";
import { ISubcategory } from "./SubcategryInterface";

export interface ICheckout{
    id: number,
    totalSum: number,
    number: number,
    address: string;
    userId: number,
    createdAt: string;
    updatedAt: string;
    CheckoutBasketProducts: ICheckoutBasketProduct[];
}