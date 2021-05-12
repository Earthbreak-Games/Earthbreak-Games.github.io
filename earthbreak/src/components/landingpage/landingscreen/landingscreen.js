import styles from './landingscreen.module.css';
import logo from '../../../images/logo_white_words.png';

function LandingScreen() {
  return (
    <div className={styles.app}>
        <div className={styles.Inside_boarder}>
          <header className={styles.App_header}>
            <img src={logo} className={styles.App_logo} alt="logo" />
            <p>
              Pre-order now
            </p>
            <a
              className={styles.App_link}
              href="https://github.com/Earthbreak-Games"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </header>
        </div>
        
    </div>
  );
}

export default LandingScreen;
