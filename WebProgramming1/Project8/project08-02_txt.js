"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-02

      Project to add balls bouncing within a container
      Author: 
      Date:   

      Filename: project08-02.js
*/

/*---------------- CONSTANTS ---------------------*/
const BALL_RADIUS = 60; // radius of the ball in pixels
const BOX_HEIGHT = 400; // height of the container in pixels
const BOX_WIDTH = 800;  // width of the container in pixels

/*--------------- Object Code --------------------*/
//This is called an object literal because I am directly assigning an object its values without a constructor
let box ={
   height: BOX_HEIGHT,
   width: BOX_WIDTH,
   xPos: 0,
   yPos: 0
};

//Creating the constructor for the Ball object
function ball(size){
   this.radius = size;
   this.xPos = null;
   this.yPos = null;
   this.xVelocity = null;
   this.yVelocity = null;
}

// creating the moveWithin method for Ball
ball.prototype.moveWithin = function(container){
   //annoymous function code goes here
   let ballTop = this.yPos;
   let ballLeft = this.xPos;
   let ballBottom = this.yPos + this.radius;
   let ballRight = this.xPos + this.radius;

   if(ballTop < 0 || ballBottom > container.height){
      container.yPos += this.yVelocity;
      this.yVelocity = -this.yVelocity;
   }

   if(ballLeft < 0 || ballRight > container.width){
      container.yPos += this.xVelocity;
      this.xVelocity = -this.xVelocity;
   }

   this.xPos += this.xVelocity;
   this.yPos += this.yVelocity;

}





/*---------------Interface Code -----------------*/

// Reference to the container box
let boxImage = document.getElementById("box");
boxImage.style.width = BOX_WIDTH + "px";
boxImage.style.height = BOX_HEIGHT + "px";
boxImage.style.top = "0px";
boxImage.style.left = "0px"

// Reference to the Add Ball button
let addBall = document.getElementById("addBall");

addBall.onclick = function() {

   let newBall = new ball(BALL_RADIUS);
   newBall.xPos = (BOX_WIDTH-BALL_RADIUS)/2;
   newBall.yPos = (BOX_HEIGHT-BALL_RADIUS)/2;
   newBall.xVelocity = rand(-10,10);
   newBall.yVelocity = rand(-10,10);
      
   let ballImage = document.createElement("div");
   ballImage.className = "ball";
   ballImage.style.width = BALL_RADIUS + "px";
   ballImage.style.left = (BOX_WIDTH - BALL_RADIUS)/2 + "px";
   ballImage.style.top = (BOX_HEIGHT - BALL_RADIUS)/2 + "px";
   
   // Append the ball image to the box
   boxImage.appendChild(ballImage);   
   
   setInterval(function(){
      newBall.moveWithin(box);
      ballImage.style.top = newBall.yPos + "px";
      ballImage.style.left = newBall.xPos + "px";
      boxImage.style.top = box.yPos + "px";
      boxImage.style.left = box.xPos + "px";

   }, 25);
   
   
   
};


/* Function to return a random value between minVal and maxValue */
function rand(minVal, maxVal) {
   let size = maxVal - minVal + 1;
   return minVal + size*Math.random();
}