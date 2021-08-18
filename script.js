    let lat1, lat2, lon1, lon2, p1Lat, p1Lon, p2Lat, p2Lon, p3Lat, p3Lon, zLat, zLon;
    let d;
    let help = 0;
    var one;
    window.onload = () => {

    getLocation();
    one = document.querySelector('#one');
    setInterval(function(){
        setTimeout(function() {
            Pointing();
            }, 2000); 
    }, 100)

   setTimeout(function() {
        Navigation();
        }, 5000);
    
    function Navigation(){
    while(help == 0){
        console.log(d);
        if(d < 5){
        one = document.querySelector('#two');
        lat2 = p2Lat;
        lon2 = p2Lon;
        help = 1;
        }
        }}
    
     //Marker Positionen
     lat2 = 50.822125670138014;
     lon2 = 12.939836075712524;
     p2Lat = 50.82256970090178;
     p2Lon = 12.938768380626097;
     p3Lat = 50.82300402804472;
     p3Lon = 12.937663802663764;
     zLat = 50.82344880592846;
     zLon = 12.937746951147917;


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
    const div = document.querySelector('#demo');
    div.innerText = d;
    }
}
    
    
