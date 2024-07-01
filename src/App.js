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
<Route exact path='/' Component={BecomeACCAIn18Months} />
<Route exact path='/whyChooseus' Component={WhyChooseUS} />
<Route exact path='/eligibility' Component={ACCAEligibility} />
<Route exact path='/whatwilllearn' Component={WhatWillYouLearnInACCA}/>
<Route exact path='/placement' Component={PlacementSupport}/>
<Route exact path='/kickoff' Component={KickOffYourAccPrepJourneyWithIndigoLearn} />
</Routes>
</BrowserRouter>
)
export default App

