import {serializeQuery} from "../helpers/serializeQuery";

export async function fetchPosts(queries) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${serializeQuery(queries)}`);
    return response.json();
}