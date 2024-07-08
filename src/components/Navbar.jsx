import '../styles/Navbar.scss'
import Logo from '../assets/logo.png'


const Navbar = () => {
    return (
        <nav>
            <div className="container nav-container">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>

                <ul className="links">
                    <li>Home</li>
                    <li>Clients</li>
                    <li>Blog</li>
                    <li>New Releases</li>
                </ul>

                <div className="social-icons">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>

                <div className="nav-toggle">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar