var canvas = document.getElementById('canvas3');
let ctx = canvas.getContext('2d');

let ballRadius = 10;
let x = canvas.width/2;
let y = canvas.height - 22;
let dx = 5;
let dy = -5;
//create the paddle
let paddleHeight = 12;
let paddleWidth  = 72;
//specify starting point of paddle
let paddleX = (canvas.width-paddleWidth)/2;
//holding variables for right and left arrows on keyboard
let rightPressed=false;
let leftPressed=false;
//holding variables for bricks
var brickRowCount = 2;
var brickColumnCount = 8;
let brickWidth = 40;
let brickHeight = 10;
let brickPadding = 5;
let brickOffsetTop = 32;
let brickOffsetLeft = 50;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);


let brickRow = 2;
let brickCol= 22;
let brickRow1 = 3;
let brickCol1 = 4;
var upBricks = [];
upBricks = newBricks(brickColumnCount,brickRowCount,upBricks);
var midBricks = [];
midBricks = newBricks(brickRow,brickCol,midBricks);
var midBricks2 = [];
midBricks2 = newBricks(brickRow,brickCol,midBricks2);
var midBricks3 = [];
midBricks3 = newBricks(brickRow1,brickCol1,midBricks3);
var lowBricks = [];
lowBricks = newBricks(brickColumnCount,brickRowCount,lowBricks);
var lowBricks2 = [];
lowBricks2 = newBricks(brickColumnCount+6,brickRowCount,lowBricks2);
//Create a function to draw the bricks
var mBricks1 = [];
var row =2;
var col = 18;
var mBricks2 = [];
var mBricks3 =[];
var mBricks4 =[];
var mBricks5 = [];

var mBricks6 = [];
var mBricks7 =[];
var mBricks8 =[];
var mBricks9 = [];
var mBricks10 = [];
var mBricks11 = [];
var mBricks12 = [];



mBricks1 = newBricks(row,col,mBricks1);


function drawBricks(){
  /*

  //console.log(upBricks);
    for(let c=0; c < brickColumnCount; c++){
        for(let r=0; r < brickRowCount; r++){
            if(upBricks[c][r].status === 1){
                let brickX = ( c* (brickWidth + brickPadding)) +1.94* brickOffsetLeft;
                let brickY = ( r* (brickHeight + brickPadding)) +5.4* brickOffsetTop;
                upBricks[c][r].x=brickX;
                upBricks[c][r].y=brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = '#6600cc';
                ctx.fill();
                ctx.closePath();
            }
        }
    }

*/

    for (let c = 0; c < brickRow1;c++)
    {
      for (let r = 0; r < brickCol1;r++)
      {
        if (midBricks3[c][r].status === 1)
        {
          let brickX =  (c* (brickWidth + brickPadding)) +6.25*brickOffsetLeft;
          let brickY =  (r* (brickHeight+brickPadding)) +8.8*brickOffsetTop;
          midBricks3[c][r].x=brickX;
          midBricks3[c][r].y=brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, brickWidth, brickHeight);
          ctx.fillStyle = '#6600cc';
          ctx.fill();
          ctx.closePath();


        }

      }
    }
    mbricks(mBricks1,4.5,2.2);
    //console.log(midBricks);

    for (let c = 0; c < brickRow;c++)
    {
      for (let r = 0; r < brickCol;r++)
      {
        if (midBricks[c][r].status === 1)
        {
          let brickX =  (c* (brickWidth + brickPadding)) +1.05*brickOffsetLeft;
          let brickY =  (r* (brickHeight+brickPadding)) + brickOffsetTop;
          midBricks[c][r].x=brickX;
          midBricks[c][r].y=brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, brickWidth, brickHeight);
          ctx.fillStyle = '#6600cc';
          ctx.fill();
          ctx.closePath();


        }

      }
    }


    //console.log(lowBricks);
    for(let c=0; c < brickColumnCount; c++){
          for(let r=0; r < brickRowCount; r++){
              if(lowBricks[c][r].status === 1){
                  let brickX = ( c* (brickWidth + brickPadding)) +2.8* brickOffsetLeft;
                  let brickY = ( r* (brickHeight + brickPadding)) + brickOffsetTop;
                  lowBricks[c][r].x=brickX;
                  lowBricks[c][r].y=brickY;
                  ctx.beginPath();
                  ctx.rect(brickX, brickY, brickWidth, brickHeight);
                  ctx.fillStyle = '#6600cc';
                  ctx.fill();
                  ctx.closePath();
              }
          }
      }



      for (let c = 0; c < brickRow;c++)
      {
        for (let r = 0; r < brickCol;r++)
        {
          if (midBricks2[c][r].status === 1)
          {
            let brickX =  (c* (brickWidth + brickPadding)) +10*brickOffsetLeft;
            let brickY =  (r* (brickHeight+brickPadding)) + brickOffsetTop;
            midBricks2[c][r].x=brickX;
            midBricks2[c][r].y=brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = '#6600cc';
            ctx.fill();
            ctx.closePath();


          }

        }
      }









      for(let c=0; c < brickColumnCount+6; c++){
            for(let r=0; r < brickRowCount; r++){
                if(lowBricks2[c][r].status === 1){
                    let brickX = ( c* (brickWidth + brickPadding));
                    let brickY = ( r* (brickHeight + brickPadding)) +11.35* brickOffsetTop;
                    lowBricks2[c][r].x=brickX;
                    lowBricks2[c][r].y=brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = '#6600cc';
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }

}

//drawBricks();
//Create a function to create the paddle
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight); //centered at (x,y) position with radius r = ballRadius starting at 0 = startAngle, ending at Math.PI*2 = endAngle (in Radians)
    ctx.fillStyle = '#edfc65';
    ctx.fill();
    ctx.closePath();
}

