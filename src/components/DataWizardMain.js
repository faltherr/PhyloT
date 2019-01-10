import React, { Component } from 'react'
import folder_icon from '../images/folder_icon.png'
import random_icon from '../images/random_icon.png'
import dice from '../images/dice.png'

import '../styles/datawiz.css'
import {Link} from 'react-router-dom'

export default class DataWizardMain extends Component {
    render() {
        const {match} = this.props
        return (
            <div className='data-wizard-main-container'>
                <h1> Choose Your Destiny </h1>
                <div className='data-upload-option-container'>
                    <Link to={`${match.url}/biom_selector`} style={{ textDecoration: 'none', color:'black' }}>
                        <div className='data-option-card'>
                            <img src={dice} alt='folder' className='card-icon' />
                            <div className='card-text-container'>
                                <h4><b>Randomly Select Genomes </b></h4>
                                <p>Select this option to automate the selection of synthetic data with minimal user input.</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={`${match.url}/biom_selector`} style={{ textDecoration: 'none', color:'black' }}>
                        <div className='data-option-card'>
                            <img src={folder_icon} alt='folder' className='card-icon' />
                            <div className='card-text-container'>
                                <h4><b>Upload a BIOM File or Use One of SeqSim's </b></h4>
                                <p>Select this option if you want to generate synthetic data from your own genome set or if you would like a standard community.</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={`${match.url}/community_selector`} style={{ textDecoration: 'none', color:'black' }}>
                        <div className='data-option-card'>
                        <img src={random_icon} alt='folder' className='card-icon' />
                            <div className='card-text-container'>
                                <h4><b>Create a Custom Community</b></h4>
                                <p>Select this option if you want to generate synthetic data from a genomes stored in our database.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}