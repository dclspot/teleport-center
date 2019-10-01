import {Jukebox} from 'modules/Jukebox';

class RotatorSystem {
  // this group will contain every entity that has a Transform component
  group = engine.getComponentGroup(Transform)

  update(dt: number) {
    // iterate over the entities of the group
    for (let entity of this.group.entities) {
      // get the Transform component of the entity
      const transform = entity.getComponent(Transform)

      // mutate the rotation
      transform.rotate(Vector3.Up(), dt * 10)
    }
  }
}

// Add a new instance of the system to the engine
engine.addSystem(new RotatorSystem())

//Moon
const moon = new Entity();
moon.addComponent(new SphereShape)
const moonTexture = new Texture("models/textures/perlinGreen.png")
const moonMaterial = new BasicMaterial()
moonMaterial.texture = moonTexture
moon.addComponent(moonMaterial)

moon.addComponent(new Transform({
position: new Vector3(23.4,5.5,-9),
scale: new Vector3(.9,.9,.9)
}))
engine.addEntity(moon)

//perlinSphere
const perlinSphere = new Entity();
perlinSphere.addComponent(new SphereShape)
const perlinTexture = new Texture("models/textures/perlin.png")
const perlinMaterial = new BasicMaterial()
perlinMaterial.texture = perlinTexture
perlinSphere.addComponent(perlinMaterial)

perlinSphere.addComponent(new Transform({
position: new Vector3(23.4,10.5,-9),
scale: new Vector3(.9,.9,.9),
}))
engine.addEntity(perlinSphere)

//fallSphere
const fallSphere = new Entity();
fallSphere.addComponent(new SphereShape)
const fallTexture = new Texture("models/textures/falls.png")
const fallMaterial = new BasicMaterial()
fallMaterial.texture = fallTexture
fallSphere.addComponent(fallMaterial)

fallSphere.addComponent(new Transform({
position: new Vector3(23.4,15.5,-9),
scale: new Vector3(.9,.9,.9),
}))
engine.addEntity(fallSphere)


//perlinwhitesphere
const perlinwhitesphere = new Entity();
perlinwhitesphere.addComponent(new SphereShape)
const perlinwhiteTexture = new Texture("models/textures/perlinwhite.png")
const perlinwhiteMaterial = new BasicMaterial()
perlinwhiteMaterial.texture = perlinwhiteTexture
perlinwhitesphere.addComponent(perlinwhiteMaterial)

perlinwhitesphere.addComponent(new Transform({
position: new Vector3(23.4,20.1,-9),
scale: new Vector3(.9,.9,.9)
}))
engine.addEntity(perlinwhitesphere)

//sphere1
const sphere1 = new Entity();
sphere1.addComponent(new SphereShape)
const sphere1Texture = new Texture("models/textures/wisp.png")
const sphere1Material = new BasicMaterial()
sphere1Material.texture = sphere1Texture
sphere1.addComponent(sphere1Material)

sphere1.addComponent(new Transform({
position: new Vector3(23.4,20.2,6),
scale: new Vector3(.9,.9,.9)
}))
engine.addEntity(sphere1)

//sphere2
const sphere2 = new Entity();
sphere2.addComponent(new SphereShape)
const sphere2Texture = new Texture("models/textures/perlinDark.png")
const sphere2Material = new BasicMaterial()
sphere2Material.texture = sphere2Texture
sphere2.addComponent(sphere2Material)

sphere2.addComponent(new Transform({
position: new Vector3(23.4,15.5,6),
scale: new Vector3(.9,.9,.9)
}))
engine.addEntity(sphere2)

///sphere3
const sphere3 = new Entity();
sphere3.addComponent(new SphereShape)
const sphere3Texture = new Texture("models/textures/synthfloor.png")
const sphere3Material = new BasicMaterial()
sphere3Material.texture = sphere3Texture
sphere3.addComponent(sphere3Material)

sphere3.addComponent(new Transform({
position: new Vector3(23.4,10.5,6),
scale: new Vector3(.9,.9,.9),
}))
engine.addEntity(sphere3)

