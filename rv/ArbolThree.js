var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera();

camera.position.z = 25;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth*.95, window.innerHeight*.95 );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.CylinderGeometry( 5, 5, 10, 30, 5 );
var material = new THREE.MeshBasicMaterial( { color: 0xC53FE6 } );
var cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

renderer.render( scene, camera );

