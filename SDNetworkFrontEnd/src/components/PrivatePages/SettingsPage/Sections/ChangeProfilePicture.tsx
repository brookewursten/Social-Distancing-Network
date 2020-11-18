import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { axiosInstance } from '../../../../util/axiosConfig'
import classes from '../SettingsPage.module.sass'
import { CircleSpinner } from 'react-spinners-kit'

interface Props {
    
}
interface State {
    
}

class ChangeProfilePicture extends Component<any, any> {
    state = {
        imageToUpload: null,
        loading: false,
        useStateForProfilePic: false,
        profilePictureURL: ''
    }

    updateProfilePicture = () => {
        this.props.history.push('user/' + this.props.userObject.username)
    }


    onApplyButtonPressHandler = () => {

        this.setState({loading: true});

        let username: any = this.props.userObject.username;
        let func = this.updateProfilePicture;

        function getBase64 (file: any, callback: any) {
            const reader = new FileReader();
            reader.addEventListener('load', () => callback(reader.result));
            reader.readAsDataURL(file);
        }

        getBase64(this.state.imageToUpload, function(b64Data: any){
            axiosInstance.post('/upload-image/change-profile-picture', {username: username, b64: b64Data}).then(response => {
                if (response.status == 200) {
                    setTimeout(()=>func(), 500);
                }
            });
        });

    }

    onInputChangeHandler = (event: any) => {
        this.setState({imageToUpload: event.target.files[0]});
    }

    onProfilePictureErrorHandler = () => {
        this.setState({profilePictureURL: this.props.s3BaseURL_ProfilePicture + 'default/default', useStateForProfilePic: true})
    }

    render() {
        let profilePictureURL = ''
        if (!this.state.useStateForProfilePic){
            profilePictureURL = this.props.s3BaseURL_ProfilePicture + this.props.username;
        } else {
            profilePictureURL = this.state.profilePictureURL;
        }
        let buttonContent = this.state.loading ? <CircleSpinner size={15} color="#f5f5f5" /> : <>Apply</>

        return (
            <div>
                <div className={classes.SectionPic}>
                    <img className={classes.ProfilePicture} onError={this.onProfilePictureErrorHandler} src={profilePictureURL} alt="pic" height="150px" />
                    <div className={classes.InputField}>
                        <div>Change Profile Picture</div>
                        <input type="file" id="img" name="img" accept="image/*" onChange={this.onInputChangeHandler}></input>
                    </div>
                    <div className={classes.ApplyButton} onClick={this.onApplyButtonPressHandler}>{buttonContent}</div>
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

export default withRouter(connect(mapStateToProps, null)(ChangeProfilePicture));
