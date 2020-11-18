import React, { Component } from 'react'
import classes from './PostBody.module.sass'
import { FiThumbsUp } from 'react-icons/fi'
import { axiosInstance } from '../../../../../../util/axiosConfig'
import { connect } from 'react-redux'
import { CircleSpinner } from 'react-spinners-kit'

interface Props {
    
}
interface State {
    
}

class PostBody extends Component<any, any> {
    state = {
        postLiked: false,
        likeLoading: false
    }

    onLikeButtonPressedHandler = () => {
        this.setState({likeLoading: true});
        if (!this.state.postLiked){
            axiosInstance.post('/likes/remove', { postId: this.props.postId, userId: this.props.userObject.userId }).then(response => {
                console.log(response);
                this.setState({postLiked: true, likeLoading: false});
            });
        }
    }

    render() {

        let postLikedStyle = this.state.postLiked ? {backgroundColor: '#65C1A5', color: '#f5f5f5'} : {}
        let likeButtonText = this.state.likeLoading ? <CircleSpinner size={10} color="#f5f5f5" /> : "Like"
        let numberOfLikesDisplayed = this.state.postLiked ? (this.props.numberLikes - 1) * -1 : this.props.numberLikes * -1;

        return (
            <div className={classes.PostBodyContainer}>
                <div className={classes.PostBody}>
                    {this.props.postText}
                </div>
                <div className={classes.PostButtonsContainer}>
                    <div className={classes.Likes}><FiThumbsUp />{numberOfLikesDisplayed}</div>
                    <div className={classes.Spacer}></div>
                    <div className={classes.LikeButton} style={postLikedStyle} onClick={this.onLikeButtonPressedHandler}>{likeButtonText}</div>
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

export default connect(mapStateToProps, null)(PostBody);