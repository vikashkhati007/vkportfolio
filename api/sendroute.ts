import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const PostMessage = async (fullname:any, email:any, message:any) => {

  if(fullname && email && message){
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['vikashkhati007@gmail.com'],
      subject: 'Hello world',
      react: [ 'John' ],
    });
    return data
  }
  else{
    return {error: "Please enter all fields"}
  }
  }
 
  export default PostMessage;