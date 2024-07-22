import { Component } from "react";
import { FaGraduationCap, FaClock } from 'react-icons/fa';
import './index.css'

class BecomeACCAIn18Months extends Component{
    state={isTrue:true}
    onClickRequest=()=>{
      
        this.setState({isTrue:false})
    }

render(){
        const {isTrue}=this.state
return (
        <div className="acca-main-container">
            <div className="acca-container">
      <h2>Become ACCA in 18 Months</h2>
      <p>ACCA (Association of Chartered Certified Accountants) is a globally recognized certification that opens doors to exciting career opportunities in accounting and finance.</p>
      
      <h3>Key Information</h3>
      <p><FaClock /> Duration: Complete the ACCA qualification in just 18 months.</p>
      <p><FaGraduationCap /> Curriculum: Our program covers all ACCA exam papers, ensuring comprehensive preparation.</p>
      <p>Benefit from expert faculty, interactive learning resources, and dedicated support throughout your ACCA journey.</p>
      
      <button>Learn More</button>
    </div>

            {isTrue&&<form className='form-container'>
                <h1 className='acca-heading'>Aspiring to be an ACCA Get in touch with us</h1>
                <label htmlFor='name'>Name</label>
                <input id="name" type="text" placeholder='Enter Name'/>
                <label htmlFor='number'>Phone Number</label>
                <input id="number" type="text"  placeholder='Enter Phone Number'/>
                <label htmlFor='email'>Email</label>
                <input id="email" type="text"  placeholder='Enter Email Id'/>
                <label htmlFor="career"> Career Qualification</label>
                <select id="career">
                    <option>Bsc</option>
                    <option>MA</option>
                    <option>CA</option>
                </select>
                <button onClick={this.onClickRequest} className='call-back-button'>Request Call Back</button>
            </form>}
            {!isTrue&&<h1>Success</h1>}
            
        </div>)
    }
    
}

export default BecomeACCAIn18Months
