import React from 'react'
import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_v8hknre";
const TEMPLATE_ID = "template_ccs4h2r";
const PUBLIC_KEY = "WVzM9ljnTFMYxLvZb";

const ContactForm = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert('Message Recieved! I will be in touch shortly!')
            }, (error) => {
                console.log(error.text);
                alert('Something went wrong!')
            });
        e.target.reset()
    };
    return (
        <div>
            <form className="formContainer" onSubmit={handleOnSubmit}>
                <div className="formElement">
                    <label for="from_name">Name</label>
                    <input type="text" id="from_name" name="from_name" placeholder="Your name.." required />
                </div>

                <div className="formElement">
                    <label>E-mail</label>
                    <input type="email" id="from_email" name="from_email" placeholder="Your email.." required />
                </div>

                <div className="formElement">
                    <label for="message">Message</label>
                    <textarea name="message" rows="8" cols="30" placeholder="Your message.." required />
                </div>
                <button type='submit' className='formButton'>Send It</button>
            </form>
        </div>
    )
}

export default ContactForm;