import { useState } from "react"
import './header.css'
import headerLogo from '/Users/jakeburdass/Developer/personal-project/bassment-media-player/bassment-media-player/src/assets/headerLogo.png'

const Header = () => {
    return (
        <>
        <div className="header">
            <img className="headerLogo" src={headerLogo}/>
        </div>
        </>
    )
}

export default Header