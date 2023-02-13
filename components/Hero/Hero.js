import classes from './Hero.module.css';
import heroImage from './../../public/hero-banner.png';

const Hero = () => {
    return (
        <section>
            <div style={{background : `url(${heroImage.src})`}} className={classes.heroBanner}>

            </div>
        </section>
    )
}
export default Hero;