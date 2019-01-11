import React, { Component } from 'react';
import lanl_logo from "../images/lanl-logo.png"
import '../styles/footer.css'

export default class Footer extends Component {
    render() {
        return (
                <footer className="main-footer">
                    <img src={lanl_logo} width="70" alt='Los Alamos National Laboratory logo'/>
                    <div className="team-info">
                    <strong>SeqSim</strong>
                    <br/>
                    Built by the LANL EDGE Team
                    </div>
                </footer>
        )
    }
}