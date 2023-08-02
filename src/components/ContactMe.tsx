import { useRef, useState, FormEvent } from 'react';
import { MdOutlineEmail } from "react-icons/md"
import { BsInstagram, BsWhatsapp } from "react-icons/bs"
const ContactMe = () => {
  // const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;
    setSubmitting(true);
    try {
      const response = await fetch(`/api/sendMail`, {
        method: "POST", body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        })
      });
      if (response.ok) {
        if (nameRef.current) nameRef.current.value = "";
        if (emailRef.current) emailRef.current.value = "";
        if (messageRef.current) messageRef.current.value = "";
      }
      // console.log(response);
    } catch (error) {
      // console.log(error);
    }
    finally {
      setSubmitting(false);
    }
  };

  return (
    <div id='contact' className="pt-[5.5rem] container_height">
      <div className="flex flex-col items-center mb-5">
        <h5 className='text-sm'>Get In Touch</h5>
        <h2 className='text-2xl font-bold blue_gradient'>Contact Me</h2>
      </div>
      <div className="grid max-w-5xl mx-auto grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4 ">
          <article className='contact_container'>
            <MdOutlineEmail className='mx-auto my-2 text-2xl' />
            <h4>Email</h4>
            <h5>parthmovaliya55055@gmail.com</h5>
            <a href="mailto:parthmovaliya55055@gmail.com" className='green_gradient font-semibold bg-black'>Send a Mail</a>
          </article>
          <article className='contact_container'>
            <BsInstagram className='mx-auto my-2 text-2xl' />
            <h4>Messenger</h4>
            <h5>_parth_movaliya_</h5>
            <a href="https://ig.me/m/_parth_movaliya_" target="_blank" rel="noreferrer" className='green_gradient font-semibold bg-black'>Send a Message</a>
          </article>
          <article className='contact_container'>
            <BsWhatsapp className='mx-auto my-2 text-2xl' />
            <h4>WhatsApp</h4>
            <a href="https://wa.me/916356380166" target="_blank" rel="noreferrer" className='green_gradient font-semibold bg-black'>Send a Message</a>
          </article>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col gap-4">
            <input name="name" required className="py-5 px-4 border-2 border-gray-300 rounded-md" type="text" id="name" placeholder='Your Full Name' ref={nameRef} />
            <input type='email' required id="email" name="email" className="py-5 border-2 border-gray-300 rounded-md px-4" placeholder="Your Email" ref={emailRef} />
            <textarea id="message" required name="message" className="py-5 px-4 border-2 border-gray-300 rounded-md" rows={5} placeholder="Your Message" ref={messageRef} />
            <button className="border rounded-md py-1 px-4 w-4/12 border-black " type="submit"
              disabled={submitting}
            // onClick={(e) => handleSubmit(e)}
            >
              {submitting ? <div className='orange_gradient font-bold'>Wait...</div> : <div className='green_gradient font-bold'>Submit</div>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMe