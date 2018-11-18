const INITIAL_STATE = [
    // my requests
    {
        _id: "5bc399b6f6fc0cd8ae6fb122",
        variant: {
            _id: "5bc399b6f6fc0cd8ae6fb122",
            book: {
                _id: "5bc39965f6fc0cd8ae6fad29",
                authors: [
                    "British Library"
                ],
                google_id: "ilc0DwAAQBAJ",
                title: "Harry Potter - A Journey Through A History of Magic",
                description: "The official companion book to the British Library exhibition and the ultimate gift for Harry Potter fans! As the British Library unveils a very special new exhibition in the UK, Harry Potter: A History of Magic, readers everywhere are invited on an enchanting journey through the Hogwarts curriculum, from Care of Magical Creatures and Herbology to Defense Against the Dark Arts, Astronomy, and more in this eBook uncovering thousands of years of magical history. Prepare to be amazed by artifacts released from the archives of the British Library, unseen sketches and manuscript pages from J.K. Rowling, and incredible illustrations from artist Jim Kay. Discover the truth behind the origins of the Philosopher’s Stone, monstrous dragons, and troublesome trolls; examine real-life wands and find out what actually makes a mandrake scream; pore over remarkable pages from da Vinci’s notebook; and discover the oldest atlas of the night sky. Carefully curated by the British Library and full of extraordinary treasures from all over the world, this is an unforgettable journey exploring the history of the magic at the heart of the Harry Potter stories.",
                image: "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                ratings: 3.5
            },
            book_condition: 'Fair',
        },
        owner: {
            _id: "5bc39d60f6fc0cd8ae6fd6a4",
            first_name: "Owner",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: '',
            job: null,
            avatar: {
                _id: '1235sad',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
        },
        requester: {
            _id: "5bb3ffe9f6fc0cd8aebdaa8e",
            first_name: "Requester",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: 'Jamie Lannister',
            job: `King's Guard`,
            avatar: {
                _id: 'asdfij32i0aosdnvjsk20h',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
            address: {
                street: "1000 Welch Rd",
                city: "Palo Alto",
                state: "CA",
                zipcode: "95001",
                country: "USA",
                additional_info: "Suite 2"
            }
        },
        status: "Requesting",
        hide_request: false,
        thanked_owner: false,
        date: new Date(2018, 9, 27, 21, 30)
    },
    {
        _id: "5bc399b6f6fc0cd8ae6fb123",
        variant: {
            _id: "5bc399b6f6fc0cd8ae6fb122",
            book: {
                _id: "5bc39965f6fc0cd8ae6fad29",
                authors: [
                    "British Library"
                ],
                google_id: "ilc0DwAAQBAJ",
                title: "Harry Potter - A Journey Through A History of Magic",
                description: "The official companion book to the British Library exhibition and the ultimate gift for Harry Potter fans! As the British Library unveils a very special new exhibition in the UK, Harry Potter: A History of Magic, readers everywhere are invited on an enchanting journey through the Hogwarts curriculum, from Care of Magical Creatures and Herbology to Defense Against the Dark Arts, Astronomy, and more in this eBook uncovering thousands of years of magical history. Prepare to be amazed by artifacts released from the archives of the British Library, unseen sketches and manuscript pages from J.K. Rowling, and incredible illustrations from artist Jim Kay. Discover the truth behind the origins of the Philosopher’s Stone, monstrous dragons, and troublesome trolls; examine real-life wands and find out what actually makes a mandrake scream; pore over remarkable pages from da Vinci’s notebook; and discover the oldest atlas of the night sky. Carefully curated by the British Library and full of extraordinary treasures from all over the world, this is an unforgettable journey exploring the history of the magic at the heart of the Harry Potter stories.",
                image: "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                ratings: 3.5
            },
            book_condition: 'Fair',
        },
        owner: {
            _id: "5bc39d60f6fc0cd8ae6fd6a4",
            first_name: "Owner",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: '',
            job: null,
            avatar: {
                _id: '1235sad',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
        },
        requester: {
            _id: "5bb3ffe9f6fc0cd8aebdaa8e",
            first_name: "Requester",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: 'Jamie Lannister',
            job: `King's Guard`,
            avatar: {
                _id: 'asdfij32i0aosdnvjsk20h',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
            address: {
                street: "1000 Welch Rd",
                city: "Palo Alto",
                state: "CA",
                zipcode: "95001",
                country: "USA",
                additional_info: "Suite 2"
            }
        },
        status: "Accepted",
        hide_request: false,
        thanked_owner: false,
        date: new Date(2018, 10, 1)
    },
    {
        _id: "5bc399b6f6fc0cd8ae6fb124",
        variant: {
            _id: "5bc399b6f6fc0cd8ae6fb122",
            book: {
                _id: "5bc39965f6fc0cd8ae6fad29",
                authors: [
                    "British Library"
                ],
                google_id: "ilc0DwAAQBAJ",
                title: "Harry Potter - A Journey Through A History of Magic",
                description: "The official companion book to the British Library exhibition and the ultimate gift for Harry Potter fans! As the British Library unveils a very special new exhibition in the UK, Harry Potter: A History of Magic, readers everywhere are invited on an enchanting journey through the Hogwarts curriculum, from Care of Magical Creatures and Herbology to Defense Against the Dark Arts, Astronomy, and more in this eBook uncovering thousands of years of magical history. Prepare to be amazed by artifacts released from the archives of the British Library, unseen sketches and manuscript pages from J.K. Rowling, and incredible illustrations from artist Jim Kay. Discover the truth behind the origins of the Philosopher’s Stone, monstrous dragons, and troublesome trolls; examine real-life wands and find out what actually makes a mandrake scream; pore over remarkable pages from da Vinci’s notebook; and discover the oldest atlas of the night sky. Carefully curated by the British Library and full of extraordinary treasures from all over the world, this is an unforgettable journey exploring the history of the magic at the heart of the Harry Potter stories.",
                image: "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                ratings: 3.5
            },
            book_condition: 'Fair',
        },
        owner: {
            _id: "5bc39d60f6fc0cd8ae6fd6a4",
            first_name: "Owner",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: '',
            job: null,
            avatar: {
                _id: '1235sad',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
        },
        requester: {
            _id: "5bb3ffe9f6fc0cd8aebdaa8e",
            first_name: "Requester",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: 'Jamie Lannister',
            job: `King's Guard`,
            avatar: {
                _id: 'asdfij32i0aosdnvjsk20h',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
            address: {
                street: "1000 Welch Rd",
                city: "Palo Alto",
                state: "CA",
                zipcode: "95001",
                country: "USA",
                additional_info: "Suite 2"
            }
        },
        status: "Sent",
        hide_request: false,
        thanked_owner: false,
        date: new Date(2018, 10, 3)
    },
    {
        _id: "5bc399b6f6fc0cd8ae6fb125",
        variant: {
            _id: "5bc399b6f6fc0cd8ae6fb122",
            book: {
                _id: "5bc39965f6fc0cd8ae6fad29",
                authors: [
                    "British Library"
                ],
                google_id: "ilc0DwAAQBAJ",
                title: "Harry Potter - A Journey Through A History of Magic",
                description: "The official companion book to the British Library exhibition and the ultimate gift for Harry Potter fans! As the British Library unveils a very special new exhibition in the UK, Harry Potter: A History of Magic, readers everywhere are invited on an enchanting journey through the Hogwarts curriculum, from Care of Magical Creatures and Herbology to Defense Against the Dark Arts, Astronomy, and more in this eBook uncovering thousands of years of magical history. Prepare to be amazed by artifacts released from the archives of the British Library, unseen sketches and manuscript pages from J.K. Rowling, and incredible illustrations from artist Jim Kay. Discover the truth behind the origins of the Philosopher’s Stone, monstrous dragons, and troublesome trolls; examine real-life wands and find out what actually makes a mandrake scream; pore over remarkable pages from da Vinci’s notebook; and discover the oldest atlas of the night sky. Carefully curated by the British Library and full of extraordinary treasures from all over the world, this is an unforgettable journey exploring the history of the magic at the heart of the Harry Potter stories.",
                image: "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                ratings: 3.5
            },
            book_condition: 'Fair',
        },
        owner: {
            _id: "5bc39d60f6fc0cd8ae6fd6a4",
            first_name: "Owner",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: '',
            job: null,
            avatar: {
                _id: '1235sad',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
        },
        requester: {
            _id: "5bb3ffe9f6fc0cd8aebdaa8e",
            first_name: "Requester",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: 'Jamie Lannister',
            job: `King's Guard`,
            avatar: {
                _id: 'asdfij32i0aosdnvjsk20h',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
            address: {
                street: "1000 Welch Rd",
                city: "Palo Alto",
                state: "CA",
                zipcode: "95001",
                country: "USA",
                additional_info: "Suite 2"
            }
        },
        status: "Recieved",
        hide_request: false,
        thanked_owner: false,
        date: new Date(2018, 10, 5)
    },
    {
        _id: "5bc399b6f6fc0cd8ae6fb126",
        variant: {
            _id: "5bc399b6f6fc0cd8ae6fb122",
            book: {
                _id: "5bc39965f6fc0cd8ae6fad29",
                authors: [
                    "British Library"
                ],
                google_id: "ilc0DwAAQBAJ",
                title: "Harry Potter - A Journey Through A History of Magic",
                description: "The official companion book to the British Library exhibition and the ultimate gift for Harry Potter fans! As the British Library unveils a very special new exhibition in the UK, Harry Potter: A History of Magic, readers everywhere are invited on an enchanting journey through the Hogwarts curriculum, from Care of Magical Creatures and Herbology to Defense Against the Dark Arts, Astronomy, and more in this eBook uncovering thousands of years of magical history. Prepare to be amazed by artifacts released from the archives of the British Library, unseen sketches and manuscript pages from J.K. Rowling, and incredible illustrations from artist Jim Kay. Discover the truth behind the origins of the Philosopher’s Stone, monstrous dragons, and troublesome trolls; examine real-life wands and find out what actually makes a mandrake scream; pore over remarkable pages from da Vinci’s notebook; and discover the oldest atlas of the night sky. Carefully curated by the British Library and full of extraordinary treasures from all over the world, this is an unforgettable journey exploring the history of the magic at the heart of the Harry Potter stories.",
                image: "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                ratings: 3.5
            },
            book_condition: 'Fair',
        },
        owner: {
            _id: "5bc39d60f6fc0cd8ae6fd6a4",
            first_name: "Owner",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: '',
            job: null,
            avatar: {
                _id: '1235sad',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
        },
        requester: {
            _id: "5bb3ffe9f6fc0cd8aebdaa8e",
            first_name: "Requester",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: 'Jamie Lannister',
            job: `King's Guard`,
            avatar: {
                _id: 'asdfij32i0aosdnvjsk20h',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
            address: {
                street: "1000 Welch Rd",
                city: "Palo Alto",
                state: "CA",
                zipcode: "95001",
                country: "USA",
                additional_info: "Suite 2"
            }
        },
        status: "Recieved",
        hide_request: false,
        thanked_owner: true,
        date: new Date(2018, 10, 5)
    },
    {
        _id: "5bc399b6f6fc0cd8ae6fb127",
        variant: {
            _id: "5bc399b6f6fc0cd8ae6fb122",
            book: {
                _id: "5bc39965f6fc0cd8ae6fad29",
                authors: [
                    "British Library"
                ],
                google_id: "ilc0DwAAQBAJ",
                title: "Harry Potter - A Journey Through A History of Magic",
                description: "The official companion book to the British Library exhibition and the ultimate gift for Harry Potter fans! As the British Library unveils a very special new exhibition in the UK, Harry Potter: A History of Magic, readers everywhere are invited on an enchanting journey through the Hogwarts curriculum, from Care of Magical Creatures and Herbology to Defense Against the Dark Arts, Astronomy, and more in this eBook uncovering thousands of years of magical history. Prepare to be amazed by artifacts released from the archives of the British Library, unseen sketches and manuscript pages from J.K. Rowling, and incredible illustrations from artist Jim Kay. Discover the truth behind the origins of the Philosopher’s Stone, monstrous dragons, and troublesome trolls; examine real-life wands and find out what actually makes a mandrake scream; pore over remarkable pages from da Vinci’s notebook; and discover the oldest atlas of the night sky. Carefully curated by the British Library and full of extraordinary treasures from all over the world, this is an unforgettable journey exploring the history of the magic at the heart of the Harry Potter stories.",
                image: "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                ratings: 3.5
            },
            book_condition: 'Fair',
        },
        owner: {
            _id: "5bc39d60f6fc0cd8ae6fd6a4",
            first_name: "Owner",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: '',
            job: null,
            avatar: {
                _id: '1235sad',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
        },
        requester: {
            _id: "5bb3ffe9f6fc0cd8aebdaa8e",
            first_name: "Requester",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: 'Jamie Lannister',
            job: `King's Guard`,
            avatar: {
                _id: 'asdfij32i0aosdnvjsk20h',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
            address: {
                street: "1000 Welch Rd",
                city: "Palo Alto",
                state: "CA",
                zipcode: "95001",
                country: "USA",
                additional_info: "Suite 2"
            }
        },
        status: "Cancelled",
        hide_request: false,
        thanked_owner: false,
        date: new Date(2018, 10, 15)
    },
    // community requests
    {
        _id: "5bc399b6f6fc0cd8ae6fb122",
        variant: {
            _id: "5bc399b6f6fc0cd8ae6fb122",
            book: {
                _id: "5bc39965f6fc0cd8ae6fad29",
                authors: [
                    "British Library"
                ],
                google_id: "ilc0DwAAQBAJ",
                title: "Harry Potter - A Journey Through A History of Magic",
                description: "The official companion book to the British Library exhibition and the ultimate gift for Harry Potter fans! As the British Library unveils a very special new exhibition in the UK, Harry Potter: A History of Magic, readers everywhere are invited on an enchanting journey through the Hogwarts curriculum, from Care of Magical Creatures and Herbology to Defense Against the Dark Arts, Astronomy, and more in this eBook uncovering thousands of years of magical history. Prepare to be amazed by artifacts released from the archives of the British Library, unseen sketches and manuscript pages from J.K. Rowling, and incredible illustrations from artist Jim Kay. Discover the truth behind the origins of the Philosopher’s Stone, monstrous dragons, and troublesome trolls; examine real-life wands and find out what actually makes a mandrake scream; pore over remarkable pages from da Vinci’s notebook; and discover the oldest atlas of the night sky. Carefully curated by the British Library and full of extraordinary treasures from all over the world, this is an unforgettable journey exploring the history of the magic at the heart of the Harry Potter stories.",
                image: "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                ratings: 3.5
            },
            book_condition: 'Fair',
        },
        owner: {
            _id: "5bb3ffe9f6fc0cd8aebdaa8e",
            first_name: "Owner",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: '',
            job: null,
            avatar: {
                _id: '1235sad',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
        },
        requester: {
            _id: "5bb3ffe9f6fc0cd8aebda111",
            first_name: "Requester",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: 'Jamie Lannister',
            job: `King's Guard`,
            avatar: {
                _id: 'asdfij32i0aosdnvjsk20h',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
            address: {
                street: "1000 Welch Rd",
                city: "Palo Alto",
                state: "CA",
                zipcode: "95001",
                country: "USA",
                additional_info: "Suite 2"
            }
        },
        status: "Requesting",
        hide_request: false,
        thanked_owner: false,
        date: new Date(2018, 9, 27, 21, 30)
    },
    {
        _id: "5bc399b6f6fc0cd8ae6fb123",
        variant: {
            _id: "5bc399b6f6fc0cd8ae6fb122",
            book: {
                _id: "5bc39965f6fc0cd8ae6fad29",
                authors: [
                    "British Library"
                ],
                google_id: "ilc0DwAAQBAJ",
                title: "Harry Potter - A Journey Through A History of Magic",
                description: "The official companion book to the British Library exhibition and the ultimate gift for Harry Potter fans! As the British Library unveils a very special new exhibition in the UK, Harry Potter: A History of Magic, readers everywhere are invited on an enchanting journey through the Hogwarts curriculum, from Care of Magical Creatures and Herbology to Defense Against the Dark Arts, Astronomy, and more in this eBook uncovering thousands of years of magical history. Prepare to be amazed by artifacts released from the archives of the British Library, unseen sketches and manuscript pages from J.K. Rowling, and incredible illustrations from artist Jim Kay. Discover the truth behind the origins of the Philosopher’s Stone, monstrous dragons, and troublesome trolls; examine real-life wands and find out what actually makes a mandrake scream; pore over remarkable pages from da Vinci’s notebook; and discover the oldest atlas of the night sky. Carefully curated by the British Library and full of extraordinary treasures from all over the world, this is an unforgettable journey exploring the history of the magic at the heart of the Harry Potter stories.",
                image: "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                ratings: 3.5
            },
            book_condition: 'Fair',
        },
        owner: {
            _id: "5bb3ffe9f6fc0cd8aebdaa8e",
            first_name: "Owner",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: '',
            job: null,
            avatar: {
                _id: '1235sad',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
        },
        requester: {
            _id: "5bb3ffe9f6fc0cd8aebda112",
            first_name: "Requester",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: 'Jamie Lannister',
            job: `King's Guard`,
            avatar: {
                _id: 'asdfij32i0aosdnvjsk20h',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
            address: {
                street: "1000 Welch Rd",
                city: "Palo Alto",
                state: "CA",
                zipcode: "95001",
                country: "USA",
                additional_info: "Suite 2"
            }
        },
        status: "Accepted",
        hide_request: false,
        thanked_owner: false,
        date: new Date(2018, 10, 1)
    },
    {
        _id: "5bc399b6f6fc0cd8ae6fb124",
        variant: {
            _id: "5bc399b6f6fc0cd8ae6fb122",
            book: {
                _id: "5bc39965f6fc0cd8ae6fad29",
                authors: [
                    "British Library"
                ],
                google_id: "ilc0DwAAQBAJ",
                title: "Harry Potter - A Journey Through A History of Magic",
                description: "The official companion book to the British Library exhibition and the ultimate gift for Harry Potter fans! As the British Library unveils a very special new exhibition in the UK, Harry Potter: A History of Magic, readers everywhere are invited on an enchanting journey through the Hogwarts curriculum, from Care of Magical Creatures and Herbology to Defense Against the Dark Arts, Astronomy, and more in this eBook uncovering thousands of years of magical history. Prepare to be amazed by artifacts released from the archives of the British Library, unseen sketches and manuscript pages from J.K. Rowling, and incredible illustrations from artist Jim Kay. Discover the truth behind the origins of the Philosopher’s Stone, monstrous dragons, and troublesome trolls; examine real-life wands and find out what actually makes a mandrake scream; pore over remarkable pages from da Vinci’s notebook; and discover the oldest atlas of the night sky. Carefully curated by the British Library and full of extraordinary treasures from all over the world, this is an unforgettable journey exploring the history of the magic at the heart of the Harry Potter stories.",
                image: "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                ratings: 3.5
            },
            book_condition: 'Fair',
        },
        owner: {
            _id: "5bb3ffe9f6fc0cd8aebdaa8e",
            first_name: "Owner",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: '',
            job: null,
            avatar: {
                _id: '1235sad',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
        },
        requester: {
            _id: "5bb3ffe9f6fc0cd8aebda113",
            first_name: "Requester",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: 'Jamie Lannister',
            job: `King's Guard`,
            avatar: {
                _id: 'asdfij32i0aosdnvjsk20h',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
            address: {
                street: "1000 Welch Rd",
                city: "Palo Alto",
                state: "CA",
                zipcode: "95001",
                country: "USA",
                additional_info: "Suite 2"
            }
        },
        status: "Sent",
        hide_request: false,
        thanked_owner: false,
        date: new Date(2018, 10, 3)
    },
    {
        _id: "5bc399b6f6fc0cd8ae6fb125",
        variant: {
            _id: "5bc399b6f6fc0cd8ae6fb122",
            book: {
                _id: "5bc39965f6fc0cd8ae6fad29",
                authors: [
                    "British Library"
                ],
                google_id: "ilc0DwAAQBAJ",
                title: "Harry Potter - A Journey Through A History of Magic",
                description: "The official companion book to the British Library exhibition and the ultimate gift for Harry Potter fans! As the British Library unveils a very special new exhibition in the UK, Harry Potter: A History of Magic, readers everywhere are invited on an enchanting journey through the Hogwarts curriculum, from Care of Magical Creatures and Herbology to Defense Against the Dark Arts, Astronomy, and more in this eBook uncovering thousands of years of magical history. Prepare to be amazed by artifacts released from the archives of the British Library, unseen sketches and manuscript pages from J.K. Rowling, and incredible illustrations from artist Jim Kay. Discover the truth behind the origins of the Philosopher’s Stone, monstrous dragons, and troublesome trolls; examine real-life wands and find out what actually makes a mandrake scream; pore over remarkable pages from da Vinci’s notebook; and discover the oldest atlas of the night sky. Carefully curated by the British Library and full of extraordinary treasures from all over the world, this is an unforgettable journey exploring the history of the magic at the heart of the Harry Potter stories.",
                image: "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                ratings: 3.5
            },
            book_condition: 'Fair',
        },
        owner: {
            _id: "5bb3ffe9f6fc0cd8aebdaa8e",
            first_name: "Owner",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: '',
            job: null,
            avatar: {
                _id: '1235sad',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
        },
        requester: {
            _id: "5bb3ffe9f6fc0cd8aebda114",
            first_name: "Requester",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: 'Jamie Lannister',
            job: `King's Guard`,
            avatar: {
                _id: 'asdfij32i0aosdnvjsk20h',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
            address: {
                street: "1000 Welch Rd",
                city: "Palo Alto",
                state: "CA",
                zipcode: "95001",
                country: "USA",
                additional_info: "Suite 2"
            }
        },
        status: "Recieved",
        hide_request: false,
        thanked_owner: false,
        date: new Date(2018, 10, 5)
    },
    {
        _id: "5bc399b6f6fc0cd8ae6fb126",
        variant: {
            _id: "5bc399b6f6fc0cd8ae6fb122",
            book: {
                _id: "5bc39965f6fc0cd8ae6fad29",
                authors: [
                    "British Library"
                ],
                google_id: "ilc0DwAAQBAJ",
                title: "Harry Potter - A Journey Through A History of Magic",
                description: "The official companion book to the British Library exhibition and the ultimate gift for Harry Potter fans! As the British Library unveils a very special new exhibition in the UK, Harry Potter: A History of Magic, readers everywhere are invited on an enchanting journey through the Hogwarts curriculum, from Care of Magical Creatures and Herbology to Defense Against the Dark Arts, Astronomy, and more in this eBook uncovering thousands of years of magical history. Prepare to be amazed by artifacts released from the archives of the British Library, unseen sketches and manuscript pages from J.K. Rowling, and incredible illustrations from artist Jim Kay. Discover the truth behind the origins of the Philosopher’s Stone, monstrous dragons, and troublesome trolls; examine real-life wands and find out what actually makes a mandrake scream; pore over remarkable pages from da Vinci’s notebook; and discover the oldest atlas of the night sky. Carefully curated by the British Library and full of extraordinary treasures from all over the world, this is an unforgettable journey exploring the history of the magic at the heart of the Harry Potter stories.",
                image: "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                ratings: 3.5
            },
            book_condition: 'Fair',
        },
        owner: {
            _id: "5bb3ffe9f6fc0cd8aebdaa8e",
            first_name: "Owner",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: '',
            job: null,
            avatar: {
                _id: '1235sad',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
        },
        requester: {
            _id: "5bb3ffe9f6fc0cd8aebda115",
            first_name: "Requester",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: 'Jamie Lannister',
            job: `King's Guard`,
            avatar: {
                _id: 'asdfij32i0aosdnvjsk20h',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
            address: {
                street: "1000 Welch Rd",
                city: "Palo Alto",
                state: "CA",
                zipcode: "95001",
                country: "USA",
                additional_info: "Suite 2"
            }
        },
        status: "Recieved",
        hide_request: false,
        thanked_owner: true,
        date: new Date(2018, 10, 5)
    },
    {
        _id: "5bc399b6f6fc0cd8ae6fb127",
        variant: {
            _id: "5bc399b6f6fc0cd8ae6fb122",
            book: {
                _id: "5bc39965f6fc0cd8ae6fad29",
                authors: [
                    "British Library"
                ],
                google_id: "ilc0DwAAQBAJ",
                title: "Harry Potter - A Journey Through A History of Magic",
                description: "The official companion book to the British Library exhibition and the ultimate gift for Harry Potter fans! As the British Library unveils a very special new exhibition in the UK, Harry Potter: A History of Magic, readers everywhere are invited on an enchanting journey through the Hogwarts curriculum, from Care of Magical Creatures and Herbology to Defense Against the Dark Arts, Astronomy, and more in this eBook uncovering thousands of years of magical history. Prepare to be amazed by artifacts released from the archives of the British Library, unseen sketches and manuscript pages from J.K. Rowling, and incredible illustrations from artist Jim Kay. Discover the truth behind the origins of the Philosopher’s Stone, monstrous dragons, and troublesome trolls; examine real-life wands and find out what actually makes a mandrake scream; pore over remarkable pages from da Vinci’s notebook; and discover the oldest atlas of the night sky. Carefully curated by the British Library and full of extraordinary treasures from all over the world, this is an unforgettable journey exploring the history of the magic at the heart of the Harry Potter stories.",
                image: "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                ratings: 3.5
            },
            book_condition: 'Fair',
        },
        owner: {
            _id: "5bb3ffe9f6fc0cd8aebdaa8e",
            first_name: "Owner",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: '',
            job: null,
            avatar: {
                _id: '1235sad',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
        },
        requester: {
            _id: "5bb3ffe9f6fc0cd8aebda116",
            first_name: "Anh",
            last_name: "Le",
            email: "ahtle@stanford.edu",
            alias: 'Jamie Lannister',
            job: `King's Guard`,
            avatar: {
                _id: 'asdfij32i0aosdnvjsk20h',
                name: 'The Giver',
                image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071",
                quote: 'Test test'
            },
            address: {
                street: "1000 Welch Rd",
                city: "Palo Alto",
                state: "CA",
                zipcode: "95001",
                country: "USA",
                additional_info: "Suite 2"
            }
        },
        status: "Cancelled",
        hide_request: false,
        thanked_owner: false,
        date: new Date(2018, 10, 15)
    },
];

export default requestsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state
    }
};
