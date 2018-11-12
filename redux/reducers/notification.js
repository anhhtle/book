const INITIAL_STATE = [
    {
        type: 'Recommendation',
        book: {
            title: 'The Lord of the Rings'
        },
        friend: {
            _id: "5bb3ffe9f6fc0cd8aebdaa88",
            first_name: "Eddie",
            last_name: "Lee",
            email: "eddie.le@stanford.edu",
            alias: 'Atticus Finch',
            job: 'Lawyer',
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Atticus_Finch.png/250px-Atticus_Finch.png",
            address: {
                street: "1000 ABC Rd",
                city: "Star City",
                state: "New York",
                zipcode: "123456",
                country: "USA",
                additional_info: "Suite 1/2"
            }
        },
        date: new Date(2018, 9, 27, 21, 30)
    },
    {
        type: 'Avatar',
        book: {
        },
        friend: {
        },
        avatar: {
            _id: '12353w',
            name: 'The Fellowship',
            image: 'https://i.pinimg.com/originals/9a/d7/95/9ad79563b7fc172d847a0ddfbd9b2fcc.jpg'
        },
        date: new Date(2018, 9, 4)
    },
    {
        type: 'New friend',
        book: {
        },
        friend: {
            _id: "5bb3ffe9f6fc0cd8aebdaa88",
            first_name: "Eddie",
            last_name: "Lee",
            email: "eddie.le@stanford.edu",
            alias: 'Atticus Finch',
            job: 'Lawyer',
            avatar: {
                _id: '1235sad',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
            address: {
                street: "1000 ABC Rd",
                city: "Star City",
                state: "New York",
                zipcode: "123456",
                country: "USA",
                additional_info: "Suite 1/2"
            }
        },
        date: new Date(2018, 9, 15)
    },
    {
        type: 'Friend request',
        book: {
        },
        friend: {
            _id: "5bb3ffe9f6fc0cd8aebdaa88",
            first_name: "Eddie",
            last_name: "Lee",
            email: "eddie.le@stanford.edu",
            alias: 'Atticus Finch',
            job: 'Lawyer',
            avatar: {
                _id: '1235sad',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
            address: {
                street: "1000 ABC Rd",
                city: "Star City",
                state: "New York",
                zipcode: "123456",
                country: "USA",
                additional_info: "Suite 1/2"
            }
        },
        date: new Date(2018, 9, 15)
    },
];

export default notificationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state
    }
};
