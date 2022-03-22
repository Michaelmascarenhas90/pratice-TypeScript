interface IMailTo {
  nome: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface MessageDTO {
  to: IMailTo,
  message: IMailMessage
}


// DTO - (Data Transfer Object)
class EmailService {

  sendMail({ to, message }: MessageDTO) {
    console.log(`Email enviado para ${to.nome}: ${message.subject}`)
  }
}

export default EmailService;