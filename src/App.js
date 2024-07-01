import { BrowserRouter,Routes, Route } from 'react-router-dom';

import KickOffYourAccPrepJourneyWithIndigoLearn from './components/KickOffYourAccPrepJourneyWithIndigoLearn'
import PlacementSupport from './components/PlacementSupport'
import WhatWillYouLearnInACCA from './components/WhatWillYouLearnInACCA'
import WhyChooseUS from './components/WhyChooseUS'
import ACCAEligibility from './components/ACCAEligibility'
import BecomeACCAIn18Months from './components/BecomeACCAIn18Months'
import Header from './components/Header'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
  <Route exact path='/' component={BecomeACCAIn18Months} />
  <Route exact path='/whyChooseus' component={WhyChooseUS} />
  <Route exact path='/eligibility' component={ACCAEligibility} />
  <Route exact path='/whatwilllearn' component={WhatWillYouLearnInACCA}/>
  <Route exact path='/placement' component={PlacementSupport}/>
  <Route exact path='/kickoff' component={KickOffYourAccPrepJourneyWithIndigoLearn} />
  </Routes>
 </BrowserRouter>
)
export default App

