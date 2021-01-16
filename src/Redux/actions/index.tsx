export const setPosts = (posts: any) => {
    return {
        type: 'SET_POSTS',
        payload: posts
    }
}

export const resetPosts = () => {
    return {
        type: 'RESET_POSTS',
        payload: null
    }
}

// posts spinner

export const postsLoaded = () => {
    return {
        type: 'POSTS_LOADED',
        payload: false
    }
}

export const postsNotLoaded = () => {
    return {
        type: 'POSTS_NOT_LOADED',
        payload: true
    }
}

// session user

export const setUser = (posts: any) => {
    return {
        type: 'SET_USER',
        payload: posts
    }
}

export const resetUser = () => {
    return {
        type: 'RESET_USER',
        payload: null
    }
}