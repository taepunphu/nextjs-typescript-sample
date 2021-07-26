import axios, { AxiosResponse } from 'axios'
import { IActivity } from '../models/activity'

axios.defaults.baseURL = process.env.REACT_APP_URL

const responseBody = <T>(response: AxiosResponse<T>) => response.data

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Activities = {
  list: (): Promise<IActivity[]> => requests.get<IActivity[]>('/activities'),
}

const agent = {
  Activities,
}

export default agent
