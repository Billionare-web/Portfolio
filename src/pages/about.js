import React from '../css/about.css';
import Image from '../components/photo_2024-09-03_21-14-58.jpg'

function about() {
  return (
    <div>
    <div className="boshi">
        <h1>About</h1>
        <h2>A lot inforation about me.</h2>
    </div>
    <div className="yozuv_rasm">
        <img src={Image} alt="" />
        <div className="yozuv1">
            <h2 className='h2_1'>Hello my dear! I am Muhammadrasul Samaritdinov <br />and I`m 13. I`m from Uzbekistan and currently <br />I`m living in Tashkent city. So I started learing <br />Frontend Developement since 2024 years from <br />IT HOUSE-Academy.</h2>
            <h1>Why I chose Frontend?</h1>
            <h2 className='h2_2'>Because, I love build web sites, web apps with <br />Frontend and I enjoy my work.</h2>
        </div>
    </div>
    <hr className='hr_about' />
    <footer>
        <h3>Muhammadrasul.Dev 2023 - 2024 | Made with ❤️</h3>
    </footer>
    </div>
  )
}

export default about
