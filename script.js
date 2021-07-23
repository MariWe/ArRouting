var aktuell;
var pfeil = document.querySelector('#pfeil');
var pony = document.querySelector('#pony');
var pointOne = document.querySelector('#pointOne');
var pointTwo = document.querySelector('#pointTwo');
var pointThree = document.querySelector('#pointThree');
var pointFour = document.querySelector('#pointFour');
var one = {
        latitude: 50.823385, 
        longitude: 12.937760
    };

window.onload = () => {
    getLocation();     
}

function getLocation(){
    navigator.geolocation.watchPosition(function (position){
        aktuell = position.coords;
        console.log(aktuell);
        return aktuell.latitude, aktuell.longitude;
            
    })
    setInterval(function() { 
       Pointing(); 
      }, 100);
}

function Pointing(){ 
    var pfeil = document.querySelector('#pfeil');
    var pony = document.querySelector('#pony');

    if(one.latitude != aktuell.latitude){
    var position = pony.object3D.position;
    pfeil.object3D.lookAt(new THREE.Vector3(position.x, position.y, position.z)); 
    }
    else{
    }
}  
