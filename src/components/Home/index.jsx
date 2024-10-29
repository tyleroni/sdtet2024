import './index.scss'
import video from '../../assets/images/sdtet_homevideo.mp4'
import header from '../../assets/images/sdtetheader.png'
import darrow from '../../assets/images/darrow.png'
import lantern from '../../assets/images/lantern.png'
import enigmatic from '../../assets/images/enigmatic.png'
import ricecake from '../../assets/images/ricecake.png'
import yots from '../../assets/images/yots.png'
import enigmatic1 from '../../assets/images/enigmatic1.png'
import ricecake1 from '../../assets/images/ricecake1.png'
import yots1 from '../../assets/images/yots1.png'
import string from '../../assets/images/string.png'
import string2 from '../../assets/images/string2.png'
import card1 from '../../assets/images/1card.png'
import card2 from '../../assets/images/2card.png'
import card3 from '../../assets/images/3card.png'
import card4 from '../../assets/images/4card.png'
import decoration1 from '../../assets/images/decoration.png'
import decoration2 from '../../assets/images/decoration2.png'
import border from '../../assets/images/border.png'
import border1 from '../../assets/images/border1.png'
import vulcan from '../../assets/images/vulcan.png'
import citysd from '../../assets/images/citysd.png'
import commontheory from '../../assets/images/commontheory.png'
import vntv from '../../assets/images/vntv.png'
import regal from '../../assets/images/regal.png'
import countysd from '../../assets/images/countysd.png'
import hoi from '../../assets/images/hoi.png'
import seven from '../../assets/images/seven.png'
import sempra from '../../assets/images/sempra.png'
import crab from '../../assets/images/crab.png'
import kingfish from '../../assets/images/kingfish.png'
import jamul from '../../assets/images/jamul.png'
import dentist from '../../assets/images/dentist.png'
import React, { useState } from 'react';

