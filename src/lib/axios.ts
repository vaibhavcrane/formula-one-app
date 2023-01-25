import axios from "axios";

/* Creating a new axios instance with a baseURL property. */
const ergast = axios.create({ baseURL: "https://ergast.com/api/f1/" });

export default ergast;
