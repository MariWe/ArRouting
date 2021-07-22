window.onload = () => {

    getLocation();
    test();

    setInterval(function() { 
        Pointing(); 
    }, 100);
}

function getLocation(){
    navigator.geolocation.watchPosition(function (position){
        var lati = position.coords.latitude;
        var long = position.coords.longitude;
        console.log(lati, long);
    })
}

function Pointing(){
    var pfeil = document.querySelector('#pfeil');
    var pony = document.querySelector('#pony');
    var position = pony.object3D.position;

    pfeil.object3D.lookAt(new THREE.Vector3(position.x, position.y, position.z));
}  

function test(){
    var camera = document.querySelector('#camera');
    var test = document.querySelector('#test');

    if(camera.object3D.position == test.object3D.position){
        pfeil.setAttribute(scale, "2 2 2");
    }
}
