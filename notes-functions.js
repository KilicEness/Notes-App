//Read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

//Save the notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

//Generate the DOM structure for a note
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    //Setup the remove notebutton
    button.textContent = 'x'
    noteEl.appendChild(button)

    //Setup the note title text
    if (note.title.length > 0) {
        noteEl.textContent = note.title
    } else {
        noteEl.textContent = 'Unnamed note'
    }

    return noteEl
}

//Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {   //array filter method
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}