import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
  service:"gmail",
  port: 465,
  secure: false,
  auth: {
    		user: 'freedbman1@gmail.com',
    		pass: 'pmjcrermfgdswdqf'
    	}
});
async function mailSend(sender, reciever, sunject, text, html) {
  const info = await transporter.sendMail({
    from: sender, // sender address
    to: reciever, // list of receivers
    subject: sunject, // Subject line
    text: text, // plain text body
    html: html,
  });
  console.log("Message sent: %s", info.messageId);
}
module.exports = {mailSend}