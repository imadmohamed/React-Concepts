import axios from "axios";

const instence = axios.create({
    baseURL:"https://joke.deno.dev/type",
});

export default instence;