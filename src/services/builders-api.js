// This file will be our endpoints
import axios from 'axios'
const baseURL = "https://express-todo-14.herokuapp.com/todos"

export const getBuilders = () => {
    const URL = baseURL
    const response = axios.get(URL)
    return response
}

export const getBuild = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}

export const deleteBuild = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}

export const editBuild = (id, updatedBuild) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedBuild)
    return response
}

export const createBuild = (todo) => {
    const URL = baseURL
    const response = axios.post(URL, todo)
    return response
}

