var form = document.getElementById('form')
form.addEventListener('submit',function(e)){

    e.preventDefault()
    const description = document.getElementById('note-text')
    const title = document.getElementById('note-title')
    
fetch("http://fundoonotes.incubation.bridgelabz.com/api/",{
    method:'post',
    "title": title.value,
    "description": description.value
}),
}


