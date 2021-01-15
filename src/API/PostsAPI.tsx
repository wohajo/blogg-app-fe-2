import axios from 'axios';
import config from '../appConfig.json'
import { PostInterface } from '../Interfaces/Interfaces';

const jsonify = (post: PostInterface) => {
    return JSON.stringify({
        contents: post.contents
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
    config.apiURL + "posts/" + userId,
    headerJsonAuthorization(username, password)
    )
    .then(res => {
    return res.data;
})

const postPost = (post: PostInterface, username: string, password: string) => {
    return axios.post(
        config.apiURL + "posts", 
        jsonify(post), 
        headerJsonConfiguration(username, password)
        )
    .then(res => {
        return res;
    })
    .catch((error) => {
        return error.response.data;
    })
}

const updatePost = (post: PostInterface, username: string, password: string) => {
    return axios.put(
        config.apiURL + "posts/" + post.id, 
        jsonify(post), 
        headerJsonConfiguration(username, password)
        )
    .then(res => {
        return res;
    })
    .catch((error) => {
        return error.response.data;
    })
}

const deletePost = (post: PostInterface, username: string, password: string) => axios.delete(
    config.apiURL + "posts/" + post.id,
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