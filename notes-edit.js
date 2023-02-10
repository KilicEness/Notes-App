'use strict'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find( (note) => {
    return note.id === noteId
})

if (!note) {
    location.assign('./index.html')
}

titleElement.value = note.title
bodyElement.value = note.body

titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    saveNotes(notes)
})

bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    saveNotes(notes)
})

removeElement.addEventListener('click', (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('./index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(function (note) {
            return note.id === noteId
        })

        if (!note) {
            location.assign('./index.html')
        }

        titleElement.value = note.title
        bodyElement.value = note.body
    }
})