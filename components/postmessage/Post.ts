import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function postMesaage(fullname: any, email: any, message: any) {
  try {
    if (fullname && email && message) {
      const data = await resend.emails.send({
        from: fullname + "<onboarding@resend.dev>",
        to: ["vikashkhati007@gmail.com"],
        subject: email,
        react: "Body: " + message,
      });
      console.log(data);
    }
    else{
        console.log("Missing Data");
    }
  } catch (error) {
    return error;
  }
}
