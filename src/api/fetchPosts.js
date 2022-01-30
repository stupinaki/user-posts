
export async function fetchPosts(userId='') {

    const url = userId
        ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        : 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url);
    return response.json();
}