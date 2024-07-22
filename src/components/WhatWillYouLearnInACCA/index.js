import './index.css'

const WhatWillYouLearnInACCA=()=>{
 return <div className='learning-main-container'>
    <h1>What will you learn in ACCA</h1>
    <div className='learning-flex-container'>
    <div className="learning-container">
        <h1 className="learning-heading">Knowledge Level</h1>
        <ul><li>Business and Technology(BT)</li>
        <li>Management Accounting(MA)</li>
        <li>Financial Accounting(FA)</li></ul>
        <h1 className="learning-heading">3 Papers</h1>
    </div>
    <div className="learning-container">
        <h1 className="learning-heading">Skill Level</h1>
        <ul> <li>Corporate and Business Law (LW)</li>
        <li>Performance Management (PM)</li>
        <li>Taxation (TX)</li>
        <li>Financial Reporting (FR)</li>
        <li>Audit and Assurance (AA)</li>
        <li>Financial Management (FM)</li></ul>
        <h1 className="learning-heading">6 Papers</h1>
    </div>
    <div className="learning-container">
        <h1 className="learning-heading">Professional Level</h1>
        <ul>Compoulsory
           <li>Strategic Business Leader (SBL)</li> 
           <li>Strategic Business Reporting (SBR)</li>
        </ul>
        <ul>Two out of the following
           <li>Advanced Financial Management (AFM)</li>
           <li>Advanced Performance Management (APM)</li>
           <li>Advanced Taxation (ATX)</li>
           <li>Advanced Audit and Assurance (AAA)</li>
        </ul>
        <h1 className="learning-heading">4 Papers</h1>
    </div>
    </div>
    </div>
    
}

export default WhatWillYouLearnInACCA