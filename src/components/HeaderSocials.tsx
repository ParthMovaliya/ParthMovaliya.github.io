import React from 'react'
import { BsLinkedin, BsGithub, BsDiscord } from "react-icons/bs"
import "../styles/home.css"

const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/parth-movaliya-5190a9236/" target="_blank" rel="noreferrer">
                <BsLinkedin />
            </a>
            <a href="https://github.com/ParthMovaliya" target="_blank" rel="noreferrer">
                <BsGithub />
            </a>
            <a href="https://discordapp.com/channels/@me/5025/" target="_blank" rel="noreferrer">
                <BsDiscord />
            </a>

        </div>
    )
}

export default HeaderSocials