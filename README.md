# Pong Game

A basic pong game using SVGs.

## Setup

**Install dependencies:**

`> npm i`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> npm run build`

## Keys

**Player 1:**
* a: up
* z: down
* s: Fire

**Player 2:**
* ▲ : up
* ▼: down
* ArrowRigth: Fire


**Extra Information:**

*Trigger multiple balls*

* A second ball will appear as soon as one player scores the first goal. 
* A third ball will appear as soon as one player scores 5 goals. This ball will reduce 
the score of the player if the player let it pass. 
* this ball are going to be created on the Game file. 

*Create balls with special effects (different speeds, sizes, effects, etc.)*

* Second and third ball have different radius.
* Special effects were created using the position of the ball and the position of each paddle if the ball touches the paddle at the corner (top and bottom) the ball will suffer a different effect on it. For instead, it will change the vx a vy to the contrary value (+1 or -1). Also, it will change the colour of the ball. 
* This effect was created on the ball file

*Fire a shot from a paddle on key press*

* Press S or ArrowRight to activate the laser, if the laser touches a ball this one will be destroyed and the player will obtain 1 point for it. 
* We have an special file for this one, the name is Laser.

*Declare a winner at a final score*

* At the end of the game it will show a message and also it will play a sound let them know who won the game. 
* See the winner file. 

*Increse the size of the paddle*

* 
			// increase the size of the paddle.
			if(this.player1.score  === PROPIEDADES.maxPoint - (PROPIEDADES.maxPoint/10)){
				this.player2.increaseSize();
			} else if (this.player2.score  === PROPIEDADES.maxPoint - (PROPIEDADES.maxPoint/10)){
				this.player1.increaseSize();
			}

