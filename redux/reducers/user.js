const INITIAL_STATE = {
    _id: "5bb3ffe9f6fc0cd8aebdaa8e",
    first_name: "Anh",
    last_name: "Le",
    email: "ahtle@stanford.edu",
    alias: 'Jamie Lannister',
    job: `King's Guard`,
    image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
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
