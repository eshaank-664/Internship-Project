const nodemailer = require('nodemailer');

require('dotenv').config();

const transporter = nodemailer.createTransport({

    service: 'gmail',

    auth: {

        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PASS

    }

});

const sendBookingMail = async (to, hotelName) => {

    const mailOptions = {

        from: process.env.EMAIL_USER,

        to,

        subject: 'Booking Confirmed',

        html: `

            <h2>Booking Successful</h2>

            <p>Your booking for <b>${hotelName}</b> is confirmed.</p>

            <p>Thank you for choosing Booking Web.</p>

        `

    };

    await transporter.sendMail(mailOptions);

};

module.exports = sendBookingMail;