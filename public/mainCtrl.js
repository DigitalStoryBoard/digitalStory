angular.module('threeQuestions').controller('mainCtrl', function($scope, mainServ){

    $scope.comments = ["comment 1", "comment 1", "comment 1", "comment 1", "comment 1", "comment 1", "comment 1"];

var scene, camera, renderer;
var geometry, material, mesh, cube, spotLight, particleSystem, particleCount, particle, particles;
var loader = new THREE.TextureLoader();

init();
animate();
function init() {
 	
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x8d8d8d);
    console.log(scene)
 
    camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 400;
    camera.lookAt (scene.position);

    var planeGeometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);

    var planeMaterial = new THREE.MeshPhongMaterial({color:0xffffff,
    	map: THREE.ImageUtils.loadTexture('images/page18/page18.png'),
    	// blending: THREE.AdditiveBlending,
    	transparent: false
});
    var planeMaterial2 = new THREE.MeshPhongMaterial({color:0xffffff,
    	map: THREE.ImageUtils.loadTexture('images/page19/page19.png'),
    	// blending: THREE.AdditiveBlending,
    	transparent: false
});
    var plane =  new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.y = .10 *Math.PI;
    plane.receiveShadow = false;
    scene.add(plane);							// commented out for debugging **************************

    var plane2 =  new THREE.Mesh(planeGeometry, planeMaterial2);
    plane2.rotation.y = -.10 * Math.PI;
    // plane2.position.x = 500;
    plane2.position.z = 900;
    plane2.receiveShadow = false;
    scene.add(plane2);
 	
 	var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.castShadow = false;
    spotLight.position.x = 7;
    spotLight.position.y = 10;
    spotLight.position.z = 5;
    scene.add(spotLight);

    var light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    //************************* Particle set up for Rain **********************
    //*************************************************************************

    particleCount = 180000;
    particles = new THREE.Geometry()
    var pMaterial = new THREE.PointsMaterial({
    	color: 0xffffff,
    	size: 1,
    	map: THREE.ImageUtils.loadTexture('images/rain2.png'),
    	transparent: true
    	
    });

    // individual particles

    for (var p = 0; p < particleCount; p++){
    	var pX = Math.random() * 500 - 250;
    	var pY = Math.random() * 500 - 250;
    	var pZ = Math.random() * 2000 - 5;
    	particle = new THREE.Vector3( pX, pY, pZ );
    	particle.velocity = new THREE.Vector3(0, -Math.random(), 0);
    	//add paticles to geometry
    	particles.vertices.push(particle);
    }

    //create the particle system **************
        particleSystem = new THREE.Points(particles, pMaterial);
    	particleSystem.sortParticles = true;
    	
    //add to the scene
    scene.add(particleSystem);
    









    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    renderer.shadowMapHard = true;
 
    // document.body.appendChild( renderer.domElement );
    document.getElementById("threerain").appendChild( renderer.domElement );
 
}
 
function animate() {
 
    requestAnimationFrame( animate );
    
    	camera.position.z += 0.30;

    	particleSystem.position.y -= 1.0;
    	particleSystem.position.x -= 0.3;
    	if (particleSystem.position.y < -201){
    		particleSystem.position.y = 200;
    	}
    	if (particleSystem.position.x < -201){
    		particleSystem.position.x = 200;
    	}  	
    	particleSystem.geometry.verticesNeedUpdate = true;
   
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.02; 	
    //console.log(camera.position.z);
    // if(camera.position.z >= 450){
    // 	camera.rotation.z += 0.5;
    // };
    //camera.position.z -= 0.10
    //console.log(camera.position.z);
	//camera.position.x += 1.5;
    //camera.position.y -= 1.5;
    //camera.position.z += 0.10;
    // for (var z = 100; z>0; z -= 0.10){
    // 	camera.position.z = z;
    // }
 
    renderer.render( scene, camera );
};



});