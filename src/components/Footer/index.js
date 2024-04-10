// Application Footer on the Bottom

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full px-14 py-[74px] md:p-5 bg-white-A700">
      <div className="flex flex-col items-center justify-center w-full mt-[5px] gap-[115px] mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row justify-start items-center w-full gap-px md:gap-5">
          <div className="flex flex-col items-center justify-start w-[29%] md:w-full gap-[43px]">
            <div className="flex flex-row justify-start items-start w-full gap-[11px]">
              <img src="images/img_real_estate_1.svg" alt="realestateone" className="h-[40px] w-[40px]" />
              <p className="text-xl font-normal leading-[180%] mt-[5px] !text-orange-A700 !font-markoone">
                Relasto
              </p>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-7">
              <h6 className="!leading-[160%]">
                  59 Bervely Hill Ave, Brooklyn Town,
                  <br />
                  New York, NY 5630, CA, US
              </h6>
              <div className="flex flex-col items-start justify-center gap-2">
                <h6 className="mt-px">
                  +(123) 456-7890
                </h6>
                <h6>info@mail.com</h6>
              </div>
              <div className="flex flex-row justify-start w-full gap-3">
                <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                  <img src="images/img_icon_facebook.svg" alt="iconfacebook" className="h-[30px] w-[30px]" />
                </div>
                <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                  <img src="images/img_icon_twitter.svg" alt="icontwitter_one" className="h-[30px] w-[30px]" />
                </div>
                <img src="images/img_icon_instragram.svg" alt="iconinstragram" className="h-[30px] w-[30px]" />
                <img src="images/img_icon_linked_in.svg" alt="iconlinkedin" className="h-[30px] w-[30px]" />
                <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                  <img src="images/img_icon_youtube.svg" alt="iconyoutube_one" className="h-[30px] w-[30px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center w-[72%] md:w-full md:gap-10">
            <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
              <h6>
                Features
              </h6>
              <div className="flex flex-col items-start justify-start w-full gap-[15px]">
                <h6>Home v1</h6>
                <h6>Home v2</h6>
                <h6>About</h6>
                <h6>Contact</h6>
                <h6>Search</h6>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
              <h6>
                Information
              </h6>
              <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[15px]">
                <h6>Listing v1</h6>
                <h6>Listing v2</h6>
                <h6>Property Details</h6>
                <h6>Agent List</h6>
                <h6>Agent Profile</h6>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
              <h6>
                Documentation
              </h6>
              <div className="flex flex-col items-start justify-center w-full gap-[15px]">
                <h6 className="mt-0.5">
                  Blog
                </h6>
                <h6>FAQ</h6>
                <a href="#">
                  Privacy Policy
                </a>
                <h6>License</h6>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
              <h6>
                Others
              </h6>
              <div className="flex flex-col items-start justify-center w-full gap-[15px]">
                <a href="#" className="mt-0.5">
                  Log in
                </a>
                <h6>Enter OTP</h6>
                <h6>New Password</h6>
                <a href="#">
                  Reset Password
                </a>
                <a href="#">
                  Create Account
                </a>
              </div>
            </div>
          </div>
        </div>
        <h6>© 2022. All rights reserved.</h6>
      </div>
    </footer>
  );
};

export default Footer;