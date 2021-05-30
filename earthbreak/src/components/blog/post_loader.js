import React, { Suspense } from 'react';
import { HashRouter as Router, Route, useParams } from "react-router-dom";

function Post_loader() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    let Post = null
    
    function update(id_post){
      Post = React.lazy(() => import('./post/post'+id_post))
    }
  
    return (  
      <>
      <Suspense fallback={<div>Loading...</div>}>
        {update(id)}
        <Post/>
      </Suspense>
      </>
    );
  
}

export default Post_loader