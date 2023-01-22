import axios from "axios";

/* Creating a new axios instance with a baseURL property. */
const ergast = axios.create({ baseURL: "http://ergast.com/api/f1/" });

export default ergast;
