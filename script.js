var aktuell;
var pfeil = document.querySelector('#pfeil');
var pony = document.querySelector('#pony');
var pointOne = document.querySelector('#pointOne');
var pointTwo = document.querySelector('#pointTwo');
var pointThree = document.querySelector('#pointThree');
var pointFour = document.querySelector('#pointFour');
    var one = {
        latitude: 50.822163, 
        longitude: 12.939683
    };
    var two = {
        latitude: 50.822597, 
        longitude: 12.938641
    };
    var three = {
        latitude: 50.823076, 
        longitude: 12.937690
    };
    var four = {
        latitude: 50.823420, 
        longitude: 12.937663
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
    var pointOne = document.querySelector('#pointOne');
    var pointTwo = document.querySelector('#pointTwo');
    var pointThree = document.querySelector('#pointThree');
    var pointFour = document.querySelector('#pointFour');

    if(one.latitude != aktuell.latitude){
    var position = pointOne.object3D.position;
    pfeil.object3D.lookAt(new THREE.Vector3(position.x, position.y, position.z)); 
    }
    else{
        if(two.latitude != aktuell.latitude){
            var position = pointTwo.object3D.position;
            pfeil.object3D.lookAt(new THREE.Vector3(position.x, position.y, position.z));
        }
        else{
            if(three.latitude != aktuell.latitude){
                var position = pointThree.object3D.position;
                pfeil.object3D.lookAt(new THREE.Vector3(position.x, position.y, position.z));
            }
            else{
                if(four.latitude != aktuell.latitude){
                    var position = pointFour.object3D.position;
                    pfeil.object3D.lookAt(new THREE.Vector3(position.x, position.y, position.z));
                }
                else{
                    alert("You reached your goal!");
                    var position = pony.object3D.position;
                    pfeil.object3D.lookAt(new THREE.Vector3(position.x, position.y, position.z));
                }
            }
        }
    }
}  
