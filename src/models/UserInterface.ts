import { IBasket } from "./BasketInterface";
import { IRole } from "./RoleInterface";

export interface IUser {
    id: number;
    email: string;
    username: string,
    number: string;
    address: string;
    createdAt: string;
    updatedAt: string;
    roles: IRole[];
    basket: IBasket[];
}