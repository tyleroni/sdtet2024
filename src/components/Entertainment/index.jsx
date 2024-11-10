import './index.scss'
import ticketline from '../../assets/images/ticketline.png'
import ticket2 from '../../assets/images/ticket2.png'
import cookieleft from '../../assets/images/cookieleft.png'
import cookieright from '../../assets/images/cookieright.png'
import cookieleftr from '../../assets/images/cookieleftr.png'
import cookierightr from '../../assets/images/cookierightr.png'
import justin from '../../assets/images/justin.png'
import trina from '../../assets/images/trina.png'
import philip from '../../assets/images/philip.png'
import huyen from '../../assets/images/huyen.png'
import dragonimg from '../../assets/images/dragonimg.png'
import dragonimgr from '../../assets/images/dragonimgr.png'
import flower from '../../assets/images/flower.png'
import taiko from '../../assets/images/taiko.png'
import taikor from '../../assets/images/taikor.png'
import leatea from '../../assets/images/leatea.png'
import beta from '../../assets/images/beta.png'
import apidd from '../../assets/images/apidd.png'
import kidstalent from '../../assets/images/kidstalent.png'
import kidsart from '../../assets/images/kidsart.png'
import stepup from '../../assets/images/stepup.png'
import dancebattle from '../../assets/images/dancebattle.png'
import kidstalentr from '../../assets/images/kidstalentr.png'
import kidsartr from '../../assets/images/kidsartr.png'
import stepupr from '../../assets/images/stepupr.png'
import dancebattler from '../../assets/images/dancebattler.png'
import culturalvillage from '../../assets/images/culturalvillage.png'
import carnival from '../../assets/images/carnival.png'
import petting from '../../assets/images/petting.png'
import carnivalr from '../../assets/images/carnivalr.png'
import pettingr from '../../assets/images/pettingr.png'

