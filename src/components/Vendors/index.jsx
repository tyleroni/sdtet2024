import "./index.scss";
import vendorheader from "../../assets/images/vendorheader.png";
import activity1 from "../../assets/images/activity1.png";
import activity2 from "../../assets/images/activity2.png";
import activity3 from "../../assets/images/activity3.png";
import vendormap from "../../assets/images/vendormap.png";
import vendorlist from "../../assets/images/vendorlist.png";

const Vendors = () => {
  return (
    <>
      <section className="vendors-header-section">
        <img src={vendorheader} className="vendorheader"></img>
        <div className="vendor-header-container">
          <h1 className="vendors page-header">VENDORS</h1>
        </div>

        <div className="join-container">
          <h1 className="h1-font join-vendor">
            INTERESTED IN JOINING US IN 2025 AS A <span>VENDOR</span>?
          </h1>
          <div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSenwhOQKDT4_AJv-FwpphashPwmsyc5fjgZ2sux6gNwQD5epw/viewform"
              target="_blank"
              className="vendor-btn"
            >
              Apply as Food Vendor
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeR5srL_KXWH43eQC1_qjv1g8BuyqPhmW_zaojO4aoSDjXNDg/viewform"
              target="_blank"
              className="vendor-btn"
            >
              Apply as Non-Food Vendor
            </a>
          </div>
        </div>
      </section>
      <section className="activities-section">
        <h1 className="vendor-header h1-font">ACTIVITIES</h1>
        <div className="activity-container">
          <div className="activity1 activity-card">
            <a href="/" target="_blank">
              <img src={activity1} className="activity1-img activity-img"></img>
              <h2 className="activity1-h2 activity-header h2-font">
                Discover Delicious Street Food!
              </h2>
            </a>
          </div>
          <div className="activity2 activity-card">
            <a href="/" target="_blank">
              <img src={activity2} className="activity2-img activity-img"></img>
              <h2 className="activity1-h2 activity-header h2-font">
                Explore your Creativity!
              </h2>
            </a>
          </div>
          <div className="activity3 activity-card">
            <a href="/" target="_blank">
              <img src={activity3} className="activity3-img activity-img"></img>
              <h2 className="activity1-h2 activity-header h2-font">
                Be Involved with your Community!
              </h2>
            </a>
          </div>
        </div>
      </section>
      {/* <section className = 'vendor-map-section'>
            <h1 className = 'vendor-header h1-font'>2024 VENDOR MAP</h1>
            <div className = 'vendormap-container'>
                <img src = {vendormap} className = 'vendormap'></img>
            </div>
        </section>
        <section className = 'vendor-list-section'>
            <img src = {vendorlist} className = 'vendorlist'></img>
        </section> */}
    </>
  );
};

export default Vendors;
