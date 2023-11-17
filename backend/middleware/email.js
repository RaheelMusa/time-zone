const nodemailer = require("nodemailer")


    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.USER_PASS
    }
})

module.exports= { transporter }