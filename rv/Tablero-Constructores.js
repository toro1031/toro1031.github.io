TEXTURA1 = new Object();
TEXTURA1.retrollamada = function( textura ) {
  TEXTURA1.material = new THREE.MeshBasicMaterial( {map: textura} );
}

TEXTURA2= new Object();
TEXTURA2.retrollamada = function( textura ) {
  TEXTURA2.material = new THREE.MeshBasicMaterial( {map: textura} );
}

function setup1() {
  escena = new THREE.Scene();
  var cargador = new THREE.TextureLoader();
  cargador.load("marmoln.jpg", TEXTURA1.retrollamada);
  var cargador2 = new THREE.TextureLoader();
  cargador2.load("marmolb.jpg", TEXTURA2.retrollamada);
}

TORRE = new Object();

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
     torre1 = new THREE.Mesh(new TORRE.TorreGeometry(), TEXTURA1.Material);
     torre2 = new THREE.Mesh(new TORRE.TorreGeometry(), TEXTURA1.Material);
     torre3 = new THREE.Mesh(new TORRE.TorreGeometry(), TEXTURA2.Material);
     torre4 = new THREE.Mesh(new TORRE.TorreGeometry(), TEXTURA2.Material);
    
    torre2.position.x=70;
    torre2.position.y=2;
    torre3.position.x=70;
    torre3.position.y=2;
    torre3.position.z=70;
    torre4.position.y=2;
    torre4.position.z=70;
  }

PEON = new Object();

PEON.PeonGeometry = function(){
  THREE.Geometry.call(this);

  var puntosPeon = [];
  puntosPeon.push( new THREE.Vector2( 0, 0 ) );
  puntosPeon.push( new THREE.Vector2( 4.5, 0 ) );
  puntosPeon.push( new THREE.Vector2( 4.5, 1.5 ) );
  puntosPeon.push( new THREE.Vector2( 4, 1.5 ) );
  puntosPeon.push( new THREE.Vector2( 4, 3.5 ) );
  puntosPeon.push( new THREE.Vector2( 3, 4.5 ) );
  puntosPeon.push( new THREE.Vector2( 2, 8 ) );
  puntosPeon.push( new THREE.Vector2( 2.5, 8 ) );
  puntosPeon.push( new THREE.Vector2( 2.5, 9.5 ) );
  puntosPeon.push( new THREE.Vector2( 2, 9.5 ) );
  puntosPeon.push( new THREE.Vector2( 2, 11 ) );
  puntosPeon.push( new THREE.Vector2( 0, 11 ) );
  
  var peonForma1 = new THREE.LatheGeometry(puntosPeon);
  var peonMalla1 = new THREE.Mesh(peonForma1);
  
  var peonForma2 = new THREE.SphereGeometry( 3 );
  peonForma2.translate(0,12.5,0);
  var peonMalla2 = new THREE.Mesh(peonForma2);

  // Juntar mallas de peon:
  var peonForma = new THREE.Geometry();
  this.merge(peonMalla1.geometry, peonMalla1.matrix);
  this.merge(peonMalla2.geometry, peonMalla2.matrix);
}

PEON.PeonGeometry.prototype = new THREE.Geometry();

PEON.setup = function(){
  peon1 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA1.Material);
  peon1.position.x=20;
  peon1.position.y=2;
  peon1.position.z=60;
}

ALFIL = new Object();

ALFIL.AlfilGeometry = function(){
  THREE.Geometry.call(this);

  var puntosAlfil = [];
  puntosAlfil.push( new THREE.Vector2( 0, 0 ) );
  puntosAlfil.push( new THREE.Vector2( 4.5, 0 ) );
  puntosAlfil.push( new THREE.Vector2( 4.5, 1.5 ) );
  puntosAlfil.push( new THREE.Vector2( 4, 1.5 ) );
  puntosAlfil.push( new THREE.Vector2( 4, 3.5 ) );
  puntosAlfil.push( new THREE.Vector2( 3, 4.5 ) );
  puntosAlfil.push( new THREE.Vector2( 2, 10 ) );
  puntosAlfil.push( new THREE.Vector2( 2.5, 10 ) );
  puntosAlfil.push( new THREE.Vector2( 2.5, 12 ) );
  puntosAlfil.push( new THREE.Vector2( 2, 12 ) );
  puntosAlfil.push( new THREE.Vector2( 2, 13.5 ) );
  puntosAlfil.push( new THREE.Vector2( 1.5, 13.5 ) );
  puntosAlfil.push( new THREE.Vector2( 2.5, 15 ) );
  puntosAlfil.push( new THREE.Vector2( 0, 15 ) );
  var alfilForma1 = new THREE.LatheGeometry(puntosAlfil);
  var alfilMalla1 = new THREE.Mesh(alfilForma1);
  
  var alfilForma2 = new THREE.ConeGeometry( 2.5, 4 );
  alfilForma2.translate(0,17,0);
  var alfilMalla2 = new THREE.Mesh(alfilForma2);
  
  var alfilForma3= new THREE.SphereGeometry( 1 );
  alfilForma3.translate(0,18.75,0);
  var alfilMalla3 = new THREE.Mesh(alfilForma3);

  // Juntar mallas de alfil:
  var alfilForma = new THREE.Geometry();
  this.merge(alfilMalla1.geometry, alfilMalla1.matrix);
  this.merge(alfilMalla2.geometry, alfilMalla2.matrix);
  this.merge(alfilMalla3.geometry, alfilMalla3.matrix);
}

