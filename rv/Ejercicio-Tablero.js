// TORRE
var puntos = [];
puntos.push( new THREE.Vector2( 0, 0 ) );
puntos.push( new THREE.Vector2( 5, 0 ) );
puntos.push( new THREE.Vector2( 5, 2 ) );
puntos.push( new THREE.Vector2( 4, 2 ) );
puntos.push( new THREE.Vector2( 4, 4 ) );
puntos.push( new THREE.Vector2( 3, 6 ) );
puntos.push( new THREE.Vector2( 3, 10 ) );
puntos.push( new THREE.Vector2( 4, 12 ) );
puntos.push( new THREE.Vector2( 0, 12 ) );
var torreForma1 = new THREE.LatheGeometry(puntos);
var torreMalla1 = new THREE.Mesh(torreForma1);

var torreForma2 = new THREE.BoxGeometry( 7.5, 2, 7.5 );
torreForma2.translate(0,13,0);
var torreMalla2 = new THREE.Mesh(torreForma2);

var torreForma3 = new THREE.BoxGeometry( 2, 1.5, 2 );
torreForma3.translate(2.75,14.5,2.75);
var torreMalla3 = new THREE.Mesh(torreForma3);

var torreForma4 = new THREE.BoxGeometry( 2, 1.5, 2 );
torreForma4.translate(-2.75,14.5,2.75);
var torreMalla4 = new THREE.Mesh(torreForma4);

var torreForma5 = new THREE.BoxGeometry( 2, 1.5, 2 );
torreForma5.translate(2.75,14.5,-2.75);
var torreMalla5 = new THREE.Mesh(torreForma5);

var torreForma6 = new THREE.BoxGeometry( 2, 1.5, 2 );
torreForma6.translate(-2.75,14.5,-2.75);
var torreMalla6 = new THREE.Mesh(torreForma6);

//JUNTAR MALLAS:
var torreForma = new THREE.Geometry();
torreForma.merge(torreMalla1.geometry, torreMalla1.matrix);
torreForma.merge(torreMalla2.geometry, torreMalla2.matrix);
torreForma.merge(torreMalla3.geometry, torreMalla3.matrix);
torreForma.merge(torreMalla4.geometry, torreMalla4.matrix);
torreForma.merge(torreMalla5.geometry, torreMalla5.matrix);
torreForma.merge(torreMalla6.geometry, torreMalla6.matrix);

var material = new THREE.MeshNormalMaterial();
var torre1 = new THREE.Mesh(torreForma, material);
var torre2 = new THREE.Mesh(torreForma, material);
torre2.position.x=80;
var torre3 = new THREE.Mesh(torreForma, material);
torre3.position.x=80;
torre3.position.y=80;
var torre4 = new THREE.Mesh(torreForma, material);
torre4.position.y=80;

var escena = new THREE.Scene();
escena.add(torre1);
escena.add(torre2);
escena.add(torre3);
escena.add(torre4);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;
camara.position.y = 500;
camara.position.x = 40;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize(  window.innerWidth, window.innerHeight );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
