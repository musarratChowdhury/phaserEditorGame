
// You can write more code here

/* START OF COMPILED CODE */

class SceneOver extends Phaser.Scene {
	
	constructor() {
		super("SceneOver");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// endpage
		const endpage = this.add.image(496, 309, "endpage");
		endpage.scaleX = 1.4562106665596282;
		endpage.scaleY = 1.4562106665596282;
	}
	
	/* START-USER-CODE */
	
	// Write your code here
	
	create() {
	
		this.editorCreate();
	}
	
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
