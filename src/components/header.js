import { Link } from 'react-router-dom';
import { useState } from 'react'
import styles from '../css/Navbar.module.css'

function Header() {
  // adding the states 
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }
  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          <Link to='/' className={`${styles.logo}`}>Muhammadrasul.dev</Link>
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