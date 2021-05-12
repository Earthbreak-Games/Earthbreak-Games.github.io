import { useState } from 'react';
import styles from './navbar.module.css';
import logo from '../../images/logo_white_words.png';
import {NavLink} from 'reactstrap'
import menuIcon from '../../images/menu.png'
import icon_Font from '../../images/title.png'


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenAnimation, setOpenAnimation] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);

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

            <button className={styles.menu_icon_button_lite}><img src={menuIcon} className={styles.menu_icon} alt="menu" onClick={() => setIsOpen(!isOpen)} /></button>
        
        </div>
        {isOpen ? (
        
        <div className={styles.overtop}>
            
            <button className={styles.menu_icon_button_dark}><img src={menuIcon} className={styles.menu_icon} alt="menu" onClick={() => setIsOpen(!isOpen)} /></button>
        
            <ul className={styles.page_list_container}>
                {pages.map((page) =>{
                    return <li className={styles.page_link_container}>{page}</li>
                })}
            </ul>
        </div>
        
        ) : (<></>)}
        
            
      </div>
    );
}

export default NavBar;
