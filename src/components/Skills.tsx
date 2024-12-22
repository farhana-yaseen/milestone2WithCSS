"use client"
import Image from "next/image"
import style from "../components/styles.module.css"


export default function Skills() {

    return (

        <div>

            <div className={style["skill"]}>

                <h1 >Personal Skills</h1>

                <div className={style["skill-icons"]}>
                    {/* Ms-Office */}
                    <div>
                        <Image src={"/skills/msoffice.png"} alt={"MS Office Logo"} width={100} height={100} className={style["skill-img"]}></Image>
                        <h2 >Ms.Office</h2>
                    </div>

                    {/* Photoshop */}
                    <div >
                        <Image src={"/skills/adobe.png"} alt={"Photoshop Logo"} width={100} height={100} className={style["skill-img"]}></Image>
                        <h2 >Photoshop</h2>
                    </div>

                    {/* HTML */}
                    <div >
                        <Image src={"/skills/html.png"} alt={"HTML Logo"} width={100} height={100} className={style["skill-img"]}></Image>
                        <h2  >HTML</h2>
                    </div>

                    {/* CSS */}
                    <div >
                        <Image src={"/skills/css.png"} alt={"CSS Logo"} width={100} height={100} className={style["skill-img"]}></Image>
                        <h2  >CSS</h2>
                    </div>

                    {/* Tailwind CSS */}
                    <div >
                        <Image src={"/skills/tailwind.png"} alt={"Tailwind Logo"} width={100} height={100} className={style["skill-img"]}></Image>
                        <h2  >Tailwind CSS</h2>
                    </div>

                    {/* Typescript */}
                    <div >
                        <Image src={"/skills/ts.png"} alt={"Typescript Logo"} width={100} height={100} className={style["skill-img"]}></Image>
                        <h2  >Typescript</h2>
                    </div>

                    {/* Next.js */}
                    <div >
                        <Image src={"/skills/next.jpg"} alt={"Next.js Logo"} width={100} height={100} className={style["skill-img"]}></Image>
                        <h2  >Next.js</h2>
                    </div>

                </div>

            </div>
        </div>


    )
}



