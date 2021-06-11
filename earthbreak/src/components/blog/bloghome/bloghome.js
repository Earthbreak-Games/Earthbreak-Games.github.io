import style from './bloghome.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import FillerImage from '../../../images/logo_white_words.png'
import image1 from '../../../images/Screenshot.png'
import image2 from '../../../images/Screenshot2.png'
import Masonry from 'react-masonry-css'

function Bloghome() {

    const posts = [
        {title: "Map generation and Story Telling ", link:'../post/2', date:'12-19-2021', image: image1, image_alt:'filler'},
        {title: "Creating a new biomass", link:'../post/1', date:'12-21-2021', image: image2, image_alt:'filler'}, 
        {title: "Before the beginning there was nothing", link:'../post/1', date:'12-24-2021', image: FillerImage, image_alt:'filler'},
    ]


    /*I think we can crunch mobile and desktop display into one but it works for now*/
    return (
        <div className={style.app}>

            <div className={style.bio_container}>

                <p className={style.about_bio}>
                    From the beginning to the end
                </p>

            </div>




                
                {posts.map((post) => {
                    /*MOBILE*/
                    return <div key={post.title} className={style.outerpostshell + ' ' + style.hide_desktop}>
                        <Link to={post.link}>
                            <Container>
                                <Row>
                                    <Col>
                                        <div className={style.post_image_container}>
                                            <img className={style.post_image} src={post.image} alt={post.image_alt}></img>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className={style.post_title_container}>
                                            <p className={style.post_title}>{post.title}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className={style.post_date_container}>
                                            <p className={style.post_date}>{post.date}</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Link>
                    </div>
                })}

        {/*DESKTOP*/}
        <div className={style.hide_mobile +' '+ style.projects_container}>
            <Masonry
                breakpointCols={5}
                className={style.my_masonry_grid}
                columnClassName="my-masonry-grid_column">
                {
                
                posts.map((post)=>{
                    return <div key={post.title} className={style.outerpostshell}>
                    
                    <Link to={post.link} kay={post.title}>
                        <Container>
                            <Row>
                                <Col>
                                    <div className={style.post_image_container}>
                                        <img className={style.post_image} src={post.image} alt={post.image_alt}></img>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className={style.post_title_container}>
                                        <p className={style.post_title}>{post.title}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className={style.post_date_container}>
                                        <p className={style.post_date}>{post.date}</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Link>
                    </div>
                })}
                
                
            </Masonry>

                    


        </div>


        </div>
    );
}

export default Bloghome;