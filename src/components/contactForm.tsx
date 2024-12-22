
import style from "./styles.module.css"
import Image from "next/image"

const ContactForm = () => {
    return (
        <div className={style["form"]}>
            
            <form action="https://formspree.io/f/manybyao" method="POST" className={style["form-table"]} >
                <div className={style["form-table"]}>
                    <input type="text" placeholder="Name" required />
                    <input type="email" name="email" id="email" placeholder="Email"  />
                </div>

                <div className={style["form-table"]}>
                    <input type="text" placeholder="Subject" />
                    <textarea name="message" id="message" placeholder="Type your Message" required ></textarea>
                </div>
                <div>

                    <button type="submit" value="Send Email">Submit</button>
                </div>

            </form>
            
            <div className={style["form-table"]}>
            <Image src={"/contact.jpg"} alt="contact"  width={200} height={200} className={style["form-image"]}></Image>
            </div>
        </div>

    )

}

export default ContactForm