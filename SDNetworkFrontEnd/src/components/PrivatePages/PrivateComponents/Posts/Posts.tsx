import React, { Component } from 'react'
import classes from './Posts.module.sass'
import Post from './Post/Post'
import { axiosInstance } from '../../../../util/axiosConfig'

interface Props {
    
}
interface State {
    
}

class Posts extends Component<any, any> {
    
    state = {
        PostArray: []
    }

    feedAPICall = () => {
        axiosInstance.get('/posts/all').then(response => {
            let postArr = [];
            for (let postData of response.data.sort(this.custom_sort).reverse()){
                postArr.push(
                    <Post {...postData} />
                );
            }
            this.setState({PostArray: postArr});
        });
    }

    componentDidMount() {
        if (this.props.ProfileOrFeed !== 'PROFILE') {
            this.feedAPICall();
        }
    }

    custom_sort(a: any, b: any) {
        return new Date(a.dateTimePosted).getTime() - new Date(b.dateTimePosted).getTime();
    }

    render() {
        let postArr: any = [];
        if (this.props.ProfileOrFeed === 'PROFILE'){
            console.log(this.props.responseData)
            for (let postData of this.props.responseData.sort(this.custom_sort).reverse()){
                postArr.push(
                    <Post {...postData} />
                );
            }
            if (postArr.length == 0) {
                postArr = <h1>You Don't Have Any Posts</h1>
            }
        }
        let posts = this.props.ProfileOrFeed === 'PROFILE' ? postArr : this.state.PostArray;

        return (
            <div className={classes.PostList}>
                {posts}
            </div>
        )
    }
}

export default Posts;