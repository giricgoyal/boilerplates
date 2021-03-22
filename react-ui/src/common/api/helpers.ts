export const getURL = (location: string, version: string, params: Object = {}) => {
    const url = new URL(`/api/${version}/${location}`, window.location.origin);
    for (const key in params) {
        const value = params[key];
        url.searchParams.set(key, value);
    }

    return url.toString();
}