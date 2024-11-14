import "./index.scss";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer1-container">
          <h3 className="vaya-footer">Vietnamese American Youth Alliance</h3>
          <div className="tet-logo-container">
            <a className="logo" to="/">
              <img
                src="src\assets\images\sdTết.png"
                alt="Logo"
                className="vaya-footer-logo"
              />
            </a>
            <div className="navinfo">
              <div className="navdate">
                <p className="tet-footer-info">JAN 31 - FEB 2</p>
              </div>
              <div className="navlocation">
                <p className="tet-footer-info">NTC PARK - LIBERTY PARK</p>
              </div>
            </div>
          </div>
          <h3 className="vaya-footer-ny">Chức mừng năm mới / Happy New Year</h3>
          <h3 className="footer-date-responsive">JAN 31 - FEB 2</h3>
          <div className="tet-social-container">
            <a className="socials" to="/">
              <img
                src="src\assets\images\mdi_instagram.png"
                alt="Instagram Logo"
              />
            </a>
            <a className="socials" to="/">
              <img src="src\assets\images\mdi_youtube.png" alt="Youtube Logo" />
            </a>
            <a className="socials" to="/">
              <img
                src="src\assets\images\mdi_linkedin.png"
                alt="Linkedin Logo"
              />
            </a>
          </div>
        </div>
        <div className="footer2">
          <h3 className="footer-browse">Browse</h3>

          <li className="navbutton">
            <a href="/info">VISITOR INFO</a>
          </li>
          <li className="navbutton">
            <a href="/entertainment">ENTERTAINMENT</a>
          </li>
          <li className="navbutton">
            <a href="/vendors">VENDORS</a>
          </li>
          <li className="navbutton">
            <a href="/schedule">SCHEDULE</a>
          </li>
          <li className="navbutton">
            <a href="/mvsd">MISS VIETNAM SD</a>
          </li>
          <li className="navbutton">
            <a href="/sponsors">SPONSORS</a>
          </li>
          <li className="navbutton">
            <a href="/volunteers">VOLUNTEERS</a>
          </li>
        </div>
        <div className="footer3">
          <h3 className="footer-browse find-us-responsive">Find Us</h3>
          <p className="find-us-footer">NTC PARK - LIBERTY STATION</p>
          <p className="find-us-address">
            2455 Cushing Rd<br></br>San Diego, CA 92106
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
