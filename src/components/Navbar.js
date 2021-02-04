import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {MdFingerprint} from 'react-icons/md'
import {FaBars,FaTimes} from 'react-icons/fa'

function Navbar() {

    const [click,setClick] = useState(false)

    const handleClick= () =>(
        setClick((prev) => !prev)
    )
    return (
        <>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo">
                    <MdFingerprint className="navbar-icon" />
                    SARVESHK
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-links">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-links">
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" className="nav-links">
                            Blog
                        </Link>
                    </li>
                    <li className="nav-btn">
                       {button ? (
                           <Link to="/contact">
                                <Button buttonStyle='btn--outline'>Contact Me</Button>
                           </Link>
                       ) : (
                        <Link to="/contact">
                                <Button buttonStyle='btn--outline' buttonSize='btn-mobile'>Contact Me</Button>
                        </Link>
                       )}
                    </li>
                </ul>
            </div>
        </div>

            
        </>
    )
}

export default Navbar
