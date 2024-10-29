import './index.scss'
import schedulebanner from '../../assets/images/schedulebanner.png'
import schedulebannerr from '../../assets/images/schedulebannerr.png'
import schedulemap from '../../assets/images/schedulemap.png'
import mainstagekey from '../../assets/images/mainstagekey.png'
import culturalkey from '../../assets/images/culturalkey.png'
import headlinerkey from '../../assets/images/headlinerkey.png'

const Schedule = () => {
    return (
        <>
        <section className = 'schedule-banner-section'>
            <div className = 'schedule-banner-container'>
                <img src = {schedulebanner} className = 'schdule-banner-img'></img>
                <img src = {schedulebannerr} className = 'schdule-banner-imgr responsive-schedule'></img>
                <div className = 'schedule-header-container'>
                    <h1 className = 'sponsor-header schedule-header'>SCHEDULE</h1>
                </div>
            </div>
        </section>
        <section className = 'schedule-performance-section'>
            <h1 className = 'header header1 schedule-header'>SCHEDULE OF PERFORMANCE</h1>
            <h2 className = 'h2-font schedule-h2'>*Exact performance times may change without notice*</h2>
            <div className = 'schedule-key-container'>
                <div className = 'mainstage-key key-container'>
                    <img src = {mainstagekey} className = 'mainstagekey'></img>
                    <h3 className = 'mainstage-key-header key-header'>Main Stage</h3>
                </div>
                <div className = 'cultural-key key-container'>
                    <img src = {culturalkey} className = 'culturalkey'></img>
                    <h3 className = 'cultural-key-header key-header'>Cultural Village</h3>
                </div>
                <div className = 'headliner-key key-container'>
                    <img src = {headlinerkey} className = 'headlinerkey'></img>
                    <h3 className = 'headliner-key-header key-header'>Headliners</h3>
                </div>
            </div>
            <h2 className = 'performance-location'>LOCATION OF PERFORMANCES</h2>
            <img src = {schedulemap} width='60%' height = 'auto' className = 'schedulemap'></img>
        </section>





        <section className = 'fri-section responsive-schedule'>
            <h2 className = 'dates-header2 dates-header'>FRIDAY, FEB 16TH</h2>
            <h3 className = 'dates-header3 dates-header schedule-margin'>5:00 PM - 10:00 PM</h3>
            <div className = 'fri-schedule-container schedule-container'>
                <div className = 'times-container fri-mainstage-container'>
                    <div className = 'mainstage-header-container'>
                        <h1 className = 'mainstage-headerr'>MAINSTAGE</h1>
                    </div>
                    <div className = 'fri-times times1'>
                        <div className = 'times-time'>5:00 PM</div>
                        <div className = 'times-time1'>Legendary Lion Dance</div>
                    </div>
                    <div className = 'fri-times times1'>
                        <div className = 'times-time'>5:30 PM</div>
                        <div className = 'times-time1'>Zodiac Rumble: 1v1 Dance Battle</div>
                    </div>
                    <div className = 'fri-times times1'>
                        <div className = 'times-time'>7:30 PM</div>
                        <div className = 'times-time1'>MVSD Fashion Show</div>
                    </div>
                    <div className = 'fri-times times1'>
                        <div className = 'times-time'>8:00 PM</div>
                        <div className = 'times-time1'>Three Treasures Cultural Arts Society Lion Dance</div>
                    </div>
                    <div className = 'fri-times times1 headliner-schedule'>
                        <div className = 'times-time'>8:30 PM</div>
                        <div className = 'times-time1'>Leatea</div>
                    </div>
                    <div className = 'fri-times times1'>
                        <div className = 'times-time'>9:00 PM</div>
                        <div className = 'times-time1'>Step Up Dance</div>
                    </div>
                    <div className = 'fri-times times1'>
                        <div className = 'times-time'>10:00 PM</div>
                        <div className = 'times-time1'>Festival Closes</div>
                    </div>
                </div>
                <div className = 'times-container fri-cultural-container'>
                    <div className = 'cultural-village-header-container'>
                        <h1 className = 'cultural-village-header'>CULTURAL VILLAGE</h1>
                    </div>
                    <div className = 'fri-times times1'>
                        <div className = 'times-time'>5:00 PM</div>
                        <div className = 'times-time1'>Karaoke &#40;Hát cho nhau nghe&#41;</div>
                    </div>
                    <div className = 'fri-times times1'>
                        <div className = 'times-time'>10:00 PM</div>
                        <div className = 'times-time1'>Festival Closes</div>
                    </div>
                </div>
            </div>
        </section>
        <section className = 'sat-section responsive-schedule'>
            <h2 className = 'dates-header2 dates-header'>SATURDAY, FEB 17TH</h2>
            <h3 className = 'dates-header3 dates-header schedule-margin'>11:00 AM - 10:00 PM</h3>
            <div className = 'sat-schedule-container schedule-container'>
                <div className = 'times-container sat-mainstage-container'>
                    <div className = 'mainstage-header-container'>
                        <h1 className = 'mainstage-headerr'>MAIN STAGE</h1>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>11:00 AM</div>
                        <div className = 'times-time1'>Tết Music</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>11:30 AM</div>
                        <div className = 'times-time1'>Naruwan Taiko Drums</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>12:00 PM</div>
                        <div className = 'times-time1'>Opening Ceremony</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>1:00 PM</div>
                        <div className = 'times-time1'>Fire Crackers</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>1:05 PM</div>
                        <div className = 'times-time1'>Hoa Nghiêm Lion Dance</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>2:00 PM</div>
                        <div className = 'times-time1'>Beta Lion</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>3:00 PM</div>
                        <div className = 'times-time1'>Southern Sea Lion Dance</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>3:30 PM</div>
                        <div className = 'times-time1'>Mira Mesa AFJROTC Drill Team</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>4:00 PM</div>
                        <div className = 'times-time1'>Mystique Band</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>5:00 PM</div>
                        <div className = 'times-time1'>Asian Performance Inclusive Dance Diversity </div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>6:00 PM</div>
                        <div className = 'times-time1'>Legendary Lion Dance</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>6:30 PM</div>
                        <div className = 'times-time1'>MVSD Pageant</div>
                    </div>
                    <div className = 'sat-times times1 headliner-schedule'>
                        <div className = 'times-time'>6:55 PM</div>
                        <div className = 'times-time1'>Justin Nguyễn</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>7:15 PM</div>
                        <div className = 'times-time1'>MVSD Evening Gown</div>
                    </div>
                    <div className = 'sat-times times1 headliner-schedule'>
                        <div className = 'times-time'>7:30 PM</div>
                        <div className = 'times-time1'>Trina Bảo Trân</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>8:00 PM</div>
                        <div className = 'times-time1'>MVSD Áo Dài</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>8:30 PM</div>
                        <div className = 'times-time1'>MVSD Q&A</div>
                    </div>
                    <div className = 'sat-times times1 headliner-schedule'>
                        <div className = 'times-time'>8:50 PM</div>
                        <div className = 'times-time1'>Justin Nguyễn</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>9:15 PM</div>
                        <div className = 'times-time1'>MVSD Top 3 Q&A</div>
                    </div>
                    <div className = 'sat-times times1 headliner-schedule'>
                        <div className = 'times-time'>9:30 PM</div>
                        <div className = 'times-time1'>Trina Bảo Trân</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>9:50 PM</div>
                        <div className = 'times-time1'>MVSD Winners & Crowning</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>10:00 PM</div>
                        <div className = 'times-time1'>Festival Closes</div>
                    </div>
                </div>
                <div className = 'times-container sat-cultural-container'>
                    <div className = 'cultural-village-header-container'>
                        <h1 className = 'cultural-village-header'>CULTURAL VILLAGE</h1>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>1:05 PM</div>
                        <div className = 'times-time1'>Kids Performances</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>3:30 PM</div>
                        <div className = 'times-time1'>Southern Sea Lion Dance</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>4:00 PM</div>
                        <div className = 'times-time1'>Kids Performances</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>4:30 PM</div>
                        <div className = 'times-time1'>Asian Story Theater</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>5:00 PM</div>
                        <div className = 'times-time1'>Chánh Kiến Lion Dance</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>5:30 PM</div>
                        <div className = 'times-time1'>Vietnamese Lotto Games & Karaoke</div>
                    </div>
                    <div className = 'sat-times times1'>
                        <div className = 'times-time'>10:00 PM</div>
                        <div className = 'times-time1'>Festival Closes</div>
                    </div>
                </div>
            </div>
        </section>
        <section className = 'sun-section responsive-schedule'>
            <h2 className = 'dates-header2 dates-header'>SUNDAY, FEB 18TH</h2>
            <h3 className = 'dates-header3 dates-header sunday-festival'>11:00 AM - 6/9:00 PM</h3>
            <div className = 'sun-schedule-container schedule-container'>
                <div className = 'times-container sun-mainstage-container'>
                    <div className = 'mainstage-header-container'>
                        <h1 className = 'mainstage-headerr'>MAIN STAGE</h1>
                    </div>
                    <div className = 'sun-times times1'>
                        <div className = 'times-time'>11:00 AM</div>
                        <div className = 'times-time1'>Tết Music</div>
                    </div>
                    <div className = 'sun-times times1'>
                        <div className = 'times-time'>12:00 PM</div>
                        <div className = 'times-time1'>Mystique Band</div>
                    </div>
                    <div className = 'sun-times times1'>
                        <div className = 'times-time'>1:00 PM</div>
                        <div className = 'times-time1'>Southern Sea Lion Dance</div>
                    </div>
                    <div className = 'sun-times times1'>
                        <div className = 'times-time'>1:30 PM</div>
                        <div className = 'times-time1'>Scripps Ranch AFJROTC Drill Team</div>
                    </div>
                    <div className = 'sun-times times1'>
                        <div className = 'times-time'>2:00 PM</div>
                        <div className = 'times-time1'>MVSD New Court</div>
                    </div>
                    <div className = 'sun-times times1 headliner-schedule'>
                        <div className = 'times-time'>2:15 PM</div>
                        <div className = 'times-time1'>Philip Huy</div>
                    </div>
                    <div className = 'sun-times times1 headliner-schedule'>
                        <div className = 'times-time'>2:30 PM</div>
                        <div className = 'times-time1'>Mỹ Huyền</div>
                    </div>
                    <div className = 'sun-times times1'>
                        <div className = 'times-time'>2:45 PM</div>
                        <div className = 'times-time1'>Mystique Band</div>
                    </div>
                    <div className = 'sun-times times1'>
                        <div className = 'times-time'>3:30 PM</div>
                        <div className = 'times-time1'>Legendary Lion Dance</div>
                    </div>
                    <div className = 'sun-times times1 headliner-schedule'>
                        <div className = 'times-time'>3:45 PM</div>
                        <div className = 'times-time1'>Philip Huy</div>
                    </div>
                    <div className = 'sun-times times1 headliner-schedule'>
                        <div className = 'times-time'>4:00 PM</div>
                        <div className = 'times-time1'>Mỹ Huyền</div>
                    </div>
                    <div className = 'sun-times times1'>
                        <div className = 'times-time'>4:30 PM</div>
                        <div className = 'times-time1'>Mystique Band</div>
                    </div>
                    <div className = 'sun-times times1'>
                        <div className = 'times-time'>5:0 PM</div>
                        <div className = 'times-time1'>La Jolla Taiko</div>
                    </div>
                    <div className = 'sun-times times1'>
                        <div className = 'times-time'>6:00 PM</div>
                        <div className = 'times-time1 festival-close'>Festival Closes</div>
                    </div>
                    <div className = 'sun-times times1'>
                        <div className = 'times-time'>9:00 PM</div>
                        <div className = 'times-time1 carnival-close'>Carnival Closes</div>
                    </div>
                </div>
                <div className = 'times-container sun-cultural-container'>
                    <div className = 'cultural-village-header-container'>
                        <h1 className = 'cultural-village-header'>CULTURAL VILLAGE</h1>
                    </div>
                    <div className = 'sun-times times1'>
                        <div className = 'times-time'>12:00 PM</div>
                        <div className = 'times-time1'>Đám Cuoi Đầu Xuân &#40;Mock Wedding&#41;</div>
                    </div>
                    <div className = 'sun-times times1'>
                        <div className = 'times-time'>12:00 PM</div>
                        <div className = 'times-time1'>SDTet Kids Got Talent</div>
                    </div>
                    <div className = 'sun-times times1'>
                        <div className = 'times-time'>12:00 PM</div>
                        <div className = 'times-time1'>Karaoke &#40;Hát cho nhau nghe&#41;</div>
                    </div>
                    <div className = 'sun-times times1'>
                        <div className = 'times-time'>12:00 PM</div>
                        <div className = 'times-time1'>Festival Closes</div>
                    </div>
                </div>
            </div>
        </section>






        <section className = 'schedule-section nonresponsive-schedule'>
            <div className = 'schedule-dates-container'>
                <div className = 'fri-date event-dates'>
                    <h2 className = 'dates-header2 dates-header'>FRIDAY, FEB 16TH</h2>
                    <h3 className = 'dates-header3 dates-header schedule-margin'>5:00 PM - 10:00 PM</h3>
                </div>
                <div className = 'sat-date event-dates'>
                    <h2 className = 'dates-header2 dates-header'>SATURDAY, FEB 17TH</h2>
                    <h3 className = 'dates-header3 dates-header schedule-margin'>11:00 AM - 10:00 PM</h3>
                </div>
                <div className = 'sun-date event-dates'>
                    <div className = 'dates-header-container'>
                        <h2 className = 'dates-header2 dates-header'>SUNDAY, FEB 18TH</h2>
                        <h3 className = 'dates-header3 dates-header sunday-festival'>11:00 AM - 6/9:00 PM</h3>
                    </div>
                    
                </div>
            </div>
            <div className = 'schedule-times-container'>
                <div className = 'mainstage-container'>
                    <h1 className = 'mainstage-header'>MAIN STAGE</h1>
                </div>
                <div className = 'schedule-container3'>
                    <div className = 'times-container fri-times-container'>
                        <div className = 'fri-times times1'>
                            <div className = 'times-time'>5:00 PM</div>
                            <div className = 'times-time1'>Legendary Lion Dance</div>
                        </div>
                        <div className = 'fri-times times1'>
                            <div className = 'times-time'>5:30 PM</div>
                            <div className = 'times-time1'>Zodiac Rumble: 1v1 Dance Battle</div>
                        </div>
                        <div className = 'fri-times times1'>
                            <div className = 'times-time'>7:30 PM</div>
                            <div className = 'times-time1'>MVSD Fashion Show</div>
                        </div>
                        <div className = 'fri-times times1'>
                            <div className = 'times-time'>8:00 PM</div>
                            <div className = 'times-time1'>Three Treasures Cultural Arts Society Lion Dance</div>
                        </div>
                        <div className = 'fri-times times1 headliner-schedule'>
                            <div className = 'times-time'>8:30 PM</div>
                            <div className = 'times-time1'>Leatea</div>
                        </div>
                        <div className = 'fri-times times1'>
                            <div className = 'times-time'>9:00 PM</div>
                            <div className = 'times-time1'>Step Up Dance</div>
                        </div>
                        <div className = 'fri-times times1'>
                            <div className = 'times-time'>10:00 PM</div>
                            <div className = 'times-time1'>Festival Closes</div>
                        </div>
                        <div className = 'cultural-village-header-container'>
                            <h1 className = 'cultural-village-header'>CULTURAL VILLAGE</h1>
                        </div>
                        <div className = 'fri-times times1'>
                            <div className = 'times-time'>5:00 PM</div>
                            <div className = 'times-time1'>Karaoke &#40;Hát cho nhau nghe&#41;</div>
                        </div>
                        <div className = 'fri-times times1'>
                            <div className = 'times-time'>10:00 PM</div>
                            <div className = 'times-time1'>Festival Closes</div>
                        </div>
                    </div>
                    <div className = 'times-container sat-times-container'>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>11:00 AM</div>
                            <div className = 'times-time1'>Tết Music</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>11:30 AM</div>
                            <div className = 'times-time1'>Naruwan Taiko Drums</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>12:00 PM</div>
                            <div className = 'times-time1'>Opening Ceremony</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>1:00 PM</div>
                            <div className = 'times-time1'>Fire Crackers</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>1:05 PM</div>
                            <div className = 'times-time1'>Hoa Nghiêm Lion Dance</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>2:00 PM</div>
                            <div className = 'times-time1'>Beta Lion</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>3:00 PM</div>
                            <div className = 'times-time1'>Southern Sea Lion Dance</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>3:30 PM</div>
                            <div className = 'times-time1'>Mira Mesa AFJROTC Drill Team</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>4:00 PM</div>
                            <div className = 'times-time1'>Mystique Band</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>5:00 PM</div>
                            <div className = 'times-time1'>Asian Performance Inclusive Dance Diversity </div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>6:00 PM</div>
                            <div className = 'times-time1'>Legendary Lion Dance</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>6:30 PM</div>
                            <div className = 'times-time1'>MVSD Pageant</div>
                        </div>
                        <div className = 'sat-times times1 headliner-schedule'>
                            <div className = 'times-time'>6:55 PM</div>
                            <div className = 'times-time1'>Justin Nguyễn</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>7:15 PM</div>
                            <div className = 'times-time1'>MVSD Evening Gown</div>
                        </div>
                        <div className = 'sat-times times1 headliner-schedule'>
                            <div className = 'times-time'>7:30 PM</div>
                            <div className = 'times-time1'>Trina Bảo Trân</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>8:00 PM</div>
                            <div className = 'times-time1'>MVSD Áo Dài</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>8:30 PM</div>
                            <div className = 'times-time1'>MVSD Q&A</div>
                        </div>
                        <div className = 'sat-times times1 headliner-schedule'>
                            <div className = 'times-time'>8:50 PM</div>
                            <div className = 'times-time1'>Justin Nguyễn</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>9:15 PM</div>
                            <div className = 'times-time1'>MVSD Top 3 Q&A</div>
                        </div>
                        <div className = 'sat-times times1 headliner-schedule'>
                            <div className = 'times-time'>9:30 PM</div>
                            <div className = 'times-time1'>Trina Bảo Trân</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>9:50 PM</div>
                            <div className = 'times-time1'>MVSD Winners & Crowning</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>10:00 PM</div>
                            <div className = 'times-time1'>Festival Closes</div>
                        </div>
                        <div className = 'cultural-village-header-container'>
                            <h1 className = 'cultural-village-header'>CULTURAL VILLAGE</h1>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>1:05 PM</div>
                            <div className = 'times-time1'>Kids Performances</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>3:30 PM</div>
                            <div className = 'times-time1'>Southern Sea Lion Dance</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>4:00 PM</div>
                            <div className = 'times-time1'>Kids Performances</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>4:30 PM</div>
                            <div className = 'times-time1'>Asian Story Theater</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>5:00 PM</div>
                            <div className = 'times-time1'>Chánh Kiến Lion Dance</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>5:30 PM</div>
                            <div className = 'times-time1'>Vietnamese Lotto Games & Karaoke</div>
                        </div>
                        <div className = 'sat-times times1'>
                            <div className = 'times-time'>10:00 PM</div>
                            <div className = 'times-time1'>Festival Closes</div>
                        </div>
                    </div>
                    <div className = 'times-container sun-times-container'>
                        <div className = 'sun-times times1'>
                            <div className = 'times-time'>11:00 AM</div>
                            <div className = 'times-time1'>Tết Music</div>
                        </div>
                        <div className = 'sun-times times1'>
                            <div className = 'times-time'>12:00 PM</div>
                            <div className = 'times-time1'>Mystique Band</div>
                        </div>
                        <div className = 'sun-times times1'>
                            <div className = 'times-time'>1:00 PM</div>
                            <div className = 'times-time1'>Southern Sea Lion Dance</div>
                        </div>
                        <div className = 'sun-times times1'>
                            <div className = 'times-time'>1:30 PM</div>
                            <div className = 'times-time1'>Scripps Ranch AFJROTC Drill Team</div>
                        </div>
                        <div className = 'sun-times times1'>
                            <div className = 'times-time'>2:00 PM</div>
                            <div className = 'times-time1'>MVSD New Court</div>
                        </div>
                        <div className = 'sun-times times1 headliner-schedule'>
                            <div className = 'times-time'>2:15 PM</div>
                            <div className = 'times-time1'>Philip Huy</div>
                        </div>
                        <div className = 'sun-times times1 headliner-schedule'>
                            <div className = 'times-time'>2:30 PM</div>
                            <div className = 'times-time1'>Mỹ Huyền</div>
                        </div>
                        <div className = 'sun-times times1'>
                            <div className = 'times-time'>2:45 PM</div>
                            <div className = 'times-time1'>Mystique Band</div>
                        </div>
                        <div className = 'sun-times times1'>
                            <div className = 'times-time'>3:30 PM</div>
                            <div className = 'times-time1'>Legendary Lion Dance</div>
                        </div>
                        <div className = 'sun-times times1 headliner-schedule'>
                            <div className = 'times-time'>3:45 PM</div>
                            <div className = 'times-time1'>Philip Huy</div>
                        </div>
                        <div className = 'sun-times times1 headliner-schedule'>
                            <div className = 'times-time'>4:00 PM</div>
                            <div className = 'times-time1'>Mỹ Huyền</div>
                        </div>
                        <div className = 'sun-times times1'>
                            <div className = 'times-time'>4:30 PM</div>
                            <div className = 'times-time1'>Mystique Band</div>
                        </div>
                        <div className = 'sun-times times1'>
                            <div className = 'times-time'>5:0 PM</div>
                            <div className = 'times-time1'>La Jolla Taiko</div>
                        </div>
                        <div className = 'sun-times times1'>
                            <div className = 'times-time'>6:00 PM</div>
                            <div className = 'times-time1 festival-close'>Festival Closes</div>
                        </div>
                        <div className = 'sun-times times1'>
                            <div className = 'times-time'>9:00 PM</div>
                            <div className = 'times-time1 carnival-close'>Carnival Closes</div>
                        </div>
                        <div className = 'cultural-village-header-container'>
                            <h1 className = 'cultural-village-header'>CULTURAL VILLAGE</h1>
                        </div>
                        <div className = 'sun-times times1'>
                            <div className = 'times-time'>12:00 PM</div>
                            <div className = 'times-time1'>Đám Cuoi Đầu Xuân &#40;Mock Wedding&#41;</div>
                        </div>
                        <div className = 'sun-times times1'>
                            <div className = 'times-time'>12:00 PM</div>
                            <div className = 'times-time1'>SDTet Kids Got Talent</div>
                        </div>
                        <div className = 'sun-times times1'>
                            <div className = 'times-time'>12:00 PM</div>
                            <div className = 'times-time1'>Karaoke &#40;Hát cho nhau nghe&#41;</div>
                        </div>
                        <div className = 'sun-times times1'>
                            <div className = 'times-time'>12:00 PM</div>
                            <div className = 'times-time1'>Festival Closes</div>
                        </div>
                    </div>



                </div>
                
                
            </div>
        </section>
        </> 
    )
}


export default Schedule