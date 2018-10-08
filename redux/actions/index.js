export const changeBookStatus = (index, status) => (
    {
        type: 'CHANGE_BOOK_STATUS',
        payload: {index, status},
    }
);