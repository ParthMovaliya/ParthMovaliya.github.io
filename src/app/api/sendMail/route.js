const nodemailer = require("nodemailer");

export const POST = async (req, res) => {
    const { name, email, message } = await req.json();

    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            port: 587,
            secure: true,
            auth: {
                user: process.env.MAIL, // Add Mail Here
                pass: process.env.PASS, // Add Password Here
            },
        });

        await transporter.sendMail({
            from: `${email}`, // Add Mail Here
            to: "parthmovaliya55055@gmail.com", // Add Mail Here
            subject: `Portfolio ${name} `, // Subject line
            text: `
            Name: ${name}\n
            Email: ${email}\n
            Message: ${message}\n
            `, // plain text body
        });
        await transporter.sendMail({
            from: "parthmovaliya55055@gmail.com", // Add Mail Here
            to: `${email}`, // Add Mail Here
            subject: `Hello, from Parth Movaliya `, // Subject line
            text: `Dear ${name},
I hope this email finds you well. I wanted to personally reach out and inform you that your recent message has been successfully received. I appreciate the time and effort you invested in reaching out to me.

I want to express my gratitude for choosing to contact me and for bringing your matter to my attention. Your message is important to me, and I assure you that I will carefully review the details you provided.

Rest assured that I am actively working to address your concerns and provide you with the information or assistance you require. I understand the importance of a prompt response and will make every effort to get back to you as soon as possible.

If there are any additional details or information that you believe might be helpful, please don't hesitate to share them with me. You can simply reply to this email, and I will receive your response directly.

Once again, thank you for reaching out to me. I genuinely appreciate your patience and understanding during this process. I look forward to speaking with you soon and providing you with the assistance you need.

Should you have any further questions or require immediate assistance, please feel free to contact me directly at parthmovaliya55055@gmail.com.

Best regards,
Parth Movaliya
iGOD.pm
            `, // plain text body
        });
        return new Response({
            success: true,
            message: "Mail Send Done!!",
        });
    } catch (error) {
        // console.log(error);
        return new Response({
            success: false,
            message: "Mail Send Error!!",
        });
    }
};
