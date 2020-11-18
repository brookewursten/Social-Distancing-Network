import React, { Component } from 'react'
import classes from '../SettingsPage.module.sass'
import { CircleSpinner } from 'react-spinners-kit'
import { BiShow } from 'react-icons/bi'
import { axiosInstance } from "../../../../util/axiosConfig";

interface Props {
    
}
interface State {
    
}

class ChangePassword extends Component<any, any> {
    
    state = {
        showPassword: false,
        passwordEntered: '',
        loading: false,
        successMessage: false
    }

    showIconHandler = () => {
        this.setState({showPassword: !this.state.showPassword});
    }

    btnHandler = async () => {
        this.setState({loading: true});
        let response;
        response = await axiosInstance.post("/user/changepass", {
            email: this.props.userObject.email,
            password: this.state.passwordEntered
          }).then(response => {
              if (response.status === 200) {
                  this.setState({loading: false, successMessage: true});
              }
          });
    }

    setPass = async (event: any) => {
        this.setState({ passwordEntered: event.target.value });
    }

    render() {

        let showPassword = this.state.showPassword ? '' : 'password'
        let showButtonClass = this.state.showPassword ? `${classes.ShowIcon} ${classes.ShowIconActive}` : classes.ShowIcon
        let buttonText = this.state.loading ? <CircleSpinner size={15} color="#f5f5f5" /> : "Apply"
        let successMessage = this.state.successMessage ? <div className={classes.successMessage}>Password Successfully Changed</div> : null

        return (
            <div>
                <div className={classes.Section2}>
                    <div className={classes.InputField}>
                        <div>New Password</div>
                        <input onChange={this.setPass} value={this.state.passwordEntered} type={showPassword} className={classes.Input}></input>
                        <BiShow onClick={this.showIconHandler} className={showButtonClass}/>
                    </div>
                    <div onClick={this.btnHandler} className={classes.ApplyButton}>{buttonText}</div>
                    {successMessage}
                </div>               
            </div>
        )
    }
}

export default ChangePassword
