var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.CylinderGeometry( 10, 10, 25, 30, 5 );
var material = new THREE.MeshBasicMaterial( { color: 0xC53FE6 } );
var cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

camera.position.z = 40;

var render = function () {
requestAnimationFrame( render );
cube.rotation.x += 0.001;
cube.rotation.y += 0.01;
renderer.render(scene, camera);
};

render();
