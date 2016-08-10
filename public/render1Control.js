angular.module('threeQuestions').controller('render1Control', function(){
	var scene, camera, renderer, controls, geometry, material, mesh, cube, spotLight, particleSystem, particleCount, particle,particles, plane1, plane2, plane3, stop;
	var count = 0;

	var resetRender = function(){
		// need code to arrest the render
		};
	
	   var runCode = setInterval(function (){
	   count++;
	   //console.log("scroll is" + window.document.body.scrollTop);// This gives us the position of the scroll in order to render Three.js
	   if(window.document.body.scrollTop > 20020) {
	        console.log("greater than 20000");
	        init();
	        animate();
	        stop();
	    }
	}, 1000);

	stop = function(){
	    console.log("stopping");
	    clearInterval(runCode);
	};

	var init = function() {
		scene = new THREE.Scene();
	    camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 1000 );
	    camera.position.x = 0;
	    camera.position.y = 0;
	    camera.position.z = 0;
	    camera.lookAt (scene.position);

	    var planeGeometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);

	    var planeMaterial2 = new THREE.MeshBasicMaterial({
	    	color:0xffffff,
	    	map: THREE.ImageUtils.loadTexture('images/page18/page18.png'),
	     	transparent: false
		});
	    
	    var planeMaterial3 = new THREE.MeshBasicMaterial({
	    	color:0xffffff,
	     	map: THREE.ImageUtils.loadTexture('images/page19/page19.png'),
	      	transparent: false
		});

	    var planeMaterial1 = new THREE.MeshBasicMaterial({
	    	color:0xffffff,
	        map: THREE.ImageUtils.loadTexture('images/page12/page12.png'),
	        transparent: false
		});

	    plane2 =  new THREE.Mesh(planeGeometry, planeMaterial2);
	    plane2.rotation.y = 0.03 *Math.PI;//plane tilt
	    plane2.position.x = 100;
	    plane2.position.y = -800;
	    plane2.position.z = 0;
	    plane2.receiveShadow = false;
	    scene.add(plane2);
	        
	    plane3 =  new THREE.Mesh(planeGeometry, planeMaterial3);
	    plane3.rotation.y = -0.03 * Math.PI;//plane tilt
	    plane3.position.z = 200;
	    plane3.position.y = 800;
	    plane3.receiveShadow = false;
	    scene.add(plane3);

	    plane1 =  new THREE.Mesh(planeGeometry, planeMaterial1);
	    plane1.rotation.y = -0.00 * Math.PI;//plane tilt
	    plane1.position.z = -400;
	    plane1.receiveShadow = false;
	    scene.add(plane1);

	 	spotLight = new THREE.SpotLight(0xffffff);
	    spotLight.castShadow = false;
	    spotLight.position.x = 7;
	    spotLight.position.y = 10;
	    spotLight.position.z = 5;
	    // scene.add(spotLight);

	    light = new THREE.AmbientLight(0xffffff);
	    scene.add(light);

	    renderer = new THREE.WebGLRenderer();
	    renderer.setSize( window.innerWidth, window.innerHeight );
	    renderer.setClearColor(0xffffff);
	    renderer.shadowMap.enabled = true;
	    renderer.shadowMapHard = true;
	    document.getElementById("threerain")
	    	.appendChild( renderer.domElement );

	    //************************* Particle set up for Rain **********************
	    //*************************************************************************

	    particleCount = 500000;
	    particles = new THREE.Geometry();
	    pMaterial = new THREE.PointsMaterial({
	    	color: 0xffffff,
	    	size: 1,
	    	map: THREE.ImageUtils.loadTexture('images/rain2.png'),
	    	transparent: true,
	        opacity: 0.8
	    });

	    // individual particles

	    for (var p = 0; p < particleCount; p++){
	    	var pX = Math.random() * 500 - 250;
	    	var pY = Math.random() * 500 - 250;
	    	var pZ = Math.random() * 2000 - 5;
	    	particle = new THREE.Vector3( pX, pY, pZ );
	    	particle.velocity = new THREE.Vector3(0, -Math.random(), 0);
	    	//add particles to geometry
	    	particles.vertices.push(particle);
	    }

	    //create the particle system **************

        particleSystem = new THREE.Points(particles, pMaterial);
    	particleSystem.sortParticles = true;

	    //add to the scene

	    scene.add(particleSystem);

	 	//************************* Particle set up for Leaves **********************
	    //*************************************************************************

	    leafCount = 20;
	    leaves = new THREE.Geometry();
	    var leafMaterial = new THREE.PointsMaterial({
	        color: 0xffffff,
	        size: 10,
	        map: THREE.ImageUtils.loadTexture('images/leaf2.png'),
	        transparent: true,
	        opacity: 1.0

	    });

	    // individual  leaves

	    for (var p = 0; p < leafCount; p++){
	        var leafX = Math.random() * 4000 - 1;
	        var leafY = Math.random() * 100 - 20;
	        var leafZ = Math.random() * 200 - 100;
	        leaf = new THREE.Vector3( leafX, leafY, leafZ );
	        leaf.velocity = new THREE.Vector3(-Math.random() * 2, -Math.random() * 5, Math.random());
	        //add leaves to geometry
	        leaves.vertices.push(leaf);
	        //console.log(leaf);

	    }

	    //create the particle system **************

        leafSystem = new THREE.Points(leaves, leafMaterial);
        leafSystem.sortParticles = true;
        leafSystem.position.z = -400;
        //console.log(leafSystem);
	    //add to the scene
	    scene.add(leafSystem);
	    
	};
		var animate = function () {
		
	    

     	camera.position.z += 0.20;
     	console.log("camera is" + camera.position.z)
    	particleSystem.position.y -= 1.0;
    	particleSystem.position.x -= 0.5;

    	if(camera.position.z >= 150){
    		plane2.position.y += 1.0;
    	}
    	if(plane2.position.y > -50){
    			plane2.position.y = -50;

    	}
    	if(camera.position.z > 450){
    		plane3.position.y -= 1.0;
    	}
    	if(plane3.position.y < 0){
    		plane3.position.y = 0;
    	}

    	if (particleSystem.position.y < -201){
    		particleSystem.position.y = 200;
    	}

    	if (particleSystem.position.x < -201){
    		particleSystem.position.x = 200;
    	}

    	particleSystem.geometry.verticesNeedUpdate = true;
        //leafSystem.position.y += 0.05;
        leafSystem.position.z += 0.35;
        leafSystem.position.x -= 5.0;
        leafSystem.rotation.x -= 0.1;
        // leafSystem.rotation.y += 0.2;
        // leafSystem.rotation.z -= 0.2;
        if(leafSystem.position.x < -5000){
            leafSystem.position.x = 700;
        }
       
        if(camera.position.z < 750){
	        renderer.render(scene, camera);
	        requestAnimationFrame( animate );
    	}else{
    		resetRender();
    	}
	};

});