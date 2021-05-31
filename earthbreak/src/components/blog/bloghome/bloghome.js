import styles from './bloghome.module.css';
import logo from '../../../images/logo_white_words.png';
import React, { Suspense, useState } from 'react';
import { NavLink } from 'react-router-dom';


function Bloghome() {

    const posts = [
        {title: "Pre Sprint", text:"Before the beginning", link:'../post/1',
        title: "Sprint 1", text:"this is the start", link:'../post/1'}, 
        {title: "Sprint 2", text:"this is the next part", link:'../post/2'}
    ]

    return (
        <div className={styles.app}>
            <Suspense fallback={<div>Loading...</div>}>
                {posts.map((post) => {
                    return <div>
                        <NavLink to={post.link} key={post.link}>
                            <p>{post.title}</p>
                            <p>{post.text}</p>
                        </NavLink>
                    </div>
                })}
                
            </Suspense>
        </div>
    );
}

export default Bloghome;