const INITIAL_STATE = {
    variants_share: [
        {
            status: "",
            progress: 0,
            user_rating: null,
            friend: null,
            book_condition: "",
            available_for_share: false,
            share_requested: false,
            recieved_at: "2018-12-11T07:25:34.225Z",
            _id: "",
            user: {
                avatar: {
                    _id: "",
                    name: "",
                    image: "",
                },
                _id: "a22bcba0fbc61672285a2e59",
                first_name: "Edd",
                last_name: "Lee"
            },
            book: {
                authors: [
                ],
                categories: [
                ],
                description: "",
                image: "",
                ratings: 0,
                industryIdentifiers: [],
                _id: "",
                google_id: "",
                title: ""
            }
        }
    ],
    loading: false,
    error: null
};

export default variantShareReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_VARIANTS_SHARE_REQUEST':
            return {...state, loading: true};

        case 'GET_VARIANTS_SHARE_SUCCESS':
            if (action.payload.error) {
                return {...state, error: action.payload.error, loading: false };
            } else {
                return {variants_share: action.payload, loading: false, error: null };
            }

        case 'GET_VARIANTS_SHARE_ERROR':
            return {...state, error: action.payload.error , loading: false};

        default:
            return state
    }
};
