var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera();

camera.position.z = 100;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth*.95, window.innerHeight*.95 );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.CylinderGeometry( 3, 3, 50, 30, 5 );
var material = new THREE.MeshBasicMaterial( { color: 0xC53FE6 } );
var cylinder = new THREE.Mesh( geometry, material );
cylinder.rotateX(Math.PI/4);
cylinder.rotateY(Math.PI/4);
scene.add( cylinder );

var geometry2 = new THREE.SphereGeometry( 20, 25, 25 );
var material2 = new THREE.MeshBasicMaterial( { color: 0x00FF00 } );
var sphere = new THREE.Mesh( geometry2, material2 );
scene.add( sphere );

sphere.position.z = 35;

renderer.render( scene, camera );

