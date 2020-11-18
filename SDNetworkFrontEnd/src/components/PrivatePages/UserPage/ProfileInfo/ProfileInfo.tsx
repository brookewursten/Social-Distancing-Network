import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './ProfileInfo.module.sass'
import { withRouter } from 'react-router-dom'
import defaultProfilePicture from '../../../../assets/profilePic2.png'

interface Props {
    
}

interface State {
    
}

class ProfileInfo extends Component<any, any> {

    state = {
        profilePicture: ''
    }

    onProfilePictureErrorHandler = () => {
        
    }

    checkImage(imageSrc: any, good: any, bad: any) {
        var img = new Image();
        img.onload = good; 
        img.onerror = bad;
        img.src = imageSrc;
    }

    componentDidMount(){

        this.checkImage(this.props.s3BaseURL_ProfilePicture + this.props.username, 
            () => this.setState({profilePicture: this.props.s3BaseURL_ProfilePicture + this.props.username}), 
            () => this.setState({profilePicture: defaultProfilePicture})
        );

    }

    componentDidUpdate = (prevProps: any) => {
        if (this.props.username !== prevProps.username ) {
            this.checkImage(this.props.s3BaseURL_ProfilePicture + this.props.username, 
                () => this.setState({profilePicture: this.props.s3BaseURL_ProfilePicture + this.props.username}), 
                () => this.setState({profilePicture: defaultProfilePicture})
            );
        };
    }

    render() {

        console.log(this.props)

        return (
            <div className={classes.ProfileInfoContainer}>
                <div className={classes.ProfilePicContainer}>
                    <img className={classes.ProfilePic} src={this.state.profilePicture} alt="profilePic"/>
                </div>
                <div className={classes.NameContainer}>{this.props.firstName} {this.props.lastName}</div>
            </div>
        )
    }
}

const mapStateToProps = (state:any) => {
    return {
        s3BaseURL_ProfilePicture: state.s3BaseURL_ProfilePicture
    }
}

export default connect(mapStateToProps, null)(ProfileInfo);
