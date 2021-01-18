import axios from 'axios';
import config from '../appConfig.json'

const jsonify = (givenContents: string) => {
    return JSON.stringify({
        contents: givenContents
    })
}

const headerJsonConfiguration = (username: string, password: string) => {
    return {
        headers: {
            'Authorization': username + "~" + password,
            'content-type': 'application/json'
        }
    }
}

const headerJsonAuthorization = (username: string, password: string) => {
    return {
        headers: {
            'Authorization': username + "~" + password,
        }
    }
}

const fetchPosts = () => axios.get(config.apiURL + "posts")
    .then(res => {
    return res.data;
})

const fetchPostsByUser = (userId: number, username: string, password: string) => axios.get(
    config.apiURL + "posts/user/" + userId,
    headerJsonConfiguration(username, password)
    )
    .then(res => {
        return res.data;
    })

const postPost = (contents: string, username: string, password: string) => {
    return axios.post(
        config.apiURL + "posts", 
        jsonify(contents), 
        headerJsonConfiguration(username, password)
        )
}

const updatePost = (postId: number, contents: string, username: string, password: string) => {
    return axios.put(
        config.apiURL + "posts/" + postId, 
        jsonify(contents), 
        headerJsonConfiguration(username, password)
        )
}

const deletePost = (postId: number, username: string, password: string) => axios.delete(
    config.apiURL + "posts/" + postId,
    headerJsonAuthorization(username, password)
    )
    .then(res => {
    return res.data;
})

export const PostsAPI = {
    fetchPosts: fetchPosts,
    fetchPostsByUser: fetchPostsByUser,
    deletePost: deletePost,
    postPost: postPost,
    updatePost: updatePost
};