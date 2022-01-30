
export function serializeQuery(obj) {
    const str = [];
    for (let p in obj)
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}