//draw ball
function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0,Math.PI*2); //centered at (x,y) position with radius r = ballRadius starting at 0 = startAngle, ending at Math.PI*2 = endAngle (in Radians)
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

//draw score board
//Create function to keep track of score
let live = 2;
//draw live
function drawLive(){
  ctx.font = '25px Arial';
  ctx.fillStyle = '#121a13';
  ctx.fillText('Live: '+ live, 540, 30);
}


//Collision dections for the bricks
function collisionDetection(){
  if (score === ((brickRowCount*brickColumnCount)+(brickRowCount)*(brickColumnCount+6))+2*(brickRow*brickCol)+(row*col)+(brickRow1*brickCol1)){
      alert('Congratulations!! You\'ve completed the games!');
      location.href = "gift.html";
  }
  else{

    for(c=0; c<brickColumnCount;c++){
        for(r=0; r<brickRowCount; r++){
            let b = upBricks[c][r];
            if(b.status === 1){
                if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight){
                    dy = -dy;
                    b.status = 0;
                    score++;
                  }
                }
            }
        }

        for (let c = 0; c < brickRow;c++)
        {
          for (let r = 0; r < brickCol;r++)
          {
            let b =midBricks[c][r];
            //check that bricks status is 1
            if (b.status ===1)
            {
              //x , y is the current Coordinates of ball if x current bricks minx theke boro and current bricks ar maxX theke choto
              // and y current bricks ar miny theke boro and current bricks maxY theke choto
              //than we can conclude that ball colide with bricks and set status = 0;
              // bricks minx = b.x
              //brixks maxX = b.x +brickWidth
              //bricks miny = b.y
              //bricks maxY = b.y +brickHeight
              // than will give dy = -dy
              //which decrease than y axis distance of ball
              if ( x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight)
              {
                dy =-dy;
                b.status = 0;
                score++;
              }

            }

          }
        }
        for (let c = 0; c < brickRow;c++)
        {
          for (let r = 0; r < brickCol;r++)
          {
            let b =midBricks2[c][r];
            //check that bricks status is 1
            if (b.status ===1)
            {
              //x , y is the current Coordinates of ball if x current bricks minx theke boro and current bricks ar maxX theke choto
              // and y current bricks ar miny theke boro and current bricks maxY theke choto
              //than we can conclude that ball colide with bricks and set status = 0;
              // bricks minx = b.x
              //brixks maxX = b.x +brickWidth
              //bricks miny = b.y
              //bricks maxY = b.y +brickHeight
              // than will give dy = -dy
              //which decrease than y axis distance of ball
              if ( x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight)
              {
                dy =-dy;
                b.status = 0;
                score++;
              }

            }

          }
        }

        for (let c = 0; c < brickRow1;c++)
        {
          for (let r = 0; r < brickCol1;r++)
          {
            let b =midBricks3[c][r];
            //check that bricks status is 1
            if (b.status ===1)
            {
              //x , y is the current Coordinates of ball if x current bricks minx theke boro and current bricks ar maxX theke choto
              // and y current bricks ar miny theke boro and current bricks maxY theke choto
              //than we can conclude that ball colide with bricks and set status = 0;
              // bricks minx = b.x
              //brixks maxX = b.x +brickWidth
              //bricks miny = b.y
              //bricks maxY = b.y +brickHeight
              // than will give dy = -dy
              //which decrease than y axis distance of ball
              if ( x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight)
              {
                dy =-dy;
                b.status = 0;
                score++;
              }

            }

          }
        }
        mbricksColid(mBricks1);







                  for(let c=0; c<brickColumnCount+6;c++){
                        for(let r=0; r<brickRowCount; r++){
                            let b = lowBricks2[c][r];
                            if(b.status === 1){
                                if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight){
                                    dy = -dy;
                                    b.status = 0;
                                    score++;
                                  }
                                }
                            }
                        }

    }

  }

