import {serializeQuery} from "../helpers/serializeQuery";


export async function fetchComments(queries){
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?${serializeQuery(queries)}`);
    return response.json();
}