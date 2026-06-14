import { Resend } from "resend"
import dotenv from "dotenv"
dotenv.config()

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendOtpMail=async (to,otp) => {
    const result = await resend.emails.send({
        from: "Swado <onboarding@resend.dev>",
        to,
        subject:"Reset Your Password",
        html:`<p>Your OTP for password reset is <b>${otp}</b>. It expires in 5 minutes.</p>`
    })
    console.log("Resend result:", JSON.stringify(result))
    if(result.error){
        throw new Error(JSON.stringify(result.error))
    }
}


export const sendDeliveryOtpMail=async (user,otp) => {
    const result = await resend.emails.send({
        from: "Swado <onboarding@resend.dev>",
        to:user.email,
        subject:"Delivery OTP",
        html:`<p>Your OTP for delivery is <b>${otp}</b>. It expires in 5 minutes.</p>`
    })
    console.log("Resend result:", JSON.stringify(result))
    if(result.error){
        throw new Error(JSON.stringify(result.error))
    }
}