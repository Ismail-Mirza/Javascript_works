function newBricks(row, col,bricks)
{
  for (let c =0; c<row; c++){
      bricks[c] = [];
      for(let r=0; r<col; r++){
          //set the x and y position of the bricks
          bricks[c][r] = { x: 0, y: 0, status: 1};
      }
  }
  return bricks;

}

//Anchor paddle movement to mouse movement
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}

function keyDownHandler(e){
    if(e.keyCode === 39){
        rightPressed = true;
    }
    else if (e.keyCode === 37){
        leftPressed = true;
    }
}
function keyUpHandler(e){
    if(e.keyCode === 39){
        rightPressed = false;
    }
    else if (e.keyCode === 37){
        leftPressed = false;
    }
}

let score = 0;

function drawScore(ctx, score){
    ctx.font = '25px Arial';
    ctx.fillStyle = '#121a13';
    ctx.fillText('Score: '+ score, 8, 30); //position score at 8,20 on the x,y axis of the canvas
}
function  mbricks(bricks,xratio,yratio)
{
  for(let c=0; c < row; c++){

        for(let r=0; r < col; r++){
            if( bricks[c][r].status === 1){
              let brickX = ( c* (brickWidth + brickPadding)) +xratio*(brickOffsetLeft);

              let brickY = ( r* (brickHeight + brickPadding)) +yratio*brickOffsetTop;
              bricks[c][r].x=brickX;
              bricks[c][r].y=brickY;
              ctx.beginPath();
              ctx.rect(brickX, brickY, brickWidth, brickHeight);
              ctx.fillStyle = '#6600cc';
              ctx.fill();
              ctx.closePath();


            }


        }
      }

}
function mbricksColid (mBricks1)
{
  for(let c=0; c < row; c++){

        for(let r=0; r < col; r++){
          let b =mBricks1[c][r];
            if( mBricks1[c][r].status === 1){
              if ( x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight)
              {
                dy =-dy;
                b.status = 0;
                score++;
              }



            }


        }
      }

}
