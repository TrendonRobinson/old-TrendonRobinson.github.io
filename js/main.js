console.log($)
// $.ajax({
//     method: 'get',
//     url: 'https://maps.googleapis.com/maps/api/distancematrix/json'
// })
// // success? add li for each breed to the ul
// .then(response => {
    
//     let dogsObjects = response.message
    
//     let listHtml = ''
//     for (const key in dogsObjects){
//         // $('ul').append($(`<li>${key}<li>`))

//         listHtml +=`<li>${key}<li>`
//     }

//     $('ul').append(listHtml)
// })
// // failed? log error message
// .catch(() => console.log('error'))

// function initMap() {

//     console.log("test")

//     map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: -34.397, lng: 150.644 },
//       zoom: 8,
//     });

//     console.log(map)
// }

// initMap()