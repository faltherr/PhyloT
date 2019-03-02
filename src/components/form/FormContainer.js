import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

//Local Components
import PlatformSelector from './PlatformSelector'

//Styles
import '../../styles/mainwizard.css'


//This component holds the functionality of the main form page. It may be converted to a wizard like feature in the future.
class FormContainer extends Component{
    constructor(){
        super()
        this.state={
            currentStep: 1
        }
    }

    displayButton = () =>{
        if(this.props.inputType === 'existingProject' || this.props.inputType === 'biom'){
            return <Link to = '/generate/review'><button type='button' className='btn btn-success'>Review Sample</button></Link>
        } else if (this.props.inputType === 'newProject'){
            return <Link to='/generate/customize'> <button type='button' className='btn btn-success'>Select Genomes for Sample</button> </Link>
        } else{
            return null
        }
    }

    render(){
        return(
            <div className='wizard-main-container'>
            <section className='top-text'>
                <h1>Genome Selector</h1>
                <p>Use seqSim to customize a synthetic genome community or upload a file of your own.</p>
            </section>
            <div className='main-content'>
                <div className='wizard'>
                    <div className='content-container'>
                        
                        <PlatformSelector/>
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

export default connect(mapStateToProps)(FormContainer)