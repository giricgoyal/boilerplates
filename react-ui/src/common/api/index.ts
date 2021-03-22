import * as helpers from './helpers';

function fetchData(url: string, method: string = 'GET', data?: Object) {
    return fetch(url, {
        method,
        mode: 'same-origin',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            contentType: 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: data ? JSON.stringify(data) : undefined
    })
}

function createGet(version: string = 'v1') {
    return async function getData(path: string, params?: Object) {
        const url: string = helpers.getURL(path, version);
        const result = await fetchData(url, 'GET');
        const json = await result.json();
        return json;
    }
}

function createPost(version: string = 'v1') {
    return async function postData(path: string, data?: Object) {
        const url: string = helpers.getURL(path, version);
        const result = await fetchData(url, 'POST', data);
        const json = await result.json();
        return json;
    }
}

function createPut(version: string = 'v1') {
    return async function putData(path: string, data?: Object) {
        const url: string = helpers.getURL(path, version);
        const result = await fetchData(url, 'PUT', data);
        const json = await result.json();
        return json;
    }
}

function createDelete(version: string = 'v1') {
    return async function deleteData(path: string) {
        const url: string = helpers.getURL(path, version);
        const result = await fetchData(url, 'DELETE');
        const json = await result.json();
        return json;
    }
}

export default {
    v1: {
        get: createGet(),
        put: createPut(),
        post: createPost(),
        delete: createDelete()
    }
}