const Home = () => {
    const Carousel = () => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const slides = [
            {src: enigmatic},
            {src: ricecake},
            {src: yots}
        ];

        const prevSlide = (e) => {
            e.preventDefault();
            setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : slides.length - 1);
        };
        const nextSlide = (e) => {
            e.preventDefault();
            setCurrentIndex(currentIndex < slides.length - 1 ? currentIndex + 1 : 0);
        };

        return (
            
            <div classNsame = 'carousel'>
                <div className = 'carousel-slides' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key = {index} className = 'slide'>
                            <img src = {slide.src} className = 'carousel-image'></img>
                        </div>
                    
                    ))}
                </div>
                <div className = 'controls'>
                    <a href="#" onClick={prevSlide} className="prev">Previous</a>
                    <a href="#" onClick={nextSlide} className="next">Next</a>
                    
                </div>
            </div>
            
            
        );
    };
    const Carousel1 = () => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const slides1 = [
            {src: enigmatic1},
            {src: ricecake1},
            {src: yots1}
        ];

        const prevSlide = (e) => {
            e.preventDefault();
            setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : slides1.length - 1);
        };
        const nextSlide = (e) => {
            e.preventDefault();
            setCurrentIndex(currentIndex < slides1.length - 1 ? currentIndex + 1 : 0);
        };

        return (
            
            <div className = 'carousel1'>
                <div className = 'carousel-slides1' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides1.map((slide, index) => (
                        <div key = {index} className = 'slide1'>
                            <img src = {slide.src} className = 'carousel-image1'></img>
                        </div>
                    
                    ))}
                </div>
                <div className = 'controls1'>
                    <a href="#" onClick={prevSlide} className="prev1">Previous</a>
                    <a href="#" onClick={nextSlide} className="next1">Next</a>
                    
                </div>
            </div>
            
            
        );
    };
    
    return (
    <>
        <div className = 'homevideo-container'>
            <video width= '1425' height="auto" autoplay = 'true' muted loop className= 'homevideo'>
                <source src = {video} type='video/mp4'></source>
                Your browser does not support the video tag.
            </video>
            
            
        </div>
        <div className='header-container'>
            <img src = {header} alt = 'SAN DIEGO TET FESTIVAL' className= 'sdtet-header'></img>  
            <h1 className = 'header-info'>FREE ADMISSION: JANUARY 31 - FEBRUARY 2, 2025</h1>
            <h2 className = 'header-info2'>SCROLL DOWN TO LEARN MORE</h2>
            <img src = {darrow} alt = 'Down arrow' className= 'darrow'></img>  
        </div>
        <section className='newyear-section'>
            <div className = 'newyear-container'>
                
                <div className='p-container'>
                    <h1 className='newyear-head newyear'>NEW YEAR, NEW BEGINNINGS</h1>
                    <h2 className='newyear-sub newyear'>Năm Mới, Sự Khởi Đầu Mới</h2>
                    <p className='p1 homep1'>The Tet Festival, or Tết Nguyên Đán is the Vietnamese Lunar New Year celebration, celebrating spring’s arrival. It’s a time for families to reunite, pay respect to ancestors, and welcome the new year with traditions that reflect Vietnamese culture.</p>
                    <p className='p1 homep1'>In 2025, the festival will celebrate the Year of the Snake, symbolizing good fortune and prosperity. In Vietnamese astrology, the Snake brings reflection and strategic planning. As such, Tet provides a meaningful opportunity for families to set new goals and embrace a fresh start. </p>
                    <p className='p1 homep1'>May your year be filled with wealth and prosperity. </p>
                </div>
                <div className = 'lantern-container'>
                    <img src = {lantern} alt = 'lantern and flower decoration' className = 'lantern'></img>
                </div>
            </div>
        </section>
        
        

        <section class = 'carousel-section'>
            <Carousel />
            <Carousel1 />
        </section>
        <section className = 'year-container'>
            <img src = {string} className='string'></img>
            <div className='card-container'>
                <img src = {card1} className='card1 card' alt='Polaroid attached to clothes line. 2025'></img>
                <img src = {card2} className='card2 card' alt='Polaroid attached to clothes line. 2025'></img>
                <img src = {card3} className='card3 card' alt='Polaroid attached to clothes line. 2025'></img>
                <img src = {card4} className='card4 card' alt='Polaroid attached to clothes line. 2025'></img>
            </div>
            <div className = 'card-container-responsive'>
                <img src = {string2} alt = 'clothes line' className = 'string2'></img>
                <div className = 'card-container2'>
                    <img src = {card3} className='card3-responsive card' alt='Polaroid attached to clothes line. 2025'></img>
                    <img src = {card4} className='card4-responsive card' alt='Polaroid attached to clothes line. 2025'></img>
                </div>
                
            </div>
            <div className = 'decoration container'>
                <img src = {decoration1} className = 'decoration1 decoration'></img>
                <img src = {decoration2} className = 'decoration2 decoration'></img>
            </div>
        </section>
        <div className = 'sponsor-container'>
            <h1 className = 'sponsorh1'>THANK YOU TO OUR 2025 SPONSORS</h1>
            <img src = {border} className = 'border'></img>
            <div className = 'sponsors-icon-container'>
                <div className = 'icon-container1 icon-container'>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {vulcan} className = 'vulcan icon'></img>
                    </a>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {commontheory} className = 'commontheory icon'></img>
                    </a>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {vntv} className = 'vntv icon'></img>
                    </a>
                </div>
                <div className = 'icon-container2 icon-container'>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {regal} className = 'regal icon'></img>
                    </a>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {citysd} className = 'citysd icon'></img>
                    </a>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {countysd} className = 'countysd icon'></img>
                    </a>
                </div>
                <div className = 'icon-container3 icon-container'>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {hoi} className = 'hoi icon'></img>
                    </a>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {seven} className = 'seven icon'></img>
                    </a>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {sempra} className = 'sempra icon'></img>
                    </a>
                </div>
                <div className = 'icon-container4 icon-container'>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {crab} className = 'crab icon'></img>
                    </a>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {kingfish} className = 'kingfish icon'></img>
                    </a>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {jamul} className = 'jamul icon'></img>
                    </a>
                </div>
                <div className = 'icon-container5 icon-container'>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {dentist} className = 'dentist icon'></img>
                    </a>
                    <img src = {dentist} className = 'dentistnone icon'></img>
                    <img src = {dentist} className = 'dentistnone icon'></img>
                    
                </div>
            </div>
            <div className = 'sponsor-icon-container-responsive'>
                <img src = {border1} className = 'border1'></img>
                <div className = 'responsive-icon-container1 responsive-icon-container'>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {vulcan} className = 'vulcanr iconr'></img>
                    </a>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {regal} className = 'regalr iconr'></img>
                    </a>
                </div>
                <div className = 'responsive-icon-container2 responsive-icon-container'>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {commontheory} className = 'commontheoryr iconr'></img>
                    </a>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {citysd} className = 'citysdr iconr'></img>
                    </a>
                </div>
                <div className = 'responsive-icon-container3 responsive-icon-container'>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {vntv} className = 'vntvr iconr'></img>
                    </a>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {countysd} className = 'countysdr iconr'></img>
                    </a>
                </div>
                <div className = 'responsive-icon-container4 responsive-icon-container'>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {hoi} className = 'hoir iconr'></img>
                    </a>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {crab} className = 'crabr iconr'></img>
                    </a>
                </div>
                <div className = 'responsive-icon-container5 responsive-icon-container'>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {seven} className = 'sevenr iconr'></img>
                    </a>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {kingfish} className = 'kingfishr iconr'></img>
                    </a>
                </div>
                <div className = 'responsive-icon-container6 responsive-icon-container'>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {sempra} className = 'semprar iconr'></img>
                    </a>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {jamul} className = 'jamulr iconr'></img>
                    </a>
                </div>
                <div className = 'responsive-icon-container7 responsive-icon-container'>
                    <a href = '/' target = '_blank' className = 'sponsor-icon'>
                        <img src = {dentist} className = 'dentistr iconr'></img>
                    </a>
                </div>
            </div>
        </div>
        <br></br>
    </>
    )
    
}

