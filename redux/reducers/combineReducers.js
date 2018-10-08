import { combineReducers } from 'redux';

const INITIAL_STATE = {
    "_id": "5bb3ffe9f6fc0cd8aebdaa8e",
    "first_name": "Anh",
    "last_name": "Le",
    "email": "ahtle@stanford.edu",
    "address": {
        "street": "1000 Welch Rd",
        "city": "Palo Alto",
        "state": "CA",
        "zipcode": "95001",
        "country": "USA"
    },
    "books": [
        {
            "_id": "5bb40665f6fc0cd8aebe0265",
            "google_id": "ilc0DwAAQBAJ",
            "book_id": "1",
            "title": "Harry Potter - A Journey Through A History of Magic",
            "authors": [
                "British Library"
            ],
            "image": "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "ratings": "3.5",
            "available_for_share": false
        },
        {
            "_id": "5bb40665f6fc0cd8aebe0266",
            "book_id": "2",
            "google_id": "wrOQLV6xB-wC",
            "authors": [
                "J.K. Rowling"
            ],
            "title": "Harry Potter and the Sorcerer's Stone",
            "image": "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "ratings": "4.5",
            "available_for_share": true
        },
        {
            "_id": "5bb40665f6fc0cd8aebe0267",
            "google_id": "ilc0DwAAQBAJ",
            "book_id": "3",
            "title": "Harry Potter - A Journey Through A History of Magic",
            "authors": [
                "British Library"
            ],
            "image": "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "ratings": "3.5",
            "available_for_share": false
        },
        {
            "_id": "5bb40665f6fc0cd8aebe0268",
            "book_id": "4",
            "google_id": "wrOQLV6xB-wC",
            "authors": [
                "J.K. Rowling"
            ],
            "title": "Harry Potter and the Sorcerer's Stone",
            "image": "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "ratings": "4.5",
            "available_for_share": true
        }
    ],
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
};

export default combineReducers({
    user: userReducer,
});