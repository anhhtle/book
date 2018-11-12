const INITIAL_STATE = [
    {
        _id: "5bc399b6f6fc0cd8ae6fb122",
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
        user: {
            _id: "5bc39d60f6fc0cd8ae6fd6a4",
            first_name: "Anh",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            avatar: {
                _id: '1235sad',
                name: 'The Giver',
                avatar: {
                    _id: '1235sad',
                    name: 'The Giver',
                    image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                    quote: 'Test test'
                },
                quote: 'Test test'
            },
            address: {
                street: "1000 Welch Rd",
                city: "Palo Alto",
                state: "CA",
                zipcode: "95001",
                country: "USA"
            }
        },
        friend: {
        },
        available_for_share: true,
        book_condition: 'Used',
        status: "Reading",
        user_rating: 3,
        progress: 50,
    },
    {
        _id: "5bc399b6f6fc0cd8ae6fb123",
        book: {
            authors: [
                "J.K. Rowling"
            ],
            _id: "5bc39965f6fc0cd8ae6fad30",
            google_id: "wrOQLV6xB-wC",
            title: "Harry Potter and the Sorcerer's Stone",
            description: "\"Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'.\" Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin! Pottermore has now launched the Wizarding World Book Club. Visit Pottermore to sign up and join weekly Twitter discussions at WW Book Club.",
            image: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            ratings: 4.5
        },
        user: {
            _id: "5bc39d60f6fc0cd8ae6fd6a4",
            first_name: "Anh",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            avatar: {
                _id: '1235sad',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
            address: {
                "street": "1000 Welch Rd",
                "city": "Palo Alto",
                "state": "CA",
                "zipcode": "95001",
                "country": "USA"
            }
        },
        friend: {
        },
        available_for_share: false,
        book_condition: 'Like new',
        status: "Reading",
        user_rating: 4,
        progress: 70,
    },
    {
        _id: "5bc399b6f6fc0cd8ae6fbabc",
        book: {
            authors: [
                "J.K. Rowling"
            ],
            _id: "5bc39965f6fc0cd8ae6fad30",
            google_id: "wrOQLV6xB-wC",
            title: "Harry Potter and the Sorcerer's Stone",
            description: "\"Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'.\" Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin! Pottermore has now launched the Wizarding World Book Club. Visit Pottermore to sign up and join weekly Twitter discussions at WW Book Club.",
            image: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            ratings: 4.5
        },
        user: {
            _id: "5bc39d60f6fc0cd8ae6fd6a4",
            first_name: "Anh",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            avatar: {
                _id: '1235sad',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
            address: {
                "street": "1000 Welch Rd",
                "city": "Palo Alto",
                "state": "CA",
                "zipcode": "95001",
                "country": "USA"
            }
        },
        friend: {
        },
        available_for_share: false,
        book_condition: 'Fair',
        status: "Not started",
        user_rating: 0,
        progress: 0,
    },
    {
        _id: "5bc399b6f6fc0cd8ae6fbdef",
        book: {
            authors: [
                "J.K. Rowling"
            ],
            _id: "5bc39965f6fc0cd8ae6fad30",
            google_id: "wrOQLV6xB-wC",
            title: "Harry Potter and the Sorcerer's Stone",
            description: "\"Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'.\" Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin! Pottermore has now launched the Wizarding World Book Club. Visit Pottermore to sign up and join weekly Twitter discussions at WW Book Club.",
            image: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            ratings: 4.5
        },
        user: {
            _id: "5bc39d60f6fc0cd8ae6fd6a4",
            first_name: "Anh",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            avatar: {
                _id: '1235sad',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
            address: {
                "street": "1000 Welch Rd",
                "city": "Palo Alto",
                "state": "CA",
                "zipcode": "95001",
                "country": "USA"
            }
        },
        friend: {
            _id: "5bc39d60f6fc0cd8ae6fd6a4",
            first_name: "Anh",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: 'Jamie Lannister',
            job: `King's Guard`,
            avatar: {
                _id: '1235sad',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
            address: {
                "street": "1000 Welch Rd",
                "city": "Palo Alto",
                "state": "CA",
                "zipcode": "95001",
                "country": "USA"
            }
        },
        available_for_share: false,
        book_condition: 'Fair',
        status: "Recommended",
        user_rating: 0,
        progress: 0,
    },
];

export default variantReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_VARIANT_STATUS':
            // clone
            const newState = state.slice();

            // update clone
            newState[action.payload.index].status = action.payload.status;

            return newState

        case 'CHANGE_VARIANT_PROGRESS':
            // clone
            const newState2 = state.slice();

            // update clone
            newState2[action.payload.index].progress = action.payload.progress;

            return newState2

        default:
            return state
    }
};
