import { Request, Response } from "express";
import EmailService from "../services/emailService";

const users = [
  { nome: 'Michael', email: 'michael.mascarenhas3@gmail.com' }
]

const message = {
  subject: 'Bem Vindo ao sistema!',
  body: 'Seja muito bem vindo ao sistema, é um prazer recebe-lo'
}

export default {
  async index(req: Request, res: Response) {
    return res.json(users)
  },

  async create( req: Request, res: Response) {
    const emailService = new EmailService();
    
    emailService.sendMail({ 
      to: users[0], 
      message: message 
    });
    
    return res.send()
  }
};