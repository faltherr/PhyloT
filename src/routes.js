import React from 'react'
import {Switch, Route} from 'react-router-dom';
//Components
import Home from './components/Home.js'
import DataWizardMain from './components/DataWizardMain.js'
import BiomSelector from './components/DataWizardBIOM.js'
import CommunitySelector from './components/DataWizardCommunity.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
import SampleReview from './components/SampleReview.js'
import MainResults from './components/MainResults.js'

export default (
<Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route exact path="/generate" component={DataWizardMain} />
    <Route path="/generate/biom_selector" component={BiomSelector} />
    <Route path="/generate/community_selector" component={CommunitySelector} />
    <Route path="/generate/sample_review" component={SampleReview} />
    <Route path ="/results" component={MainResults} />
</Switch> 
)