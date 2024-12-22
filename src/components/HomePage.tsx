"use client"
import Image from "next/image"
import Typewriter from 'typewriter-effect';
import style from "../components/styles.module.css"


export default function Home() {
    return (

        <div className={style["left-right-flex"]}>

            {/* Right content (Portfolio Section) */}
            <div className={style["right-content"]}>
                <h1 >Portfolio</h1>
                {/* Profile Picture*/}
                <Image src={"/profileImg.jpg"} alt={"Profile Picture"} width={200} height={200} className={style["right-content-img"]}></Image>
            </div>

            {/* Left content (Image + Typewriter Effect) */}
            <div className={style["left-content"]}>

                 <Image src={"/purple.png"} alt={"ring"} width={150} height={150} className={style["right-content-img"]}></Image>
                
                <h2>Hi Everyone.</h2>

                {/* Typewriter Effect */}
                <div className={style["left-content-typewriter"]}>
                    <Typewriter
                        options={{
                            strings: ['I am Farhana'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <h1>Web Developer</h1>
    
                 <Image src={"/purple.png"} alt={"ring"} width={150} height={150} className={style["right-content-img"]}></Image>
       
            </div>


        </div>


    )
}
