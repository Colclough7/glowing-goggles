import React from 'react'
import Logo from './GrabFood Logo (SVG-720p) - Vector69Com.svg'
import './HeaderLogo.css'




const HeaderLogo = () => {
    return (
        <div className='header-content_logo'>
            <div className="logo-container">
                <img  className="my-logo"src={Logo} alt="" />
            </div>
        </div>
    )
}

export default HeaderLogo
