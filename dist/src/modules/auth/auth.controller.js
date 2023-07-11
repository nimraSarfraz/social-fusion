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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("../../../libs/constants/src");
const user_entity_1 = require("../user/entities/user.entity");
const register_1 = require("../../../libs/dtos/src/auth/register");
const auth_service_1 = require("./auth.service");
const guards_1 = require("../../guards");
const types_1 = require("../../../libs/types/src");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async RegisterUser(registerDto) {
        return await this.authService.registerUser(registerDto);
    }
    async Login(loginDto) {
        return await this.authService.login(loginDto);
    }
    async verifyEmail(token, res) {
        return await this.authService.verifyEmail(token, res);
    }
    demo() {
        return 'testing done!!!!';
    }
};
__decorate([
    (0, common_1.Post)('registerUser'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Register User' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'User created!',
        type: user_entity_1.User,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_1.UserRegisterRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "RegisterUser", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: 'Login User' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successfully login!' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found!' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_1.UserRegisterRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "Login", null);
__decorate([
    (0, common_1.Get)('verify'),
    __param(0, (0, common_1.Query)('token')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyEmail", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, types_1.UserRole)(types_1.UserRoleEnum.ADMIN),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "demo", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)(constants_1.SWAGGER_API_TAG.AUTH),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map