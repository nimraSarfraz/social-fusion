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
exports.AuthHelper = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user/entities/user.entity");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const types_1 = require("../../../libs/types/src");
let AuthHelper = class AuthHelper {
    constructor(jwt) {
        this.jwt = jwt;
    }
    isPasswordValid(password, userPassword) {
        return bcrypt.compareSync(password, userPassword);
    }
    async encodePassword(password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    }
    generateToken(user) {
        return this.jwt.sign({ id: user.id, email: user.email, role: user.role }, {
            secret: process.env.JWT_SECRET ||
                this.configService.get(types_1.ConfigEnum.JWT_TOKEN).secret,
        });
    }
    async decode(token) {
        return this.jwt.decode(token, null);
    }
    async validateUser(decoded) {
        const user = await this.repository.findOne({ where: { id: decoded.id } });
        delete user.password;
        return user;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(user_entity_1.User),
    __metadata("design:type", typeorm_2.Repository)
], AuthHelper.prototype, "repository", void 0);
__decorate([
    (0, common_1.Inject)(config_1.ConfigService),
    __metadata("design:type", config_1.ConfigService)
], AuthHelper.prototype, "configService", void 0);
AuthHelper = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthHelper);
exports.AuthHelper = AuthHelper;
//# sourceMappingURL=auth.helper.js.map