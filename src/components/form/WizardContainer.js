import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

//Local Components
import PlatformSelector from './PlatformSelector'
import GenomeSelectorType from '../utilities/FunctionalComponentTemplate'

//Styles
import '../../styles/mainwizard.css'


//This component holds the functionality of the main form page. It may be converted to a wizard like feature in the future.
class WizardContainer extends Component{
    constructor(){
        super()
        this.state={
            currentStep: 1
        }
    }

    nextStep= () => {
        let currentStep = this.state.currentStep;
        if (currentStep >= 2) {
          currentStep = 3;
        } else {
          currentStep = currentStep + 1;
        }
        this.setState({
            currentStep:currentStep
        })
    }
    
    prevStep= () => {
        let currentStep = this.state.currentStep;
        if (currentStep <= 1) {
          currentStep = 1;
        } else {
          currentStep = currentStep - 1;
        }
        this.setState({
            currentStep:currentStep
        })
    }

    displayContent = () => {
        if (this.state.currentStep === 1){
            return <PlatformSelector/>
        } else if (this.state.currentStep === 2) {
            return <GenomeSelectorType/>
        }
    }

    displayButton = () =>{
        if(this.props.inputType === 'existingProject' || this.props.inputType === 'biom'){
            // return <button onClick={this.prevStep}>Review Sample</button>
            return <Link to = '/generate/review'><button type='button' className='btn btn-success'>Review Sample</button></Link>
        } else if (this.props.inputType === 'newProject'){
            // return <button onClick={this.nextStep}>Select Genomes for Sample</button>
            return <Link to='/generate/customize'> <button type='button' className='btn btn-success'>Select Genomes for Sample</button> </Link>
        } else{
            return null
        }
    }

    render(){
        console.log('State of Wizard', this.state.currentStep)
        return(
            <div className='wizard-main-container'>
            <section className='top-text'>
                <h1>GENOME SELECTOR</h1>
                <p>Use the tool to build a synthetic genome community.</p>
            </section>
            <div className='main-content'>
                <div className='wizard'>
                    {/* <div className='breadcrumb-container'>
                    Progress Tracker here
                    </div> */}
                    <div className='content-container'>
                        
                        {this.displayContent()}
                    </div>
                    <div className='button-container'>
                        {this.displayButton()}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return(
        state
    )
}

export default connect(mapStateToProps)(WizardContainer)