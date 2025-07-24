import Image from "next/image";
import AccoladesLogo from "../../public/accolades.svg";

import FaceBook from "../../public/facebook.svg";
import Instagram from "../../public/instagram.svg";
import Twitter from "../../public/twitter.svg";
import LinkedIn from "../../public/linkedin.svg";
import FooterBgimg from "../../public/blog-inner/blogInnerFooterBg.svg";

import '../app/(home)/home.css'

const Footer = ({className=""}) => {
  return (
    <>
      <div
        className={`${className} footer-container `}
        style={{
          backgroundImage: `url(${FooterBgimg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="wrapper flex justify-center items-center h-[400px] lg:h-[490px] lg:block">
          
          <div className="hidden flex justify-between items-center lg:flex lg:w-full lg:h-[500px] lg:border-b-[1px] lg:border-[#727272] ">
            <div className="w-full sm:w-[50%] lg:w-[25%] lg:flex lg:justify-center lg:items-center lg:flex-col lg:mt-[10%] lg:gap-[50px] mobile-footer-content-div ">
              <div className="mobile:mt-[30%]">
                <div className="w-[34%] mx-auto sm:w-[24%]">
                  <Image
                    src={AccoladesLogo}
                    alt="Accolades"
                    layout="intrinsic"
                  />
                </div>
                <div>
                  <p className="footer-para mt-[3%] lg:w-[156px]">
                    The ultimatum of our successful company is to adequately
                    provide our prospective clients with the required service
                    that they promptly demand from us.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="link-title">Address Corporate Office</h4>
                <p className="links lg:w-[156px]">
                  Accolades Integrated Pvt Ltd No.32/3071 – B, First Floor,
                  Anjiparambil Building, Ponnurunni, NH Bypass, Vyttila, Kochi –
                  682 019
                </p>
              </div>
            </div>
            <div className="w-[30%] flex justify-center flex-col items-center gap-[50px] lg:mt-[4%] mobile:mt-[25%] ">
              <div className="w-[30%]">
                <ul className="link-container">
                  <li className="link-title">Explore</li>
                  <li className="links">
                    <a href="/">Home</a>
                  </li>
                  <li className="links">
                    <a href="/">About</a>
                  </li>
                  <li className="links">
                    <a href="/">Service</a>
                  </li>
                  <li className="links">
                    <a href="/">Careers</a>
                  </li>
                  <li className="links">
                    <a href="/">Blogs</a>
                  </li>
                </ul>
              </div>
              <div className="w-[30%]">
                <ul>
                  <li className="link-title">Branches</li>
                  <li className="links">
                    <a href="/">Calicut</a>
                  </li>
                  <li className="links">
                    <a href="/">Trivandrum</a>
                  </li>
                  <li className="links">
                    <a href="/">Bengluru</a>
                  </li>
                  <li className="links">
                    <a href="/">Mumbai </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="hidden lg:flex justify-between items-center border-b-[1px] border-black pb-[10px]">
              <p className="footer-bottom-para">
                Copyright 2022-23 | All Rights Reserved
              </p>
              <div className="flex justify-between items-center w-[30%] lg:gap-[10px] mobile:w-[40%]">
                <div className="w-[24px] h-[24px] flex justify-center items-center border border-black social-media-container">
                  <Image
                    src={FaceBook}
                    alt="facebook"
                    layout="intrinsic" 
                  />
                </div>
                <div className="w-[24px] h-[24px] flex justify-center items-center border border-black social-media-container">
                  <Image
                    src={Instagram}
                    alt="instagram"
                    layout="intrinsic" 
                  />
                </div>
                <div className="w-[24px] h-[24px] flex justify-center items-center border border-black social-media-container">
                  <Image
                    src={Twitter}
                    alt="twitter"
                    layout="intrinsic" 
                  />
                </div>
                <div className="w-[24px] h-[24px] flex justify-center items-center border border-black social-media-container">
                  <Image
                    src={LinkedIn}
                    alt="linkedin"
                    layout="intrinsic" 
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[100%] h-[200px] lg:hidden">
            <div className="flex justify-between items-center pb-[20px] footer-content-container border-b-[1px] border-black">
              <div className="w-[28%]">
                <div className="w-[10%] laptop:w-[25%]">
                  <Image
                    src={AccoladesLogo}
                    alt="accolades"
                    layout="intrinsic" 
                  />
                </div>
                <p className="w-[70%] mt-[15px] footer-para">
                  The ultimatum of our successful company is to adequately
                  provide our prospective clients with the required service that
                  they promptly demand from us.
                </p>
              </div>
              <div className="w-[28%] flex justify-between items-center">
                <div>
                  <ul className="link-container">
                    <li className="link-title">Explore</li>
                    <li className="links">
                      <a href="/">Home</a>
                    </li>
                    <li className="links">
                      <a href="/">About</a>
                    </li>
                    <li className="links">
                      <a href="/">Service</a>
                    </li>
                    <li className="links">
                      <a href="/">Careers</a>
                    </li>
                    <li className="links">
                      <a href="/">Blogs</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className="link-title">Branches</li>
                    <li className="links">
                      <a href="/">Calicut</a>
                    </li>
                    <li className="links">
                      <a href="/">Trivandrum</a>
                    </li>
                    <li className="links">
                      <a href="/">Bengluru</a>
                    </li>
                    <li className="links">
                      <a href="/">Mumbai </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-[28%]">
                <h4 className="link-title">Address Corporate Office</h4>
                <p className="links w-[65%]">
                  Accolades Integrated Pvt Ltd No.32/3071 – B, First Floor,
                  Anjiparambil Building, Ponnurunni, NH Bypass, Vyttila, Kochi –
                  682 019
                </p>
              </div>
            </div>
            <div className="mt-[10px] flex justify-between items-center  border-black">
              <p className="footer-bottom-para">
                Copyright 2022-23 | All Rights Reserved
              </p>
              <div className="flex justify-between items-center w-[15%] laptop:w-[23%]">
                <div className="w-[24px] h-[24px] flex justify-center items-center border border-black social-media-container">
                  <Image
                    src={FaceBook}
                    alt="facebook"
                    layout="intrinsic"
                  />
                </div>
                <div className="w-[24px] h-[24px] flex justify-center items-center border border-black social-media-container">
                  <Image
                    src={Instagram}
                    alt="instagram"
                    layout="intrinsic" 
                  />
                </div>
                <div className="w-[24px] h-[24px] flex justify-center items-center border border-black social-media-container">
                  <Image
                    src={Twitter}
                    alt="twitter"
                    layout="intrinsic" 
                  />
                </div>
                <div className="w-[24px] h-[24px] flex justify-center items-center border border-black social-media-container">
                  <Image
                    src={LinkedIn}
                    alt="linkedin"
                    layout="intrinsic" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
