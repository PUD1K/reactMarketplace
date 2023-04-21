import { IBasket } from "./BasketInterface";
import { IRole } from "./RoleInterface";
import { IShop } from "./ShopInterface";

export interface IUser {
    id: number;
    email: string;
    username: string,
    number: string;
    address: string;
    createdAt: string;
    updatedAt: string;
    shop: IShop;
    roles: IRole[];
    basket: IBasket[];
}