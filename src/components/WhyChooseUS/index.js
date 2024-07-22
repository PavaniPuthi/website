import { FaChalkboardTeacher,FaBook ,FaBriefcase} from "react-icons/fa"
import './index.css'

const WhyChooseUS =()=>{
    return <div>
        <h1 className="choose-us-heading">Why Choose Us</h1>
        <div className="choose-us-flex-conatiner">
            <div className="choose-us-conatiner">
                <FaChalkboardTeacher className="choose-us-image"/>
                <h1>Expert Faculty</h1>
                <p>Our faculty members have over 20 years of experience in their respective fields, with many holding advanced degrees from prestigious institutions.
                 </p>
            </div>
            <div className="choose-us-conatiner">
                <FaBook className="choose-us-image"/>
                <h1>Complete Success Package</h1>
                <p> Our curriculum is designed to cover all critical areas, ensuring that students gain a deep and thorough understanding of the subject matter. Courses are regularly updated to include the latest industry trends and technologies.
                </p>
            </div>
            <div className="choose-us-conatiner">
                <FaBriefcase className="choose-us-image"/>
                <h1>Placements</h1>
                <p> We have established partnerships with over 200 leading companies, including Fortune 500 firms, which offer our students exclusive internship and job placement opportunities.
                </p>
            </div>
        </div>
    </div>
    
}

export default WhyChooseUS