import { NextResponse } from "next/server";
import { Resend } from "resend";
// import { Readable } from "stream";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const runtime = "nodejs"; // needed for file handling

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const role = formData.get("role") as string;
    const experience = formData.get("experience") as string;
    const qualification = formData.get("qualification") as string;
    const resume = formData.get("resume") as File;

    const attachments = resume
      ? [
          {
            filename: resume.name,
            content: Buffer.from(await resume.arrayBuffer()).toString("base64"),
          },
        ]
      : [];

    const data = await resend.emails.send({
      from: "Website Legal Careers <raj@globallegalcounsels.com>",
      to: "raj@globallegalcounsels.com",
      subject: `New Career Application: ${role}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Role: ${role}
Qualification: ${qualification}

Experience:
${experience}
      `,
      attachments,
      replyTo: email,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Career form submission error:", error);
    return NextResponse.json({ success: false, error });
  }
}
