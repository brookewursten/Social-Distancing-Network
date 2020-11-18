import React, { Component, SyntheticEvent } from "react";
import classes from "./CreateAnAccountPage.module.sass";
import { BiShow } from "react-icons/bi";
import { withRouter } from "react-router-dom";
import { User } from "../../../models/User";
import { connect } from "react-redux";
import { axiosInstance } from "../../../util/axiosConfig";

interface Props {}
interface State {
  userObject: User;
  showPassword: boolean;
  invalidLogInMessage : boolean;
}

class CreateAnAccountPage extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      userObject : { userId: 0,
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      pfpLink: "",
    },
    showPassword : false,
    invalidLogInMessage : false
    };
    this.onChange = this.onChange.bind(this);
    this.createHandler = this.createHandler.bind(this);
  }

  createHandler = async () => {
    //get send an get new user from api
    const getUser = async () => {
      let response;
      try {
        return (response = await axiosInstance.post(
          "/user/new-user",
         this.state.userObject
        ));
      } catch (error) {
        console.log(error);
        response = null;
      }
    };
    let user = await getUser();

    //ensure user was created, set global state of authenticated, and route to main page
    if (user != null && user.data) {
      const userObject: User = user.data;
      this.props.authenticateUser(userObject);
      this.props.history.push(`/user/${userObject.username}`);
    } else {
      this.setState({ invalidLogInMessage: true });
    }
  };

  // change state when user types
  onChange(e: any) {
    e.preventDefault();
    this.setState({
      userObject: {...this.state.userObject , [e.target.name] : e.target.value}
    });
  }

  showIconHandler = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  backButtonClickedHandler = () => {
    this.props.history.push("/landing");
  };

  render() {
    let showPassword = this.state.showPassword ? "" : "password";
    let showButtonClass = this.state.showPassword
      ? `${classes.ShowIcon} ${classes.ShowIconActive}`
      : classes.ShowIcon;
      let invalidMessage = this.state.invalidLogInMessage ? (
        <div className={classes.InvalidMessage}>Please Pick a Unique Username</div>
      ) : null;

    return (
      <div className={classes.CreateAnAccountPageContainer}>
        <div className={classes.CreateAccountForm}>
          {/* back button */}
          <div
            className={classes.BackButton}
            onClick={this.backButtonClickedHandler}
          >
            Back
          </div>
          {/* username */}
          <div className={classes.FormField}>
            <div className={classes.Field}>
              <div className={classes.Label}>Username</div>
              <input
                className={classes.Input}
                spellCheck="false"
                name="username"
                onChange={this.onChange}
                value={this.state.userObject.username}
              />
            </div>
            {/* password */}
            <div className={classes.Password}>
              <div className={classes.Label}>Password</div>
              <input
                type={showPassword}
                className={classes.PasswordInput}
                spellCheck="false"
                name="password"
                onChange={this.onChange}
                value={this.state.userObject.password}
              />
              <BiShow
                onClick={this.showIconHandler}
                className={showButtonClass}
              />
            </div>
            {/* email */}
            <div className={classes.Field}>
              <div className={classes.Label}>Email</div>
              <input
                className={classes.Input}
                spellCheck="false"
                name="email"
                onChange={this.onChange}
                value={this.state.userObject.email}
              />
            </div>
            {/* First Name */}
            <div className={classes.Field}>
              <div className={classes.Label}>First Name</div>
              <input
                className={classes.Input}
                spellCheck="false"
                name="firstName"
                onChange={this.onChange}
                value={this.state.userObject.firstName}
              />
            </div>
            {/* Last Name */}
            <div className={classes.Field}>
              <div className={classes.Label}>Last Name</div>
              <input
                className={classes.Input}
                spellCheck="false"
                name="lastName"
                onChange={this.onChange}
                value={this.state.userObject.lastName}
              />
            </div>
          </div>
          {/* Submit for create user */}
          <div className={classes.SubmitButton} onClick={this.createHandler}>
            Submit
          </div>
          {invalidMessage}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    authenticated: state.authenticated,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    authenticateUser: (userObject: User) =>
      dispatch({
        type: "AUTHENTICATE_USER",
        payload: { userObject: userObject },
      }),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateAnAccountPage)
);
