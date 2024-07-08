import '../styles/Body.scss'

import StyleComponent from './StyleComponent'
import BlogComponent from './BlogComponent'

import HeroImage from '../assets/hero_image.jpg'
import StyleImage1 from '../assets/image1.jpg'
import StyleImage2 from '../assets/image2.jpg'
import StyleImage3 from '../assets/image3.jpg'
import Redshoe from '../assets/image4.jpg'
import Logo from '../assets/logo.png'
import Logo1 from '../assets/logo1.png'
import Logo2 from '../assets/logo2.png'
import Logo3 from '../assets/logo3.png'
import Logo4 from '../assets/logo4.png'
import Image5 from '../assets/image5.jpg'
import Image6 from '../assets/image6.jpg'



const Body = () => {
    return (
        <>
            <div className="hero">
                <div className="small-container hero-container">
                    <div className="hero-content">
                        <small className='nodisplay'>OUR PRODUCT</small>
                        <h1>Shoes For Everyone</h1>
                        <p className='nodisplay'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ab!</p>
                        <br />
                        <button className="btn nodisplay">View More</button>
                    </div>
                    <div className="hero-img">
                        <img src={HeroImage} alt="" />
                    </div>
                </div>
            </div>




            <div className="styling">
                <div className="container">
                    <p>LOREM ANTE IOS</p>
                    <h1>Choose your style</h1>
                    <div className="style-cards">
                        <StyleComponent Name="Shoes" imgsrc={StyleImage1} />
                        <StyleComponent Name="Running Sneakers" imgsrc={StyleImage2} />
                        <StyleComponent Name="Sneakers" imgsrc={StyleImage3} />
                    </div>
                </div>
            </div>



            <div className="home3">
                <div className="img">
                    <img src={Redshoe} alt="" />
                </div>
                <div className="content">
                    <h1>Stylish</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, veritatis inventore adipisci distinctio facere laboriosam cupiditate? Velit voluptate porro fuga?</p>
                    <a href="">Read More &#8594;</a>
                </div>
            </div>



            <div className="home4 company-logos small-container">
                <img src={Logo1} alt="" />
                <img src={Logo2} alt="" />
                <img src={Logo3} alt="" />
                <img src={Logo4} alt="" />
                <img src={Logo2} alt="" />
            </div>



            <div className="home5">
                <div className="container">
                    <p>ABOUT THE BRAND</p>
                    <h1>Our Blog</h1>
                    <div className="style-cards">
                        <BlogComponent imgsrc={StyleImage3} Name='Design Better' />
                        <BlogComponent imgsrc={StyleImage2} Name='Brand New Look' />
                        <BlogComponent imgsrc={StyleImage1} Name='Healthy Lifestyle' />
                    </div>
                </div>
            </div>




            <div className="home6">
                <div className="container home6-con">
                    <div className='content up'>
                        <i class="home6-icon fa-solid fa-globe"></i>
                        <h2>Worldwide</h2>
                        <p>Vis ne postulant principes accommodare ius modo</p>
                    </div>
                    <div className='content'>
                        <i class="home6-icon fa-solid fa-cart-shopping"></i>
                        <h2>Online Shopping</h2>
                        <p>Vis ne postulant principes accommodare ius modo</p>
                    </div>
                    <div className='content up'>
                        <i class="home6-icon fa-regular fa-thumbs-up"></i>
                        <h2>Creativity</h2>
                        <p>Vis ne postulant principes accommodare ius modo</p>
                    </div>
                    <div className='content'>
                        <i class="home6-icon fa-regular fa-lightbulb"></i>
                        <h2>Special Offers</h2>
                        <p>Vis ne postulant principes accommodare ius modo</p>
                    </div>
                </div>
            </div>




            <div className="home7">

                <div className="img">
                    <img src={Image5} alt="" />
                </div>
                <div className="content">
                    <h1>New Releases</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique minima eius unde neque architecto ex?</p>
                    <a href="">Read More &#8594;</a>
                </div>
            </div>



            <div className="home8">
                <div className="container home8-con">
                    <div className="img">
                        <img src={Image6} alt="" />
                    </div>
                    <div className="content">
                        <h1>Our Brand New Shoes</h1>
                        <div className='flex'>
                            <p>Development</p>
                            <p>95%</p>
                        </div>
                        <div className="flex">
                            <p>Engineering</p>
                            <p>90%</p>
                        </div>
                        <div className="flex">
                            <p>Design</p>
                            <p>85%</p>
                        </div>
                    </div>
                </div>
            </div>




            <div className="home9">
                <div className="container">
                    <div className="heading">
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <h2>Product Presentation</h2>
                    </div>
                    <h1>The best and easiest way <br />
                    to introduce your product</h1>
                    <p>Collaboratively conceptualize orthogonal core competencies through effective solutions.</p>
                    <button className='btn'>View More</button>
                </div>
            </div>
        </>

    )
}

export default Body