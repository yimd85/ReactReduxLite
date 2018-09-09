

// state arguement is not application state. 
// state IS limited to the reducer
export default (state = null, action) => {
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }
    
    return state;
}

