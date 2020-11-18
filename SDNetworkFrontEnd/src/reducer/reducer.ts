
const getUserObject = () => {
    let JSONString = localStorage.getItem('userObject')
    if (JSONString != null) {
        return JSON.parse(JSONString);
    } else {
        return {};
    }
}

let initialState: any = {
    authenticated: true,
    searchInput: '',
    s3BaseURL_ProfilePicture: "https://images-project2-kyle.s3-us-west-1.amazonaws.com/profile-picture/",
    s3BaseURL_Post: "https://images-project2-kyle.s3-us-west-1.amazonaws.com/posts/",
    userObject: getUserObject()
}

// Method to make a deep copy of state. Always use before manipulating state.
const deepCopy = (stateToBeCopied: any) => {
    let stateCopy = JSON.parse(JSON.stringify(stateToBeCopied));
    return stateCopy;
}

const reducer = (state = initialState, action: any) => {
    if (action.type === 'AUTHENTICATE_USER'){
        let stateCopy = deepCopy(state);
        stateCopy.authenticated = true;
        localStorage.setItem('userObject', JSON.stringify(action.payload.userObject));
        stateCopy.userObject = action.payload.userObject;
        return stateCopy;
    }
    if (action.type === 'UNAUTHENTICATE_USER'){
        let stateCopy = deepCopy(state);
        stateCopy.authenticated = false;
        localStorage.removeItem('userObject');
        stateCopy.userObject = null;
        return stateCopy;
    }
    if (action.type === 'SET_SEARCH_INPUT'){
        let stateCopy = deepCopy(state);
        stateCopy.searchInput = action.payload.searchInput;
        return stateCopy
    }
    if (action.type === 'SET_GLOBAL_USER_OBJECT') {
        let stateCopy = deepCopy(state);
        stateCopy.userObject = action.payload.userObject;
        return stateCopy;
    }
    return state;
}

export default reducer;
