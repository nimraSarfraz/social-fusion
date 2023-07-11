"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../libs/types/src");
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)(types_1.ConfigEnum.SERVER, () => ({
    port: parseInt(process.env.BACKEND_APP_PORT) || 3300,
    productName: process.env.PRODUCT_NAME,
    frontendUrl: process.env.FRONTEND_URL,
    backendUrl: process.env.BACKEND_URL,
    authOtpVerificationLink: process.env.AUTH_OTP_VERIFICATION_LINK,
    authLoginLink: process.env.AUTH_LOGIN_LINK,
    admin: {
        email: process.env.ADMIN_EMAIL || 'admin@demo.com',
        password: process.env.ADMIN_PASSWORD || 'password',
    },
}));
//# sourceMappingURL=server.config.js.map