import Head from "next/head";
import style from './../styles/contact.module.css';
import Body from "../components/Body/Body";
import contactImage from './../public/contact.jpg';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Fare Share: We're Here to Help</title>
        <meta name="description" content="Have a question or need assistance with our service? Our friendly customer support team is here to help. Get in touch with us via phone, email, or our online contact form, and we'll be happy to assist you. At Fare Share, we're committed to providing you with the best possible commuting experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAiqx0MaSS3QybaU4NH9iehcbro6r92nD8&libraries=places"></script> */}
      </Head>

      <Body>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className="black-big-font">Contact Us</h1>
              <h3 className={`${style.grayBigText} ${style.fontChange}`}>Whether you have questions or simply want to get in touch, we are all ears and would love to hear from you.</h3>

              <div className="mt-5">
                <h3 className="mb-4">Support Contact Information</h3>
                <div className={style.contactInfo}><div><i className="fa fa-phone"></i></div> +91 831-952-6825</div>
                <div className={style.contactInfo}><div><i className="fa fa-envelope"></i></div> support@fareshare.in</div>
              </div>
            </div>

            <div className="col-md-6 align-self-center">
              <img src={contactImage.src} alt="contact image" className={`img-fluid ${style.contactRightImage}`} />
            </div>
          </div>


        </div>
      </Body>
    </>
  );
};
export default Contact;
