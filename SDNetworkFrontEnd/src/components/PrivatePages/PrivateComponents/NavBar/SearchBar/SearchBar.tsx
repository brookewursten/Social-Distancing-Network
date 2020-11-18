import React, { Component } from 'react'
import classes from './SearchBar.module.sass'
import { HiOutlineSearch } from 'react-icons/hi'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

interface Props {
    
}

interface State {
    
}

class SearchBar extends Component<any, any> {
    
    state = {
        searchBarInputText: ''
    }

    searchButtonClickedHandler = () => {
        if (this.state.searchBarInputText === '') {
            this.props.history.push('/search/all');
        } else {
            const searchURL = '/search/' + this.state.searchBarInputText;
            this.props.history.push(searchURL);
        }
    }

    searchBarOnChangeHandler = (event: any) => {
        this.setState({searchBarInputText: event.target.value});
    }

    render() {
        return (
            <div className={classes.SearchBarContainer}>
                <input className={classes.SearchInput} onChange={this.searchBarOnChangeHandler}></input>
                <div className={classes.SearchButton} onClick={this.searchButtonClickedHandler}>
                    <HiOutlineSearch className={classes.SearchButtonIcon} />
                </div>
            </div>
        )
    }
    
}

export default withRouter(SearchBar);