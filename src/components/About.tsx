"use client"
import Image from "next/image"
import style from "../components/styles.module.css"



export default function AboutUs() {

    return (
        <div className={style["about"]}>
            <div >
                <h1>Portfolio</h1>

                <div className={style["about-img-div"]}>
                    {/* Left content (Image) */}
                    {/* Profile Picture*/}
                    <Image src={"/profileImg.jpg"} alt={"Profile Picture"} width={300} height={300} className={style["about-img"]}></Image>
                    <div>

                    </div>

                    {/* Right content */}
                    <div >
                        <h1 >About Me</h1>

                        <p >Hello! I am a  web developer with a passion for coding and building websites that work beautifully. I’ve worked with HTML, CSS, Tailwind CSS, Typescript, Next.js  and am always learning more to improve my craft.
                            Whether you are looking to create a personal project or a business website, I am here to help bring your ideas to life. Let&apos;s build something great together!
                        </p>

                        <div>
                            <h1>My Education</h1>
                        </div>
                        <ul>
                            <li>B.Com from Karachi University</li>
                            <li>Diploma in Computer Application & Programming from VTIW Buffer Zone Karachi (One year)</li>
                            <li>Certificate in Hardware & Networking from VTIW Buffer Zone Karachi (6-Month)</li>
                        </ul>

                    </div>

                </div>

            </div>

        </div>
    )
}



