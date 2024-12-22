"use client"
import Image from "next/image"
import Link from "next/link"
import style from "./styles.module.css"


export default function Projects() {

    return (

        <div className={style["project"]}>

            <h1>Recent Project</h1>

            <div className={style["project-icons"]}>

                {/* Figma Design cover into Next.js */}
                <div>
                    <Link href={"https://first-figma-project-zeta.vercel.app/"} target="_blank">
                        <Image src={"/projects/figma.jpg"} alt={"Figma Design"} width={200} height={200} className={style["project-img"]}></Image>
                        <h2>Figma Design convert into Next.js</h2>
                    </Link>
                </div>

                {/* Resume Builder */}
                <div>
                    <Link href={"https://dynamic-resume-weld.vercel.app/"} target="_blank">
                        <Image src={"/projects/resume.jpg"} alt={"Online Resume Builder"} width={200} height={200} className={style["project-img"]}></Image>
                        <h2>Online Resume Builder</h2>
                    </Link>
                </div>

                {/* Countries */}
                <div>
                    <Link href={"https://assignment2-eight-jade.vercel.app/"} target="_blank">
                        <Image src={"/projects/countries.jpg"} alt={"countries detail"} width={200} height={200} className={style["project-img"]}></Image>
                        <h2>Countries Detail with National Flags</h2>
                    </Link>
                </div>

                {/* Personal Resume */}
                <div>
                    <Link href={"https://personal-resume-zeta-woad.vercel.app/"} target="_blank">
                        <Image src={"/projects/cv.jpg"} alt={"Personal Resume"} width={200} height={200} className={style["project-img"]}></Image>
                        <h2>Personal Resume</h2>
                    </Link>
                </div>

            </div>
        </div>

    )
}



