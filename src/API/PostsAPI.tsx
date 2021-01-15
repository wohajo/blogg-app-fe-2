import axios from 'axios';
import config from '../appConfig.json'

const jsonify = (post: any) => {
    return JSON.stringify({
        id: post.id,
        authors: post.authors,
        contents: post.contents,
        tags: post.tags
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

const fetchPosts = () => axios.get(config.apiURL + "posts")
    .then(res => {
    return res.data;
})

const fetchPostsByUser = (userId: number, username: string, password: string) => axios.get(
    config.apiURL + "posts/" + userId,
    headerJsonConfiguration(username, password)
    )
    .then(res => {
    return res.data;
})

const postPost = (post: any, username: string, password: string) => {
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

const updatePost = (post: any, username: string, password: string) => {
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

const deletePost = (postId: number, username: string, password: string) => axios.delete(
    config.apiURL + "posts/" + postId,
    headerJsonConfiguration(username, password)
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