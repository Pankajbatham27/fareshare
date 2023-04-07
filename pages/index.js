import Head from "next/head";
import { useEffect, useState } from "react";
import Body from "../components/Body/Body";
import Booking from "../components/Booking/Booking";
import Hero from "../components/Hero/Hero";
import HeroMobile from "../components/Hero/HeroMobile";
// import Place from "../components/Place/Place";
import taxi_image from "./../public/taxi.png";
import woman_image from "./../public/woman.png";

export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(/Mobi/.test(userAgent));
  }, []);

  return (
    <>
      <Head>
        <title>Doorstep-to-Office Commuting Made Easy with Fare Share</title>
        <meta name="description" content="Say goodbye to the stress and hassle of daily commuting with Fare Share. We offer reliable and convenient office pickup and drop service from your doorstep, so you can focus on what matters most. Sign up today and experience hassle-free commuting!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta  name="simpledcver"  content="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkb21haW4iOiJmYXJlc2hhcmUuY29tIiwiZXhwIjoxNjgxNDMwNDAwfQ.Y64F2QRisnW9wNkex4xO_5cy6VRW1jQ9yPBk0yxltXM" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAiqx0MaSS3QybaU4NH9iehcbro6r92nD8&libraries=places"></script> */}
      </Head>

      <Body>

      {isMobile ? (
        <HeroMobile />
      ) : (
        <Hero />
      )}
        
        <Booking />

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 text-center"></div>
            <div className="col-md-6 align-self-center">
              <div className="hero-section">
                <h1>
                  Finally it is
                  <br />
                  easy!
                </h1>

                <h3>
                  Make your office journey a panic -free experience with us.
                </h3>
                <p>
                  <strong>with reasonable rates.</strong>
                </p>
              </div>
            </div>
            <div className="col-md-6 coverPoint">
              <div className="forHomeAboutDesign">
                <h5>What we do?</h5>
                <p>
                  We make your daily commute pain-free. We provide a one-of-a-kind
                  fixed cab or auto booking service that is available at your
                  doorstep at the time of your choice, ensuring your comfort and
                  affordability. Our prices are really affordable.
                </p>
              </div>

              <hr />

              <div className="forHomeAboutDesign">
                <h5>How we do it?</h5>
                <p>
                  We help you find people to share a ride with. We bring together
                  passengers who are travelling on the same route using public
                  transport and find it difficult to juggle their daily commute
                  with reaching the office on time. By connecting them, we help
                  them share the same route and become travel buddies.
                </p>
              </div>


              <hr />
              <div className="forHomeAboutDesign">
                <h5>Who we are?</h5>
                <p>
                  We are a team of problem-solvers from the tech and finance
                  industries, who grew up watching our mothers juggle daily
                  struggles such as reaching the office on time and managing
                  household chores. After relocating to a cold state and feeling
                  helpless ourselves, we came up with Fare Share - an idea to
                  provide a hassle-free office journey for all hard-working
                  individuals, including our beloved moms.
                </p>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-5 background-drop">
          <div className="text-center">
            <h5 className="">How it works</h5>

          </div>

          <div className="process-flow">
            <ul>
              <li>
                <i className="fa fa-star mb-3"></i>
                <h5>Affordable booking</h5>
                <p>
                  With affordable booking options, Fare Share makes it easy to commute without breaking the bank.
                </p>
              </li>

              <li>
                <i className="fa fa-star mb-3"></i>
                <h5>Stress-free rides</h5>
                <p>
                  Fare Share&apos;s stress-free rides ensure that commuters can relax and arrive at their destination on time.
                </p>
              </li>

              <li>
                <i className="fa fa-star mb-3"></i>
                <h5>User-friendly platform</h5>
                <p>
                  The user-friendly platform offered by Fare Share makes booking rides quick and easy for all commuters.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mt-5 whyRide">
          <h3 className="mb-5">Why ride with FareShare</h3>

          <div className="row">
            <div className="col-md-4">
              <div className="keyPoins">
                <h6>
                  <i className="fa fa-money"></i>
                  Pay as you go
                </h6>
                <p>
                  Pay-as-you-go: Fare Share&apos;s flexible payment system allows customers to pay only for the rides they use, with no monthly or subscription fees, making it an affordable and convenient option for daily commuting.
                </p>
              </div>

              <div className="keyPoins">
                <h6>
                  <i className="fa fa-female"></i>
                  Woman Oriented
                </h6>
                <p>
                  Woman-oriented: We understand the unique challenges women face when traveling alone, which is why we prioritize their safety and comfort by providing female drivers, sharing the route with other women passengers, and offering SOS buttons for emergency situations.
                </p>
              </div>

              <div className="keyPoins">
                <h6>
                  <i className="fa fa-check-circle"></i>

                  Verified Drivers
                </h6>
                <p>
                  Verified drivers: All our drivers go through a rigorous screening process that includes background checks, driving history, and personal interviews, ensuring that customers can trust and rely on their drivers.
                </p>
              </div>

            </div>

            <div className="col-md-4">
              <div className="keyPoins">
                <h6>
                  <i className="fa fa-clock-o"></i>

                  On Time
                </h6>
                <p>
                  On time: Our reliable and efficient service ensures timely pick-up and drop-off, minimizing the stress and frustration of waiting for transportation, and allowing customers to reach their destination on time, every time.
                </p>
              </div>

              <div className="keyPoins">
                <h6>
                  <i className="fa fa-calendar"></i>

                  Advance Booking
                </h6>
                <p>
                  Advance booking: For added convenience and peace of mind, customers can book their rides in advance, and receive confirmation and details of their ride via SMS or email.
                </p>
              </div>


              <div className="keyPoins">
                <h6>
                  <i className="fa fa-home"></i>

                  Doorstep Service
                </h6>
                <p>
                  Doorstep service: We believe in providing a hassle-free commuting experience, which is why we offer doorstep pick-up and drop-off, so that customers don&apos;t have to worry about walking to or from the nearest pickup point.
                </p>
              </div>

            </div>

            <div className="col-md-4">
              <div className="keyPoins">
                <h6>
                  <i className="fa fa-car"></i>

                  Choose Your Comfort Cab/Auto
                </h6>
                <p>
                  Choose your comfort: We understand that different customers have different comfort levels, which is why we offer a range of cab and auto options, including air-conditioned and non-air-conditioned vehicles, to suit their preferences and budget.
                </p>
              </div>

              <div className="keyPoins">
                <h6>
                  <i className="fa fa-gift"></i>

                  Referral Offers
                </h6>
                <p>
                  Referral offers: We believe in rewarding our loyal customers, which is why we offer referral discounts to customers who refer their friends and family to our service, and help us grow our community of stress-free commuters.
                </p>
              </div>

              <div className="keyPoins">
                <h6>
                  <i className="fa fa-exchange"></i>

                  Alternate Transportation Arrangement
                </h6>
                <p>
                  In case our auto doesn&apos;t arrive, we will provide you with cab facility as an alternate transportation arrangement.
                </p>
              </div>

            </div>
          </div>
        </div>
      </Body>
    </>
  );
}
