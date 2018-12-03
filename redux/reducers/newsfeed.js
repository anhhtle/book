const INITIAL_STATE = [
    {
        type: 'Friend: new book',
        book: {
            authors: [
                "British Library"
            ],
            _id: "5bc39965f6fc0cd8ae6fad29",
            google_id: "ilc0DwAAQBAJ",
            title: "Harry Potter - A Journey Through A History of Magic",
            description: "The official companion book to the British Library exhibition and the ultimate gift for Harry Potter fans! As the British Library unveils a very special new exhibition in the UK, Harry Potter: A History of Magic, readers everywhere are invited on an enchanting journey through the Hogwarts curriculum, from Care of Magical Creatures and Herbology to Defense Against the Dark Arts, Astronomy, and more in this eBook uncovering thousands of years of magical history. Prepare to be amazed by artifacts released from the archives of the British Library, unseen sketches and manuscript pages from J.K. Rowling, and incredible illustrations from artist Jim Kay. Discover the truth behind the origins of the Philosopher’s Stone, monstrous dragons, and troublesome trolls; examine real-life wands and find out what actually makes a mandrake scream; pore over remarkable pages from da Vinci’s notebook; and discover the oldest atlas of the night sky. Carefully curated by the British Library and full of extraordinary treasures from all over the world, this is an unforgettable journey exploring the history of the magic at the heart of the Harry Potter stories.",
            image: "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            ratings: 3.5
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
        type: 'Friend: reading',
        book: {
            authors: [
                "British Library"
            ],
            _id: "5bc39965f6fc0cd8ae6fad29",
            google_id: "ilc0DwAAQBAJ",
            title: "Harry Potter - A Journey Through A History of Magic",
            description: "The official companion book to the British Library exhibition and the ultimate gift for Harry Potter fans! As the British Library unveils a very special new exhibition in the UK, Harry Potter: A History of Magic, readers everywhere are invited on an enchanting journey through the Hogwarts curriculum, from Care of Magical Creatures and Herbology to Defense Against the Dark Arts, Astronomy, and more in this eBook uncovering thousands of years of magical history. Prepare to be amazed by artifacts released from the archives of the British Library, unseen sketches and manuscript pages from J.K. Rowling, and incredible illustrations from artist Jim Kay. Discover the truth behind the origins of the Philosopher’s Stone, monstrous dragons, and troublesome trolls; examine real-life wands and find out what actually makes a mandrake scream; pore over remarkable pages from da Vinci’s notebook; and discover the oldest atlas of the night sky. Carefully curated by the British Library and full of extraordinary treasures from all over the world, this is an unforgettable journey exploring the history of the magic at the heart of the Harry Potter stories.",
            image: "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            ratings: 3.5
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
        date: new Date(2018, 9, 1, 21, 30)
    },
    {
        type: 'Friend: sharing book',
        book: {
            authors: [
                "British Library"
            ],
            _id: "5bc39965f6fc0cd8ae6fad29",
            google_id: "ilc0DwAAQBAJ",
            title: "Harry Potter - A Journey Through A History of Magic",
            description: "The official companion book to the British Library exhibition and the ultimate gift for Harry Potter fans! As the British Library unveils a very special new exhibition in the UK, Harry Potter: A History of Magic, readers everywhere are invited on an enchanting journey through the Hogwarts curriculum, from Care of Magical Creatures and Herbology to Defense Against the Dark Arts, Astronomy, and more in this eBook uncovering thousands of years of magical history. Prepare to be amazed by artifacts released from the archives of the British Library, unseen sketches and manuscript pages from J.K. Rowling, and incredible illustrations from artist Jim Kay. Discover the truth behind the origins of the Philosopher’s Stone, monstrous dragons, and troublesome trolls; examine real-life wands and find out what actually makes a mandrake scream; pore over remarkable pages from da Vinci’s notebook; and discover the oldest atlas of the night sky. Carefully curated by the British Library and full of extraordinary treasures from all over the world, this is an unforgettable journey exploring the history of the magic at the heart of the Harry Potter stories.",
            image: "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            ratings: 3.5
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
        date: new Date(2018, 8, 28, 21, 30)
    },
    {
        type: 'Friend: received book',
        book: {
            authors: [
                "British Library"
            ],
            _id: "5bc39965f6fc0cd8ae6fad29",
            google_id: "ilc0DwAAQBAJ",
            title: "Harry Potter - A Journey Through A History of Magic",
            description: "The official companion book to the British Library exhibition and the ultimate gift for Harry Potter fans! As the British Library unveils a very special new exhibition in the UK, Harry Potter: A History of Magic, readers everywhere are invited on an enchanting journey through the Hogwarts curriculum, from Care of Magical Creatures and Herbology to Defense Against the Dark Arts, Astronomy, and more in this eBook uncovering thousands of years of magical history. Prepare to be amazed by artifacts released from the archives of the British Library, unseen sketches and manuscript pages from J.K. Rowling, and incredible illustrations from artist Jim Kay. Discover the truth behind the origins of the Philosopher’s Stone, monstrous dragons, and troublesome trolls; examine real-life wands and find out what actually makes a mandrake scream; pore over remarkable pages from da Vinci’s notebook; and discover the oldest atlas of the night sky. Carefully curated by the British Library and full of extraordinary treasures from all over the world, this is an unforgettable journey exploring the history of the magic at the heart of the Harry Potter stories.",
            image: "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            ratings: 3.5
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
        community_member: {
            _id: "5bb3ffe9f6fc0cd8aebdaa88",
            first_name: "John",
            last_name: "Doe",
            email: "john.doe.le@gmail.com",
            alias: 'Atticus Finch',
            job: 'Lawyer',
            image: "https://timedotcom.files.wordpress.com/2014/07/301386_full1.jpg",
            address: {
                street: "1000 ABC Rd",
                city: "Star City",
                state: "New York",
                zipcode: "123456",
                country: "USA",
                additional_info: "Suite 1/2"
            }
        },
        date: new Date(2018, 8, 28, 21, 30)
    },
    {
        type: 'Friend: avatar',
        book: {
        },
        avatar: {
            _id: 'asdfij32i0aosdnvjsk20h',
            name: 'The Giver',
            image: 'https://i.pinimg.com/originals/9a/d7/95/9ad79563b7fc172d847a0ddfbd9b2fcc.jpg',
            quote: `The worst part of holding the memories is not the pain. It's the loneliness of it. Memories need to be shared`
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
        date: new Date(2018, 8, 28, 21, 30)
    }, 
];

export default newsfeedReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // get newsfeeds
        case 'GET_NEWSFEEDS_REQUEST':
            return {...state, loading: true};

        case 'GET_NEWSFEEDS_SUCCESS':
            return {...action.payload.newsfeeds, error: null, loading: false};

        case 'GET_NEWSFEEDS_ERROR':
            return {...state, error: action.payload.error , loading: false};

        default:
            return state
    }
};
