import Head from "next/head";
import Body from "../components/Body/Body";

const About = () => {
  return (
    <>
      <Head>
        <title>About Fare Share: Our Story and Mission</title>
        <meta name="description" content="At Fare Share, we understand the challenges of daily commuting and strive to make it easier for you. Our mission is to provide a reliable and efficient office pickup and drop service from your doorstep, so you can arrive at work on time and stress-free. Learn more about our story and commitment to making your daily commute a breeze." />
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
          <h1 className="black-big-font">Our Story</h1>
          <h2 className="gray-big-font">
            How Fare Share Was Founded to Solve Daily Commuting Struggles
          </h2>
          <p>
            At Fare Share, we aim to alleviate the stress and frustration of
            daily commuting. Our unique fixed cab and auto booking service is
            designed to bring you comfort and affordability, right to your
            doorstep. We understand that finding a reliable and affordable mode
            of transportation can be a daily struggle for many, which is why we
            strive to make your daily commute pain-free. Our prices are
            affordable, so you don&apos;t have to break the bank to get to work on
            time.
          </p>
          <p>
            So, how do we do it? We help you find travel buddies! We bring
            together passengers who are travelling on the same route and having
            difficulty managing their daily commute with reaching the office on
            time. By connecting these commuters, we help them share the same
            route and become travel buddies, thus making the journey more
            enjoyable and cost-effective for everyone.
          </p>
          <p>
            At Fare Share, we are a team of problem-solvers from the tech and
            finance industries. Our mothers have inspired us to create this
            platform as we watched them juggle their daily struggles, such as
            managing household chores and reaching the office on time. Our own
            experience of relocating to a new state and feeling helpless
            motivated us to create a platform that can provide a hassle-free
            office journey for all hard-working individuals, including our
            beloved moms. We are passionate about making daily commuting easier
            for everyone and are committed to providing a reliable and efficient
            service that you can count on.
          </p>
          <p>
            We believe that everyone deserves a stress-free commute, and our
            platform is designed to make that a reality. Whether you&apos;re a busy
            professional, a student, or a stay-at-home parent, our fixed cab and
            auto booking service is here to make your life easier. Our team is
            dedicated to providing you with the best possible service, and we
            are constantly working to improve our platform to meet your needs.
            So why wait? Sign up with Fare Share today and start enjoying a
            hassle-free commute!
          </p>

          <p>
            Additionally, we understand the importance of accessibility in
            today&apos;s world, which is why we have developed both a responsive
            website and a mobile app to make booking and sharing rides more
            convenient for you. Our commitment to providing a trusted and
            reliable service has earned us a loyal customer base who rely on us
            for their daily commute.
          </p>


          <div className="container mt-5">
            <h1 className="mb-3">Travel Booking Process Flow</h1>

            <div className="row">
              <div className="col-md-6">
                <div className="steps-wrapper">
                  <div className="step">
                    <div className="step-icon"><span>1</span></div>
                    <div className="step-content">
                      <h2>Enter Your Location and Select Your Ride</h2>
                      <p>Input your pickup and destination location, select your preferred mode of transportation and set your trip time.</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-icon"><span>2</span></div>
                    <div className="step-content">
                      <h2>Verify Your Mobile Number with OTP</h2>
                      <p>We will send an OTP to your mobile number for verification. Input the OTP to confirm your mobile number and create your account.</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-icon"><span>3</span></div>
                    <div className="step-content">
                      <h2>Find a Travel Buddy</h2>
                      <p>We will match you with other travelers who are headed in the same direction as you. Wait for a match or choose to travel alone.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="steps-wrapper">
                  <div className="step">
                    <div className="step-icon"><span>4</span></div>
                    <div className="step-content">
                      <h2>Make an Advance Payment to Confirm Your Booking</h2>
                      <p>You can pay online using a credit/debit card, UPI or other payment methods available in your region to confirm your booking.</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-icon"><span>5</span></div>
                    <div className="step-content">
                      <h2>Enjoy Your Ride</h2>
                      <p>Your driver will arrive at your doorstep before your trip time. Hop on, sit back and enjoy the ride to your destination.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </Body>
    </>
  );
};
export default About;
