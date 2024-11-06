import React from '../css/portfolio.css';
import Image2 from "../components/work-out.jpg";
import Image from "../components/olcha.jpg";
import { Link } from 'react-router-dom';
import { IoLinkSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

function portfolio() {
  return (
    <div>
    <div class="Boshi">
        <h1>Portfolio</h1>
        <h3>Cheek my Portfolio</h3>
    </div>
    <div className="portfolio1">
        <img src={Image} alt="" />
        <div className="yozuv">
            <h1>Cherry - online store</h1>
            <p>Olcha - online store - easy payment throughout Uzbekistan</p>
            <div className="btnlar">
                <button className="btn2"><Link target="_blank" to={'https://github.com/Mrweb2011/Olcha.uz'}>Source </Link ><FaGithub className="icon1" /></button>
                <button className="btn1"><Link target="_blank" to={'https://olcha-uz-pink.vercel.app/'}>Link </Link><IoLinkSharp className="icon1" /></button>
            </div>
        </div>
    </div>
    <div className="portfolio2">
        <div className="yozuv1">
            <h1>Work Out</h1>
            <p></p>
            <div className="btnlar1">
                <button className="btn3"><Link target="_blank" to={''}>Sourse </Link><FaGithub className="icon1" /></button>
                <button className="btn1"><Link target="_blank" to={'https://work-out-nu.vercel.app/'}>Link </Link><IoLinkSharp className="icon1" /></button>
            </div>
        </div>
        <img src={Image2} alt="" />
    </div>
    <hr />
    <footer>
        <h3>Muhammadrasul.Dev 2023 - 2024 | Made with ❤️</h3>
    </footer>
    </div>
  )
}

export default portfolio
