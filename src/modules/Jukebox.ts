export class Jukebox {
  jukebox: Entity = new Entity()
  songLabel: Entity = new Entity()
  currSong: number = -1
  songArray = []

  position: Vector3;
  rotation: Quaternion
  scale: number;

  constructor(position: Vector3, rotation: Quaternion, scale: number) {
    this.position = position;
    this.rotation = rotation
    this.scale = scale;

    this.spawnJukebox();
    this.spawnSongLabel();
    this.createAudioComponents();
  }

  // Song List
  songs: {src: string, name: string}[] =
  [
    {src: "sounds/Silent Gloves - Arcturus.mp3", name: "Silent Gloves - Arcturus"}
  ];

  spawnJukebox() {
    // Jukebox
    this.jukebox.addComponent(new GLTFShape("models/1306 Record PLayer.gltf"))
    this.jukebox.addComponent(new Transform({
      position: this.position,
      rotation: this.rotation,
      scale: new Vector3(this.scale, this.scale, this.scale)
    }))
    this.jukebox.addComponent(new OnClick( e => {
      this.pressButton()
    }))
    engine.addEntity(this.jukebox)
  }

  spawnSongLabel() {
    // Song Label
    this.songLabel.addComponent(new Transform({
      position: new Vector3(42, 15, -1.5),
      rotation: Quaternion.Euler(0, 0 ,0),
      scale: Vector3(30,30,30)
    }))
    const text = new TextShape("")
    text.fontSize = 50
    text.hTextAlign = "left"
    text.color = Color3.White()
    this.songLabel.addComponent(text)
    this.songLabel.setParent(this.jukebox)
    engine.addEntity(this.songLabel)
  }

  createAudioComponents() {
    // Audio Components
    for (let i = 0; i < this.songs.length; i ++){
      this.songArray[i] = new Entity()
      this.songArray[i].addComponent(new Transform({
        position: new Vector3(-8, -10, 0)
      }))
      let song = new AudioClip(this.songs[i].src)
      let audioSource = new AudioSource(song)
      audioSource.playing = false
      this.songArray[i].addComponent(audioSource)
      this.songArray[i].setParent(this.jukebox)
      engine.addEntity(this.songArray[i])
    }
  }

  // Helper Functions
  pressButton() {
    this.songLabel.getComponent(TextShape).value = "Now Playing: " + this.nextSong()
    this.songArray[this.currSong].getComponent(AudioSource).playing = true
    for (let j = 0; j < this.songs.length; j ++){
      if (j !== this.currSong)
      this.songArray[j].getComponent(AudioSource).playing = false
    }
  }

  nextSong(){
    this.currSong = this.currSong >= this.songs.length-1 ? 0 : this.currSong+1;
    return this.songs[this.currSong].name
  }
}
