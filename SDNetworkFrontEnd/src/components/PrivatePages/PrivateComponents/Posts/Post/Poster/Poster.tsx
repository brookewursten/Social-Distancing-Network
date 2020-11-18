import React, { Component } from 'react'
import classes from './Poster.module.sass'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

interface Props {
    
}
interface State {
    
}

class Poster extends Component<any, any> {
    state = {
        profilePictureURL: this.props.s3BaseURL_ProfilePicture + this.props.username
    }

    posterOnClickHandler = () => {
        this.props.history.push(`/user/${this.props.username}`);
    }

    onProfilePictureErrorHandler = () => {
        this.setState({profilePictureURL: this.props.s3BaseURL_ProfilePicture + 'default/default'});
    }

    componentDidUpdate = (prevProps: any) => {
        if (this.props.username !== prevProps.username ) {
            this.setState({profilePictureURL: this.props.s3BaseURL_ProfilePicture + this.props.username});
        };
    }

    render() {

        return (
            <div className={classes.PosterContainer} onClick={this.posterOnClickHandler}>
                <div className={classes.PosterImageAndNameContainer}>
                    <div className={classes.PosterProfilePicContainer}>
                        <img className={classes.PosterProfilePic} 
                            src={this.state.profilePictureURL} alt="pic"
                            onError={this.onProfilePictureErrorHandler}
                        />
                    </div>
                <div className={classes.PosterNameContainer}>{this.props.firstName} {this.props.lastName}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state:any) => {
    return {
        s3BaseURL_ProfilePicture: state.s3BaseURL_ProfilePicture
    }
}

export default withRouter(connect(mapStateToProps, null)(Poster));