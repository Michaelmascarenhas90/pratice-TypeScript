"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// DTO - (Data Transfer Object)
class EmailService {
    sendMail({ to, message }) {
        console.log(`Email enviado para ${to.nome}: ${message.subject}`);
    }
}
exports.default = EmailService;
