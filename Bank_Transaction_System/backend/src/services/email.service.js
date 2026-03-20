require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  }, 
});

// Verify the connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email server:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

module.exports = transporter;

// Function to send email
const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Backend Ledger" <${process.env.EMAIL_USER}>`, // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html, // html body
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

async function sendRegistrationEmail(userEmail, name){
 
const subject = `Welcome to Backend Ledger, ${name}`;

const text = `Hello ${name},

Welcome to Backend Ledger!

We're thrilled to have you join us. Your account has been successfully created, and you're now ready to manage your transactions with ease.

If you have any questions or need assistance, feel free to reach out anytime.

Best regards,
The Backend Ledger Team
`;

const html = `
<div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">
  <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
    
    <h2 style="color: #2c3e50; text-align: center;">
      Welcome to Backend Ledger
    </h2>

    <p style="font-size: 16px; color: #333;">
      Hello <strong>${name}</strong>,
    </p>

    <p style="font-size: 15px; color: #555; line-height: 1.6;">
      We're excited to have you on board.<br><br>
      Your account has been successfully created, and you're now ready to manage your transactions smoothly and securely.
    </p>

    <div style="text-align: center; margin: 25px 0;">
      <a href="www.google.com" style="background-color: #4CAF50; color: white; padding: 12px 20px; border-radius: 5px; text-decoration: none; font-size: 14px;">
        Get Started
      </a>
    </div>

    <p style="font-size: 14px; color: #777;">
      If you have any questions or need help, feel free to contact us anytime.
    </p>

    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />

    <p style="font-size: 13px; color: #999; text-align: center;">
      Best regards,<br>
      <strong>Backend Ledger Team</strong>
    </p>

  </div>
</div>
`;
    await sendEmail(userEmail, subject, text, html);
}

module.exports = sendEmail;

module.exports = {sendRegistrationEmail};