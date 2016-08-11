angular.module('threeQuestions').controller('render1Control', function(){
	var scene, camera, renderer, controls, geometry, material, mesh, cube, spotLight, particleSystem, particleCount, particle,particles, plane1, plane2, plane3, stop, backgroundCube, backgroundMaterial;
	var count = 0;


	function rain (event) {
				document.getElementById('rain').play();
			}

	function raindown(event) {
      $('#rain').animate({volume: .5}, 3000);
      }

	function rainout(event) {
				$('#rain').animate({volume: 0}, 5000);
			}

	function wind (event) {
			document.getElementById('wind').play();
		}

	function windout(event) {
			$('#wind').animate({volume: 0}, 3000);
			}

	function windin(event) {
      $('#wind').animate({volume: 1}, 3000);
      }

	var resetRender = function(){
		document.getElementById("threerain")
	    	.removeChild(document.getElementById("threerain").childNodes[0]); //need code to arrest the render
	    	// init();
	    	// animate();
				rainout();
				windout();
		};

	   var runCode = setInterval(function (){
	   count++;
	   console.log("scroll is " + window.document.body.scrollTop);// This gives us the position of the scroll in order to render Three.js
	   if(window.document.body.scrollTop > 39000) {
	        console.log("greater than 40000");
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

			raindown();
			rain();
			windin();
			wind();



	    var cubeGeometry = new THREE.BoxGeometry(1000,1000,1000);

	    var backgroundMaterial = new THREE.MeshBasicMaterial({
	    	color: 0xffffff,
	    	map: THREE.ImageUtils.loadTexture('images/page1/page1-bg.png'),
	    	transparent: false
	    });

	    backgroundCube = new THREE.Mesh(cubeGeometry, backgroundMaterial);

	    var planeGeometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);

	    var planeMaterial1 = new THREE.MeshBasicMaterial({
	    	color:0xffffff,
	        map: THREE.ImageUtils.loadTexture('images/page12/page12.png'),
	        transparent: false
		});

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

		var planeMaterial4 = new THREE.MeshBasicMaterial({
	    	color:0xffffff,
	        map: THREE.ImageUtils.loadTexture('images/page13-16/Page15.png'),
	        transparent: false
		});

		var planeMaterial5 = new THREE.MeshBasicMaterial({
	    	color:0xffffff,
	        map: THREE.ImageUtils.loadTexture('images/page13-16/Page16.png'),
	        transparent: false
		});

		var planeMaterial6 = new THREE.MeshBasicMaterial({
	    	color:0xffffff,
	        map: THREE.ImageUtils.loadTexture('images/page13-16/Page17.png'),
	        transparent: false
		});

		var planeMaterial7 = new THREE.MeshBasicMaterial({
	    	color:0xffffff,
	        map: THREE.ImageUtils.loadTexture('images/page13-16/Page18.png'),
	        transparent: false
		});

		var planeMaterial8 = new THREE.MeshBasicMaterial({
	    	color:0xffffff,
	        map: THREE.ImageUtils.loadTexture('images/page13-16/Page19.png'),
	        transparent: false
		});

		var planeMaterial9 = new THREE.MeshBasicMaterial({
	    	color:0xffffff,
	        map: THREE.ImageUtils.loadTexture('images/page13-16/Page20.png'),
	        transparent: false
		});

		var planeMaterial10 = new THREE.MeshBasicMaterial({
	    	color:0xffffff,
	        map: THREE.ImageUtils.loadTexture('images/page13-16/Page21.png'),
	        transparent: false
		});// need six more planes after this one.

		var planeMaterial11 = new THREE.MeshBasicMaterial({
	    	color:0xffffff,
	        map: THREE.ImageUtils.loadTexture('images/page13-16/Page22.png'),
	        transparent: false
		});

		var planeMaterial12 = new THREE.MeshBasicMaterial({
	    	color:0xffffff,
	        map: THREE.ImageUtils.loadTexture('images/page13-16/Page23.png'),
	        transparent: false
		});

		var planeMaterial13 = new THREE.MeshBasicMaterial({
	    	color:0xffffff,
	        map: THREE.ImageUtils.loadTexture('images/page13-16/Page24.png'),
	        transparent: false
		});

		var planeMaterial14 = new THREE.MeshBasicMaterial({
	    	color:0xffffff,
	        map: THREE.ImageUtils.loadTexture('images/page13-16/Page25.png'),
	        transparent: false
		});

		var planeMaterial15 = new THREE.MeshBasicMaterial({
	    	color:0xffffff,
	        map: THREE.ImageUtils.loadTexture('images/page13-16/Page26.png'),
	        transparent: false
		});

		var planeMaterial16 = new THREE.MeshBasicMaterial({
	    	color:0xffffff,
	        map: THREE.ImageUtils.loadTexture('images/page13-16/Page27.png'),
	        transparent: false
		});

		plane1 =  new THREE.Mesh(planeGeometry, planeMaterial1);
	    plane1.rotation.y = -0.00 * Math.PI;//plane tilt
	    plane1.position.z = -400;
	    plane1.receiveShadow = false;
	    scene.add(plane1);

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

	    plane4 =  new THREE.Mesh(planeGeometry, planeMaterial4);
	    plane4.rotation.y = -0.00 * Math.PI;//plane tilt
	    plane4.position.z = 300;
	    plane4.position.y = -800;
	    plane4.receiveShadow = false;
	    scene.add(plane4);

	    plane5 =  new THREE.Mesh(planeGeometry, planeMaterial5);
	    plane5.rotation.y = -0.00 * Math.PI;//plane tilt
	    plane5.position.z = 400;
	    plane5.position.y = 800;
	    plane5.receiveShadow = false;
	    scene.add(plane5);

	    plane6 =  new THREE.Mesh(planeGeometry, planeMaterial6);
	    plane6.rotation.y = -0.00 * Math.PI;//plane tilt
	    plane6.position.z = 600;
	    plane6.position.y = -800;
	    plane6.receiveShadow = false;
	    scene.add(plane6);

	    plane7 =  new THREE.Mesh(planeGeometry, planeMaterial7);
	    plane7.rotation.y = -0.00 * Math.PI;//plane tilt
	    plane7.position.z = 700;
	    plane7.position.y = 800;
	    plane7.receiveShadow = false;
	    scene.add(plane7);

	    plane8 =  new THREE.Mesh(planeGeometry, planeMaterial8);
	    plane8.rotation.y = -0.00 * Math.PI;//plane tilt
	    plane8.position.z = 1200;
	    plane8.position.y = -800;
	    plane8.receiveShadow = false;
	    scene.add(plane8);

	    plane9 =  new THREE.Mesh(planeGeometry, planeMaterial9);
	    plane9.rotation.y = -0.00 * Math.PI;//plane tilt
	    plane9.position.z = 1400;
	    plane9.position.y = 800;
	    plane9.receiveShadow = false;
	    scene.add(plane9);

	    plane10 =  new THREE.Mesh(planeGeometry, planeMaterial10);
	    plane10.rotation.y = -0.00 * Math.PI;//plane tilt
	    plane10.position.z = 1600;
	    plane10.position.y = -800;
	    plane10.receiveShadow = false;
	    scene.add(plane10);

	    plane11 =  new THREE.Mesh(planeGeometry, planeMaterial11);
	    plane11.rotation.y = -0.00 * Math.PI;//plane tilt
	    plane11.position.z = 1800;
	    plane11.position.y = 800;
	    plane11.receiveShadow = false;
	    scene.add(plane11);

	    plane12 =  new THREE.Mesh(planeGeometry, planeMaterial12);
	    plane12.rotation.y = -0.00 * Math.PI;//plane tilt
	    plane12.position.z = 2000;
	    plane12.position.y = -800;
	    plane12.receiveShadow = false;
	    scene.add(plane12);

	    plane13 =  new THREE.Mesh(planeGeometry, planeMaterial13);
	    plane13.rotation.y = -0.00 * Math.PI;//plane tilt
	    plane13.position.z = 2200;
	    plane13.position.y = 800;
	    plane13.receiveShadow = false;
	    scene.add(plane13);

	    plane14 =  new THREE.Mesh(planeGeometry, planeMaterial14);
	    plane14.rotation.y = -0.00 * Math.PI;//plane tilt
	    plane14.position.z = 2400;
	    plane14.position.y = -800;
	    plane14.receiveShadow = false;
	    scene.add(plane14);

	    plane15 =  new THREE.Mesh(planeGeometry, planeMaterial15);
	    plane15.rotation.y = -0.00 * Math.PI;//plane tilt
	    plane15.position.z = 2600;
	    plane15.position.y = 800;
	    plane15.receiveShadow = false;
	    scene.add(plane15);

	    plane16 =  new THREE.Mesh(planeGeometry, planeMaterial16);
	    plane16.rotation.y = -0.00 * Math.PI;//plane tilt
	    plane16.position.z = 2800;
	    plane16.position.y = -800;
	    plane16.receiveShadow = false;
	    scene.add(plane16);

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
     	console.log("camera is " + camera.position.z)
    	particleSystem.position.y -= 1.0;
    	particleSystem.position.x -= 0.5;

    	plane1.position.z += 0.10;

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
    	if(camera.position.z > 750){
    		plane4.position.y +=0.8;
    		plane4.position.z += 0.30;
    	}
    	if(camera.position.z > 900){
    		plane5.position.y -= .8;
    		plane5.position.z += 0.3;
    	}
    	if(plane5.position.y < 0){
    		plane5.position.y = 0;
    		plane5.position.z -= 0.20;
    	}
    	if(camera.position.z > 1000){
    		plane6.position.y += 0.8;
    		plane6.position.z += 0.20;
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

        if(camera.position.z < 3750){
	        renderer.render(scene, camera);
	        requestAnimationFrame( animate );
    	}else{
    		resetRender();
    	}
	};

});
