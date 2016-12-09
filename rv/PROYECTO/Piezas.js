//TORRE
function Torre(size,x,y){
  var marmol_negro = cargador.load('marmol_negro.jpg');
  THREE.Mesh.call(this, new THREE.BoxGeometry( size/10, size, size/2), new THREE.MeshPhongMaterial({map: marmol_negro}));
  this.size=size;
  this.position.x=x;
  this.position.z=y;
}  
Torre.prototype = new THREE.Mesh();
