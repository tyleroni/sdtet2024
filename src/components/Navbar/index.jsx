import './index.scss'
import sdtetlogo from '../../assets/images/SDTet.png'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    }
    return ( 
    <>
    
    <div className = 'navbar1'>
        <h1 className = 'vaya'>VIETNAMESE-AMERICAN YOUTH ALLIANCE + VIETNAMESE FEDERATION OF SAN DIEGO PRESENTS</h1>
        <div className = 'navbar2'>
            <div className = 'leftnavbar'>
                <Link className = 'logo' to = '/'>
                    <img src= { sdtetlogo } className = 'vaya-logo'alt="VAYA Tet Logo"/>
                </Link>
                <div className = 'navinfo'>
                    <div className = 'navdate-container'>
                        <p className = 'navdate'>JAN 31 - FEB 2</p>
                        <p className = 'navlocation'>NTC PARK</p>
                    </div>
                </div>
            </div>
            <button className = 'hamburger' onClick = {toggleMenu}>
                <div className = 'line'></div>
                <div className = 'line'></div>
                <div className = 'line'></div>
            </button>
            <nav className = {`nav ${isOpen ? "open" : ""}`}>
                <ul className = 'navbuttons'>
                    <li className="navhome"><Link to="/" onClick={closeMenu}>HOME</Link></li>
                    <li className="navvisitor"><Link to="/info" onClick={closeMenu}>VISITOR INFO</Link></li>
                    <li className="naventertainment"><Link to="/entertainment" onClick={closeMenu}>ENTERTAINMENT</Link></li>
                    <li className="navvendors"><Link to="/vendors" onClick={closeMenu}>VENDORS</Link></li>
                    <li className="navschedule"><Link to="/schedule" onClick={closeMenu}>SCHEDULE</Link></li>
                    <li className="navmvsd"><Link to="/mvsd" onClick={closeMenu}>MISS VIETNAM SD</Link></li>
                    <li className="navsponsors"><Link to="/sponsors" onClick={closeMenu}>SPONSORS</Link></li>
                    <li className="navvolunteers"><Link to="/volunteers" onClick={closeMenu}>VOLUNTEERS</Link></li>
                </ul>
            </nav>
            
        </div>
        <hr></hr>
    </div>
    </>
)
}
export default Navbar

