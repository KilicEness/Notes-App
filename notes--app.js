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

/* console.log('This is javascript code in HTML document');
 */
//DOM

//Query and remove
/* const p = document.querySelector('p') //tek bir değer veya string aramak içindir.
p.remove() */

//Query all and remove
/* const ps = document.querySelector('p')
ps.forEach(function(pr) {
    pr.remove()
}) */

//Add a new element
/* const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is new element from javascript'
document.querySelector('body').appendChild(newParagraph) */

document.querySelector('#create-note').addEventListener('click', function(e){
    /* console.log('Did this work')
    console.log(e) */
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function(e){
    document.querySelectorAll('.note').forEach( function(note){
        note.remove()
    })
})
