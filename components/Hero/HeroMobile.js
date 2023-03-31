import { useState } from 'react';
import classes from './Hero.module.css';

const HeroMobile = () => {


    return (
        <h1 className={classes.heromobile}>
            <span className={`${classes.gradientText} ${classes.clipBg}`}>
                Satisfaction.
            </span>
            <span className={`${classes.gradientText} ${classes.clipBg}`}>
                Technology.
            </span>
            <span className={`${classes.gradientText} ${classes.clipBg}`}>
                Reliable.
            </span>

        </h1>
    )
}
export default HeroMobile;