const Entertainment = () => {
    return (
        <>
            <section className = 'entertainment-banner-section'>
                <div className = 'entertainment-banner-container'>
                    <h1 className = 'entertainment-header'>ENTERTAINMENT</h1>
                </div>
            </section>
            <section className = 'ticket1-section'>
                <div className = 'ticket1-img-container'>
                    <div className = 'ticket1-container'>
                        <h2 className = 'ticket1-h2'>&#40; MAIN STAGE &#41;</h2>
                        <h1 className = 'headline-header'>2025 HEADLINERS</h1>
                        <img src = {ticketline} className = 'ticketline'></img>

                        <div className = 'justin-card headline-card'>
                            <div className = 'cookie-img-container'>
                                <img src = {cookieleft} className = 'cookieleft'></img>
                                <img src = {cookieleftr} className = 'cookieleftr'></img>
                            </div>
                            <div className = 'headline-left-card-content-container'>
                                <div className = 'headline-left-card1'>
                                    <h1 className = 'headline-card-header'>L&Ugrave;U B&Igrave;CH</h1>
                                    <div className = 'headline-left-info-container'>
                                        <div className = 'headline-left-date-container'>
                                            <h1 className = 'feb'>FEB</h1>
                                            <h1 className = 'seventeen'>17</h1>
                                            <h1 className = 'twenty'>2024</h1>
                                        </div>
                                        <div className = 'headline-left-time-container'>
                                            <div className = 'performing-container headline-performance-container'>
                                                <h2 className = 'performing'>PERFORMING AT</h2>
                                            </div>
                                            <div className = 'time-and-container'>
                                                <h2 className = 'and'>&</h2>
                                                <div className = 'performance-time-container'>
                                                    <h2 className = 'performance-time-h2'>6:55 PM</h2>
                                                    <h2 className = 'performance-time-h2'>8:50 PM</h2>
                                                </div>
                                            </div>
                                            <div className = 'zodiac-container headline-performance-container'>
                                                <h2 className = 'zodiac'>ZODIAC: MONKEY</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'headline-left-card2'>
                                    <img src = {justin} className = 'justin'></img>
                                </div>
                            </div>
                        </div>
                        <div className = 'trina-card headline-card'>
                            <div className = 'headline-left-card2'>
                                <img src = {trina} className = 'justin'></img>
                            </div>
                            <div className = 'headline-left-card-content-container'>
                                <div className = 'headline-left-card1'>
                                    <h1 className = 'headline-card-header'>TRINA B&#193;O TR&#194;N</h1>
                                    <div className = 'headline-left-info-container'>
                                        <div className = 'headline-left-date-container'>
                                            <h1 className = 'feb'>FEB</h1>
                                            <h1 className = 'seventeen'>17</h1>
                                            <h1 className = 'twenty'>2024</h1>
                                        </div>
                                        <div className = 'headline-left-time-container'>
                                            <div className = 'performing-container headline-performance-container'>
                                                <h2 className = 'performing'>PERFORMING AT</h2>
                                            </div>
                                            <div className = 'time-and-container'>
                                                <h2 className = 'and'>&</h2>
                                                <div className = 'performance-time-container'>
                                                    <h2 className = 'performance-time-h2'>7:30 PM</h2>
                                                    <h2 className = 'performance-time-h2'>9:30 PM</h2>
                                                </div>
                                            </div>
                                            <div className = 'zodiac-container headline-performance-container'>
                                                <h2 className = 'zodiac'>ZODIAC: MONKEY</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'cookie-img-container'>
                                    <img src = {cookieright} className = 'cookieright'></img>
                                    <img src = {cookierightr} className = 'cookierightr'></img>
                                </div>
                            </div>
                        </div>
                        <div className = 'philip-card headline-card'>
                            <div className = 'cookie-img-container'>
                                <img src = {cookieleft} className = 'cookieleft'></img>
                                <img src = {cookieleftr} className = 'cookieleftr'></img>
                            </div>
                            <div className = 'headline-left-card-content-container'>
                                <div className = 'headline-left-card1'>
                                    <h1 className = 'headline-card-header'>PHILIP HUY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                                    <div className = 'headline-left-info-container'>
                                        <div className = 'headline-left-date-container'>
                                            <h1 className = 'feb'>FEB</h1>
                                            <h1 className = 'seventeen'>18</h1>
                                            <h1 className = 'twenty'>2024</h1>
                                        </div>
                                        <div className = 'headline-left-time-container'>
                                            <div className = 'performing-container headline-performance-container'>
                                                <h2 className = 'performing'>PERFORMING AT</h2>
                                            </div>
                                            <div className = 'time-and-container'>
                                                <h2 className = 'and'>&</h2>
                                                <div className = 'performance-time-container'>
                                                    <h2 className = 'performance-time-h2'>2:15 PM</h2>
                                                    <h2 className = 'performance-time-h2'>3:45 PM</h2>
                                                </div>
                                            </div>
                                            <div className = 'zodiac-container headline-performance-container'>
                                                <h2 className = 'zodiac'>ZODIAC: MONKEY</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'headline-left-card2'>
                                    <img src = {philip} className = 'justin'></img>
                                </div>
                            </div>
                        </div>
                        <div className = 'huyen-card headline-card'>
                            <div className = 'headline-left-card2'>
                                <img src = {huyen} className = 'justin'></img>
                            </div>
                            <div className = 'headline-left-card-content-container'>
                                <div className = 'headline-left-card1'>
                                    <h1 className = 'headline-card-header'>M&Yacute; HUY&Ecirc;N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                                    <div className = 'headline-left-info-container'>
                                        <div className = 'headline-left-date-container'>
                                            <h1 className = 'feb'>FEB</h1>
                                            <h1 className = 'seventeen'>18</h1>
                                            <h1 className = 'twenty'>2024</h1>
                                        </div>
                                        <div className = 'headline-left-time-container'>
                                            <div className = 'performing-container headline-performance-container'>
                                                <h2 className = 'performing'>PERFORMING AT</h2>
                                            </div>
                                            <div className = 'time-and-container'>
                                                <h2 className = 'and'>&</h2>
                                                <div className = 'performance-time-container'>
                                                    <h2 className = 'performance-time-h2'>2:30 PM</h2>
                                                    <h2 className = 'performance-time-h2'>4:30 PM</h2>
                                                </div>
                                            </div>
                                            <div className = 'zodiac-container headline-performance-container'>
                                                <h2 className = 'zodiac'>ZODIAC: RABBIT</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'cookie-img-container'>
                                    <img src = {cookieright} className = 'cookieright cookieright-huyen'></img>
                                    <img src = {cookierightr} className = 'cookierightr'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className = 'ticket2-section'>
                <div className = 'ticket2-img-container'>
                    <div className = 'ticket2-container'>
                        <h1 className = 'headline-header event-header'>2024 EVENTS</h1>
                        <img src = {ticketline} className = 'ticketline'></img>
                    </div>
                    <div className = 'event-container'>
                        <div className = 'performance-banner-container'>
                            <h2 className = 'performance-banner'> PAST PERFORMANCES</h2>
                        </div>
                        <div className = 'lion-dance-container'>
                            <div className = 'dragon-and-lion'>
                                <h2 className = 'event-h2'>DRAGON & LION DANCING</h2>
                                <h3 className = 'event-h3'>We have lion dancing everyday!</h3>
                                <h3 className = 'event-h3'>Please check our <span>schedule</span> for the exact times.</h3>
                                <img src = {flower} className = 'flower-img'></img>
                                <div className = 'lion-link-container'>
                                    <p className = 'lion-links'><a href = 'https://www.legendaryliondance.com/' className = 'lion-linka dragon-linka' target = '_blank'>Legendary</a> / <a href = 'https://hoanghiemliondance.blogspot.com/' className = 'lion-linka dragon-linka' target = '_blank'>Hoa Nghiêm</a> /<br></br><a href = 'https://www.ttcaskf.org/'  className = 'lion-linka dragon-linka' target = '_blank'>Three Treasures</a> / <a href = 'http://www.sdliondance.com/' className = 'lion-linka dragon-linka' target = '_blank'>Southern Sea</a> /<br className = 'responsive-break' /> Chánh Kiến</p>
                                </div>
                            </div>
                            <div className = 'dragon-img-container'>
                                <img src = {dragonimg} className = 'dragon-img'></img>
                                <img src = {dragonimgr} className = 'dragon-imgr'></img>
                            </div>
                        </div>
                        <div className = 'performance2-container'>
                            <div className = 'taiko-container'>
                                <div className = 'taiko-right-container'>
                                    <img src = {taiko} className = 'taiko'></img>
                                    <img src = {taikor} className = 'taikor'></img>
                                </div>
                                <div className = 'taiko-left-container'>
                                    <div>
                                        <h2 className = 'event-h2 event-h2-margin'>TAIKO DRUMS</h2>
                                        <h2 className = 'event-sub-h2'><a href = 'https://naruwantaiko.com/' className = 'lion-linka' target = '_blank'>NARUWAN TAIKO</a></h2>
                                        <h2 className = 'event-sub-h2'>SAT 11:30 AM</h2>
                                        <h2 className = 'event-sub-h2'><a href = 'https://lajollataiko.org/' className = 'lion-linka' target = '_blank'>LA JOLLA TAIKO</a></h2>
                                        <h2 className = 'event-sub-h2'>SUN 5:00 PM</h2>
                                    </div>
                                    <div className = 'taiko-flower-container'>
                                        <img src = {flower} className = 'flower-img1'></img>
                                    </div>
                                </div>
                            </div>
                            <div className = 'three-performance-container'>
                                <div className = 'leatea-container'>
                                    <div className = 'leatea-left-container'>
                                        <h2 className = 'event-h2 event-h2-margin'><a href = '/' className = 'leatea-btn'>LEATEA</a></h2>
                                        <h2 className = 'event-sub-h2'>FRI FEB 16,</h2>
                                        <h2 className = 'event-sub-h2'>8:30 PM - MAIN STAGE</h2>
                                        
                                    </div>
                                    <div className = 'leatea-right-container'>
                                        <img src = {leatea} className = 'leatea'></img>
                                    </div>
                                </div>
                                <div className = 'beta-container'>
                                    <div className = 'beta-left-container'>
                                        <h2 className = 'event-h2 event-h2-margin'>BETA LION</h2>
                                        <h2 className = 'event-sub-h2'>SAT FEB 17,</h2>
                                        <h2 className = 'event-sub-h2'>2:00 PM - MAIN STAGE</h2>
                                    </div>
                                    <div className = 'beta-right-container'>
                                        <img src = {beta} className = 'beta'></img>
                                    </div>
                                </div>
                                <div className = 'apidd-container'>
                                    <div className = 'apidd-left-container'>
                                        <h2 className = 'event-h2 event-h2-margin'><a href = '/' className = 'leatea-btn'>APIDD</a></h2>
                                        <h2 className = 'event-sub-h2'>SAT FEB 17,</h2>
                                        <h2 className = 'event-sub-h2'>5:00 PM - MAIN STAGE</h2>
                                        
                                    </div>
                                    <div className = 'apidd-right-container'>
                                        <img src = {apidd} className = 'apidd'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = 'performance-banner-container'>
                            <h2 className = 'performance-banner banner-margin'>PAST COMPETITIONS</h2>
                        </div>
                        <div className = 'competitions1-container'>
                            <div className = 'kidstalent-container'>
                                <div className = 'kidstalent-header-container'>
                                    <h2 className = 'event-h2 kidstalent-headerr'>KIDS GOT TALENT</h2>
                                </div>
                                <img src = {kidstalent} className = 'kidstalent'></img>
                                <img src = {kidstalentr} className = 'kidstalentr'></img>
                                <h2 className = 'event-h2 kidstalent-header'>KIDS GOT TALENT</h2>
                                <h2 className = 'event-sub-h2'>SUN 18, 1:00 PM</h2>
                                <h2 className = 'event-sub-h2'>CULTURAL VILLAGE</h2>
                            </div>
                            <div className = 'stepup-container border-container'>
                                <div className = 'stepup-left-container'>
                                    <h2 className = 'event-h2 event-h2-margin stepup-header'>STEP UP DANCE</h2>
                                    <h2 className = 'event-sub-h2 responsive'>FRI FEB 16,</h2>
                                    <h2 className = 'event-sub-h2 responsive'>8:30 PM - MAIN STAGE</h2>
                                    <h3 className = 'event-h3 letterspacing nonresponsive'>Who will become the best dance crew to take home $1000?</h3>
                                    <h3 className = 'event-h3 textalign stepup-margin1 nonresponsive'>FRI FEB 16,<br></br>9:00 PM - MAIN STAGE</h3>
                                    
                                </div>
                                <div className = 'stepup-right-container'>
                                    <img src = {stepup} className = 'stepup'></img>
                                    <img src = {stepupr} className = 'stepupr'></img>
                                </div>
                                <div className = 'kidstalent-header-container'>
                                    <h2 className = 'event-h2 kidstalent-headerr'>STEP UP DANCE</h2>
                                </div>
                            </div>
                        </div>
                        <div className = 'competitions2-container'>
                            <div className = 'kids-art-container'>
                                <div className = 'kidstalent-header-container'>
                                    <h2 className = 'event-h2 kidstalent-headerr'>KIDS ART CONTEST</h2>
                                </div>
                                <img src = {kidsart} className = 'kidstalent'></img>
                                <img src = {kidsartr} className = 'kidstalentr'></img>
                                <h2 className = 'event-h2 kidstalent-header'>KIDS ART CONTEST</h2>
                                <h2 className = 'event-sub-h2'>SUN 18, 1:00 - 4:00 PM</h2>
                                <h2 className = 'event-sub-h2'>CULTURAL VILLAGE</h2>
                            </div>
                            <div className = 'stepup-container'>
                                <div className = 'dance-left-container'>
                                    <h2 className = 'event-h2 event-h2-margin stepup-header'>DANCE BATTLE</h2>
                                    <h3 className = 'event-sub-h2 responsive'>FRI FEB 16,5:30 PM <br /> MAIN STAGE</h3>
                                    <h3 className = 'event-h3 letterspacing nonresponsive'>No sign-ups necessary!<br></br>1ST PLACE RECEIVES $400!</h3>
                                    
                                    <h3 className = 'event-h3 textalign stepup-margin2 nonresponsive'>FRI FEB 16,<br></br>5:30 PM - MAIN STAGE</h3>
                                    
                                    
                                </div>
                                <div className = 'stepup-right-container'>
                                    <img src = {dancebattle} className = 'stepup'></img>
                                    <img src = {dancebattler} className = 'stepupr'></img>
                                </div>
                                <div className = 'kidstalent-header-container'>
                                    <h2 className = 'event-h2 kidstalent-headerr'>DANCE BATTLE</h2>
                                </div>
                            </div>
                        </div>
                        <div className = 'performance-banner-container'>
                            <h2 className = 'performance-banner banner-margin'>PAST ATTRACTIONS</h2>
                        </div>
                        <div className = 'attractions-container'>
                            <div className = 'cultural-village-container'>
                                <img src = {culturalvillage} className = 'culturalvillage'></img>
                                <h2 className = 'event-h2 kidstalent-header'>CULTURAL VILLAGE</h2>
                                <h2 className = 'event-h2 kidstalent-header responsive'>CULTURAL VILLAGE</h2>
                                <h2 className = 'event-sub-h2 cultural-h2'>Showcasing unique art and historical Vietnamese art installations!</h2>
                                <img src = {flower} className = 'flower'></img>
                            </div>
                            <div className = 'attractions-right-container'>
                                <div className = 'carnival1-container'>
                                    <div className = 'carnival-left-container'>
                                        <h2 className = 'event-h2 event-h2-margin'>CARNIVAL</h2>
                                        <h3 className = 'event-h3 carnival-h3 nonresponsive'>Games and rides charged separately!</h3>
                                        <div className = 'carnival-date-container'>
                                            <h3 className = 'event-h3 textalign carnival-margin'>Please check our schedule <br className = 'responsive-br'></br>for the closing times!</h3>
                                            
                                        </div>
                                    </div>
                                    <div className = 'carnival-right-container'>
                                        <img src = {carnival} className = 'carnival nonresponsive'></img>
                                        <img src = {carnivalr} className = 'carnivalr responsive'></img>
                                    </div>
                                </div>
                                <div className = 'petting-container'>
                                    <div className = 'carnival-left-container'>
                                        <h2 className = 'event-h2 event-h2-margin'>PETTING ZOO</h2>
                                        <h3 className = 'event-h3 carnival-h3 nonresponsive'>Games and rides charged separately!</h3>
                                        <div className = 'carnival-date-container'>
                                            <h3 className = 'event-h3 textalign carnival-margin'>SAT FEB 17, <br className = 'responsive-br'></br>CULTURAL VILLAGE</h3>
                                            
                                        </div>
                                    </div>
                                    <div className = 'carnival-right-container'>
                                        <img src = {petting} className = 'carnival nonresponsive'></img>
                                        <img src = {pettingr} className = 'carnivalr responsive'></img>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </section>
        </>
    )
}


export default Entertainment