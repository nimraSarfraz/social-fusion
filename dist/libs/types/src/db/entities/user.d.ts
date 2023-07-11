export declare enum UserStatusEnum {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    DEACTIVATE = "DEACTIVATE",
    UNVERIFIED = "UNVERIFIED"
}
export declare enum UserRoleEnum {
    ADMIN = "ADMIN",
    MEMBER = "MEMBER",
    SUPERADMIN = "SUPERADMIN"
}
export declare enum SocialProviderEnum {
    GOOGLE = "google",
    FACEBOOK = "FACEBOOK"
}
export interface IUser {
    id?: string;
    email: string;
    password?: string;
    status?: UserStatusEnum;
    role?: UserRoleEnum;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface IUserParams {
    email: string;
    status?: UserStatusEnum;
    password?: string;
    role?: UserRoleEnum;
    disabled?: boolean;
}
