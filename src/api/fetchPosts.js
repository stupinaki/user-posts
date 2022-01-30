
export function fetchPosts(page) {
    const a =  fetch(`https://jsonplaceholder.typicode.com/posts/${page}`)
        .then((response) => response.json());
    // todo
    // eslint-disable-next-line no-debugger
    debugger;
    return a;
}