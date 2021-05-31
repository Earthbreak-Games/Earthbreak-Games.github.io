import React, { Suspense } from 'react';
import {useParams } from "react-router-dom";


function Postloader() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    let Post = null
    
    function update(id_post){
      Post = React.lazy(() => import('./post/post'+id_post))
    }
  
    return (  
      <Suspense fallback={<div>Loading...</div>}>
        {update(id)}
        <Post/>
      </Suspense>
    );
  
}

export default Postloader