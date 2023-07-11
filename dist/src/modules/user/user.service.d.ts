import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { AuthHelper } from '../auth/auth.helper';
export declare class UserService {
    private readonly userRepository;
    private readonly config;
    private readonly helper;
    constructor(userRepository: Repository<User>, config: ConfigService, helper: AuthHelper);
    createAdmin(): Promise<void>;
}
