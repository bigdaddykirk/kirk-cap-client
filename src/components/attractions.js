import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import redsImage from '../images/reds.jpg';
import icecream from '../images/icecream.jpg';
import bengals from '../images/bengals.jpg';
import chili_1920 from '../images/chili_1920.webp';
import fc from '../images/fc.jpg';
import vangogh from '../images/vangogh.jpg';
import artcenter from '../images/artcenter.jpg';
import playhouse from '../images/playhouse.jpg';
import union from '../images/union.jpg';
import pizza from '../images/pizza.jpg';

 
class Attractions extends Component {
    render() {
        return (
		
            <section class="portfolio section" id="portfolio">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-12">
                        
                        <div class="title text-center">
                            <h2 style={{color: 'white'}}>Attractions</h2>
                            <div class="border"></div>
                        </div>
                        
                    </div> 
                </div>
                </div> 
                <div class="row">
                    <div class="col-md-12">
                        <div class="portfolio-filter">
                            <button class="active" type="button" data-filter="all">All</button>
                            <button type="button" data-filter="sports">Sports</button>
                            <button type="button" data-filter="art">Art</button>
                            <button type="button" data-filter="food">Food</button>
                        </div>
                    </div>
                </div>
                <div class="row mx-auto ">
                    <div class="filtr-item col-lg-4 col-md-6" data-category="sports">
                        <div class="portfolio-block"  >
                            <img src={redsImage} alt="reds" className='img-fluid'/>
                            <div class="caption">
                                {/* <img class="search-icon image-popup" data-effect="mfp-with-zoom" src="./images/reds.jpg"
                                    data-lightbox="image-1" /> */}
                                    <i class="tf-ion-android-search"></i>
                          
                                <h4><a href="">Cincinnati Reds</a></h4>
                                <p style={{color: 'white', maxWidth: "300px", maxHeight:"300px"}} class="mb-0">The Cincinnati Reds is our baseball team</p>
                            </div>
                        </div>
                    </div>
                    <div class="filtr-item col-lg-4 col-md-6" data-category="sports">
                        <div class="portfolio-block">
                            <img src={bengals} alt="bengals football team" className='img-fluid'/>
                            <div class="caption">
                                {/* <a class="search-icon image-popup" data-effect="mfp-with-zoom" href="images/portfolio/bengals.jpg"
                                    data-lightbox="image-1">
                                    <i class="tf-ion-android-search"></i>
                                </a> */}
                                <h4><a href="">The Bengals</a></h4>
                                <p style={{color: 'white', maxWidth: "300px", maxHeight: "300px"}} class="mb-0">WHO-DEY our signature saying for our football team The Bengals</p>
                            </div>
                        </div>
                    </div>
                     <div class="filtr-item col-lg-4 col-md-6" data-category="sports">
                        <div class="portfolio-block">
                            <img src={fc} alt="fc football" className='img-fluid'/>
                            <div class="caption">
                               
                                <h4>FC Cincinnati</h4>
                                <p style={{color: 'white', maxWidth: "300px"}} class="mb-0">FC Cincinnati is our first ever soccer team founded in 2018</p>
                            </div>
                        </div>
                    </div>
                    <div class="filtr-item col-lg-4 col-md-6" data-category="art">
                        <div class="portfolio-block">
                            <img src={vangogh} alt="Van Gogh Art Museum" className='img-fluid'/>
                            <div class="caption">
                                {/* <a class="search-icon image-popup" data-effect="mfp-with-zoom" href="images/portfolio/vangogh.jpg"
                                    data-lightbox="image-1">
                                    <i class="tf-ion-android-search"></i>
                                </a> */}
                                <h4><a href="">The Van Gogh Art Museum</a></h4>
                                <p style={{color: 'white', maxWidth:"300px"}} class="mb-0">The Van Gogh museum was recently opened earlier 2022 to the public to give an art history of the historical painter.</p>
                            </div>
                        </div>
                    </div>
                    <div class="filtr-item col-lg-4 col-md-6" data-category="art">
                        <div class="portfolio-block">
                            <img src={artcenter} alt="art center" className='img-fluid'/>
                            <div class="caption">
                                {/* <a class="search-icon image-popup" data-effect="mfp-with-zoom" href="images/portfolio/artcenter.jpg"
                                    data-lightbox="image-1">
                                    <i class="tf-ion-android-search"></i>
                                </a> */}
                                <h4><a href="">Contemporary Art Center</a></h4>
                                <p style={{color: 'white', maxWidth:"300px"}} class="mb-0">This art center is one of our most popular art atractions in the Cincinnati area houses art from a lot of local artists best pieces.</p>
                            </div>
                        </div>
                    </div> 
                    <div class="filtr-item col-lg-4 col-md-6" data-category="art">
                        <div class="portfolio-block">
                            <img src={playhouse} alt="playhouse" className='img-fluid'/>
                            <div class="caption">
                                {/* <a class="search-icon image-popup" data-effect="mfp-with-zoom" href="images/portfolio/playhouse.jpg"
                                    data-lightbox="image-1">
                                    <i class="tf-ion-android-search"></i>
                                </a> */}
                                <h4><a href="">Play House In The Park</a></h4>
                                <p style={{color: 'white', resize: "300px" }} class="mb-0">Our theater provides a live performance of many famous plays and create an immursive feeling for the audience.</p>
                            </div>
                        </div>
                    </div>
                    <div class="filtr-item col-lg-4 col-md-6" data-category="design">
                        <div class="portfolio-block">
                            <img src={union} alt="union terminal" className='img-fluid'/>
                            <div class="caption">
                                {/* <a class="search-icon image-popup" data-effect="mfp-with-zoom" href="images/portfolio/union.jpg"
                                    data-lightbox="image-1">
                                    <i class="tf-ion-android-search"></i>
                                </a> */}
                                <h4><a href="">Union Center Terminal</a></h4>
                                <p style={{color: 'white', maxWidth:"300px"}} class="mb-0">Union Center Terminal was founded in the 1920's connecting multiple rail lines but over time it eventually became an art museum for the public.</p>
                            </div>
                        </div>
                    </div>
                    <div class="filtr-item col-lg-4 col-md-6" data-category="food">
                        <div class="portfolio-block">
                            <img src={icecream} alt="greaters icecream" className='img-fluid'/>
                            <div class="caption">
                                {/* <a class="search-icon image-popup" data-effect="mfp-with-zoom" href="images/portfolio/icecream.jpg"
                                    data-lightbox="image-1">
                                    <i class="tf-ion-android-search"></i>
                                </a> */}
                                <h4><a href="">Greaters</a></h4>
                                <p style={{color: 'white', maxWidth:"300px"}} class="mb-0">Greaters is one of the biggest ice cream franchises in Cincinnati and is home of the black berry raspberry chocolate chip.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="filtr-item col-lg-4 col-md-6" data-category="food">
                        <div class="portfolio-block">
                            <img src={pizza}alt="la'rosa's pizza" className='img-fluid'/>
                            <div class="caption">
                                {/* <a class="search-icon image-popup" data-effect="mfp-with-zoom" href="images/portfolio/pizza.jpg"
                                    data-lightbox="image-1">
                                    <i class="tf-ion-android-search"></i>
                                </a> */}
                                <h4><a href="">La Rosa's</a></h4>
                                <p style={{color: 'white', maxWidth:"300px"}} class="mb-0">La Rosa's is our famous local pizzeria founded in 1954 by Buddy Larosa.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <header id="navigation" class="navigation sticky">
  <div class="container">
    <div class="navbar-header w-100">
      <nav class="navbar navbar-expand-lg navbar-dark px-0">
        
          
          
        
  
        <button style={{color: 'darkblue'}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar01" 
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span  style={{color: 'darkblue'}}  class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbar01">
          <ul class="navbar-nav navigation-menu ml-auto">
            <li class="nav-item" >
              <Link style={{color: '#262629'}} class="nav-link" to="/">Home</Link>
            </li>

            <li class="nav-item">
              <Link style={{color: '#262629'}} class="nav-link" to="/CultureHistory">Culture & History</Link>
            </li>
            <li class="nav-item">
              <Link style={{color: '#262629'}} class="nav-link" to="/Attractions">Attractions</Link>
            </li>
            <li class="nav-item">
              <Link style={{color: '#262629'}} class="nav-link" to="/Sports">Sport Venues</Link>
            </li>
            <li class="nav-item">
              <Link style={{color: '#262629'}} class="nav-link" to="/Contact">Contact</Link>
            </li>
            <li class="nav-item">
              <Link style={{color: '#262629'}} class="nav-link" to="/teamPage">Team</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  </header>


        </section> 

);
    }
}
export default Attractions;