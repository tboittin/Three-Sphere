// Threejs
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

  // texture
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  const tailleCase = 64; // La taille de chaque case du damier
  const nbCases = canvas.width / tailleCase;

  for (let i = 0; i < nbCases; i++) {
    for (let j = 0; j < nbCases; j++) {
      if ((i + j) % 2 === 0) {
        ctx.fillStyle = 'white';
      } else {
        ctx.fillStyle = 'black';
      }
      ctx.fillRect(i * tailleCase, j * tailleCase, tailleCase, tailleCase);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);

  // sphere
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  renderer.render(scene, camera);
}

// rotation
function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;

  renderer.render(scene, camera);
}

//appels
init();
animate();
