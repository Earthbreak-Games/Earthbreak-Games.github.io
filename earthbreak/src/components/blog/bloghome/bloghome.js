import styles from './bloghome.module.css';
import logo from '../../../images/logo_white_words.png';
import React, { Suspense, useState } from 'react';


function Bloghome() {

    const components = [React.lazy(() => import('../post/post1')), React.lazy(() => import('../post/post2'))]

    return (
        <div className={styles.app}>
            <Suspense fallback={<div>Loading...</div>}>
                {components[0]}
            </Suspense>
        </div>
    );
}

export default Bloghome;