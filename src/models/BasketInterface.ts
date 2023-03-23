import { IColor } from "./ColorInterface,";
import { IProduct } from "./ProductInterface";
import { ISize } from "./SizeInterface";

export interface IBasket{
    id: number,
    count: number,
    basketId: number,
    productId: number,
    Size: ISize,
    color: IColor,
    product: IProduct
}