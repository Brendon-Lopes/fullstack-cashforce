import axios from "axios";

const apiOrdersUrl = import.meta.env.VITE_API_ORDERS_URL;

export const ordersApi = axios.create({ baseURL: apiOrdersUrl });
