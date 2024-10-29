import './index.scss'
import vendorheader from '../../assets/images/vendorheader.png'
import activity1 from '../../assets/images/activity1.png'
import activity2 from '../../assets/images/activity2.png'
import activity3 from '../../assets/images/activity3.png'
import vendormap from '../../assets/images/vendormap.png'
import vendorlist from '../../assets/images/vendorlist.png'


const Vendors = () => {
    return (
        <>
        <section className = 'vendors-header-section'>
            <img src = {vendorheader} className = 'vendorheader'></img>
            <div className = 'vendor-header-container'>
                <h1 className = 'vendors header'>VENDORS</h1>
            </div>
            
            
            <div className = 'join-container'>
                <h1 className = 'h1 join-vendor'>INTERESTED IN JOINING AS A <span>VENDOR</span>?</h1>
                <a href = '/vendor-app' className = 'vendor-btn'>Click Here</a>
            </div>
        </section>
        <section className = 'activities-section'>
            <h1 className = 'vendor-header'>ACTIVITIES</h1>
            <div className = 'activity-container'>
                <div className = 'activity1 activity-card'>
                    <a href ='/' target ='_blank'>
                        <img src = {activity1} className = 'activity1-img activity-img'></img>
                        <h2 className = 'activity1-h2 activity-header'>Discover Delicious Street Food!</h2>
                    </a>
                </div>
                <div className = 'activity2 activity-card'>
                    <a href ='/' target ='_blank'>
                        <img src = {activity2} className = 'activity2-img activity-img'></img>
                        <h2 className = 'activity1-h2 activity-header'>Explore your Creativity!</h2>
                    </a>
                </div>
                <div className = 'activity3 activity-card'>
                    <a href ='/' target ='_blank'>
                        <img src = {activity3} className = 'activity3-img activity-img'></img>
                        <h2 className = 'activity1-h2 activity-header'>Be Involved with your Community!</h2>
                    </a>
                </div>
            </div>         
        </section>
        <section className = 'vendor-map-section'>
            <h1 className = 'vendor-header'>VENDOR MAP</h1>
            <div className = 'vendormap-container'>
                <img src = {vendormap} className = 'vendormap'></img>
            </div>
        </section>
        <section className = 'vendor-list-section'>
            <img src = {vendorlist} className = 'vendorlist'></img>
        </section>
        </>
    )
}

export default Vendors