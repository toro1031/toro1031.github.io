var TEXTURA1 = new Object();
TEXTURA1.retrollamada = function( textura ) {
  TEXTURA1.material = new THREE.MeshNormalMaterial( {map: textura} );
}

var TEXTURA2= new Object();
TEXTURA2.retrollamada = function( textura ) {
  TEXTURA2.material = new THREE.MeshNormalMaterial( {map: textura} );
}

function setup1() {
  escena = new THREE.Scene();
  var cargador = new THREE.TextureLoader();
  cargador.load("marmoln.jpg", TEXTURA1.retrollamada);
  var cargador2 = new THREE.TextureLoader();
  cargador2.load("marmolb.jpg", TEXTURA2.retrollamada);
}

var TORRE = new Object();

TORRE.TorreGeometry = function(){
  THREE.Geometry.call(this);
  
  var puntos = [];
  puntos.push( new THREE.Vector2( 0, 0 ) );
  puntos.push( new THREE.Vector2( 4.5, 0 ) );
  puntos.push( new THREE.Vector2( 4.5, 2 ) );
  puntos.push( new THREE.Vector2( 3.5, 2 ) );
  puntos.push( new THREE.Vector2( 3.5, 4 ) );
  puntos.push( new THREE.Vector2( 2.5, 6 ) );
  puntos.push( new THREE.Vector2( 2.5, 10 ) );
  puntos.push( new THREE.Vector2( 3.5, 12 ) );
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
  this.merge(torreMalla1.geometry, torreMalla1.matrix);
  this.merge(torreMalla2.geometry, torreMalla2.matrix);
  this.merge(torreMalla3.geometry, torreMalla3.matrix);
  this.merge(torreMalla4.geometry, torreMalla4.matrix);
  this.merge(torreMalla5.geometry, torreMalla5.matrix);
  this.merge(torreMalla6.geometry, torreMalla6.matrix);
  }
  
  TORRE.TorreGeometry.prototype = new THREE.Geometry();
  
  TORRE.setup = function(){
    var torre1 = new THREE.Mesh(new TORRE.TorreGeometry(), TEXTURA1.Material);
    var torre2 = new THREE.Mesh(new TORRE.TorreGeometry(), TEXTURA1.Material);
    var torre3 = new THREE.Mesh(new TORRE.TorreGeometry(), TEXTURA2.Material);
    var torre4 = new THREE.Mesh(new TORRE.TorreGeometry(), TEXTURA2.Material);
    
    torre2.position.x=70;
    torre2.position.y=2;
    torre3.position.x=70;
    torre3.position.y=2;
    torre3.position.z=70;
    torre4.position.y=2;
    torre4.position.z=70;
    
    var centro = new THREE.Vector3(40, 0, 40);
    TORRE.camara = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000);
    TORRE.camara.position.set(40, 80, 150);
    TORRE.camara.lookAt(centro);
   
    var lienzo = document.getElementById("Tablero-Constructores");
    TORRE.renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true})
    TORRE.renderizador.setSize( window.innerWidth*.95, window.innerHeight*.95);
    TORRE.renderizador.render( TORRE.escena, TORRE.camara );
    TORRE.escena = new THREE.Scene();
    TORRE.escena.add(torre1);
    TORRE.escena.add(torre2);
    TORRE.escena.add(torre3);
    TORRE.escena.add(torre4);
    
    setupDone = true;
}

TORRE.loop = function(){
  requestAnimationFrame(TORRE.loop);
  if (TEXTURA1.material !== undefined && TEXTURA2.material !== undefined && !setupDone){
    TORRE.setup();
  }
}

var setupDone = false;
setup1();
TORRE.loop();
