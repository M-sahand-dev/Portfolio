import type { JSX } from "react";
import {LinkApp}from './index'
import { IoLogoTwitter } from "react-icons/io";
import { FaGithub, FaInstagram, FaLinkedinIn , FaTelegram } from "react-icons/fa";

export const ContactLink = ():JSX.Element=> {
  return (
    <div className="flex space-x-4">
                <LinkApp href={"https://x.com/M_sahand_js?t=Y3nphbBdHJupcrOUMiTtHA&s=09"} icon={<IoLogoTwitter />} />
                <LinkApp href={"https://www.instagram.com/m_sahand_js?igsh=MXIxZTZuaXg5dmRuNw=="} icon={<FaInstagram />} />
                <LinkApp href={"https://www.linkedin.com/in/mehdi-leilaei-0042162aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} icon={<FaLinkedinIn />} />
                <LinkApp href={"https://github.com/M-sahand-dev"} icon={<FaGithub />} />
                <LinkApp href={"https://t.me/M_sahand_js"} icon={<FaTelegram />} />
    </div>
);
};