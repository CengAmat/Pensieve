import axios from "axios";

const url = "http://localhost:5001/posts";

const fetchPosts = () => axios.get(url);
