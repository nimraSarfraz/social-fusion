import { User } from '../user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthHelper {
    private readonly repository;
    private readonly configService;
    private readonly jwt;
    constructor(jwt: JwtService);
    isPasswordValid(password: string, userPassword: string): boolean;
    encodePassword(password: string): Promise<string>;
    generateToken(user: User): string;
    decode(token: string): Promise<unknown>;
    validateUser(decoded: any): Promise<User>;
}
