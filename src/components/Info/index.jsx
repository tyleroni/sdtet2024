import "./index.scss";
import info from "../../assets/images/info.png";
import visitorinfo from "../../assets/images/visitorinfo.png";
import dragon from "../../assets/images/dragon.png";
import map from "../../assets/images/map.png";
import ping from "../../assets/images/ping.png";
import car from "../../assets/images/car.png";
import eyes from "../../assets/images/eyes.png";
import performance from "../../assets/images/performance.png";
import missvietnam from "../../assets/images/missvietnam.png";
import vendor from "../../assets/images/vendor.png";
import lantern2 from "../../assets/images/lantern2.png";
import lantern3 from "../../assets/images/lantern3.png";
import insta1 from "../../assets/images/insta1.png";
import insta2 from "../../assets/images/insta2.png";
import insta3 from "../../assets/images/insta3.png";
import insta4 from "../../assets/images/insta4.png";

const Info = () => {
  return (
    <>
      <div className="info-vid-container">
        <img
          src={info}
          className="visitor-background"
          alt="Visitor Info Graphic"
        ></img>
      </div>
      <div className="visitor-img-container">
        <h1 className="visitor-header page-header">VISITOR INFORMATION</h1>
      </div>
      <section className="admission-container">
        <h1 className="admission-hours h1-font">ADMISSION AND HOURS</h1>
        <div className="dragon-container">
          <img src={dragon} className="dragon"></img>
          <div className="hours-container">
            <h2 className="free-admission">Free Admission!</h2>
            <p className="p1-info">
              Carnival will need paid tickets for rides.
            </p>
            <div className="hours-box">
              <h2 className="hours">Hours</h2>
              <div className="friday-container date-time">
                <h2 className="friday date">Friday, February 16</h2>
                <h2 className="friday-time time">5 PM - 10 PM</h2>
              </div>
              <hr color="#FBC33C"></hr>
              <div className="saturday-container date-time">
                <h2 className="saturday date">Saturday, February 17</h2>
                <h2 className="saturday-time time">11 AM - 10 PM</h2>
              </div>
              <hr color="#FBC33C"></hr>
              <div className="sunday-container date-time">
                <h2 className="sunday date">Sunday, February 18</h2>
              </div>
              <div className="festival-container date-time">
                <h2 className="festival date">Festival Time:</h2>
                <h2 className="festival-time time">11 AM - 6 PM</h2>
              </div>
              <div className="carnival-container date-time">
                <h2 className="carnival date">Carnival Time:</h2>
                <h2 className="carnival-time time">11 AM - 9 PM</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="directions-container">
        <h1 className="directions h1-font">DIRECTIONS</h1>
        <div className="img-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.170317365286!2d-117.21802210998727!3d32.734667905820864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80deab05fa0700ad%3A0x7d2e2d80eb49dda!2sNaval%20Training%20Center%20Park!5e0!3m2!1sen!2sus!4v1731565693652!5m2!1sen!2sus"
            width="80%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="address-parking-container">
          <div className="address-container">
            <img src={ping} className="ping"></img>
            <h2 className="address h2">Address</h2>
            <p className="address-p paragraph">
              2455 Cushing Rd, San Diego, CA 92106
            </p>
          </div>
          <hr className="direction-break" color="black"></hr>
          {/* <div className="parking-container">
            <img src={car} className="car"></img>
            <h2 className="address h2">Parking</h2>
            <p className="parking-p paragraph">
              Parking is limited at the festival. Respectfully use nearby
              parking, but note that Mira Mesa High School may charge a fee.
            </p>
            <p className="parking-p paragraph">
              Carpooling or ride-sharing is strongly suggested!
            </p>
          </div> */}
        </div>
      </section>
      <section className="festival-section">
        <h1 className="festival-rules h1-font">FESTIVAL RULES</h1>
        <div className="rules-container">
          <div className="rules-list">
            <li className="rules">
              NO <span>drugs/drug paraphernalia</span>
            </li>
            <li className="rules">
              NO <span>weapons</span>
            </li>
            <li className="rules">
              NO <span>hoverboards or drones</span>
            </li>
            <li className="rules">
              NO <span>fireworks</span>
            </li>
            <li className="rules">
              NO <span>smoking or e-cigarettes/vapors</span>
            </li>
            <p className="rules-p paragraph">
              We Reserve the Right to Refuse Entry for Violating the Rules
            </p>
            <p className="rules-p paragraph">
              Pets are okay! But they must be leashed.
            </p>
          </div>
          <div className="asset-container">
            <img src={eyes} className="asset"></img>
          </div>
        </div>
      </section>
      <section className="festival-highlights-section">
        <h1 className="festival-highlights h1-font">FESTIVAL HIGHLIGHTS</h1>
        <div className="highlights-container">
          <div className="performances card-highlight">
            <a href="/" target="_blank">
              <img
                src={performance}
                className="performance-img sample-highlight"
                alt="performance image"
              ></img>
              <h2 className="performance card-h2">Performances</h2>
            </a>
          </div>
          <div className="miss-vietnam card-highlight">
            <a href="/" target="_blank">
              <img
                src={missvietnam}
                className="missvietnam-img sample-highlight"
                alt="missvietnam image"
              ></img>
              <h2 className="miss-vietnamh2 card-h2">Miss Vietnam San Diego</h2>
            </a>
          </div>
          <div className="vendors2 card-highlight">
            <a href="/">
              <img
                src={vendor}
                className="vendor-img sample-highlight"
                alt="vendor image"
              ></img>
              <h2 className="vendor card-h2">Vendors</h2>
            </a>
          </div>
        </div>
      </section>
      <section className="instagram-section">
        <p className="sdtf-p paragraph">
          Follow @sandiegotetfestival on Instagram to see our latest updates
        </p>
        <div className="sdtf-img-container">
          <a href="instagram">
            <img
              src={insta1}
              className="insta1-img insta-img sample"
              alt="insta1 image"
            ></img>
          </a>
          <a href="instagram">
            <img
              src={insta2}
              className="insta2-img insta-img sample"
              alt="insta2 image"
            ></img>
          </a>
          <a href="instagram">
            <img
              src={insta3}
              className="insta3-img insta-img sample"
              alt="insta3 image"
            ></img>
          </a>
          <a href="instagram">
            <img
              src={insta4}
              className="insta4-img insta-img sample"
              alt="insta4 image"
            ></img>
          </a>
        </div>
      </section>
    </>
  );
};

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

export default Info;
