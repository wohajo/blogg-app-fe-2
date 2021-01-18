import axios from 'axios';
import config from '../appConfig.json'

const jsonify = (firstName: string, lastName: string, givenUsername: string, givenEmail: string, givenPassword: string) => {
    return JSON.stringify({
        name: firstName + " " + lastName,
        username: givenUsername,
        password: givenPassword,
        email: givenEmail,
        isAdmin: false
    })
}

const headerJsonConfigurationLogin = (username: string, password: string) => {
    var token = username + "~" + password

    return {
        headers: {
            'Authorization': token
        }
    }
}

const headerJsonConfigurationRegister = () => {
    return {
        headers: {
            'content-type': 'application/json'
        }
    }
}

const login = (username: string, password: string) => {
    return axios.post(
        config.apiURL + "users/login",
        null,
        headerJsonConfigurationLogin(username, password)
        )
}

const register = (firstName: string, lastName: string, username: string, email: string, password: string) => {
    return axios.post(
        config.apiURL + "users/register", 
        jsonify(firstName, lastName, username, email, password),
        headerJsonConfigurationRegister() 
        )
}

export const UserAPI = {
    login: login,
    register: register
};