"use strict"

// a base class
class Mover{
   xpos
   ypos
   canvas
   //velocity variables
   vx     
   
   constructor (x,y, canvas) {

        //console.log("The constructer for the ship has been called")

        this.xpos = x
        this.ypos = y
        this.canvas = canvas
        this.vx = 0
   }

   Draw()  {
      console.log("someone should draw something")
   }

   Move(){
      console.log("I really should move")
   }

   get xpos() {
      return this.xpos
   }

   get ypos(){
      return this.ypos
   }
}

// Defender or ship
class Defender extends Mover {
    /*
    Update(){
        this.xpos += this.xy
        this.ypos += this.vy
        requestAnimationFrame(Update)
    }*/
    Draw() {

        //console.log(this.canvas)
        for(let x = 0; x < 20; x++) {
            for(let y = 0; y < 10; y++) {
                   this.canvas.SetPixel(this.xpos+x, this.ypos-y, 60,60,100)
            
                } 
        }   
              //console.log()
        //console.log("ship is drawn")
    }



    Move(key) {

        //console.log("ship recieves input")

       switch(key) {
          case 'a':
          case 'j':
          case 'ArrowLeft':
             if (this.xpos > 10) {
                //this.xpos--
                this.vx = -9
                this.xpos += this.vx
             }
             break
          case 'd':
          case 'k':
          case 'ArrowRight':
             if (this.xpos < theCanvas.width-10) {
                //this.xpos++
                this.vx = 9
                this.xpos += this.vx 
             }
          break;
       }
    }
    
}


class AlienBox extends Mover{
   x1
   x2
   x3
   x4
   y1
   y2
   y3
   y4
   dx
   dy

   constructor(x,y, canvas){
      super(x,y, canvas)
      this.x1 = this.xpos
      this.x2 = this.xpos + MAX_ALIEN_COLS *  ALIEN_SPACING
      this.x3 = this.xpos + MAX_ALIEN_COLS *  ALIEN_SPACING
      this.x4 = this.xpos 
      this.y1 = this.ypos
      this.y2 = this.ypos
      this.y3 = this.ypos + MAX_ALIEN_ROWS * ALIEN_SPACING
      this.y4 = this.ypos + MAX_ALIEN_ROWS * ALIEN_SPACING
      this.dx = 2
      this.dy = 10
   }

   Draw(newX1, newY1, newX2, newY2){
      //I can use ALiens cause it is global I hate this
      //console.log("Aliens length is ", Aliens.length)
      this.x1 = newX2 - PADDING
      this.x2 = newX1 + PADDING
      this.x3 = newX1 + PADDING
      this.x4 = newX2 - PADDING
      this.y1 = newY2
      this.y2 = newY2
      this.y3 = newY1
      this.y4 = newY1
      
      //console.log("x is ", x, " which should be equal to Aliens[0].xpos which is ", Aliens[0].xpos)
      //this.canvas.DrawBox(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3,this.x4,this.y4)

   }


   Move(){

      if(alienHorizontalDirection == false && alienVerticalDirection == false){
         //console.log("moving right")
         this.x1 += this.dx
         this.x2 += this.dx
         this.x3 += this.dx
         this.x4 += this.dx
      } else if(alienHorizontalDirection == true && alienVerticalDirection == false){
         //console.log("moving left")
         this.x1 -= this.dx
         this.x2 -= this.dx
         this.x3 -= this.dx
         this.x4 -= this.dx

      } else {
         this.y1 += this.dy
         this.y2 += this.dy
         this.y3 += this.dy
         this.y4 += this.dy
      }





   }

}



// Alien's class
class Alien extends Mover{
   xTwoRight
   yTwo
   xTwoLeft
   xThree
   yThree
   IsDead
   alienContainer
   offsetX
   offsetY
   deathAnimCount
   
   
   constructor(x,y, canvas, box){
      super(x,y, canvas)
      //this.xpos = x
      //this.ypos = y
      //this.canvas = canvas
      this.xTwoRight = this.xpos + 10
      this.yTwo = this.ypos + 10
      this.xTwoLeft = this.xpos - 10
      this.xThree = this.xpos
      this.yThree = this.ypos + 20
      this.IsDead = false
      this.alienContainer = box
      this.offsetX = this.xpos
      this.offsetY = this.ypos
      this.deathAnimCount = 0
      
   }



