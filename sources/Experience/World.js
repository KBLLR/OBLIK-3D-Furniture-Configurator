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

        const textureAssets = assets[0].items.filter((asset) => asset.type === 'texture');
        this.resources.load(textureAssets);
      }

    
      createTexturedCube() {
        // Create materials for each face
        const materials = [
          new THREE.MeshBasicMaterial({ map: this.resources.items.OBLIKtexture01 }),
          new THREE.MeshBasicMaterial({ map: this.resources.items.OBLIKtexture02 }),
          new THREE.MeshBasicMaterial({ map: this.resources.items.OBLIKtexture03 }),
          new THREE.MeshBasicMaterial({ map: this.resources.items.OBLIKtexture04 }),
          new THREE.MeshBasicMaterial({ map: this.resources.items.OBLIKtexture05 }),
          new THREE.MeshBasicMaterial({ map: this.resources.items.OBLIKtexture06 }),
        ];
    
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