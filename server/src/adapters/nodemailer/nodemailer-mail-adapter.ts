import { mailAdapter, SendMailData} from "../mail-adapters";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "caf1db3f1fdddb",
      pass: "21be57a6258fd5"
    }
  });

export class NodemailerMailAdapter implements mailAdapter{
    async sendMail({subject, body}: SendMailData){
        
        await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Victor <victor.alvescosta@ufpe.br>',
        subject,
        html: body,
    })
        }    
}