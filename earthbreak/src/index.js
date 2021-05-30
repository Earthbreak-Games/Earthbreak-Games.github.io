import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route, useParams } from "react-router-dom";

import NavBar from './components/navbar/navbar'
import LandingPage from './pages/landingpage/landingpage'
import Blog from './pages/blog/blog'
import Post_loader from './components/blog/post_loader'


ReactDOM.render(
  <React.StrictMode>
    
    <Router>
      <NavBar/>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/post/:id" children={<Post_loader />}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);






// 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
