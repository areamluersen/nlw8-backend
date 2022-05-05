import { MailAdapter, sendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "fe7699dcdab091",
      pass: "303b358a45a765"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: sendMailData) {
        await transport.sendMail({
        from: "Equipe Feedget <oi@feedget.com>",
        to: 'Aream Luersen <areamluersen@gmail.com>',
        subject,
        html: body
    })
    }
}