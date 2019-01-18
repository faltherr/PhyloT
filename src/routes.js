import React from 'react'
import {Switch, Route} from 'react-router-dom';
//Components
import Home from './components/Home.js'
// import DataWizardMain from './components/DataWizardMain.js'
import WizardContainer from './components/WizardContainer.js'
import BiomSelector from './components/BIOMSelector.js'
import CommunitySelector from './components/DataWizardCommunity.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
import SampleReview from './components/SampleReview.js'
import MainResults from './components/MainResults.js'
import CustomizeContainer from './components/CustomizeContainer.js'

export default (
<Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route exact path="/generate" component={WizardContainer} />
    <Route path="/generate/biom_selector" component={BiomSelector} />
    <Route path="/generate/community_selector" component={CommunitySelector} />
    <Route path="/generate/review" component={SampleReview} />
    <Route path="/generate/customize" component={CustomizeContainer} />
    <Route path ="/results" component={MainResults} />
</Switch> 
)