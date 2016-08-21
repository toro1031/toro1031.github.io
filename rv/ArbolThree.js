var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.CylinderGeometry( 5, 5, 10, 30, 5 );
var material = new THREE.MeshBasicMaterial( { color: 0xC53FE6 } );
var cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

var geometry2 = new THREE.SphereGeometry( 5, 32, 32 );
var material2 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var sphere = new THREE.Mesh( geometry2, material2 );
scene.add( sphere );

camera.position.z = 25;
sphere.position.z = 15;

