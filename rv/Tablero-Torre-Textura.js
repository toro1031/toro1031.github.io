var TEXTURA = new Object();

TEXTURA.retrollamada = function( textura ) {

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

var material = new THREE.MeshBasicMaterial( {map: textura} );
TEXTURA.malla = new THREE.Mesh(torreForma, material);
TEXTURA.malla.rotateX(Math.PI/8);
TEXTURA.malla.rotateY(Math.PI/6);

TEXTURA.escena.add(TEXTURA.malla);
}

TEXTURA.setup = function() {

TEXTURA.malla.position.y=2;
TEXTURA.escena = new THREE.Scene();

var cargador = new THREE.TextureLoader();
cargador.load("earth_atmos_2048.jpg", TEXTURA.retrollamada);

var centro = new THREE.Vector3(40, 0, 40);
TEXTURA.camara = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
TEXTURA.camara.position.set(40, 80, 150);
TEXTURA.camara.lookAt(centro);

var lienzo = document.getElementById("Tablero-Torre-Textura");
TEXTURA.renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
  
TEXTURA.renderizador.setSize( window.innerWidth*.95, window.innerHeight*.95 );
}

TEXTURA.loop = function() {
  requestAnimationFrame( TEXTURA.loop);
  TEXTURA.renderizador.render( TEXTURA.escena, TEXTURA.camara );
}

TEXTURA.setup();
TEXTURA.loop();