function draw()
  {
    //clear each instance of the canvas so a new circle can be drawn
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawLive();
    drawScore(ctx,score);
    drawBall();
    drawBricks();
    drawPaddle();
    collisionDetection()
    //ball colide with left wall or right than  reverse dx direction  which is velocity

    if ( x +dx >canvas.width - ballRadius || x + dx < ballRadius )
    {
      //reverse x axis velocity of ball
      dx = -dx;
    }
    //if ball hit top wall than reverse y axis velocity which is dy
    // if y axis distance less than ball than ball colide with the top the walls
    //as dy is negative while going top so it is decrease all the time of accuring y axis
    //distance
    else if ( y + dy < ballRadius)
    {
      //after colide reverse dy
      dy = -dy;
    }
    //  if ball hit the bottom wall  or in the paddle
    else if (y+dy >canvas.height-ballRadius)
    {
      //if ball hit the paddle
      // if ball  curent position is greater than min curent position of paddle and less than
      // max curent postion  of padlle than we can conclude that ball colide with
      // the paddle and than reverse the y axies velocity of ball
      // paddle  minx = paddleX
      // paddle maxY = paddleX + paddleWidth
      if ( x > paddleX && x <= paddleX+paddleWidth )
      {
        //change y axis velocity
        dy = -dy;
      }
      else {
          live--;
          //set current position of ball in the postion of paddle
          paddleX = (canvas.width-paddleWidth)/2;
          x = paddleX+paddleWidth/2;
          y = canvas.height - paddleHeight;
      }
    }
    if ( live < 0)
    {
      window.alert( "Game over !");
      location.href= "label5.html";

    }

    //Make paddle move
    if(rightPressed && paddleX <canvas.width-paddleWidth){
        paddleX += 5;
    }
    //Making the ball move
    x +=dx; //update x movement every frame
    y +=dy; //update y movement every frame


  }
setInterval(draw, 10);
function start()
{
  location.reload();
}
