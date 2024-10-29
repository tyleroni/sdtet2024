import './index.scss'
import mvsdbanner from '../../assets/images/mvsd-banner.png'
import polaroid from '../../assets/images/mvsdpolaroid.png'
import decoration3 from '../../assets/images/decoration3.png'
import decoration4 from '../../assets/images/decoration4.png'
import decoration5 from '../../assets/images/decoration5.png'
import decoration6 from '../../assets/images/decoration6.png'
import mvsdinsta1 from '../../assets/images/mvsdinsta1.png'
import mvsdinsta2 from '../../assets/images/mvsdinsta2.png'
import mvsdinsta3 from '../../assets/images/mvsdinsta3.png'
import mvsdinsta4 from '../../assets/images/mvsdinsta4.png'




const Mvsd = () => {
    return (
        <>
            <section className = 'banner-section'>
                <div className = 'mvsd-banner-container'>
                    <img src = {mvsdbanner} width = '2000' height = 'auto' className='visitor-background' alt = 'Visitor Info Graphic'></img>
                    <div className = 'mvsd-header-container'>
                        <hr color = 'black'></hr>
                        <h1 className = 'mvsd header2'>MISS VIETNAM SAN DIEGO</h1> 
                        <hr color = 'black'></hr>
                    </div>
                </div>
            </section>
            <section className = 'mvsd-info-section'>
                <div className = 'mvsd-info-container'>
                    <h1 className = 'h1 mvsd-pageant'> WHAT IS THE MISS VIETNAM SD PAGEANT</h1>
                    <p className = 'paragraph1 pageant-description'>Established in 2006 by The Vietnamese American Youth Alliance (VAYA), Miss Vietnam San Diego celebrates the beauty and cultural heritage of the Vietnamese community in San Diego. Our mission is to unite and strengthen the community through women’s empowerment, leadership, and service. In providing a platform and mentorship for youth and goodwill ambassadors, we cultivate community role models and leaders.</p>
                    <h1 className = 'h1 mvsd-apply-info'> WHY YOU SHOULD APPLY FOR MVSD!</h1>
                    <p className = 'paragraph1 pageant-apply-description'>Miss Vietnam San Diego represents the beauty of the Vietnamese community in San Diego, beauty inside and out. Miss Vietnam San Diego is kind, intelligent, and proud of their heritage. Miss Vietnam San Diego always puts the community first.</p>
                </div>
                <div className = 'mvsd-img-container'>
                    <img src = {polaroid} className = 'polaroid nonresponsive-mvsd'></img>
                </div>
            </section>
            <section className = 'apply-section'>
                
                <div className = 'reasons-container'>
                    <div className = 'flex-container1'>
                        <div className = 'reason1 reason'>
                            <h2 className = 'number'>01 / </h2>
                            <h2 className = 'explanation'>Embrace your cultural roots</h2>
                        </div>
                        <div className = 'reason2 reason'>
                            <h2 className = 'number'>02 / </h2>
                            <h2 className = 'explanation'>Develop perosnal & professional skills</h2>
                        </div>
                        <div className = 'reason3 reason'>
                            <h2 className = 'number'>03 / </h2>
                            <h2 className = 'explanation longexplanation'>Boost self-efficacy and captivating presentations skills</h2>
                        </div>
                        <div className = 'reason4 reason'>
                            <h2 className = 'number'>04 / </h2>
                            <h2 className = 'explanation'>Engage with the Vietnamese community</h2>
                        </div>
                        <h1 className = 'h1 how-to-apply'>HOW TO APPLY</h1>
                        <p className = 'paragraph1 how-to-apply-description'>Thinking about joining next year's cohort? Discover all the exciting details about the Miss Vietnam San Diego pageant! Visit our website to learn more about the application process and embrace your Viet heritage all while serving your community!</p>
                        <a href = '/' className = 'apply-btn'>VISIT MVSD FOR MORE INFO</a>

                    </div> 
                    <div className = 'flex-container2'>
                        <img src = {decoration3} className = 'decoration3 nonresponsive-mvsd'></img>
                    </div>
                </div>
            </section>
            <section className = 'mvsd-dates-section'>
                <h1 className = 'h1 mvsd-dates'>MVSD IMPORTANT DATES</h1>
                <div className = 'mvsd-dates-responsive'>
                    <div className = 'reason1 reason'>
                        <h2 className = 'number numberr'>JAN 04 / </h2>
                        <h2 className = 'explanation explanationr'>Application Opens</h2>
                    </div>
                    <div className = 'reason2 reason'>
                        <h2 className = 'number numberr'>JAN 14 / </h2>
                        <h2 className = 'explanation explanationr'>Application Closes</h2>
                    </div>
                    <div className = 'reason3 reason'>
                        <h2 className = 'number numberr'>JAN 20 / </h2>
                        <h2 className = 'explanation explanationr'>Court Annoucement</h2>
                    </div>
                    <div className = 'reason4 reason'>
                        <h2 className = 'number numberr'>JAN 28 / </h2>
                        <h2 className = 'explanation explanationr'>Placeholder Text</h2>
                    </div>
                    <div className = 'reason5 reason'>
                        <h2 className = 'number numberr'>FEB 01 / </h2>
                        <h2 className = 'explanation explanationr'>Placeholder Text</h2>
                    </div>
                </div>
                <div className = 'dates1-container dates-container'>
                    <div className= 'decoration4-container'>
                        <img src = {decoration4} className = 'decoration4 nonresponsive-mvsd'></img>
                    </div>
                    <div className = 'jan4-container jan-container'>
                        <h2 className = 'jan4 month'>JAN</h2>
                        <h2 className = '04 day'>04</h2>
                        <p className = 'event'>Application Opens</p>
                    </div>
                    <div className = 'jan14-container jan-container'>
                        <h2 className = 'jan14 month'>JAN</h2>
                        <h2 className = '14 day'>14</h2>
                        <p className = 'event'>Application Closes</p>
                    </div>
                    <div className = 'jan20-container jan-container'>
                        <h2 className = 'jan20 month'>JAN</h2>
                        <h2 className = '20 day'>20</h2>
                        <p className = 'event'>Court Announcement</p>
                    </div>
                </div>
                <div className = 'dates2-container dates-container'>
                    <div className= 'decoration5-container'>
                        <img src = {decoration5} className = 'decoration5 nonresponsive-mvsd'></img>
                    </div>
                    <div className = 'jan28-container jan-container'>
                        <h2 className = 'jan28 month'>JAN</h2>
                        <h2 className = '28 day'>28</h2>
                        <p className = 'event'>Application Opens</p>
                    </div>
                    <div className = 'feb1-container jan-container'>
                        <h2 className = 'feb1 month'>FEB</h2>
                        <h2 className = '01 day'>01</h2>
                        <p className = 'event'>Application Opens</p>
                    </div>
                    <div className= 'decoration6-container'>
                        <img src = {decoration6} className = 'decoration6 nonresponsive-mvsd'></img>
                    </div>
                </div>
            </section>
            <section className = 'mvsd-instagram-section'>
            <h1 className = 'sdtf h1'>#MVSD</h1>
            <p className = 'sdtf-p paragraph2'>Follow @missvietnamsandiego on Instagram to see their latest updates!</p>
            <div className = 'sdtf-img-container'>
                <a href ='instagram'>
                    <img src = {mvsdinsta1} className = 'mvsdinsta1-img insta-img sample' alt = 'insta1 image'></img>
               </a>
                <a href ='instagram'>
                    <img src = {mvsdinsta2} className = 'mvsdinsta2-img insta-img sample' alt = 'insta2 image'></img>
                </a>
                <a href ='instagram'>
                    <img src = {mvsdinsta3} className = 'mvsdinsta3-img insta-img sample' alt = 'insta3 image'></img>
                </a>
                <a href ='instagram'>
                    <img src = {mvsdinsta4} className = 'mvsdintsa4-img insta-img sample' alt = 'insta4 image'></img>
                </a>
            </div>
        </section>
        </>
    )
}


export default Mvsd