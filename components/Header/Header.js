import dynamic from "next/dynamic";
import Script from "next/script";
import classes from "./Header.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const Header = () => {
  const router = useRouter();

  const DynamicHeader = dynamic(() => import("./Boostrapjs"), {
    ssr: false,
  });



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
              className="navbar navbar-expand-lg navbar-dark"
              id="navigation"
            >
              <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav m-auto">
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
                      <Link href="/services">
                        <a
                          className={`${"nav-link"} ${
                            router.pathname == "/services" ? "active" : ""
                          }`}
                        >
                          Services
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/resource">
                        <a
                          className={`${"nav-link"} ${
                            router.pathname == "/resource" ? "active" : ""
                          }`}
                        >
                          Resource
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/faq">
                        <a
                          className={`${"nav-link"} ${
                            router.pathname == "/faq" ? "active" : ""
                          }`}
                        >
                          FAQs
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
