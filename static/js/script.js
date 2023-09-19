let latitudine = 41.895132079870194
let longitudine = 12.494442032988616

navigate.geolocation.getCurrentPosition(function (event){
    
})

let map = L.map('map').setView([latitudine, longitudine], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);