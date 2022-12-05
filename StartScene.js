class StartScene extends Phaser.Scene {
	constructor() {
		super({ key: 'StartScene' })
	}

	create() {
		this.add.text(innerWidth/2 - 200, innerHeight/2 - 20, 'Click to start!', {fill: '#000000', fontSize: '40px'})
		this.input.on('pointerdown', () => {
			this.scene.stop('StartScene')
			this.scene.start('GameScene')
		})
	}
}

