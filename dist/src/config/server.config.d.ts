declare const _default: (() => {
    port: number;
    productName: string;
    frontendUrl: string;
    backendUrl: string;
    authOtpVerificationLink: string;
    authLoginLink: string;
    admin: {
        email: string;
        password: string;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    port: number;
    productName: string;
    frontendUrl: string;
    backendUrl: string;
    authOtpVerificationLink: string;
    authLoginLink: string;
    admin: {
        email: string;
        password: string;
    };
}>;
export default _default;
