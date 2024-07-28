// sendEmail.ts
import nodemailer from 'nodemailer';

interface EmailData {
  to: string;
  subject: string;
  text: string;
  html: string;
}

const sendEmail = async (data: EmailData): Promise<void> => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service here
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: data.to,
    subject: data.subject,
    text: data.text,
    html: data.html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email', error);
  }
};

export default sendEmail;
