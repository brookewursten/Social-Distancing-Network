import React, { Component } from 'react'
import classes from './Landing.module.sass'
import { NavLink } from 'react-router-dom'

interface Props {
    
}
interface State {
    
}

export default class Landing extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className={classes.LandingPage}>
                <div className={classes.Controls}>
                    <div className={classes.WelcomeMessage}>Welcome to the Social Distancing Network</div>
                    <div className={classes.ButtonsContainer}>
                        <NavLink className={classes.NavLink} to='/create-an-account'>Create An Account</NavLink>
                        <NavLink className={classes.NavLink} to='/log-in'>Log In</NavLink>
                    </div>
                </div>
            </div>
        )
    }
    
}
