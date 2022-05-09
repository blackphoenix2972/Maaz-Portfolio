import hero_img from '../Images/maaz.png';
import '../Styles/HeroHeader.css';
const HeroHeader = () => {
    return (
        <>
            <div>
                <div className='hero-grid-container'>
                    <div className='  '>
                        <span className='  text-blue-600 '>Hi There...</span>

                        <br/>
                        <h1 className='name-text'>I am Muhammad Maaz Qureshi</h1>
                        <br/>
                        <h2>Finance Guy</h2>
                        <br/>
                        Welcome and thanks for visiting my site! I invite you to take a moment and look around. Below, you can find my background, experience, skills, and how we could potentially work together! I've also included some interesting projects I have worked on for reference.
                        <br/>
                        <button type="button" className='button-primary' >About Me!</button> 
                    </div>
                    <div className='hero-img-container' >
                        <img src={hero_img} className='' alt="hero_img"  />
                    </div>
                    

                </div>
            </div>
        </>
    );
}

export default HeroHeader;