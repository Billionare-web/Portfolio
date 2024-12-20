import React from '../css/portfolio.css';
import Image2 from "../components/imgs/work-out.jpg";
import Image from "../components/imgs/IT-house-online.png";
import { Link } from 'react-router-dom';
import { IoLinkSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

function portfolio() {
  return (
    <div>
    <div data-aos="fade-up" data-aos-duration="1000" class="Boshi">
        <h1>Portfolio</h1>
        <h3>Cheek my Portfolio</h3>
    </div>
    <div data-aos="fade-up" data-aos-duration="1000" className="portfolio1">
        <img src={Image} alt="" />
        <div className="yozuv">
            <h1>IT House Online</h1>
            <p>IT House Edu | Dasturlash Kusrlari</p>
            <div className="btnlar">
                <button className="btn2"><Link target="_blank" to={'https://github.com/Billionare-web/IT-House-online'}>Source </Link ><FaGithub className="icon1" /></button>
                <button className="btn1"><Link target="_blank" to={'https://netlify.com/'}>Link </Link><IoLinkSharp className="icon1" /></button>
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
    <hr className='hr_portfolio' />
    <footer>
        <h3>Muhammadrasul.Dev 2023 - 2024 | Made with ❤️</h3>
    </footer>
    </div>
  )
}

export default portfolio
