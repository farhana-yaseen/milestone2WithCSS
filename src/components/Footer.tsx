import Link from "next/link"
import Image from "next/image"
import style from "./styles.module.css"


export default function Footer() {

    return (
        <div className={style["footer"]}>
            <h1>Copyright © 2024 All Rights Reserved </h1>

            <div className={style["footer-div"]}>
                <Link href={"https://www.facebook.com/"} target="_blank">
                    <Image src={"/footer/facebook.png"} alt="fb" width={100} height={100} className={style["footer-icon"]}></Image>
                </Link>

                <Link href={"https://www.instagram.com/"} target="_blank">
                    <Image src={"/footer/insta.png"} alt="insta" width={100} height={100} className={style["footer-icon"]}></Image>
                </Link>

                <Link href={"https://studio.youtube.com/channel/UC5tu9PKMlOFQMhBtxBtoPHg"} target="_blank">
                    <Image src={"/footer/youtube.png"} alt="youtube" width={100} height={100} className={style["footer-icon"]}></Image>
                </Link>

                <Link href={"https://pk.linkedin.com/"} target="_blank">
                    <Image src={"/footer/linkedin.jpg"} alt="linkedin" width={100} height={100} className={style["footer-icon"]}></Image>
                </Link>
            </div>

        </div>



    )
}
