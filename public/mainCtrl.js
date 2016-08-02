angular.module('threeQuestions').controller('mainCtrl', function($scope, mainServ){

var scene, camera, renderer;
var geometry, material, mesh, cube;
 
init();
animate();
 
function init() {
 	
    scene = new THREE.Scene();
 
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
    camera.position.x = 50;
    camera.position.y = 50;
    camera.position.z = 50;
    camera.lookAt (scene.position);

    var planeGeometry = new THREE.PlaneGeometry(30,30,30);
    var planeMaterial = new THREE.MeshBasicMaterial({color:0xffffff});
    var plane =  new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -.5*Math.PI;
    plane.receiveShadow = true;
    scene.add(plane);
 
    geometry = new THREE.BoxGeometry( 5, 5, 5 );
    material = new THREE.MeshLambertMaterial ({color:0xff3300});
 	cube = new THREE.Mesh( geometry, material );
 	cube.position.x = 0;
 	cube.position.y = 4;
 	cube.position.z = 0;
    scene.add( cube );

    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.castShadow = true;
    spotLight.position.set (15, 30, 50);
    scene.add(spotLight);

 	
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    renderer.shadowMapHard = true;
 
    document.body.appendChild( renderer.domElement );
 
}
 
function animate() {
 
    requestAnimationFrame( animate );
 
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.02;
 
    renderer.render( scene, camera );
 
}
	
	
});