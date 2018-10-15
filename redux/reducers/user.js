const INITIAL_STATE = {
    _id: "5bb3ffe9f6fc0cd8aebdaa8e",
    first_name: "Anh",
    last_name: "Le",
    email: "ahtle@stanford.edu",
    address: {
        street: "1000 Welch Rd",
        city: "Palo Alto",
        state: "CA",
        zipcode: "95001",
        country: "USA"
    }
};

export default userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_BOOK_STATUS':
            const { books } = state;

            // clone and update
            const booksClone = books.slice();
            booksClone[action.payload.index].status = action.payload.status;
            
            const newState = {...state, books: booksClone};
            return newState;

        default:
            return state
    }
};
