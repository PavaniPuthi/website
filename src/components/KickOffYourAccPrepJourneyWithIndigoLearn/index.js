import {Component} from 'react'
import './index.css'

class KickOffYourAccPrepJourneyWithIndigoLearn extends Component{
    state={isTrue:true,isSignIn:true}
    onClickRequest=()=>{
        this.setState({isTrue:false})
    }
    onclickSignIn=()=>{
        this.setState({isSignIn:false})
    }
    render(){
        const {isTrue,isSignIn}=this.state
        return <div className='kick-off-total-container'>
            <div className='kick-off-container'>
            <h1 className='kick-off-heading'>Kick off your ACCA Prep Journey with IndigoLearn</h1>
            <p className='kick-off-para'>Sign-in and get instant access to our free courses</p>
            {isSignIn&&<button onClick={this.onclickSignIn}>Sign in</button>}
            {!isSignIn&& <p>Fill the form in beside Container</p>}
            </div>
            {isTrue&&<form className='form-container'>
                <h1 className='kick-off-heading'>Aspiring to be an ACCA Get in touch with us</h1>
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
        </div>
    }
}

export default KickOffYourAccPrepJourneyWithIndigoLearn