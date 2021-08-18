    let lat1, lat2, lon1, lon2;
    let d;
    let help = 0;
    var one = document.querySelector('#one');
    window.onload = () => {

    getLocation();
    setInterval(function(){
        setTimeout(function() {
            Pointing();
            }, 2000); 
    }, 100)

   /*setTimeout(function() {
        Navigation();
        }, 5000);*/
    
    function Navigation(){
    while(help == 0){
        if(d < 15){
            one = document.querySelector('#one');
        if(d < 10){
        console.log(d);
        one = document.querySelector('#two');
        help = 1;
        }}
        }}
    
     //Marker Positionen
     lat2 = 50.8222;
     lon2 = 12.9399;
 
     marLat2 = 50.82303;
     marLon2 = 12.93763;
 
     goalLat = 50.82344;
     goalLon = 12.9379;

    //Aktuelle Position
    function getLocation(){
        navigator.geolocation.watchPosition(function (position){
            aktuell = position.coords;
            lat1 = aktuell.latitude;
            lon1 = aktuell.longitude;
            console.log(lat1, lon1);
            distanz();
        }
        )}

    //Ausrichtung des Pfeils
    function Pointing(){
        one = document.querySelector('#one');
        var pfeil = document.querySelector('#pfeil');
        var position = one.object3D.position;
        pfeil.object3D.lookAt(new THREE.Vector3(position.x, position.y, position.z));
    }
    
    //distanzBerechnung
    //cr: "https://www.movable-type.co.uk/scripts/latlong.html"
    function distanz(){
    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI/180; // φ, λ in radians
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (lon2-lon1) * Math.PI/180;
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    d = R * c; // in metres
    }
}
