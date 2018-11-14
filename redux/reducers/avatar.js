const INITIAL_STATE = [
    {
        _id: 'asdfij32i0aosdnvjsk20h',
        name: 'The Giver',
        image: 'https://i.pinimg.com/originals/9a/d7/95/9ad79563b7fc172d847a0ddfbd9b2fcc.jpg',
        quote: `The worst part of holding the memories is not the pain. It's the loneliness of it. Memories need to be shared`,
        lock: 'Give one book to community',
        unlocked: 'Gave one book to community'
    },
    {
        _id: 'asdfij32i0aosdnvjsk20f',
        name: 'Avatar 2',
        image: 'https://i.pinimg.com/originals/9a/d7/95/9ad79563b7fc172d847a0ddfbd9b2fcc.jpg',
        quote: `The worst part of holding the memories is not the pain. It's the loneliness of it. Memories need to be shared`,
        lock: 'Recommend one book to a friend',
        unlocked: 'Recommended one book to a friend',
    },
    {
        _id: 'asdfej32i0aosdnvjsk21g',
        name: 'The Fellowship',
        image: 'http://gortoncenter.org/wp-content/uploads/2018/03/LordOfTheRings.jpg',
        quote: `The worst part of holding the memories is not the pain. It's the loneliness of it. Memories need to be shared`,
        lock: 'Add seven friends',
        unlocked: 'Added seven friends'
    },
    {
        _id: 'asdfej32i0aosdnvjsk21t',
        name: 'Avatar 4',
        image: 'http://gortoncenter.org/wp-content/uploads/2018/03/LordOfTheRings.jpg',
        quote: `The worst part of holding the memories is not the pain. It's the loneliness of it. Memories need to be shared`,
        lock: 'Request one book from community',
        unlocked: 'Requested one book from community'
    }
];

export default avatarReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state
    }
};