   Draw(){
      // x.pos and y.pos are point one
      //draw two two different triangles based on the direction

      if(alienVerticalDirection == true){
         this.ypos += this.alienContainer.dy
         this.yTwo += this.alienContainer.dy
         this.yThree += this.alienContainer.dy
      }
      
      

      if(alienHorizontalDirection == false){
         //just changing the x values
         
         this.xpos += this.alienContainer.dx
         this.xTwoRight += this.alienContainer.dx
         this.xTwoLeft += this.alienContainer.dx
         this.xThree += this.alienContainer.dx

         this.canvas.DrawTriangle(this.xpos,this.ypos,this.xTwoRight,this.yTwo,this.xThree,this.yThree, this.deathAnimCount)

      } else {

         this.xpos -= this.alienContainer.dx
         this.xTwoRight -= this.alienContainer.dx
         this.xTwoLeft -= this.alienContainer.dx
         this.xThree -= this.alienContainer.dx

         this.canvas.DrawTriangle(this.xpos,this.ypos,this.xTwoLeft,this.yTwo,this.xThree,this.yThree, this.deathAnimCount)

      }
         

   
         

      
        
   }

   DeathAnim(){
      if(this.deathAnimCount < 9){
         this.deathAnimCount++
         if(alienHorizontalDirection == false){

            this.canvas.DrawTriangle(this.xpos,this.ypos,this.xTwoRight,this.yTwo,this.xThree,this.yThree, this.deathAnimCount)

         } else {

            this.canvas.DrawTriangle(this.xpos,this.ypos,this.xTwoLeft,this.yTwo,this.xThree,this.yThree, this.deathAnimCount)

         }

      }
      


     
   }

}

class Shot extends Mover{
   shotType
   shotFired


   constructor(x,y, canvas, type){
      super(x,y, canvas)
      this.shotType = type
      this.shotFired = false
   }




   Move(){
      if(this.shotType == true){
         this.ypos = this.ypos - 25 // defender shot
      } else {
         this.ypos = this.ypos + 5 // aliens shot
      }


   }


   Draw(){

      if(this.shotType == true){
         for(let i = 0; i < 10; i++){
            theCanvas.SetPixel(this.xpos, this.ypos-i, 255, 0, 0)
         }
      } else{
         for(let i = 0; i < 15; i++){
            theCanvas.SetPixel(this.xpos, this.ypos-i, 30, 30, 155)
         }

      }
   }

   Explode(){
      //console.log("shot exploded")

      if(this.shotType == true){
         for(let i = 0; i < 10; i++){
            if(i%2 == 0){
               theCanvas.SetPixel(this.xpos+ i, this.ypos+i, 255, 0, 0)
            }else{
               theCanvas.SetPixel(this.xpos-i, this.ypos+i, 255, 0, 0)
            }
         }
      } else {
         for(let i = 0; i < 15; i++){
            if(i%2 == 0){
               theCanvas.SetPixel(this.xpos+ i, this.ypos-i, 30, 30, 155)
            }else{
               theCanvas.SetPixel(this.xpos-i, this.ypos-i, 30, 30, 155)
            }
         }
      }

   }

}

class Shield extends Mover{
   
   shieldX
   shieldY
   shieldXlength
   shieldYlength
   shieldLength


   constructor(x,y, canvas, type){
      super(x,y, canvas)
      this.shieldX = []
      this.shieldY = []
      this.shieldXlength = 40
      this.shieldYlength = 30
      this.shieldLength = this.shieldXlength * this.shieldYlength
   }

   FillXAndY(){
      //let num = 1
      for(let x = 0; x < this.shieldXlength; x++) {
         for(let y = 0; y < this.shieldYlength; y++) {
            //console.log(num)
            this.shieldX.push(this.xpos + x)
            this.shieldY.push(this.ypos + y)
            //num++
         
         } 
     } 

   }

   Resize(bool){
      this.shieldX = []
      this.shieldY = []
      //console.log(" size of shieldX is ", this.shieldX.length)
      if(bool == true){
         this.shieldYlength--
      } else{
         this.shieldXlength--
      }
      this.shieldLength = this.shieldXlength * this.shieldYlength
      for(let x = 0; x < this.shieldXlength; x++) {
         for(let y = 0; y < this.shieldYlength; y++) {
            //console.log(num)
            this.shieldX.push(this.xpos + x)
            this.shieldY.push(this.ypos + y)
            //num++
         
         } 
     } 
   }


   Draw(){
      for(let i = 0; i < this.shieldLength; i++){
         theCanvas.SetPixel(this.shieldX[i], this.shieldY[i], 0, 120, 220)
      }
      

   }
}