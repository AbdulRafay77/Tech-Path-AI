import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();


export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export const sender = {
  email: process.env.SENDER_EMAIL, 
  name: process.env.SENDER_NAME,
};