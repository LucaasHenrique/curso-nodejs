import Mail from "../../lib/Mail.js";

class WelcomeEmailJob {
    get key() {
        return "WelcomeEmail"
    }

    async handle({ data }) {
        const { name, email } = data;

        Mail.send({
            to: email,
            subject: "Welcome to the system",
            text: `Olá ${name}, seja bem-vindo ao sistema!`,
        });
    }
}

export default new WelcomeEmailJob(); 