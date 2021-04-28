import { CGFobject } from '../lib/CGF.js';
import { MyRock } from './MyRock.js'

export class MyRockSet extends CGFobject {

    constructor(scene, numRocks) {
        super(scene);
        this.init(numRocks)
    }

    init(numRocks) {
        // Right now, rocks are floating and possibly overlapping [FIX]
        this.rocks = [];
        for (let i = 0; i < numRocks; ++i) {
            this.rocks.push({
                orientation: Math.floor(Math.random() * Math.PI),
                posX: Math.random() * 2 - 1,
                posZ: Math.random() * 2 - 1,  // Y is always 0
                scaleX: Math.random() * 0.19 + 0.01,
                scaleY: Math.random() * 0.19 + 0.01,
                scaleZ: Math.random() * 0.19 + 0.01,
                object: new MyRock(this.scene, 16, 8)
            });
        }
    }

    display() {
        this.scene.pushMatrix();
        this.scene.rockMaterial.apply();

        this.rocks.forEach(rock => {
            this.scene.translate(rock.posX, 0, rock.posZ);
            this.scene.scale(rock.scaleX, rock.scaleY, rock.scaleZ);
            this.scene.rotate(rock.orientation, 0, 1, 0);
            rock.object.display();

            this.scene.popMatrix();
            this.scene.pushMatrix();
        });

        this.scene.defaultAppearance.apply();
    }
}
