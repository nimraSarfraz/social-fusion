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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const types_1 = require("../../../../libs/types/src");
let User = class User {
    constructor(params) {
        this.status = types_1.UserStatusEnum.UNVERIFIED;
        this.role = types_1.UserRoleEnum.MEMBER;
        if (params) {
            this.email = params.email;
            if (params.status)
                this.setStatus(params.status);
            if (params.role)
                this.setRole(params.role);
            if (params.disabled === false)
                this.disabled = params.disabled;
        }
    }
    setStatus(status) {
        this.status = status;
    }
    setRole(role) {
        this.role = role;
    }
    async setPassword(password) {
        this.password = password;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(`uuid`),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({
        length: 100,
        nullable: false,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: `enum`,
        enum: types_1.UserStatusEnum,
        default: types_1.UserStatusEnum.UNVERIFIED,
    }),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: `enum`,
        enum: types_1.UserRoleEnum,
        default: types_1.UserRoleEnum.MEMBER,
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'enum',
        enum: types_1.SocialProviderEnum,
        default: null,
    }),
    __metadata("design:type", String)
], User.prototype, "SocialProvider", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'boolean',
        default: true,
    }),
    __metadata("design:type", Boolean)
], User.prototype, "disabled", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
User = __decorate([
    (0, typeorm_1.Entity)({ name: `user` }),
    __metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map