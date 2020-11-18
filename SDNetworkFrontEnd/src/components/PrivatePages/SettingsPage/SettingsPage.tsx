import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import classes from './SettingsPage.module.sass'

import NavBar from '../PrivateComponents/NavBar/NavBar'
import { connect } from 'react-redux'
import ChangeProfilePicture from './Sections/ChangeProfilePicture'
import ChangePassword from './Sections/ChangePassword'
import UpdateUserForm from './Sections/UpdateUserForm'
import { parseConfigFileTextToJson } from 'typescript'
import { axiosInstance } from '../../../util/axiosConfig'
import { User } from '../../../models/User'
import UserPage from '../UserPage/UserPage'

interface Props {
    
}
interface State {
    
}

class SettingsPage extends Component<any, any> {
    state = {}

    backButtonHandler = () => {
        this.props.history.goBack();
    }

    render() {
        return (
        <div className={classes.Body}>
            <NavBar />
            <div className={classes.MAXWIDTH}>
                <div className={classes.SettingsPage}>
                    <div className={classes.BackButton} onClick={this.backButtonHandler}>Back</div>
                    <div className={classes.Form}>

                        <ChangeProfilePicture {...this.props.userObject} />

                        <UpdateUserForm fieldName="First Name" field="firstName" userObject={this.props.userObject}/>
                        <UpdateUserForm fieldName="Last Name" field="lastName" userObject={this.props.userObject}/>
                        <UpdateUserForm fieldName="email" field="email" userObject={this.props.userObject}/>
                
                        <ChangePassword     userObject={this.props.userObject} />

                    </div>
                    <div className={classes.BottomSpacer}></div>
                </div>
            </div>
        </div>

        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        userObject: state.userObject,
        s3BaseURL_ProfilePicture: state.s3BaseURL_ProfilePicture
    }
}




export default withRouter(connect(mapStateToProps, null)(SettingsPage));