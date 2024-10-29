import './index.scss'
import volunteer from '../../assets/images/volunteer.png'
import volunteerimg from '../../assets/images/volunteerimg.png'

const Volunteers = () => {
    return (
        <>
        <section className = 'volunteer-banner-section'>
            <div className = 'volunteer-banner-container'>
                <img src = {volunteer} className = 'volunteer-banner'></img>
                <div className = 'volunteer-header-container'>
                    <h1 className = 'volunteer-header'>VOLUNTEERS</h1>
                </div>
                
            </div>
        </section>
        <section className = 'volunteer-info-section'>
            <div className = 'volunteer-info-container-parent'>
                <div className = 'volunteer-img-container'>
                    <img src = {volunteerimg} className = 'volunteerimg'></img>
                </div>
                 <div className = 'volunteer-info-container'>
                    <h1 className = 'volunteer-h1'>VOLUNTEERS</h1>
                    <p className = 'paragraph volunteer-paragraph1'>We are looking for friendly, helpful, reliable volunteers to help with this exciting festival. Our festival will be filled with people of all ages. If you were at the festival last year, then you have a general idea of how big it will be this year and how much fun everyone will have. If you didn’t attend the festival last year, then here is an opportunity for you to come and help make this upcoming festival even bigger and better!</p>
                    <p className = 'paragraph volunteer-paragraph2'>Questions? Contact us at <span>volunteer@sdtet.com</span></p>
                    <div className = 'volunteer-button-container1 volunteer-button-container'>
                        <a href = '/' className = 'apply-volunteer-btn'>REQUIRED: CONSENT AND LIABILITY RELEASE FORM</a>
                    </div>
                    <div className = 'volunteer-button-container2 volunteer-button-container'>
                        <a href = '/' className = 'apply-volunteer-btn optional-app-btn'>OPTIONAL: HOURS VERIFICATION FORM</a>
                    </div>
                    <div className = 'volunteer-button-container3 volunteer-button-container'>
                        <a href = '/' className = 'apply-volunteer-btn optional-app-btn'>JOIN OUR DISCORD</a>
                    </div>
                </div>
            </div>
           
        </section>
        </>
    )
}


export default Volunteers