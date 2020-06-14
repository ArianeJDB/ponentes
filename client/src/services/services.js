'use strict';

const apiBaseUrl = 'http://localhost:3443/'
export function getSpeakers() {

    return fetch(`${apiBaseUrl}speakers`)
    .then(response => response.json())
}

export function createNewSpeaker(payload) {
    console.log('payload que recibe', payload)
    fetch(`${apiBaseUrl}register`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
        console.log('speaker registrado?', data)
      })
      .catch (error => {
        throw error
      })
}

export function login(email, password) {
    const headers = new Headers()
    headers.set('Authorization', 'Basic ' + btoa(email + ":" + password));

    fetch(`${apiBaseUrl}login`, {
        method: 'POST',
        headers
    })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('token', JSON.stringify(data.token))
            localStorage.setItem('email', JSON.stringify(data.speakerData.email))
      })
      .catch (error => {
        throw error
      })
}

export function createNewTalk(speakerId, payload) {
    console.log('desde services',speakerId, payload)
    const token = JSON.parse(localStorage.getItem('token'))
    const headers = new Headers()
    headers.set('Authorization', 'Bearer ' + token);
    headers.set('Content-Type', 'application/json')
    fetch(`${apiBaseUrl}speakers/${speakerId}/talks`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers
        
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
      })
      .catch (error => {
        throw error
      })
}