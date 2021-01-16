import axios from 'axios';
import config from '../appConfig.json'
import { PostInterface } from '../Interfaces/Interfaces';

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
        console.log(config.apiURL + "posts/user/" + userId)
    return res.data;
    })

const postPost = (contents: string, username: string, password: string) => {
    return axios.post(
        config.apiURL + "posts", 
        jsonify(contents), 
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
        jsonify(post.contents), 
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