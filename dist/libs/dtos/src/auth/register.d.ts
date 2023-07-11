import { type IUser } from '@lib/types';
export declare class UserRegisterRequestDto implements IUser {
    readonly email: string;
    password: string;
}
