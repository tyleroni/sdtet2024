import './index.scss'
import sdtetlogo from '../../assets/images/SDTet.png'
import { Link } from 'react-router-dom'

const Navbar = () => ( 
    <>
    
    <div className = 'navbar1'>
        <h1 className = 'vaya'>VIETNAMESE-AMERICAN YOUTH ALLIANCE + VIETNAMESE FEDERATION OF SAN DIEGO PRESENTS</h1>
        <hr></hr>
        <div className = 'navbar2'>
            <div className = 'leftnavbar'>
                <Link className = 'logo' to = '/'>
                    <img src= { sdtetlogo } className = 'vaya-logo'alt="VAYA Tet Logo"/>
                </Link>
                <div className = 'navinfo'>
                    <div className = 'navdate-container'>
                        <p className = 'navdate'>JAN 31 - FEB 2</p>
                        <p className = 'navlocation'>MIRA MESA PARK</p>
                    </div>
                </div>
            </div>
            <nav>
                <ul className = 'navbuttons'>
                    <li className = 'navhome'><a href = '/'>HOME</a></li>
                    <li className = 'navvisitor'><a href = '/info'>VISITOR INFO</a></li>
                    <li className = 'naventertainment'><a href = '/entertainment'>ENTERTAINMENT</a></li>
                    <li className = 'navvendors'><a href = '/vendors'>VENDORS</a></li>
                    <li className = 'navschedule'><a href = '/schedule'>SCHEDULE</a></li>
                    <li className = 'navmvsd'><a href = '/mvsd'>MISS VIETNAM SD</a></li>
                    <li className = 'navsponsors'><a href = '/sponsors'>SPONSORS</a></li>
                    <li className = 'navvolunteers'><a href = '/volunteers'>VOLUNTEERS</a></li>
                </ul>
            </nav>
            
        </div>
        <hr></hr>
    </div>
    </>
)

export default Navbar