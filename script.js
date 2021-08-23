    let lat1, lat2, lon1, lon2, p1Lat, p1Lon, p2Lat, p2Lon, p3Lat, p3Lon, zLat, zLon;
    let chP1 = false; 
    let chP2 = false; 
    let chP3 = false; 
    let zielP = false; 
    let d;
    let help = 0;
    var one;
    window.onload = () => {

    getLocation();
    one = document.querySelector('#one');
    var interval = setInterval(function(){
            Pointing();
            Navigation();
    }, 100)

        function Navigation(){
             if(chP1 == false && d < 6){
                console.log("1");
                one = document.querySelector('#two');
                lat2 = 50.82256970090178;
                lon2 = 12.938768380626097;
                chP1 = true;
                document.getElementById("one").setAttribute('scale', '0, 0 ,0');
                }
                if(chP2 == false && chP1 == true && d < 5){
                    console.log("2");
                    one = document.querySelector('#three');
                    lat2 = 50.82300402804472;
                    lon2 = 12.937663802663764;
                    chP2 = true;
                    document.getElementById("two").setAttribute('scale', '0, 0 ,0');
                }
                if(chP3 == false && chP1 == true && chP2 == true && d < 5){
                    console.log("3");
                    one = document.querySelector('#pony');
                    lat2 = 50.82344880592846;
                    lon2 = 12.937746951147917;
                    chP3 = true;
                    document.getElementById("three").setAttribute('scale', '0, 0 ,0');
                }
                if(chP1 == true && chP2 == true && chP3 == true &&  zielP == false && d < 3){
                    console.log('4');
                    alert("Sie haben Ihr Ziel erreicht!");
                }
                }
   
    
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
            Distanz();
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
    function Distanz(){
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
    div.innerText = "Distanz bis zum nächsten Punkt: " + d.toFixed(2);
    }
}
    
    
