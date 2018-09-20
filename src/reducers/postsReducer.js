import { SET_RECENT_POSTS } from '../actions/types';

const INITIAL_STATE = {
    posts: [],
    recentPosts: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_RECENT_POSTS:
            const recentPosts = action.payload;
            return {
                ...state,
                recentPosts
            }
        default:
            return state;
    }
}