///sphere4
const sphere4 = new Entity();
sphere4.addComponent(new SphereShape)
const sphere4Texture = new Texture("models/textures/explode.png")
const sphere4Material = new BasicMaterial()
sphere4Material.texture = sphere4Texture
sphere4.addComponent(sphere4Material)

sphere4.addComponent(new Transform({
position: new Vector3(23.4,5.5,6),
scale: new Vector3(.9,.9,.9)
}))
engine.addEntity(sphere4)

///  Mystic Orb
const mystic = new Entity()
mystic.addComponent(new GLTFShape('models/mystic.gltf'));
mystic.addComponent(new Transform({
  position: new Vector3(23.4,2,6),
  scale: new Vector3(0.011,0.011,0.011)
}))
engine.addEntity(mystic)

/// Volcano orb
const volcano = new Entity()
volcano.addComponent(new GLTFShape("models/volcano.gltf"));
volcano.addComponent(new Transform({
  position: new Vector3(60,20,-1.5),
  scale: new Vector3(0.75,0.75,0.75)
}))
engine.addEntity(volcano)


/// Japanese Orb
const japanese = new Entity()
japanese.addComponent(new GLTFShape('models/japanese.gltf'));
japanese.addComponent(new Transform({
  position: new Vector3(50,20,-1.5),
  scale: new Vector3(0.75,0.75,0.75)
}))
engine.addEntity(japanese)

/// Realm Orb
const realm = new Entity()
realm.addComponent(new GLTFShape("models/realm.gltf"));
realm.addComponent(new Transform({
  position: new Vector3(40,20,-1.5),
  scale: new Vector3(0.75,0.75,0.75)
}))
engine.addEntity(realm)

/// Kingdom Orb
const kingdom = new Entity()
kingdom.addComponent(new GLTFShape("models/kingdom.gltf"));
kingdom.addComponent(new Transform({
  position: new Vector3(30,20,-1.5),
  scale: new Vector3(0.75,0.75,0.75)
}))
engine.addEntity(kingdom)

/// Stone Orb
const stone = new Entity()
stone.addComponent(new GLTFShape('models/stone.gltf'));
stone.addComponent(new Transform({
  position: new Vector3(30,13,-1.5),
  scale: new Vector3(0.75,0.75,0.75)
}))
engine.addEntity(stone)

///  Uni Orb
const uni = new Entity()
uni.addComponent(new GLTFShape('models/uni.gltf'));
uni.addComponent(new Transform({
  position: new Vector3(40,14.75,-1.5),
  scale: new Vector3(2.5,2.5,2.5)
}))
engine.addEntity(uni)

///  Snow Orb
const snow = new Entity()
snow.addComponent(new GLTFShape('models/snow.gltf'));
snow.addComponent(new Transform({
  position: new Vector3(50,14.75,-1.5),
  scale: new Vector3(2.5,2.5,2.5)
}))
engine.addEntity(snow)

///  Skyball Orb
const skyball = new Entity()
skyball.addComponent(new GLTFShape('models/skyball.gltf'));
skyball.addComponent(new Transform({
  position: new Vector3(60,15,-1.5),
  scale: new Vector3(.2,.2,.2)
}))
engine.addEntity(skyball)


/// Frame1 (redMaterial)
const redMaterial = new Material()
redMaterial.albedoColor = Color3.FromHexString('#5c5c8a')
redMaterial.metallic = 0.9
redMaterial.roughness = 0.1

let frame1 = new Entity();
frame1.addComponent(redMaterial);
frame1.addComponent(new BoxShape);
frame1.addComponent(new Transform({
  position: new Vector3(75.5,3.5,-1.5),
  scale: new Vector3(.1,3,6),
  rotation: new Vector3(90,0,0)
}))
engine.addEntity(frame1)

/// Art1
let art1 = new Entity()
art1.addComponent(new PlaneShape)

const art1Texture = new Texture("models/textures/perlinwhite.png")
const art1Material = new BasicMaterial()
art1Material.texture = art1Texture
art1.addComponent(art1Material)
art1.addComponent(new Transform({
  position: new Vector3(75.3,3.5,-1.5),
  scale: new Vector3(5.8,2.8,1),
  rotation: new Vector3(90,0,90)
  }))
engine.addEntity(art1)

