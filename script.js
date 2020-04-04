const canvas = document.getElementById('snake')
const context = canvas.getContext('2d')
let box = 32 
let snake = []
snake[0] = {
  x: 8 * box,
  y: 8 * box
}
let direction = 'right'

function createBG(){
  context.fillStyle = 'lightgreen'
  context.fillRect(0, 0, 16 * box, 16 * box)
}
function createSnake(){
  for(let i = 0; i< snake.length; i++){
    context.fillStyle = 'green'
    context.fillRect(snake[i].x, snake[i].y, box, box)
  }
}

function startGame(){
  createBG()
  createSnake()

  let snakeX = snake[0].x
  let snakeY = snake[0].y

  if(direction=='right') snakeX +=box
  if(direction=='left') snakeX -=box
  if(direction=='up') snakeY -=box
  if(direction=='down') snakeX +=box

  snake.pop()

  snake.unshift({
    x: snakeX,
    y: snakeY
  })
}

let jogo = setInterval(startGame, 100)
