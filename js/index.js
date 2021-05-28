var tableResults = document.querySelector("#data-results");
var lineTemplate = document.createElement("tbody");
var FeatureCollection;

var mymap = L.map('map').setView([46.45, 1.49], 7);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Merci a tous d\'etre venu a cette formation',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZHB0aDQ0IiwiYSI6ImNrcDgwdHFybzA1bXAydnBudTZ0ZDMwbW4ifQ.RknTu3v7M4r4WmH6eXk0jg'
}).addTo(mymap);


var monSvg='<svg enable-background="new 0 0 128 128" height="128px" version="1.1" viewBox="0 0 128 128" width="128px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_2"/><g id="Layer_1"><g><path d="M88.334,66c0,0-51.145,0-53.052,0s-3.438,0.906-3.917,2.372c-1.948,5.966-6.929,21.201-7.33,22.343    C23.313,92.766,24.396,97,30.062,97S66,97,66,97L88.334,66z" fill="#9FD661"/></g><g><path d="M64.604,79.637L25.491,95.564c0,0,1.444,1.436,4.242,1.436c2.239,0,51.029,0,70.422,0    c5.267,0,6.204-4.266,5.704-6.047C88.984,86.209,64.604,79.637,64.604,79.637z" fill="#48C0EB"/></g><g><path d="M96.817,66.504L66.673,78.789c0,0,31.327,10.878,39.31,13.584c0.03-0.498-0.018-1.051-0.182-1.658    c-2.755-8.289-7.167-21.894-7.413-22.612C98.031,67.062,96.817,66.504,96.817,66.504z" fill="#CCD1D9"/></g><g><path d="M25.472,95.522c1.14-0.463,61.815-25.136,71.349-29.012C96.229,66.149,94.781,66,94.781,66h-6.447    L23.935,91C23.935,91,23.23,93.459,25.472,95.522z" fill="#FFCF47"/></g><g><path d="M61.247,80.976c0,0,42.692,14.646,42.941,14.718c1.015-0.6,1.874-2.459,1.794-3.73    c-1.069-0.366-38.92-13.338-38.92-13.338L61.247,80.976z" fill="#F5F7FA"/></g><g><path d="M63.5,29C54.388,29,47,36.387,47,45.5c0,4.334,4.336,11.421,8.25,18.042    C59.566,70.844,63.5,77.5,63.5,77.5S68.201,69.419,73,61c3.354-5.883,7-11.721,7-15.5C80,36.387,72.612,29,63.5,29z M63.5,51    c-2.486,0-4.5-2.015-4.5-4.5s2.014-4.5,4.5-4.5s4.5,2.015,4.5,4.5S65.986,51,63.5,51z" fill="#EF5362"/></g></g></svg>'