import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './Post.module.sass'
import PostBody from './PostBody/PostBody'
import Poster from './Poster/Poster'

interface Props {
    
}

interface State {
    
}

class Post extends Component<any, any> {
    state = {}

    render() {

        let imageURL = this.props.s3BaseURL_Post + this.props.postId;

        const date = new Date(this.props.dateTimePosted).toLocaleDateString("en-US");
        const time = new Date(this.props.dateTimePosted).toLocaleTimeString("en-US");

        let dateTime = `${date} ${time}`
        let image = !this.props.imagePost ? null : (

            <div className={classes.DateImageContainer}>
                <div className={classes.dateTime}>{dateTime}</div>
                <div className={classes.ImageContainer}>
                    <img className={classes.PostImage} src={imageURL} alt="pic" />
                </div>
            </div>
            
        )
        
        return (
            <div className={classes.PostContainer}>
                <div className={classes.LeftSide}>
                    <Poster {...this.props} />
                </div>
                <div className={classes.RightSide}>
                    {image}
                    <PostBody {...this.props} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        s3BaseURL_Post: state.s3BaseURL_Post
    }
}

export default connect(mapStateToProps, null)(Post);