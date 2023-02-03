const notes = [{},{
    title: 'Trip',
    body: 'Vacation'
}, {
    title: 'Love',
    body: 'Story'
}, {
    title: 'Work',
    body: 'Job'
}]

document.querySelector('#create-note').addEventListener('click', function(e){
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function(e){
    document.querySelectorAll('.note').forEach( function(note){
        note.remove()
    })
})
