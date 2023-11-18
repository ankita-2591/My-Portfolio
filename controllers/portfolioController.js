const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

//transport
const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth: {
            api_key: process.env.API_SENDGRID,    // incompleted in .env so error will come
        },
    })
);

const sendEmailController = (req, res) => {
    try {
        const { name, email, msg } = req.body;

        //validation
        if (!name || !email || !msg) {
            return res.status(500).send({
                success: false,
                message: "Please Provide All Fields",
            });
        }
        //email matter
        transporter.sendMail({
            to: "typeyouremailadresshere@gmail.com",
            from: "typeyouremailadresshere@gmail.com",
            subject: "Regarding Portfolio App",
            html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
      `,
        });

        return res.status(200).send({
            success: true,
            message: "Your Message Send Successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Send Email API Error",
            error,
        });
    }
};

module.exports = { sendEmailController };              // we can access it from anywhere