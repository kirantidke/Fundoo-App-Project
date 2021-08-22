 var form = document.getElementById('form')
form.addEventListener('submit',function(e){

    e.preventDefault()

    const description = document.getElementById('note-text').value
    const title = document.getElementById('note-title').value

fetch("http://fundoonotes.incubation.bridgelabz.com/api/",{
    method:'post',
    body: JSON.stringify(data),
             mode: 'cors',
    "title": title.value,
    "description": description.value

})
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})

})


