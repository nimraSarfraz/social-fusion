"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../user/entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const auth_helper_1 = require("./auth.helper");
const types_1 = require("../../../libs/types/src");
const mail_service_1 = require("../mail/mail.service");
const user_service_1 = require("../user/user.service");
const dtos_1 = require("../../../libs/dtos/src");
let AuthService = class AuthService {
    constructor(jwt) {
        this.jwt = jwt;
    }
    async registerUser(body) {
        const { email, password } = body;
        let user = await this.repository.findOne({ where: { email } });
        if (user) {
            throw new common_1.HttpException('User already exit!', common_1.HttpStatus.CONFLICT);
        }
        user = new user_entity_1.User(Object.assign({}, body));
        const hashedPassword = await this.helper.encodePassword(password);
        user.setPassword(hashedPassword);
        const { productName, backendUrl } = this.configService.get(types_1.ConfigEnum.SERVER);
        const newUser = await this.repository.save(user);
        const token = this.jwt.sign({ id: newUser.id });
        this.mailService.sendVerificationMail(user.email, {
            authLoginLink: `${backendUrl}/auth/verify?token=${token}`,
            firstName: user.email,
            productName,
        });
        return new dtos_1.GlobalResponseDto('Check you email for verification');
    }
    async getUserByVerificationToken(token) {
        const secret = this.configService.get(types_1.ConfigEnum.JWT_TOKEN).secret;
        const user = this.jwt.verify(token, { secret });
        return await this.repository.findOneBy({ id: user === null || user === void 0 ? void 0 : user.id });
    }
    async verifyEmail(token, res) {
        try {
            const user = await this.getUserByVerificationToken(token);
            if (!user) {
                throw new common_1.HttpException('No user found', common_1.HttpStatus.NOT_FOUND);
            }
            if (user.status === types_1.UserStatusEnum.ACTIVE) {
                throw new common_1.HttpException('Already Verified', common_1.HttpStatus.CONFLICT);
            }
            user.status = types_1.UserStatusEnum.ACTIVE;
            const updateStatusDto = {
                userId: user.id,
                status: types_1.UserStatusEnum.ACTIVE,
            };
            await this.updateUserStatus(updateStatusDto);
            const { frontendUrl, authLoginLink } = this.configService.get(types_1.ConfigEnum.SERVER);
            return res.redirect(`${frontendUrl}/${authLoginLink}`);
        }
        catch (error) {
            throw new common_1.HttpException('Already Verified', common_1.HttpStatus.CONFLICT);
        }
    }
    async updateUserStatus(updateStatusDto) {
        const user = await this.repository.findOne({
            where: { id: updateStatusDto.userId },
        });
        if (!user)
            throw new common_1.HttpException('User not found!', common_1.HttpStatus.NOT_FOUND);
        user.setStatus(updateStatusDto.status);
        user.disabled = false;
        await this.repository.save(user);
        const message = updateStatusDto.status === types_1.UserStatusEnum.ACTIVE
            ? 'User Successfully activated!'
            : 'User Successfully deactivated!';
        return new dtos_1.GlobalResponseDto(message);
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const user = await this.repository.findOne({
            where: { email },
        });
        if (!user ||
            (user.role === types_1.UserRoleEnum.MEMBER &&
                (user.status === types_1.UserStatusEnum.DEACTIVATE ||
                    user.status === types_1.UserStatusEnum.INACTIVE))) {
            throw new common_1.HttpException('No user found', common_1.HttpStatus.NOT_FOUND);
        }
        if (!user ||
            (user.role === types_1.UserRoleEnum.MEMBER &&
                user.status === types_1.UserStatusEnum.UNVERIFIED)) {
            throw new common_1.HttpException('User needs Verification', common_1.HttpStatus.NOT_FOUND);
        }
        if (!user || (user.role === types_1.UserRoleEnum.MEMBER && user.disable === true)) {
            throw new common_1.HttpException('No user found', common_1.HttpStatus.NOT_FOUND);
        }
        const isPasswordValid = this.helper.isPasswordValid(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.HttpException('Password Incorrect', common_1.HttpStatus.NOT_FOUND);
        }
        delete user.password;
        return new dtos_1.AuthorizeResponseDto(user, this.helper.generateToken(user));
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(user_entity_1.User),
    __metadata("design:type", typeorm_2.Repository)
], AuthService.prototype, "repository", void 0);
__decorate([
    (0, common_1.Inject)(auth_helper_1.AuthHelper),
    __metadata("design:type", auth_helper_1.AuthHelper)
], AuthService.prototype, "helper", void 0);
__decorate([
    (0, common_1.Inject)(config_1.ConfigService),
    __metadata("design:type", config_1.ConfigService)
], AuthService.prototype, "configService", void 0);
__decorate([
    (0, common_1.Inject)(mail_service_1.MailService),
    __metadata("design:type", mail_service_1.MailService)
], AuthService.prototype, "mailService", void 0);
__decorate([
    (0, common_1.Inject)(user_service_1.UserService),
    __metadata("design:type", user_service_1.UserService)
], AuthService.prototype, "userService", void 0);
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map