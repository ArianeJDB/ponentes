'use strict';

const apiBaseUrl = 'http://localhost:3443/'
export function getSpeakers() {

    return fetch(`${apiBaseUrl}speakers`).then(response => response.json())
}

export function createNewSpeaker() {
    const headers = new Headers();
    const options = {
        method: 'POST',
        headers
    }
    fetch(`${apiBaseUrl}register`, options)
        .then(response => response.json())
}
