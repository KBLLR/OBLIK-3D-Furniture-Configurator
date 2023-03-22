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
        
        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'OBLIKcube')
            {
                this.createTexturedCube();
            }
        })

        //const textureAssets = assets[0].items.filter((asset) => asset.type === 'texture');
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
        materials[1].blending = THREE.NormalBlending;
        materials[2].blending = THREE.NormalBlending;
        materials[3].blending = THREE.NormalBlending;
        materials[4].blending = THREE.NormalBlending;
        materials[5].blending = THREE.NormalBlending;
    
        // Create a cube geometry and apply the materials
        const geometry = new THREE.BoxGeometry();
        const cube = new THREE.Mesh(geometry, materials);
    
        this.scene.add(cube)
    }

    resize()
    {
    }

    update()
    {
    }

    destroy()
    {
    }
}