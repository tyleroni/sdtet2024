import './index.scss'
import sponsorheader from '../../assets/images/sponsorheader.png'
import worm from '../../assets/images/worm.png'



const Sponsors = () => {
    return(
        <>
        <section className = 'sponsor-header-section'>
            <div className = 'sponsor-banner-container'>
               <img src = {sponsorheader} width='2000' height='auto' className = 'sponsor-banner'></img> 
            </div>
            <div className = 'sponsor-header-container'>
                <h1 className = 'sponsor-header'>SPONSORS</h1> 
            </div>
        </section>
        <section className = 'sponsors-section'>
            <div className = 'sponsor-info-container'>
                <h1 className = 'h1-font sponsor-h'>SPONSORS & EXHIBITORS</h1>
                <div className = 'sponsor-body-container'>
                    <a href = '/' className = 'apply-btn1 sponsorship-package'>VIEW THE 2024 SPONSORSHIP PACKAGE</a>
                <p className = 'sponsor-p1 p1-start'>For more than a decade, VAYA has organized the Tết Festival, the largest Vietnamese New Year event in San Diego and the second largest event of its kind in Southern California. The Festival is one of the most anticipated annual events for the Vietnamese community in San Diego. Highlights of the festival include the Lion Dances, Miss Vietnam San Diego Pageant, Golden Voice singing competition, the Cultural Village and various other performances.</p>
                <p className = 'sponsor-p1'>This is a great opportunity for your business or organization to establish an on-going presence in the Vietnamese community, introduce new products or services and to tie non-profit investment strategy to your business development plan. On average, our festival attracts more than 25,000 people each year.</p>
                <div className = 'sponsor-list-container'>
                    <p className = 'sponsor-p1 paragraphsponsor1'>Below are benefits of supporting the San Diego Tết Festival:</p>
                    <li className = 'sponsor-list'>Increase your company’s visibility</li>
                    <li className = 'sponsor-list'>Promote your company’s products and/or services</li>
                    <li className = 'sponsor-list'>Explore new business ventures</li>
                    <li className = 'sponsor-list'>Reinforce your commitment and support of the Vietnamese community</li>
                    <li className = 'sponsor-list'>Celebrate the Vietnamese New Year</li>
                </div>
                <p className = 'sponsor-p1 paragraphsponsor'>On behalf of VAYA, we would like to invite your company to take part in celebrating the diversity of San Diego by pledging your support.</p>
                <p className = 'sponsor-p1 paragraphsponsor2'>Questions? Contact us at <span>sponsor@sdtet.com</span></p>
                </div>
                
            </div>
            <div className = 'worm-container'>
                <img src = {worm} className = 'worm'></img>
            </div>
        </section>
        </>
    )
}


export default Sponsors