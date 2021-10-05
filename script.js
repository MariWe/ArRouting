let next, lat1, lat2, lon1, lon2, one, obj, d;
window.onload = () => {

    one = document.querySelector('#one');
    getLocation();
    createObject();

    //"Navigation"
    function Navigation() {
        obj = document.getElementById('one');
        next = document.getElementById(one.dataset.next);
        lat2 = parseFloat(one.dataset.lat);
        lon2 = parseFloat(one.dataset.lon);
        Distanz(lat1, lon1, lat2, lon2);
        Display();
        if (d < 5) {
            if (next.dataset.next === "null") {
                alert("Sie haben Ihr Ziel erreicht");
            }
            else {
                one = next;
                obj = next;
            }
        }
    }

    function Display() {
        const div = document.querySelector('#demo');
        div.innerText = "Distanz bis zum nächsten Punkt: " + d.toFixed(2);
    }

    //Aktuelle Position
    function getLocation() {
        navigator.geolocation.watchPosition(function (position) {
            aktuell = position.coords;
            lat1 = aktuell.latitude;
            lon1 = aktuell.longitude;
            //one = document.querySelector('#one');
            Navigation();
            Pointing();
        })
    }

    //Ausrichtung des Pfeils
    function Pointing() {
        var pfeil = document.querySelector('#pfeil');
        var position = obj.object3D.position;
        pfeil.object3D.lookAt(new THREE.Vector3(position.x, position.y, position.z));
    }

    //distanzBerechnung
    //cr: "https://www.movable-type.co.uk/scripts/latlong.html"
    function Distanz(lat1, lon1, lat2, lon2) {
        const R = 6371e3; // metres
        const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        d = R * c; // in metres
        return d;
    }
    
     function createObject(){
        let scene =  document.querySelector('a-scene');
        let model = document.createElement('a-box');
        model.setAttribute('gps-entity-place', 'latitude: lat1; longitude: lon1;');
        model.setAttribute('scale', '0.5 0.5 0.5');
        model.setAttribute('rotation', '-1 0 -5');
        scene.appendChild(model);
    }
}
