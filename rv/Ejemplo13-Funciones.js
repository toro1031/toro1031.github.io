function init(p){
malla = new THREE.Mesh(new THREE.BoxGeometry(p, p, p), new THREE.MeshNormalMaterial());
escena = new THREE.Scene();
escena.add(malla);
camara = new THREE.PerspectiveCamera();
camara.position.z = 5*p;
renderizador = new THREE.WebGLRenderer();
renderizador.setSize(700,700);
document.body.appendChild(renderizador.domElement);
}

var loop = function(){
requestAnimationFrame(loop);
renderizador.render(escena, camara);
malla.rotateY(0.01);
}

var escena, camara, renderizador, malla;

init(1);
loop();
