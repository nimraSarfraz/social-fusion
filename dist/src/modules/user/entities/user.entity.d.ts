import { IUserParams, IUser, UserStatusEnum, UserRoleEnum, SocialProviderEnum } from '@lib/types';
export declare class User implements IUser {
    constructor(params?: IUserParams);
    readonly id: string;
    readonly email: string;
    password?: string;
    status: UserStatusEnum;
    role: UserRoleEnum;
    SocialProvider?: SocialProviderEnum;
    disabled?: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    setStatus(status: UserStatusEnum): void;
    setRole(role: UserRoleEnum): void;
    setPassword(password: string): Promise<void>;
}
