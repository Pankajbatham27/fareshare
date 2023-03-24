import Head from "next/head";
import Body from "../components/Body/Body";
import Booking from "../components/Booking/Booking";
import Hero from "../components/Hero/Hero";
// import Place from "../components/Place/Place";
import taxi_image from "./../public/taxi.png";
import woman_image from "./../public/woman.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Office</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAiqx0MaSS3QybaU4NH9iehcbro6r92nD8&libraries=places"></script> */}
      </Head>

      <Body>
        <Hero />
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
            <div className="col-md-6">
              <h5>What we do?</h5>
              <p>
                We make your daily commute pain-free. We provide a one-of-a-kind
                fixed cab or auto booking service that is available at your
                doorstep at the time of your choice, ensuring your comfort and
                affordability. Our prices are really affordable.
              </p>
              <hr />
              <h5>How we do it?</h5>
              <p>
                We help you find people to share a ride with. We bring together
                passengers who are travelling on the same route using public
                transport and find it difficult to juggle their daily commute
                with reaching the office on time. By connecting them, we help
                them share the same route and become travel buddies.
              </p>

              <hr />
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

        <div className="mt-5 background-drop">
          <div className="text-center">
            <h5 className="text-lime">How it works</h5>
            <h3>
              Easy steps to apply
              <br />
              for Government Schemes
            </h3>
          </div>

          <div className="process-flow">
            <ul>
              <li>
                <img src="https://cdn.myscheme.in/images/icons/check.svg" />
                <h5>Enter Details</h5>
                <p>
                  Start by entering your <b>basic details!</b>
                </p>
              </li>

              <li>
                <img src="https://cdn.myscheme.in/images/icons/check.svg" />
                <h5>Enter Details</h5>
                <p>
                  Start by entering your <b>basic details!</b>
                </p>
              </li>

              <li>
                <img src="https://cdn.myscheme.in/images/icons/check.svg" />
                <h5>Enter Details</h5>
                <p>
                  Start by entering your <b>basic details!</b>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Body>
    </>
  );
}
