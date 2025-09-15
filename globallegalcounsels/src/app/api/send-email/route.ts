import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, urgency } = body;

    const data = await resend.emails.send({
      from: "Website Contact <raj@globallegalcounsels.com>", // Can be any verified sender
      to: "raj@globallegalcounsels.com", // Your GoDaddy custom email
      replyTo: email, // ✅ This is where replies will go
      subject: `[${urgency.toUpperCase()}] ${subject || "New Contact Form Message"}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Urgency: ${urgency}

Message:
${message}

--- 
Sent from Contact Form
Time: ${new Date().toLocaleString()}
      `,
    });
    

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