///Frame2 (purpleMaterial)
const purpleMaterial = new Material()
purpleMaterial.albedoColor = Color3.FromHexString("#5c5c8a")
purpleMaterial.metallic = 0.9
purpleMaterial.roughness = 0.1

let frame2 = new Entity();
frame2.addComponent(purpleMaterial);
frame2.addComponent(new BoxShape);
frame2.addComponent(new Transform({
  position: new Vector3(75.5,8,-1.5),
  scale: new Vector3(.1,3,6),
  rotation: new Vector3(90,0,0)
}))
engine.addEntity(frame2)


/// Art2
let art2 = new Entity()
art2.addComponent(new PlaneShape)

const art2Texture = new Texture("models/textures/perlin.png")
const art2Material = new BasicMaterial()
art2Material.texture = art2Texture
art2.addComponent(art2Material)
art2.addComponent(new Transform({
  position: new Vector3(75.3,8,-1.5),
  scale: new Vector3(5.8,2.8,1),
  rotation: new Vector3(90,0,90)
  }))
engine.addEntity(art2)

///Frame3 (greenMaterial)
const greenMaterial = new Material()
greenMaterial.albedoColor = Color3.FromHexString("#5c5c8a")
greenMaterial.metallic = 0.9
greenMaterial.roughness = 0.1

let frame3 = new Entity();
frame3.addComponent(greenMaterial);
frame3.addComponent(new BoxShape);
frame3.addComponent(new Transform({
  position: new Vector3(75.5,13,-1.5),
  scale: new Vector3(.1,3,6),
  rotation: new Vector3(90,0,0)
}))
engine.addEntity(frame3)

/// Art3
let art3 = new Entity()
art3.addComponent(new PlaneShape)

const art3Texture = new Texture('models/textures/perlinGreen.png')
const art3Material = new BasicMaterial()
art3Material.texture = art3Texture
art3.addComponent(art3Material)
art3.addComponent(new Transform({
  position: new Vector3(75.3,13,-1.5),
  scale: new Vector3(5.8,2.8,1),
  rotation: new Vector3(90,0,90)
  }))
engine.addEntity(art3)

///Frame4 (yellowMaterial)
const yellowMaterial = new Material()
yellowMaterial.albedoColor = Color3.FromHexString('#5c5c8a')
yellowMaterial.metallic = 0.9
yellowMaterial.roughness = 0.1

let frame4 = new Entity();
frame4.addComponent(yellowMaterial);
frame4.addComponent(new BoxShape);
frame4.addComponent(new Transform({
  position: new Vector3(75.5,17.4,-1.5),
  scale: new Vector3(.1,3,6),
  rotation: new Vector3(90,0,0)
}))
engine.addEntity(frame4)

/// Art4
let art4 = new Entity()
art4.addComponent(new PlaneShape)

const art4Texture = new Texture('models/textures/wisp.png')
const art4Material = new BasicMaterial()
art4Material.texture = art4Texture
art4.addComponent(art4Material)
art4.addComponent(new Transform({
  position: new Vector3(75.3,17.4,-1.5),
  scale: new Vector3(5.8,2.8,1),
  rotation: new Vector3(90,0,90)
  }))
engine.addEntity(art4)

///Frame5 (blueMaterial)
const blueMaterial = new Material()
blueMaterial.albedoColor = Color3.FromHexString('#5c5c8a')
blueMaterial.metallic = 0.9
blueMaterial.roughness = 0.1

let frame5 = new Entity();
frame5.addComponent(blueMaterial);
frame5.addComponent(new BoxShape);
frame5.addComponent(new Transform({
  position: new Vector3(75.5,24,-1.5),
  scale: new Vector3(.1,3,6),
  rotation: new Vector3(90,0,0)
}))
engine.addEntity(frame5)

/// Art5
let art5 = new Entity()
art5.addComponent(new PlaneShape)

const art5Texture = new Texture('models/textures/perlinDark.png')
const art5Material = new BasicMaterial()
art5Material.texture = art5Texture
art5.addComponent(art5Material)
art5.addComponent(new Transform({
  position: new Vector3(75.3,24,-1.5),
  scale: new Vector3(5.8,2.8,1),
  rotation: new Vector3(90,0,90)
  }))
