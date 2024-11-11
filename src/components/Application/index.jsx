import './index.scss'
import React, { useState } from 'react';
import vendorapp from '../../assets/images/vendorapp.png'
import vendorappr from '../../assets/images/vendorappr.png'
import vendormap from '../../assets/images/vendormap.png'
import liability from '../../assets/images/liability.png'
import electricity from '../../assets/images/electricity.png'
import checkin from '../../assets/images/checkin.png'
import vendor1 from '../../assets/images/vendor1.png'
import vendor2 from '../../assets/images/vendor2.png'
import regulatory from '../../assets/images/regulatory.png'
import handwash from '../../assets/images/handwash.png'
import inspection from '../../assets/images/inspection.png'
import foodstorage from '../../assets/images/foodstorage.png'

const Application = () => {
    return (
        <>
        
        <section className = 'vendor-app-header-section'>
            <div className = 'app-header-container'>
                <div className = 'vendor-interest'>
                    <h1 className = 'header vendor-title'>INTERESTED IN JOINING SAN DIEGO TET FESTIVAL AS A <span>VENDOR</span>?</h1>
                    <h1 className = 'app-h1'>For any questions, reach out to <span>vendor@sdtet.com</span></h1>
                </div>
            </div>
            <div className = 'app-img-header-container'>
                <img src = {vendorapp} className = 'vendorapp-img vendor-nonresponsive'></img>
                <img src = {vendorappr} className = 'vendorapp-imgr vendor-responsive'></img>
            </div> 
        </section>
        <section className = 'vendor-map-app-section'>
            <h1 className = 'vendor-header h1-font'>2024 VENDOR MAP</h1>
            <div className = 'vendormap-container'>
                <img src = {vendormap} className = 'vendormap'></img>
            </div>
        </section>
        <section className = 'vendor-rules-section'>
            <h1 className = 'vendor-header h1-font'>2024 VENDOR RULES</h1>
            <div className = 'toggle-container'>
                <div className="toggle-switch" >
                
                    <input type="radio" checked name="tog" id="toggle1" className='switch' value="1"/>
                    <label for="toggle1">General</label>
                
                
                    <input type="radio"  name="tog" id="toggle2" className='switch' value="2"/>
                    <label for="toggle2">Food Vendor</label>
                
                <div className="toggle-shadow"></div>
            </div> 
            <div id="content1">
                <div className = 'liability-container rule-container'>
                    <div className = 'liability rule-icon-container'>
                        <img src = {liability} className = 'liability-icon rule-icon'></img>
                        <h2 className = 'h2-font rule-h2'>Liability and Regulations</h2>
                    </div>
                    <div className = 'liability-info information'>
                        <p className = 'rule-p'><span>Natural Causes: </span>The 2024 San Diego Tet Festival Org. Committee is not liable for any loss of vendor profits due to natural causes &#40;e.g., rain, storms, earthquakes&#41;.</p>
                        <p className = 'rule-p'><span>Injury/Damage: </span>The committee is not responsible for any injury or damage to booths, contents, merchandise, employees, contractors, guests, customers, or other third parties.</p>
                        <p className = 'rule-p'><span>Prohibited Items: </span>Vendors cannot sell, display, or use: alcoholic beverages, illicit drugs, cigarettes, firecrackers, fireworks, firearms, weapons, and other dangerous items, vulgar, offensive, sexually explicit, or obscene materials &#40;as judged by VAYA&#41;</p>
                        <p className = 'rule-p'><span>Unsuitable Products: </span>VAYA may request the removal of products/services deemed unsuitable, and their decision is final.</p>
                        <p className = 'rule-p'><span>Solicitation Limits: </span>Vendors cannot solicit, sell, or promote products/services more than 10 feet from their booth without an extended marketing permit from the Vendor Team.</p>
                    </div>
                </div>
                <div className = 'electricity-container rule-container'>
                    <div className = 'electricity rule-icon-container'>
                        <img src = {electricity} className = 'electricity-icon rule-icon'></img>
                        <h2 className = 'h2-font rule-h2'>Electricity Regulations</h2>
                    </div>
                    <div className = 'electricity-info information'>
                        <p className = 'rule-p'><span>Power Usage: </span>Each booth is provided with 20amps of electricity for three days.</p>
                        <p className = 'rule-p'><span>Additional Power: </span>Additional 20 amps can be requested for $50, no later than two weeks before the festival.</p>
                        <p className = 'rule-p'><span>Blackout Reboot: </span>If a vendor underestimates power usage and gets blacked out, a $50 fee applies for a reboot.</p>
                    </div>
                </div>
                <div className = 'check-in-container rule-container'>
                    <div className = 'check-in rule-icon-container'>
                        <img src = {checkin} className = 'check-in-icon rule-icon'></img>
                        <h2 className = 'h2-font rule-h2'>Check-In & Check-Out Procedures</h2>
                    </div>
                    <div className = 'check-in-info information'>
                        <p className = 'rule-p'><span>Set Up: </span>Vendors must set up within designated times before the festival starts each day.</p>
                        <p className = 'rule-p'><span>Early Set-Up: </span>Non-food materials can be set up on Thursday night &#40;Feb 15, 2024&#41; if the Vendor Team is notified by Monday of that week.</p>
                        <p className = 'rule-p'><span>Nightly Clean-Up: </span>Vendors must clean up and leave the site within 1 hour after the festival closes each night.</p>
                        <p className = 'rule-p'><span>Final Check-Out: </span>Vendors must check out with the Vendor Team for a final inspection to reclaim their $200 deposit.</p>
                    </div>
                </div>
            </div>
            <div id="content2">
                <h1 className = 'vendor-header h1-font'>FOOD VENDOR RULES:</h1>
                <div className = 'food-vendor-container'>
                    <div className = 'food-vendor1'>
                        <div className = 'regulatory-compliance'>
                            <img src = {regulatory} className = 'regulatory-icon food-rule-icon'></img>
                            <h2 className = 'h2-font rule-h2 vendor-h2'>Food Regulatory Compliance</h2>
                        </div>
                        <div className = 'food-vendor-info'>
                            <div className = 'inspection-container food-vendor-rule-container'>
                                <div className = 'inspection-icon-container vendor-icon-container nonresponsive-container'>
                                    <img src = {inspection} className = 'inspection food-rule-icon'></img>
                                    <h2 className = 'h2-font rule-h2 vendor-h2'>Inspections</h2>
                                </div>
                                <div className = 'inspection-info-container'>
                                    <div className = 'icon-center'>
                                        <img src = {inspection} className = 'inspection food-rule-icon responsive-icon'></img>
                                        <h2 className = 'h2-font rule-h2 vendor-h2 responsive-icon'>Inspections</h2>
                                    </div>
                                    <p className = 'rule-p-vendor'><span>Health Inspections: </span>Be prepared for suprise inspections. No refunds if shut down.</p>
                                    <p className = 'rule-p-vendor'><span>Handbook & Guidelines: </span>Review the Temporary Food Facility &#40;TFF&#41; Handbook and permit guidelines.</p>
                                    <p className = 'rule-p-vendor'><span>Paperwork: </span>Keep all required documents &#40;TFF, Food Safety Certifications, Food Handler Training&#41; on-site and carry your health permit at all times.</p>
                                </div>
                            </div>
                            <div className = 'handwash-container food-vendor-rule-container'>
                                <div className = 'handwash-icon-container vendor-icon-container nonresponsive-container'>
                                    <img src = {handwash} className = 'handwash food-rule-icon'></img>
                                    <h2 className = 'h2-font rule-h2 vendor-h2'>Hand-Wash Station</h2>
                                </div>
                                <div className = 'handwash-info-container'>
                                    <div className = 'icon-center'>
                                        <img src = {handwash} className = 'handwash food-rule-icon responsive-icon'></img>
                                        <h2 className = 'h2-font rule-h2 vendor-h2 responsive-icon'>Hand-Wash Station</h2>
                                    </div>
                                    <p className = 'rule-p-vendor'><span>Requirements: </span>Every booth with open food must have a hand was hstation, including:</p>
                                    <li className = 'food-vendor-list'>5-gallon container with warm water &#40;100-108&#176;F&#41;.</li>
                                    <li className = 'food-vendor-list'>Pump soap dispenser,</li>
                                    <li className = 'food-vendor-list'>Paper towels, Wastewater bucket</li>
                                    <p className = 'rule-p-vendor'><span>Setup: </span>The provided 3-compartment sink is not a hand wash station. Set up your own hand wash station</p>
                                    <p className = 'rule-p-vendor'><span>Inspection Failure: </span>Penalties for failure will prevent you from selling food. </p>
                                </div>
                            </div>
                            <div className = 'foodstorage-container food-vendor-rule-container'>
                                <div className = 'foodstorage-icon-container vendor-icon-container nonresponsive-container'>
                                    <img src = {foodstorage} className = 'foodstorage food-rule-icon'></img>
                                    <h2 className = 'h2-font rule-h2 vendor-h2'>Food Storage</h2>
                                </div>
                                <div className = 'foodstorage-info-container'>
                                    <div className = 'icon-center'>
                                        <img src = {foodstorage} className = 'foodstorage food-rule-icon responsive-icon'></img>
                                        <h2 className = 'h2-font rule-h2 vendor-h2 responsive-icon'>Food Storage</h2>
                                    </div>
                                    <p className = 'rule-p-vendor'><span>Booth Enclosure: </span>Enclose booth on 4 walls during food prep. Walls can be taken down after prep stops. </p>
                                    <p className = 'rule-p-vendor'><span>Source of Food: </span>Food must come from an approved source or commissary, not home-prepared. </p>
                                    <p className = 'rule-p-vendor'><span>Temperature Control: </span>Cold food <span>45&#176;F</span> or below, Hot food: <span>135&#176;F</span> or above, Approved thermometer requried Proper tools to maintain temperatures. </p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className = 'food-vendor2'>
                        <h2 className = 'other-info-h2'>Other Information:</h2>
                        <div className = 'requirements-info-container'>
                            <p className = 'rule-p'><span>Additional Requirements </span></p>
                            <p className = 'rule-p-vendor'>Overhead protection: Flat grills need overhead protection; BBQs do not.</p>
                            <p className = 'rule-p-vendor'>Surface Protection: Vendors on grass must use a tarp or a smooth surface &#40;provided tarp must cover all extensions&#41;.</p>
                            <p className = 'rule-p-vendor'>Fire Extinguishers: Every booth must have a fire extinguisher; K-Class extinguishers are recommended. </p>
                            <p className = 'rule-p'><span>Other Requirements </span></p>
                            <p className = 'rule-p-vendor'>Beverage Sales</p>
                            <ul className = 'vendor-list'>
                                <li className = 'food-vendor-list'>Restrictions: vendors cannot sell water or soda unless approved by staff or sponsors.</li>
                            </ul>
                            <p className = 'rule-p-vendor'>Waste Disposal</p>
                            <ul className = 'vendor-list'>
                                <li className = 'food-vendor-list'>Food & Oil Disposal: Do not put food or cooking oil in the provided sink or dumpsters.</li>
                                <li className = 'food-vendor-list'>Trash: Use designated bins behind food vendor booths and dumpsters. Do not leave trash elsewhere.</li>
                                <li className = 'food-vendor-list'>Organic waste Recycling: Discard all food scraps in designated bins to comply with San Diego's mandate. </li>
                            </ul>
                            <p className = 'rule-p-vendor'>Food Authorization</p>
                            <ul className = 'vendor-list'>
                                <li className = 'food-vendor-list'>Approved Items: Only sell authorized food items approved in the vendor contract. </li>
                                <li className = 'food-vendor-list'>Penalties: $20 penalty per unauthorized food item. Unauthorized sales may result in booth closure without refund.</li>
                            </ul>
                        </div>




                    </div>
                </div>
            </div>

            <h1 className = 'vendor-header h1-font'>APPLY AS A VENDOR</h1>
            <div className = 'apply-vendor-container'>
                <div className ='apply-vendor1 apply-vendor'>
                    <a href = 'https://docs.google.com/forms/d/e/1FAIpQLSeR5srL_KXWH43eQC1_qjv1g8BuyqPhmW_zaojO4aoSDjXNDg/viewform' target = '_blank'>
                        <img src = {vendor1} className = 'vendor1'></img>
                        <div className = 'apply-h2'>
                            <h2 className = 'h2-font rule-h2'>Non-Food Vendor <span className = 'right-arrow'> &#8250;</span></h2>
                        </div>
                        
                    </a>
                </div>
                <div className = 'apply-vendor2 apply-vendor'>
                    <a href = 'https://docs.google.com/forms/d/e/1FAIpQLSenwhOQKDT4_AJv-FwpphashPwmsyc5fjgZ2sux6gNwQD5epw/viewform' target = '_blank'>
                        <img src = {vendor2} className = 'vendor2'></img>
                        <div className = 'apply-h2'>
                            <h2 className = 'h2-font rule-h2'>Food Vendor <span className = 'right-arrow'> &#8250;</span></h2>
                        </div>
                    </a>
                </div>
            </div>
            


            
            </div>
        </section>
        <section className = 'general-faq-section'>
            <h1 className = 'h1-font faq-header'>GENERAL FAQ:</h1>
            <div className = 'faq-container'>
                <button class="accordion h2">1.  &nbsp;&nbsp;&nbsp;&nbsp;What time can I start setting up my booth?</button>
                    <div class="panel">
                        <p className = 'paragraph accordion-p'>You may start setting up at 12 PM on Friday and at 8 AM on Saturday and Sunday. If you need to set up earlier, please contact the Vendor Team via email.</p>
                    </div>
                <button class="accordion h2">2. &nbsp;&nbsp;&nbsp;&nbsp;How do I find my booth?</button>
                    <div class="panel">
                        <p className = 'paragraph accordion-p'>Once you identify your booth number from the vendor list, refer to the festival layout to locate your booth. The booth number will be marked on the back wall of each booth. Please ensure you have the correct booth before setting up.
                        Check-In/Check-Out FAQs</p>
                    </div>
                <button class="accordion h2">3. &nbsp;&nbsp;&nbsp;&nbsp;How do I check in upon arrival?</button>
                    <div class="panel">
                        <p className = 'paragraph accordion-p'>Upon arrival, check in with a Vendor Team member at the Info Booth. If they are busy, you may check in after setting up your booth. Please ensure you check in at least 30 minutes before the festival starts.</p>
                    </div>
                <button class="accordion h2">4. &nbsp;&nbsp;&nbsp;&nbsp;Do I need to check out at the end of the festival</button>
                    <div class="panel">
                        <p className = 'paragraph accordion-p'>Yes, you must check out with a Vendor Team member on your final day. A final inspection will verify that your booth is returned to its original condition. Failure to do so may result in forfeiture of your deposit.
                        Parking FAQs</p>
                    </div>
                <button class="accordion accordion-park h2">5. &nbsp;&nbsp;&nbsp;&nbsp;Is there a reserved parking for vendors?</button>
                    <div class="panel panel-park">
                        <p className = 'paragraph accordion-p'>No, there is no reserved parking for vendors. We recommend arriving at least 1 hour early to secure a parking spot. Overnight parking is not permitted, and VAYA is not liable for any citations or tows of your vehicles.</p>
                    </div>
            </div>
        </section>
        
            </>
    )
}



//document.addEventListener('DOMContentLoaded', function() {
//    const toggle1 = document.getElementById('toggle1');
//    const toggle2 = document.getElementById('toggle2');
//    const content1 = document.getElementById('content2');
//    const content2 = document.getElementById('content1');

//    function toggleContent() {
//        console.log('function called')
//        if (toggle1 && toggle2) {
//            if (toggle1.checked) {
//                console.log('General is selected');
//                content1.classList.add('active');
//                content2.classList.remove('active');
//            } else if (toggle2.checked) {
//                console.log('Food Vendor is selected');
//                content2.classList.add('active');
//                content1.classList.remove('active');
//            }
//        } else {
//            console.error('Toggle elements not found');
//        }
//    }
//
//    toggle1.addEventListener('change', toggleContent);
//    toggle2.addEventListener('change', toggleContent);
//});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
console.log('Script is running');
export default Application