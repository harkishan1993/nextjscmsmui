import { createSlice } from "@reduxjs/toolkit"
import axios from "../../_utils/axios";
const initialState = {
    user: {},
    sideBar: {
        open: false,
        type: "CONTACT", // can be CONTACT, STARRED, SHARED
    },
    isLoggedIn: true,
    tab: 0, // [0, 1, 2, 3]
    snackbar: {
        open: null,
        severity: null,
        message: null,
    },
    users: [], // all users of app who are not friends and not requested yet
    all_users: [],
    friends: [], // all friends
    friendRequests: [], // all friend requests
    chat_type: null,
    room_id: null,
    call_logs: [],
}

const slice = createSlice({
    name: "app",
    initialState,
    reducers: {
    }
})


export default slice.reducer