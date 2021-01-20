import axios from 'axios';
import config from '../appConfig.json'

const headerJsonConfiguration = (username: string, password: string) => {
    return {
        headers: {
            'Authorization': username + "~" + password,
            'content-type': 'application/json'
        }
    }
}

const fetchBestUsers = (username: string, password: string) => axios.get(
    config.apiURL + "users/find/best-users",
    headerJsonConfiguration(username, password)
    )
    .then(res => {
        return res.data;
    })

const fetchLongestPosts = (username: string, password: string) => axios.get(
    config.apiURL + "posts/find/longest-posts",
    headerJsonConfiguration(username, password)
    )
    .then(res => {
        return res.data;
    })

export const StatsAPI = {
    fetchBestUsers: fetchBestUsers,
    fetchLongestPosts: fetchLongestPosts
};