"use client"
import ContactForm from "../../components/contactForm";
import Typewriter from 'typewriter-effect';
import style from "../../components/styles.module.css"



export default function ContactUs() {
    return (
        <div className={style["contact"]}>

            <div>
                <div className={style["contact-typewriter"]}>  
                <Typewriter 
                    options={{
                        strings: ['Get in Touch'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                    </div>
                <p>+92-3461234567</p>
                <p><strong>Email:</strong>&nbsp; farhanayaseen@gmail.com</p>
                <p><strong>Address:</strong>&nbsp; Karachi, Pakistan</p>
            </div>

            <div>
                <ContactForm />
  
            </div>

        </div>
    )
}