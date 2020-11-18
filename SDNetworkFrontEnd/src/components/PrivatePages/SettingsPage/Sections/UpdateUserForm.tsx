import React, { Component } from 'react'
import classes from '../SettingsPage.module.sass'
import { axiosInstance } from "../../../../util/axiosConfig";
import {User} from "../../../../models/User"
import { connect } from 'react-redux';

interface Props {

}
interface State {

}

class UpdateUserForm extends Component<any, any> {
    state = {newField : '',
            userObject:this.props.userObject}

    btnHandler = async () => {
        if(this.state.newField !== ''){
        let user = this.props.userObject;
        user[this.props.field]=this.state.newField;
        this.setState({userObject:user})
        let response;
        response = await axiosInstance.post("/user/update", this.state.userObject);
        mapDispatchToProps(this.state.userObject);
    }
    }

    setField = async (event: any) => {
        this.setState({ newField: event.target.value });
    }

    render() {
        return (
                <div className={classes.Section2}>
                    <div className={classes.InputField}>
                        <div>Current {this.props.fieldName}:</div>
                        <div className={classes.CurrentText}>{this.props.userObject[this.props.field]}</div>
                    </div>
                    <div className={classes.InputField }>
                        <div>Change {this.props.fieldName}</div>
                        <input className={classes.Input} onChange={this.setField}></input>
                    </div>
                    <div className={classes.ApplyButton} onClick={this.btnHandler}>Apply</div>
                </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateUser: (userObject: User) =>
      dispatch({
        type: "SET_GLOBAL_USER_OBJECT",
        payload: { userObject: userObject },
      }),
  };
};
            
 
export default (connect(mapDispatchToProps)(UpdateUserForm))
