var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 50 );

camera.position.z = 100;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth*.95, window.innerHeight*.95 );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.CylinderGeometry( 3, 3, 50, 30, 5 );
var material = new THREE.MeshBasicMaterial( { color: 0x7A4B0D } );
var cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

var geometry2 = new THREE.SphereGeometry( 8, 50, 50 );
var material2 = new THREE.MeshBasicMaterial( { color: 0x32720D } );
var sphere = new THREE.Mesh( geometry2, material2 );
scene.add( sphere );

sphere.position.y = 25;

renderer.render( scene, camera );

