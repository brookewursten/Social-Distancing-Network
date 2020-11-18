import React, { Component } from 'react'
import NavBar from '../PrivateComponents/NavBar/NavBar'
import classes from './SearchPage.module.sass'
import SearchResult from './SearchResult/SearchResult'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { axiosInstance } from "../../../util/axiosConfig";

interface Props {
    
}
interface State {
    
}

class SearchPage extends Component<any, any> {

    state = {
        maxResultsDisplayed: 18,
        currentFirstResultIndex: 0,
        currentLastResultIndex: 18,
        searchResults: [],
        searchResultsQuantity: 0
    }

    // fakeSearchResultsAPIcall = (searchInput: any) => {
    //     if (searchInput === 'all') {
    //         return [
    //             {
    //                 username: 'kyleaoki1',
    //                 firstName: 'kyle',
    //                 lastName: 'aoki'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki1',
    //                 firstName: 'kyle',
    //                 lastName: 'aoki'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             },
    //             {
    //                 username: 'kyleaoki2',
    //                 firstName: 'asdf',
    //                 lastName: 'fdfdf'
    //             },
    //             {
    //                 username: 'kyleaoki3',
    //                 firstName: '9i239',
    //                 lastName: 'pqeoru'
    //             }
    //         ]
    //     } else if (searchInput === 'kyle') {
    //         return [{
    //             username: 'kyleaoki1',
    //             firstName: 'kyle',
    //             lastName: 'aoki'
    //         }] 
    //     }
    //     return [];
    // }

    getSearchResults = () => {
        axiosInstance.post("/user/search", this.props.match.params.searchInput ).then(
            response => {
                console.log(response);
                const searchResultsQuantity = response.data.length;
                this.setState({
                    searchResults: response.data,
                    searchResultsQuantity: searchResultsQuantity
                });
        });
    }

    componentDidMount () {
        this.getSearchResults();
    }

    componentDidUpdate = (prevProps: any) => {
        if (this.props.match.params.searchInput !== prevProps.match.params.searchInput ) {
            this.getSearchResults();
        };
    }

    moreButtonOnClickHandler = () => {
        const currentFirstResultIndex = this.state.currentFirstResultIndex + this.state.maxResultsDisplayed;
        const currentLastResultIndex = this.state.currentLastResultIndex + this.state.maxResultsDisplayed;
        this.setState({
            currentFirstResultIndex: currentFirstResultIndex,
            currentLastResultIndex: currentLastResultIndex
        });
    }

    backButtonOnClickHandler = () => {
        const currentFirstResultIndex = this.state.currentFirstResultIndex - this.state.maxResultsDisplayed;
        const currentLastResultIndex = this.state.currentLastResultIndex - this.state.maxResultsDisplayed;
        this.setState({
            currentFirstResultIndex: currentFirstResultIndex,
            currentLastResultIndex: currentLastResultIndex
        });
    }

    render() {
        
        const moreButton = this.state.currentLastResultIndex < this.state.searchResultsQuantity ? 
        <div className={classes.SearchButton} onClick={this.moreButtonOnClickHandler}>More</div> 
        : null;

        const backButton = this.state.currentLastResultIndex > this.state.maxResultsDisplayed ?
        <div className={classes.SearchButton} onClick={this.backButtonOnClickHandler}>Back</div>
        : null;

        let searchResultComponents = [];

        for (let i = this.state.currentFirstResultIndex; i < this.state.currentLastResultIndex; i++) {
            const result = this.state.searchResults[i];
            if (result) {
                searchResultComponents.push( <SearchResult {...result} /> );
            }
        }

        return (
            
            <div className={classes.Body}>
                <NavBar />
                <div className={classes.MAXWIDTH}>
                    <div className={classes.SearchPage}>
                        <div className={classes.SearchResults}>
                            {searchResultComponents}
                        </div>
                        <div className={classes.ButtonContainer}>
                            {backButton}
                            {moreButton}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        searchInput: state.searchInput
    }
}

export default withRouter(connect(mapStateToProps, null)(SearchPage));