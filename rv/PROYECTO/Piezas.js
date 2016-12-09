//TORRE
function Torre(size,x,y){
  var marmol_negro = cargador.load('marmol_negro.jpg');
  THREE.Mesh.call(this, new THREE.BoxGeometry( size/10, size, size/2), new THREE.MeshPhongMaterial({map: marmol_negro}));
  this.size=size;
  this.position.x=x;
  this.position.z=y;
}  
Torre.prototype = new THREE.Mesh();

Environment.prototype.setMap= function(map){
  var _offset= Math.floor(map.length/2);
  for(var j=0; j<91; j++)
  for(var i=0; i<91; i++){
    if (map[i][j]==="t")
      this.add(new Torre(10,j-_offset,(i-_offset)));
    else if (map[i][j]==="n")
      this.add(new Torre(10,j-_offset,(i-_offset)));
    else if (map[i][j]==="b")
      this.add(new Torre(10,j-_offset,(i-_offset)));
  }
}

function setup(){
  THREE.ImageUtils.crossOrigin='';
  var mapa=new Array();
  mapa[0] ="x         x         x         x         x         x         x         x         x         x";
  mapa[1] ="                                                                                           ";
  mapa[2] ="                                                                                           ";
  mapa[3] ="                                                                                           ";
  mapa[4] ="                                                                                           ";
  mapa[5] ="                                                                                           ";
  mapa[6] ="                                                                                           ";
  mapa[7] ="                                                                                           ";
  mapa[8] ="                                                                                           ";
  mapa[9] ="                                                                                           ";
  mapa[10]="x         b         n         b         n         b         n         b         n         x";
  mapa[11]="                                                                                           ";
  mapa[12]="                                                                                           ";
  mapa[13]="                                                                                           ";
  mapa[14]="                                                                                           ";
  mapa[15]="                                                                                           ";
  mapa[16]="                                                                                           ";
  mapa[17]="                                                                                           ";
  mapa[18]="                                                                                           ";
  mapa[19]="                                                                                           ";
  mapa[20]="x         n         b         n         b         n         b         n         b         x";
  mapa[21]="                                                                                           ";
  mapa[22]="                                                                                           ";
  mapa[23]="                                                                                           ";
  mapa[24]="                                                                                           ";
  mapa[25]="                                                                                           ";
  mapa[26]="                                                                                           ";
  mapa[27]="                                                                                           ";
  mapa[28]="                                                                                           ";
  mapa[29]="                                                                                           ";
  mapa[30]="x         b         n         b         n         b         n         b         n         x";
  mapa[31]="                                                                                           ";
  mapa[32]="                                                                                           ";
  mapa[33]="                                                                                           ";
  mapa[34]="                                                                                           ";
  mapa[35]="                                                                                           ";
  mapa[36]="                                                                                           ";
  mapa[37]="                                                                                           ";
  mapa[38]="                                                                                           ";
  mapa[39]="                                                                                           ";
  mapa[40]="x         n         b         n         b         n         b         n         b         x";
  mapa[41]="                                                                                           ";
  mapa[42]="                                                                                           ";
  mapa[43]="                                                                                           ";
  mapa[44]="                                                                                           ";
  mapa[45]="                                                                                           ";
  mapa[46]="                                                                                           ";
  mapa[47]="                                                                                           ";
  mapa[48]="                                                                                           ";
  mapa[49]="                                                                                           ";
  mapa[50]="x         b         n         b         n         b         n         b         n         x";
  mapa[51]="                                                                                           ";
  mapa[52]="                                                                                           ";
  mapa[53]="                                                                                           ";
  mapa[54]="                                                                                           ";
  mapa[55]="                                                                                           ";
  mapa[56]="                                                                                           ";
  mapa[57]="                                                                                           ";
  mapa[58]="                                                                                           ";
  mapa[59]="                                                                                           ";
  mapa[60]="x         n         b         n         b         n         b         n         b         x";
  mapa[61]="                                                                                           ";
  mapa[62]="                                                                                           ";
  mapa[63]="                                                                                           ";
  mapa[64]="                                                                                           ";
  mapa[65]="                                                                                           ";
  mapa[66]="                                                                                           ";
  mapa[67]="                                                                                           ";
  mapa[68]="                                                                                           ";
  mapa[69]="                                                                                           ";
  mapa[70]="x         b         n         b         n         b         n         b         n         x";
  mapa[71]="                                                                                           ";
  mapa[72]="                                                                                           ";
  mapa[73]="                                                                                           ";
  mapa[74]="                                                                                           ";
  mapa[75]="                                                                                           ";
  mapa[76]="                                                                                           ";
  mapa[77]="                                                                                           ";
  mapa[78]="                                                                                           ";
  mapa[79]="                                                                                           ";
  mapa[80]="x         n         b         n         b         n         b         n         b         x";
  mapa[81]="                                                                                           ";
  mapa[82]="                                                                                           ";
  mapa[83]="                                                                                           ";
  mapa[84]="                                                                                           ";
  mapa[85]="                                                                                           ";
  mapa[86]="                                                                                           ";
  mapa[87]="                                                                                           ";
  mapa[88]="                                                                                           ";
  mapa[89]="                                                                                           ";
  mapa[90]="x         x         x         x         x         x         x         x         x         x";
  
  environment = new Environment();
  environment.setMap(mapa);
}
