import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
import { UserRegisterRequestDto } from '@lib/dtos/auth/register';
import { AuthorizeResponseDto, GlobalResponseDto } from '@lib/dtos';
export declare class AuthService {
    private readonly repository;
    private readonly helper;
    private readonly configService;
    private readonly mailService;
    private readonly userService;
    private readonly jwt;
    constructor(jwt: JwtService);
    registerUser(body: UserRegisterRequestDto): Promise<User | never | GlobalResponseDto>;
    getUserByVerificationToken(token: string): Promise<User>;
    verifyEmail(token: string, res: any): Promise<any>;
    updateUserStatus(updateStatusDto: any): Promise<GlobalResponseDto>;
    login(loginDto: UserRegisterRequestDto): Promise<AuthorizeResponseDto>;
}
