import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className="footer_stick">
            <div className="bg-dark pt-3 pb-3 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className={`mb-0 text-white ${classes.m_text_center}`}>Copyright ©FareShare. All Rights Reserved</p>
                        </div>
                        {/* <div className="col-md-6">
                            <p className={`mb-0 text-white text-end ${classes.m_text_center}`}>Designed & developed by Office</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;