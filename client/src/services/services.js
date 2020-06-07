'use strict';

const apiBaseUrl = 'https://localhost:3443/api/speakers'
export function getSpeakers() {
    

    return fetch(apiBaseUrl).then(response => response.json())
}

export function createNewSpeaker() {
    const headers = new Headers();
    const options = {
        method: 'POST',
        headers
    }
    fetch(apiBaseUrl, options)
        .then(response => response.json())
}
