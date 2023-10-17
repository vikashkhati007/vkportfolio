import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { postMesaage } from "./postmessage/Post";
import { MdOutlineMail } from "react-icons/md";
const ContactForm = async ({ text }: any) => {
  async function handleSubmit(formData: FormData) {
    "use server";
    const fullname = formData.get("fullname");
    const email = formData.get("email") ;
    const message = formData.get("message"); 
    if(fullname && email && message ){
      postMesaage(fullname,email,message);
    }
    else{
      console.log("Missing Values");
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}><MdOutlineMail/></Button>
      </DialogTrigger>
      <DialogContent className="max-w-[95%] sm:max-w-[425px]">
        <form action={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Contact Form</DialogTitle>
            <DialogDescription className="pb-5 text-xs">enter your information here</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            <Input
              id="name"
              type="text"
              placeholder="enter your fullname"
              name="fullname"
            />
            <Input
              id="username"
              placeholder="enter your email"
              type="email"
              name="email"
            />
            <Textarea
              name="message"
              placeholder="Type your message here."
              id="message-2"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Send Message</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
