import { combineReducers } from 'redux';

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
    },
    books: [
        {
            _id: "5bb40665f6fc0cd8aebe0265",
            google_id: "ilc0DwAAQBAJ",
            book_id: "1",
            title: "Harry Potter - A Journey Through A History of Magic",
            authors: [
                "British Library"
            ],
            image: "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            ratings: "3.5",
            available_for_share: true,
            status: "Reading",
            progress: 50,
        },
        {
            _id: "5bb40665f6fc0cd8aebe0266",
            book_id: "2",
            google_id: "wrOQLV6xB-wC",
            authors: [
                "J.K. Rowling"
            ],
            title: "Harry Potter and the Sorcerer's Stone",
            image: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            ratings: "4.5",
            available_for_share: false,
            status: "Read",
            progress: 100,
        },
        {
            _id: "5bb40665f6fc0cd8aebe0267",
            google_id: "hXNvadj27ekC",
            book_id: "3",
            title: "A Game of Thrones",
            authors: [
                "George R.R. Martin"
            ],
            image: "http://books.google.com/books/content?id=hXNvadj27ekC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            ratings: "4",
            available_for_share: false,
            status: "Read",
            progress: 100,
        },
        {
            _id: "5bb40665f6fc0cd8aebe0268",
            book_id: "4",
            google_id: "8VgNAAAAYAAJ",
            authors: [
                "Edward Thurston Hiscox"
            ],
            title: "The Star Book for Ministers",
            image: "http://books.google.com/books/content?id=8VgNAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            ratings: "4.5",
            available_for_share: true,
            status: "Reading",
            progress: 90,
        },
        {
            _id: "5bb40665f6fc0cd8aebe0269",
            book_id: "5",
            google_id: "uI7dAwAAQBAJ",
            authors: [
                "C. A. Taylor"
            ],
            title: "Inside HBO's Game of Thrones",
            image: "http://books.google.com/books/content?id=uI7dAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            ratings: "3.5",
            available_for_share: true,
            status: "Reading",
            progress: 40,
        }
    ],
};

const userReducer = (state = INITIAL_STATE, action) => {
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

export default combineReducers({
    user: userReducer,
});