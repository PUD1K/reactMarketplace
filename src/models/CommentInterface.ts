import { IUser } from "./UserInterface";

export interface IComment{
    id: number,
    dignites: string,
    disadvantages: string,
    comment: string,
    score: number,
    productId: number,
    userId: number,
    user: IUser,
    createdAt: string,
    updatedAt: string
}