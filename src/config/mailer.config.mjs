export const mailerConfig = [{
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
}]; //will be used later
