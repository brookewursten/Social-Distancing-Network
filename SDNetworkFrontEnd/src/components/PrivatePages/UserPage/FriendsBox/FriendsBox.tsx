import React, { Component } from 'react'
import { axiosInstance } from '../../../../util/axiosConfig';
import classes from './FriendsBox.module.sass'
import FriendSquare from './FriendSquare/FriendSquare';

interface Props {
    
}
interface State {
    
}

export default class FriendsBox extends Component<Props, State> {

    state = {
        friendSquaresArr: []
    }

    generateFriendSquares = () => {
        let squareArr = [];
        for (let i = 0; i < 12; i++){
            squareArr.push(
                <FriendSquare />
            );
        }
        return squareArr;
    }

    componentDidMount(){
        axiosInstance.get('/user/all').then(response => {
            let squareArr: any = [];
            for (let userObj of response.data){
                squareArr.push(
                    <FriendSquare key={userObj.username} {...userObj} />
                );
            }
            this.setState({friendSquaresArr: squareArr});
        });
    }

    render() {

        return (
            <div className={classes.FriendsBoxContainer}>
                {this.state.friendSquaresArr}
            </div>
        )
    }
}
