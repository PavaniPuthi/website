import {Link} from "react-router-dom";
import './index.css'

const Header=()=>{
    return <nav>
        <ul className="ul-con">
        <li><Link to="/">BecomeACCAIn18Months</Link></li>
            <li><Link to="/whyChooseus">WhyChooseUS</Link></li>
            <li ><Link to="/eligibility">ACCAEligibility</Link></li>
            <li ><Link to="/whatwilllearn">WhatWillYouLearnInACCA</Link></li>
            <li><Link to="/placement">PlacementSupport</Link></li>
            <li><Link to="/kickoff">KickOffYourAccPrepJourney</Link></li>
        </ul>
    </nav>
    
}

export default Header