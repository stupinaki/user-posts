import {serializeQuery} from "../helpers/serializeQuery";


export async function fetchUsers(queries){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?${serializeQuery(queries)}`);
    return response.json();
}