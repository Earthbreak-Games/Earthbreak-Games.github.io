import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route } from "react-router-dom";

import NavBar from './components/navbar/navbar'
import LandingPage from './pages/landingpage/landingpage'
import Blog from './pages/blog/blog'
import Postloader from './components/blog/postloader'
import ContactPage from './pages/contact/contactpage'

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
      <NavBar/>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/connect" component={ContactPage}/>
      <Route path="/post/:id" children={<Postloader />}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);






// 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
