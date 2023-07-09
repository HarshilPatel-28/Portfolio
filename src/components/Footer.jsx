import React from 'react'
import { AiFillGithub,AiFillInstagram,AiFillYoutube,AiOutlineArrowUp } from "react-icons/ai";
import founder from '../assets/founder.jpg'

const Footer = () => {
  return (
   <footer>
    <div>
        <img src={founder} alt="Founder" />
        <h2>Harshil Patel</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
    </div>
    <aside>
        <h2>Social Media</h2>

        <article>
        <a href="https://youtube.com/" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/mr.devil_028" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/HarshilPatel-28" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
    </aside>
    <a href="#home"><AiOutlineArrowUp/></a>
   </footer>
  )
}

export default Footer
