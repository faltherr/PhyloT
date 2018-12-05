import React, {Component} from 'react'

export default class Login extends Component{
    render(){
        return(
            <div>
                <h1>Welcome Back to SeqSim</h1>
                <h3>Please Login</h3>
                <p>Username</p> <input></input>
                <p>Password</p> <input></input>
                <br/>
                <small>Don't have an account? Create one now!</small>
            </div>
        )
    }
}