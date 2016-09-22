function init(p){
var malla(new THREE.BoxGeometry(p, p, p), new THREE.MeshNormalMaterial());
escena = new THREE.Scene();
escena.add(malla);
camara = new THREE.PerspectiveCamera();
renderizador = new THREE.WebGLRender();
renderizador.setSize(700,700);
document.body.appendChild(renderizador.domElement);
}

var main = function(p){
renderizador.render(escena, camara);
}

var escena, camara, renderizador;

init(1);
main(2);