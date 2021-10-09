$.ajax({
    method: 'get',
    url: 'https://dog.ceo/api/breeds/list/all'
})
// success? add li for each breed to the ul
.then(response => {
    
    let dogsObjects = response.message
    
    let listHtml = ''
    for (const key in dogsObjects){
        // $('ul').append($(`<li>${key}<li>`))

        listHtml +=`<li>${key}<li>`
    }

    $('ul').append(listHtml)
})
// failed? log error message
.catch(() => console.log('error'))