engine.addEntity(art5)


/// building
let building = new Entity();
building.addComponent(new GLTFShape('models/brickbuilding.glb'))
building.addComponent(new Transform({
position: new Vector3(36.5,26.4,3.5),
scale: new Vector3(16.5,17,13.2),
rotation: new Vector3(90,0,90)
}))
engine.addEntity(building);


//ELEVATOR

@Component('Movement')
export class PingPongMovement {
  waypoints: Vector3[]
  currentWaypoint: number = 0
  targetWaypoint: number = 0
  lerpTime: number = 0
  speed: number = 3
  goingForward: boolean = true

  constructor(newPath: Vector3[], speed: number) {
    this.waypoints = newPath
    this.speed = speed
  }
}

let movingCubes = engine.getComponentGroup(PingPongMovement)


///  ELEVATORS & PATH FOLLOWING PLATFORMS


export class PingPongMovementSystem implements ISystem
{
  update(dt: number) {
    for (let cubeEntity of movingCubes.entities) {
      let transform = cubeEntity.getComponent(Transform)
      let movementData = cubeEntity.getComponent(PingPongMovement)

      if(movementData.speed == 0 || movementData.waypoints.length < 2) continue

      movementData.lerpTime += dt * movementData.speed

      let reachedDestination = movementData.lerpTime >= 1
      if(reachedDestination){
        movementData.lerpTime = 1
      }

      transform.position = Vector3.Lerp(movementData.waypoints[movementData.currentWaypoint], movementData.waypoints[movementData.targetWaypoint], movementData.lerpTime)

      if(reachedDestination) {
        movementData.lerpTime = 0
        movementData.currentWaypoint = movementData.targetWaypoint

        if(this.shouldSwitchDirection(movementData)) {
          movementData.goingForward = !movementData.goingForward
        }

        movementData.targetWaypoint = movementData.currentWaypoint + (movementData.goingForward ? 1 : -1)
      }
    }
  }

  shouldSwitchDirection (movementData: PingPongMovement) {
    return  (movementData.goingForward && movementData.currentWaypoint == movementData.waypoints.length - 1) ||
            (!movementData.goingForward && movementData.currentWaypoint == 0)
  }
}
let movementSystem = new PingPongMovementSystem()
engine.addSystem(movementSystem)



export function configureShapeEntityPositions(waypointsPath: Vector3[], speed: number, shape: Shape) : Entity {
  let entity = new Entity()
  entity.addComponentOrReplace(shape)
  entity.addComponentOrReplace(
    new Transform({
      position: waypointsPath[0]
    }))

  entity.addComponentOrReplace(new PingPongMovement(waypointsPath, speed))

  engine.addEntity(entity)
  return entity
}
let elevatorEntity = configureShapeEntityPositions([new Vector3(65, 0.2, -1.5) , new Vector3(65,24,-1.5)], 0.1, new BoxShape();
elevatorEntity.getComponent(Transform).scale = new Vector3(4, 0.25, 4);
elevatorEntity.addComponent(greenMaterial)



// Jukebox
const jukebox = new Jukebox(new Vector3(25, 4, -1.5), Quaternion.Euler(0, 270, 0), .02)
/// Perimeter Walls
// let wallb = new Entity();
// wallb.addComponent(new BoxShape);
// wallb.addComponent(new Transform({
//   position: new Vector3(79,0,0),
//   scale: new Vector3(.3,10,30),
//   rotation: new Vector3(0,0,0)
//
// }))
// engine.addEntity(wallb)
//
// let wallc = new Entity();
// wallc.addComponent(new BoxShape);
// wallc.addComponent(new Transform({
//   position: new Vector3(40,0,15),
//   scale: new Vector3(.3,10,78),
//   rotation: new Vector3(90,0,90)
//
// }))
// engine.addEntity(wallc)
//
// let walld = new Entity();
// walld.addComponent(new BoxShape);
// walld.addComponent(new Transform({
//   position: new Vector3(40,0,-15),
//   scale: new Vector3(.3,1,78),
//   rotation: new Vector3(90,0,90)
//
// }))
// engine.addEntity(walld)
