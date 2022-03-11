import * as THREE from './js/three.module.js';
import { VRButton } from './js/VRButton.js';



// create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.xr.enabled = true;
document.body.appendChild( VRButton.createButton( renderer ) );
document.body.appendChild( renderer.domElement );


//create scene
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(0, 1.6, -5); //Move shape forward so we can see it

const geometry2 = new THREE.PlaneGeometry( 5, 5 );
const material2 = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry2, material2 );
plane.position.set(0, 0, -5); //Move shape forward so we can see it
plane.rotation.x = 1.57; // flip plane around x for half pi
scene.add( plane );
scene.add( cube );

//create viewer
const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 100 );
camera.position.set( 0, 1.6, 0);



renderer.setAnimationLoop( function () {

		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;

		renderer.render( scene, camera );
});

