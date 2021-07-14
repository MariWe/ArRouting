window.onload = () => {
    var pf = document.querySelector('#pfeil');
    const po = document.querySelector('#pony');
    const ca = document.querySelector('#camera');

    let oldPosition = ca.getAttribute('position');
    let newPosition = {x: oldPosition.x, y: oldPosition.y, z: -4};

    pf.setAttribute('position', newPosition);
    console.log(pf.getAttribute('position'));
}
