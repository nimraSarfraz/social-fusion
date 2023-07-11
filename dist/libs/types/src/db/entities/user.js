"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialProviderEnum = exports.UserRoleEnum = exports.UserStatusEnum = void 0;
var UserStatusEnum;
(function (UserStatusEnum) {
    UserStatusEnum["ACTIVE"] = "ACTIVE";
    UserStatusEnum["INACTIVE"] = "INACTIVE";
    UserStatusEnum["DEACTIVATE"] = "DEACTIVATE";
    UserStatusEnum["UNVERIFIED"] = "UNVERIFIED";
})(UserStatusEnum = exports.UserStatusEnum || (exports.UserStatusEnum = {}));
var UserRoleEnum;
(function (UserRoleEnum) {
    UserRoleEnum["ADMIN"] = "ADMIN";
    UserRoleEnum["MEMBER"] = "MEMBER";
    UserRoleEnum["SUPERADMIN"] = "SUPERADMIN";
})(UserRoleEnum = exports.UserRoleEnum || (exports.UserRoleEnum = {}));
var SocialProviderEnum;
(function (SocialProviderEnum) {
    SocialProviderEnum["GOOGLE"] = "google";
    SocialProviderEnum["FACEBOOK"] = "FACEBOOK";
})(SocialProviderEnum = exports.SocialProviderEnum || (exports.SocialProviderEnum = {}));
//# sourceMappingURL=user.js.map