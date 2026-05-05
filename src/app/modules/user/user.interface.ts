import { Types } from "mongoose";

export enum Role {
    ADMIN = "ADMIN",
    STAFF = "STAFF",
    STUDENT = "STUDENT",
}

export interface IUser {
    _id?: Types.ObjectId;
    name: string;
    email: string;
    password: string;
    picture?: string;
    phone: string;
    role: Role;
    address: string;
}
