import React, { Component } from 'react'
import classes from './FeedPage.module.sass'
import Posts from '../PrivateComponents/Posts/Posts'
import NavBar from '../PrivateComponents/NavBar/NavBar'

interface Props {
    
}

interface State {
    
}

export default class FeedPage extends Component<Props, State> {
    state = {}

    render() {
        return (
        <div className={classes.Body}>
            <NavBar />
            <div className={classes.MAXWIDTH}>
                <div className={classes.UserPageContainer}>
                    <div className={classes.RightSide}>
                        <Posts ProfileOrFeed='FEED' />
                    </div>
                </div>
            </div>
        </div>

        )
    }
}
