import * as THREE from 'three';
// Create the scene
const scene = new THREE.Scene();
// Create the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// Create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Criate a square
const square = new Square(scene, 2, 2);
square.insertToScene();
//scene.add(square);

// Move the camera away from the square
camera.position.z = 5;

// Render the scene
function render() 
{
  requestAnimationFrame(render);
  square.update();
  renderer.render( scene, camera );
}
render();