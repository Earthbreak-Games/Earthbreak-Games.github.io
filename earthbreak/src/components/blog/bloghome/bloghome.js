import styles from './bloghome.module.css';
import logo from '../../../images/logo_white_words.png';
import React, { Suspense, useState } from 'react';
import { NavLink } from 'react-router-dom';


function Bloghome() {

    const posts = [{Text: "The beginning", link:'../post/1'}, {Text: "After bit", link:'../post/2'}]





    return (
        <div className={styles.app}>
            <Suspense fallback={<div>Loading...</div>}>
                {posts.map((post) => {
                    return <NavLink to={post.link} key={post.link}>
                        {post.Text}
                    </NavLink>
                })}
                
            </Suspense>
        </div>
    );
}

export default Bloghome;