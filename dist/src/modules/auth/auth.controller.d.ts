import { User } from '../user/entities/user.entity';
import { UserRegisterRequestDto } from '@lib/dtos/auth/register';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    RegisterUser(registerDto: UserRegisterRequestDto): Promise<User | import("../../../libs/dtos/src").GlobalResponseDto>;
    Login(loginDto: UserRegisterRequestDto): Promise<import("../../../libs/dtos/src").AuthorizeResponseDto>;
    verifyEmail(token: string, res: any): Promise<any>;
    demo(): string;
}
