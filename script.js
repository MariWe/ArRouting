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

    /*setInterval(function() { 
       Pointing(); 
      }, 100);*/
      
      Navigation();      
}

function getLocation(){
    navigator.geolocation.watchPosition(function (position){
        var aktuell = position.coords;
        console.log(aktuell);   
    })
    Navigation();  
}

function Navigation(){
    var pfeil = document.querySelector('#pfeil');
    var pony = document.querySelector('#pony');

    do{
        var position = pony.object3D.position;
        pfeil.object3D.lookAt(new THREE.Vector3(position.x, position.y, position.z)); 
    } while(one.latitude != aktuell.latitude);
}

function Pointing(){ 
       
}  
