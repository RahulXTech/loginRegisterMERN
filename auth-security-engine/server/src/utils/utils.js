export function generateOtp(){
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export function getOtpHtml(otp) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OTP Verification</title>

    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .container {
        background: #ffffff;
        padding: 30px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      }

      .title {
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .message {
        font-size: 14px;
        color: #555;
        margin-bottom: 20px;
      }

      .otp {
        font-size: 28px;
        font-weight: bold;
        letter-spacing: 5px;
        color: #2d89ef;
        margin-bottom: 20px;
      }

      .footer {
        font-size: 12px;
        color: #999;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="title">OTP Verification</div>

      <div class="message">
        Use the OTP below to verify your account:
      </div>

      <div class="otp">${otp}</div>

      <div class="message">
        This OTP is valid for 5 minutes.
      </div>

      <div class="footer">
        If you did not request this, please ignore this email.
      </div>
    </div>
  </body>
  </html>
  `;
}