ALFIL.AlfilGeometry.prototype = new THREE.Geometry();

ALFIL.setup = function(){
  alfil1 = new THREE.Mesh(new ALFIL.AlfilGeometry(), TEXTURA1.Material);
  alfil2 = new THREE.Mesh(new ALFIL.AlfilGeometry(), TEXTURA1.Material);
  alfil3 = new THREE.Mesh(new ALFIL.AlfilGeometry(), TEXTURA1.Material);
  alfil4 = new THREE.Mesh(new ALFIL.AlfilGeometry(), TEXTURA1.Material);
  
  alfil1.position.x=50;
  alfil1.position.y=2;
  alfil1.position.z=70;
  alfil2.position.x=20;
  alfil2.position.y=2;
  alfil2.position.z=70;
  alfil3.position.x=50;
  alfil3.position.y=2;
  alfil3.position.z=20;
  alfil4.position.x=20;
  alfil4.position.y=2;
  alfil4.position.z=20;
}
  
function setup(){
  
  // TABLERO:
  var gris = new THREE.MeshLambertMaterial( { color: 0x151515} );
  var blanco = new THREE.MeshLambertMaterial( { color: 0xFFFFFF} );
  var cuadros = [new THREE.BoxGeometry( 10, 2, 10 ) ];
  var cuadroMallas = [new THREE.Mesh(cuadros[0],gris)];
  var counter = 0;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      cuadros[counter] = new THREE.BoxGeometry( 10, 2, 10 );
      cuadros[counter].translate(j*10,0,i*10);
      if((counter+i) % 2 == 0){
        cuadroMallas[counter] = new THREE.Mesh(cuadros[counter],gris);
      }
      else {
        cuadroMallas[counter] = new THREE.Mesh(cuadros[counter],blanco);
      }
      escena.add(cuadroMallas[counter]);
      counter++;
    }
  }
  
   // MARCO DE TABLERO
  var marco1 = new THREE.BoxGeometry( 80, 5, 5);
  var marco2 = new THREE.BoxGeometry( 80, 5, 5);
  var marco3 = new THREE.BoxGeometry( 5, 5, 90);
  var marco4 = new THREE.BoxGeometry( 5, 5, 90);
  var cafe = new THREE.MeshLambertMaterial( { color: 0x653909 } );
  var marcomalla1 = new THREE.Mesh(marco1, cafe);
  marcomalla1.position.x=35;
  marcomalla1.position.y=3;
  marcomalla1.position.z=80;
  escena.add(marcomalla1);
  var marcomalla2 = new THREE.Mesh(marco2, cafe);
  marcomalla2.position.x=35;
  marcomalla2.position.y=3;
  marcomalla2.position.z=-5;
  escena.add(marcomalla2);
  var marcomalla3 = new THREE.Mesh(marco3, cafe);
  marcomalla3.position.x=-7;
  marcomalla3.position.y=3;
  marcomalla3.position.z=37.5;
  escena.add(marcomalla3);
  var marcomalla4 = new THREE.Mesh(marco4, cafe);
  marcomalla4.position.x=77;
  marcomalla4.position.y=3;
  marcomalla4.position.z=37.5;
  escena.add(marcomalla4);
  
   // LUCES
  var luz = new THREE.PointLight( 0xffffff, 1, 150, 1.5 );
  luz.position.set(35, 70, 35);
  escena.add( luz );
  var l1 = new THREE.DirectionalLight( 0xffffff, 0.45 );
  l1.position.set( -10, 25, -10 )
  var l2 = new THREE.DirectionalLight( 0xffffff, 0.45 );
  l2.position.set( 90, 25, -10 )
  var l3 = new THREE.DirectionalLight( 0xffffff, 0.45 );
  l3.position.set( -10, 25, 90 )
  var l4 = new THREE.DirectionalLight( 0xffffff, 0.45 );
  l4.position.set( 90, 25, 90 )
  escena.add( l1 );
  escena.add( l2 );
  escena.add( l3 );
  escena.add( l4 );
  
    var centro = new THREE.Vector3(40, 0, 40);
    camara = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000);
    camara.position.set(40, 80, 150);
    camara.lookAt(centro);
   
    //escena = new THREE.Scene();
    escena.add(torre1);
    escena.add(torre2);
    escena.add(torre3);
    escena.add(torre4);
    escena.add(peon1);
    escena.add(alfil1);
    escena.add(alfil2);
    escena.add(alfil3);
    escena.add(alfil4);
  
    var lienzo = document.getElementById("Tablero-Constructores");
    renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true})
    renderizador.setSize( window.innerWidth*.95, window.innerHeight*.95);
    renderizador.render( escena, camara );
  
    setupDone = true;
}

loop = function(){
  requestAnimationFrame(loop);
  if (TEXTURA1.material !== undefined && TEXTURA2.material !== undefined && !setupDone){
  setup();
  }
}

var setupDone = false;
var escena, camara, renderizador;
var torre1, torre2, torre3, torre4;
var peon1;
var alfil1, alfil2, alfil3, alfil4;

setup1();
ALFIL.setup();
PEON.setup();
TORRE.setup();
loop();