/*Code Below for if can figure out responsiveness on paralax effect*/
//<div id='horizontal-wrapper'>
//            <div className='inner'>
//                <div className='enigmatic-block ny-card'>
//                    <img src = {enigmatic}  alt = 'Enigmatic card' className= 'enigmatic'></img> 
//                </div>
//                <div className='ricecake-block ny-card'>
//                    <img src = {ricecake} alt = 'Ricecake card' className= 'ricecake'></img> 
//                    
//               </div>
//                <div className='yots-block ny-card'>
//                    <img src = {yots} alt = 'Year of the Snake card' className= 'yots'></img> 
//                </div>
//            </div>
//        </div>


window.addEventListener("scroll", function() {
    var windowScroll = window.scrollY;
    var $horizontalWrapper = document.getElementById("horizontal-wrapper");
    // $horizontalWrapper.querySelectorAll('.inner')[0].style.transform = 'translate(-99%)';
    $horizontalWrapper.className = '';
    switch (true) {
      case (windowScroll >= ($horizontalWrapper.offsetTop + $horizontalWrapper.offsetHeight - window.innerHeight)):
        $horizontalWrapper.classList.add('post-sticky');
        console.log('after');
        
      case (windowScroll >= $horizontalWrapper.offsetTop):
        $horizontalWrapper.classList.add('sticky');
  
        var _start = (windowScroll - $horizontalWrapper.offsetTop);
        var _end = ($horizontalWrapper.offsetTop + $horizontalWrapper.offsetHeight - window.innerHeight);
        var pct = (_start / _end) * 100;
        $horizontalWrapper.querySelectorAll('.inner')[0].style.transform = 'translate(-' + pct + '%)';
  
        break;
      default:
        $horizontalWrapper.classList.add('pre-sticky');
        $horizontalWrapper.querySelectorAll('.inner')[0].style.transform = 'translate(0)';
        break;
    }
  });

export default Home
