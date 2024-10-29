import './index.scss'
import Navbar from '../Navbar'
import Footer from '../Footer'
import {Outlet} from 'react-router-dom'


const Layout = () => {
    return (
        <div className='app'>
            <Navbar />
            <div className='page'>
                <Outlet>
                
                </Outlet>


            </div>
            <Footer />
        </div>
    )
}

export default Layout