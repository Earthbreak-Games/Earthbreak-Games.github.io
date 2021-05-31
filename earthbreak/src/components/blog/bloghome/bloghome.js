import styles from './bloghome.module.css';
import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import style from './bloghome.module.css'


function Bloghome() {

    const posts = [
        {title: "Pre Sprint", text:"Before the beginning", link:'../post/1', date:'12-24-2021'},
        {title: "Sprint 1", text:"this is the start", link:'../post/1', date:'12-24-2021'}, 
        {title: "Sprint 2", text:"this is the next part", link:'../post/2'}
    ]

    return (
        <div className={styles.app}>
            <Suspense fallback={<div>Loading...</div>}>
                {posts.map((post) => {
                    return <div key={post.title} className={style.outerpostshell}>
                        <Link to={post.link}>
                            <p className={style.date}></p>
                            <p className={style.title}>{post.title}</p>
                            <p className={style.body}>{post.text}</p>
                        </Link>
                    </div>
                })}
            </Suspense>
        </div>
    );
}

export default Bloghome;