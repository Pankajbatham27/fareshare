import dynamic from "next/dynamic";
import Script from "next/script";
import classes from "./Header.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();

  const DynamicHeader = dynamic(() => import("./Boostrapjs"), {
    ssr: false,
  });


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(/Mobi/.test(userAgent));
  }, []);


  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
          rel="stylesheet"
        />

        <DynamicHeader />
        
      </Head>
      <header>
        {/* <div className='container pt-3 pb-3'>
            <div className='row'>
                <div className='col-md-2 col-2 d-flex align-items-center justify-content-end'></div>
                <div className='col-md-8 col-8 d-flex justify-content-center align-items-center'>
                    <div>
                    <Link href='/'><a><h5 className={classes.headerMainText}>Office</h5></a></Link>
                    <p className='text-center fw-bold'>A Government of HP Undertaking</p> 
                    </div>
                </div>
                <div className='col-md-2 col-2 d-flex align-items-center'></div>
            </div>
            </div> */}
        <div className={`${classes.bgBlack} ${classes.padding4}`}>
          <div className="container">
            <nav
              className={`navbar navbar-expand-lg ${isMobile ? 'navbar-dark' : 'navbar-light'} `}
              id="navigation"
            >
              <div className="container-fluid">
                
                <div className="" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/">
                        <a
                          className={`${"nav-link"} ${
                            router.pathname == "/" ? "active" : ""
                          }`}
                          aria-current="page"
                        >
                          Home
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/about-us">
                        <a
                          className={`${"nav-link"} ${
                            router.pathname == "/about-us" ? "active" : ""
                          }`}
                        >
                          About Us
                        </a>
                      </Link>
                    </li>


                    <li>
                      <Link href="/contact">
                        <a
                          className={`${"nav-link"} ${
                            router.pathname == "/contact" ? "active" : ""
                          }`}
                        >
                          Contact Us
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
