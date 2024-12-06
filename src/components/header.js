import { Link } from 'react-router-dom';
import { useState } from 'react'
import styles from '../css/Navbar.module.css'

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false)
  }
  return (
    <div className="App">
      <header data-aos-duration="1000" data-aos="fade-down" className="App-header">
        <nav className={`${styles.navbar}`}>
          <Link to='/' className={`${styles.logo} flex`}>Muhammadrasul.<span>Dev</span></Link>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <Link to={'/'} className={`${styles.navLink}`}>Home</Link>
            </li>
            <li onClick={removeActive}>
              <Link to={'/portfolio'} className={`${styles.navLink}`}>Portfolio</Link>
            </li>
            <li onClick={removeActive}>
              <Link to={'/setup'} className={`${styles.navLink}`}>Setup</Link>
            </li>
            <li onClick={removeActive}>
              <Link to={'about'} className={`${styles.navLink}`}>About me</Link>
            </li>
          </ul>
          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Header;