

export async function fetchComments(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    return response.json();
}