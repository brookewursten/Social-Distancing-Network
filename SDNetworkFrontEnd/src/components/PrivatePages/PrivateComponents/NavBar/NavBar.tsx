import React, { Component } from 'react'
import classes from './NavBar.module.sass'
import SearchBar from './SearchBar/SearchBar'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Logo from '../../../../assets/mask.png'
import { HiHand } from 'react-icons/hi'

interface Props {
    
}

interface State {
    
}

class NavBar extends Component<any, any> {

    state = {
    }

    logOutHandler = () => {
        this.props.unAuthenticateUser();
        this.props.history.push('/');
    }

    render() {

        const URLToOwnProfile = `/user/${this.props.userObject.username}`;
        const logoStyle = {cursor:"pointer"} as React.CSSProperties

        return (
            <div className={classes.NavBar}>
                <div className={classes.Logo} style={logoStyle} onClick={()=>this.props.history.push('/feed')}>
                    <div className={classes.LogoTextBig}>Social Distancing Network</div>
                    <div className={classes.LogoTextSmall}>SD Network</div>
                    <img className={classes.LogoImg} src={Logo} alt="pic" />
                </div>
                {/* <div></div> */}
                <div className={classes.SearchBar}>
                    <SearchBar />
                </div>
                <div className={classes.NavLinks}>
                    <NavLink to='/create-post' className={classes.NavLink}>Create Post</NavLink>
                    <NavLink to='/feed' className={classes.NavLink}>Feed</NavLink>
                    <div className={classes.DropDown}>
                        <div className={classes.DropDownButton}>Account</div>
                        <div className={classes.DropdownContent}>
                            <NavLink to={URLToOwnProfile} className={classes.DropDownLink}>My Profile</NavLink>
                            <NavLink to='/settings' className={classes.DropDownLink}>Settings</NavLink>
                            <div onClick={this.logOutHandler} className={classes.DropDownLink}>Log Out</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state: any) => {
    return {
        userObject: state.userObject
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        authenticateUser: () => dispatch({type: 'AUTHENTICATE_USER'}),
        unAuthenticateUser: () => dispatch({type: 'UNAUTHENTICATE_USER'})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));