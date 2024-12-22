
import Link from "next/link"
import Image from "next/image"
import style from "../components/styles.module.css"
import Hamburger from "./Hamburger";


export default function Navbar() {

    return (
        <nav className={style.navbar}>
            <div className={style["navbar-div"]}>

                {/* Logo */}
                <div className={style["logo-container"]}>
                    <Image src={"/logo.png"} alt="logo" width={150} height={150} className={style.logo}></Image>
                </div>

                <div>
                    <Hamburger />
                </div>


                {/* Other Screen */}
                {/* Left Side */}
                <div className={style["desktop-menu"]}>

                    <div className={style["desktop-menu-active"]} >
                    
                            <Link className={style["desktop-menu-active-link"]} href={"/"} >Home</Link>
                            <Link className={style["desktop-menu-active-link"]} href={"/aboutus"}>About </Link>
                            <Link className={style["desktop-menu-active-link"]} href={"/contact"}>Contact</Link>
                    </div>

                </div>

            </div>

        </nav>
    )
}

