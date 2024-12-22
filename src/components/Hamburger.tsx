"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import style from "../components/styles.module.css"

const Hamburger = ()=>{

    const [openMenu, setOpenMenu] = useState(false)


    return(
        <div className={style["hamburger-menu"]}>                                                                                                           
                                                                                                            {/* if previous state false it become true if ture covert false */}
            <Image src="/hamburger.png" alt="hamburger menu" width={40} height={40} onClick={()=>setOpenMenu(previous=>(!previous))} />
            {openMenu && 
            <div className={style['menu-dropdown']} >
                <div >
                <Link href={"/"} onClick={()=>setOpenMenu(false)}>Home</Link>
                <Link href={"/aboutus"} onClick={()=>setOpenMenu(false)}>About</Link>
                <Link href={"/contact"} onClick={()=>setOpenMenu(false)}>Contact</Link>
    
                </div>
            </div>
            }
        </div>
    )
}
export default Hamburger