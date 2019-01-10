import React, {Component} from 'react'
import '../styles/mainwizard.css'
import PlatformSelector from './PlatformSelector'

export default class WizardContainer extends Component{
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
        } else {
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
            <section className='main-content'>
                <div className='wizard'>
                    <div className='breadcrumb-container'>
                    Progress Tracker here
                    </div>
                    <div className='content-container'>
                        
                        {this.displayContent()}
                    </div>
                    <div className='button-container'>
                        <button onClick={this.prevStep}>Previous</button>
                        <button onClick={this.nextStep}>Next</button>
                    </div>
                </div>
            </section>
            </div>
        )
    }
}

