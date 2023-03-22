import * as THREE from 'three'
import Experience from './Experience.js'
import Resources from './Utils/Loader.js';
import assets from './assets.js';

export default class World
{
    constructor(_options)
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.cube = null;
        
        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'OBLIKcube')
            {
                this.createTexturedCube();
            }
        })
    }

    createTexturedCube() {
      // Create materials for each face
      const materials = [
        new THREE.MeshBasicMaterial({ map: this.resources.items.OBLIKtexture01, transparent: true, opacity: 1 }),
        new THREE.MeshBasicMaterial({ map: this.resources.items.OBLIKtexture02, transparent: true, opacity: 1 }),
        new THREE.MeshBasicMaterial({ map: this.resources.items.OBLIKtexture03, transparent: true, opacity: 1 }),
        new THREE.MeshBasicMaterial({ map: this.resources.items.OBLIKtexture04, transparent: true, opacity: 1 }),
        new THREE.MeshBasicMaterial({ map: this.resources.items.OBLIKtexture05, transparent: true, opacity: 1 }),
        new THREE.MeshBasicMaterial({ map: this.resources.items.OBLIKtexture06, transparent: true, opacity: 1 }),
      ];

      materials[0].blending = THREE.NormalBlending;
  
      // Create a cube geometry and apply the materials
      const geometry = new THREE.BoxGeometry();
      this.cube = new THREE.Mesh(geometry, materials);

      // Position the cube
      this.cube.position.set(0, 0, 0)  // x, y, z
      this.cube.scale.set(6, 6, 6)    // x, y, z
      
      // Add the cube to the scene
      this.scene.add(this.cube)
    }

    resize()
    {
    }

    update()
    {
      if (this.cube) {
        //this.cube.rotation.x += 0.001;
        this.cube.rotation.y += 0.001;
      }
    }

    destroy()
    {
    }
}