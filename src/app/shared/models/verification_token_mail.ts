export interface VerificationToken {
    token: string;
    email: string;
    createdAt: Date;
    expiresAt: Date;
}