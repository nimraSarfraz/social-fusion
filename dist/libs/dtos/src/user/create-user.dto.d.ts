import { UserStatusEnum, IUser, UserRoleEnum } from '@lib/types';
export declare class CreateUserDto {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    status?: UserStatusEnum;
    role?: UserRoleEnum;
    constructor(user: IUser);
}
