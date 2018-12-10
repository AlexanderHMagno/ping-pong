export const SVG_NS = 'http://www.w3.org/2000/svg';
export const BACK_COLOR = '#353535';


export const KEYS = {
  p1Up: 'a',        // player 1 up key
  p1Down: 'z',          // player 1 down key
  p1Right: 's',        // player 1 Fire
  p2Up: 'ArrowUp',       // player 2 up key
  p2Down: 'ArrowDown',     // player 2 down key
  p2Right: 'ArrowRight',     // player 2 Fire
  spaceBar: ' ', // we'll use this later...
}

export const PROPIEDADES = {
  score: 0,        // score for each player
  maxPoint: 20,  //value of the score to be the winner
}

export const WinnerValues = {
  Height: 85,
  Width: 130,
}

export const BallProperties = {

  secondBall: 1,
  thirdBall: 5,
  ballRadius: 8,
  ballDirection: 1,

}

export const PaddleProperties = {
  speed: 20,
  boardGap: 10,       // gap between the paddle and boardgame
  paddleWidth: 8,
  paddleHeight: 56,
}