import './index.css'
import { FaGraduationCap,FaClock,FaClipboardCheck,FaCalendar } from "react-icons/fa"
const ACCAEligibility=()=>{
 return <div className="acca-main-container">
    <div className="acca-container"><h1>Levels</h1>
    <div className="acca-image-container"><FaGraduationCap/>
    <p >Three(13 papers)</p></div>
    </div>
    <div className="acca-container">
        <h1>Duration</h1>
      <div className="acca-image-container"> <FaClock/>
      <p>6-30 months</p></div> 
    </div>
    <div className="acca-container">
        <h1>Exams</h1>
        <div className="acca-image-container"> <FaClipboardCheck />
        <p>Qualifying (online)</p></div>
       
    </div>
    <div className="acca-container">
        <h1>Exemptions</h1>
        <div className="acca-image-container"><FaCalendar />
        <p>upto 9 papers</p></div>
        
    </div>
 </div>
}
export default ACCAEligibility