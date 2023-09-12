import * as THREE from 'three';

let scene, camera, renderer, sphere;

function init() {
  // initialise la scene
  scene = new THREE.Scene();

  // camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // moteur de rendu
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('three-output').appendChild(renderer.domElement);

  // sphere
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);
}
