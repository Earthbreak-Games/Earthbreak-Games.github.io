import { useState } from 'react';
import styles from './navbar.module.css';
import logo from '../../images/logo_white_words.png';
import {NavLink} from 'reactstrap'
import menuIcon from '../../images/menu.png'
import icon_Font from '../../images/title.png'


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);
    

    // to do : make look good 
    const closedStyle = {
        left: '-100vw',
        transition: 'left 0.5s'
    };
      
    /* This CSS style is applied when the drawer is closed */
    const openedStyle = {
        left: 0 /* max-width is 0 in the closed drawer */,
        transition: 'left 0.5s'
    };

    const pages = ["Home", "Blog"]
    
    return (
      <div>
        
        <div className={styles.NavBar_Container}>
            <div className={styles.title_wrapper}>
                <div className={styles.title_text_wrapper}>
                    <p className={styles.title_text +' '+ styles.earthbreak}>Earthbreak</p>
                </div>
                <div className={styles.title_text_wrapper}>
                    <p className={[styles.title_text +' '+ styles.games]}>Games</p>
                </div>
            </div>

            <button className={styles.menu_icon_button_lite + ' ' + styles.hide_desktop}><img src={menuIcon} className={styles.menu_icon } alt="menu" onClick={() => setIsOpen(!isOpen)} /></button>
        
        </div>

        <div className={styles.overtop} style={isOpen ? openedStyle : closedStyle}>
            
            <button className={styles.menu_icon_button_dark}><img src={menuIcon} className={styles.menu_icon} alt="menu" onClick={() => setIsOpen(!isOpen)} /></button>
        
            <ul className={styles.page_list_item_container}>
                {pages.map((page) => {
                    return <li key ={page} className={styles.page_link_container}>{page}</li>
                })}
            </ul>
        </div>
        
        
            
      </div>
    );
}

export default NavBar;
