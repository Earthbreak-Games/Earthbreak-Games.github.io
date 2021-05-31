import { useState } from 'react';
import styles from './navbar.module.css';
import logo from '../../images/logo_black_no_words.png';
import {Link} from 'react-router-dom'
import menuIcon from '../../images/menu.png'
// import icon_Font from '../../images/title.png'


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, SetSelected] = useState("Home");
    
    

    // to do : make look good 
    const closedStyle = {
        left: '100vw',
        width: 0,
        transition: 'left 0.5s, width 1s',
        overflow:'hidden'
    };
      
    /* This CSS style is applied when the drawer is closed */
    const openedStyle = {
        left: 0 /* max-width is 0 in the closed drawer */,
        transition: 'left 0.5s',
    };

    const pages = [{text: "Home", link: ""}, {text: "About", link: "about"}, {text: "Blog", link: "blog"}, {text: "Connect", link: "connect"}]
    
    return (
      <div>
        
        <div className={styles.NavBar_Container}>
            
            {/*For Movi here*/}
            <div className={styles.title_wrapper + ' ' + styles.hide_desktop}>
                <div className={styles.title_text_wrapper}>
                    <p className={styles.title_text +' '+ styles.earthbreak}>Earthbreak</p>
                </div>
                <div className={styles.title_text_wrapper}>
                    <p className={[styles.title_text +' '+ styles.games]}>Games</p>
                </div>
            </div>

            <button className={styles.menu_icon_button_lite + ' ' + styles.hide_desktop}><img src={menuIcon} className={styles.menu_icon } alt="menu" onClick={() => setIsOpen(!isOpen)} /></button>

            {/*for desktop dev*/}
            <div className={styles.hide_mobile + ' ' + styles.NavBar_item_container}>
                <img src={logo} className={styles.logo} alt="earthbreak games logo"/>
                <div className={styles.title_wrapper}>
                    <div className={styles.title_text_wrapper}>
                        <p className={styles.title_text}>Earthbreak Games</p>
                    </div>
                </div>
                {/*menu items*/}
                <div className={styles.page_list_item_container}>
                    {pages.map((page) => {
                        return <div className={styles.page_link_container} key={page.text}>
                            {isSelected === page.text ? 
                            (
                                <Link to={'/'+page.link} className={styles.linkItem + ' ' + styles.selected} >{page.text}</Link>
                                
                            ) : 
                            (
                                <Link to={'/'+page.link} className={styles.linkItem} onClick={() => SetSelected(page.text)} >{page.text}</Link>
                            )}
                            
                        </div>
                    })}
                </div>
            </div>
            
        </div>

        <div className={styles.overtop +' ' + styles.hide_desktop} style={isOpen ? openedStyle : closedStyle}>            
            <button className={styles.menu_icon_button_dark}><img src={menuIcon} className={styles.menu_icon} alt="menu" onClick={() => setIsOpen(!isOpen)} /></button>
            
            <ul className={styles.page_list_item_container}>
                {pages.map((page) => {
                    return <li key ={page.text} className={styles.page_link_container}>
                            <Link to={'/'+page.link} className={styles.linkItem} onClick={() => setIsOpen(!isOpen)} >{page.text}</Link>
                        </li>
                })}
            </ul>
        </div>
        
        
            
      </div>
    );
}

export default NavBar;
