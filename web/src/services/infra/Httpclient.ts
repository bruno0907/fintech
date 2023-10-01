import axios from "axios";

const baseURL = import.meta.env.DEV ? 'http://localhost:3000' : import.meta.env.VITE_API_URL

export const HttpClient = axios.create({ baseURL })
