const INITIAL_STATE = [
    {
        "_id": {
            "$oid": "383217312688a34efd898199"
        },
        "requester": {
            "$oid": "a22bcba0fbc61672285a2e59"
        },
        "requestee": {
            "$oid": "6b9b152211dcb30675659e05"
        },
        "status": "Requesting",
        "deleted": false,
        "createdAt": {
            "$date": "2018-11-29T09:36:10.175Z"
        },
        "updatedAt": {
            "$date": "2018-11-29T09:36:10.175Z"
        }
    }
];

export default friendRequestsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state
    }
};
