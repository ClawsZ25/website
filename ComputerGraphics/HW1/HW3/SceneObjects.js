"use strict"


// a base class
class Object{
    xpos
    ypos
    scale
    theta
    ctx
    
    constructor (x, y, context) {
 
 
         this.xpos = x
         this.ypos = y
         this.ctx = context
         this.scale = 0
         this.theta = 0
    }
 
    Draw()  {
       console.log("drawing the object")
    }
    // Not sure what this is
    Next(){

    }

    //Setters

    setPos(x,y){
        console.log("setting x and y position of the object")
    }

    setScale(s){
        console.log("setting the scale of the object")
    }

    SetRotate(t){
        console.log("setting the object's theta")
    }
 
    //Getters
    get xpos() {
       return this.xpos
    }
 
    get ypos(){
       return this.ypos
    }

    get scale(){
        return this.scale
    }

    get theta(){
        return this.theta
    }
 }

//House
 class House extends Object{


    Draw(){
        //chimney
        this.ctx.fillStyle = 'red'
        this.ctx.beginPath()
        this.ctx.moveTo(this.xpos, this.ypos)
        this.ctx.lineTo(this.xpos+10,this.ypos)
        this.ctx.lineTo(this.xpos+10,this.ypos-30)
        this.ctx.lineTo(this.xpos,this.ypos-30)
        this.ctx.lineTo(this.xpos,this.ypos)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()
        //roof
        this.ctx.fillStyle = 'green'
        this.ctx.beginPath()
        this.ctx.moveTo(this.xpos-10, this.ypos-40)
        this.ctx.lineTo(this.xpos+40,this.ypos+20)
        this.ctx.lineTo(this.xpos+90,this.ypos-40)
        this.ctx.lineTo(this.xpos-10,this.ypos-40)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()
        //House Body
        this.ctx.fillStyle = 'red'
        this.ctx.beginPath()
        this.ctx.moveTo(this.xpos, this.ypos-41)
        this.ctx.lineTo(this.xpos+80,this.ypos-41)
        this.ctx.lineTo(this.xpos+80,this.ypos-350)
        this.ctx.lineTo(this.xpos,this.ypos-350)
        this.ctx.lineTo(this.xpos,this.ypos-40)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()
        //window
        this.ctx.fillStyle = 'gray'
        this.ctx.beginPath()
        this.ctx.moveTo(this.xpos+30, this.ypos-150)
        this.ctx.lineTo(this.xpos+50,this.ypos-150)
        this.ctx.lineTo(this.xpos+50,this.ypos-175)
        this.ctx.lineTo(this.xpos+30,this.ypos-175)
        this.ctx.lineTo(this.xpos+30,this.ypos-150)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()
        //awning
        this.ctx.fillStyle = 'green'
        this.ctx.beginPath()
        this.ctx.moveTo(this.xpos+81,this.ypos-125)
        this.ctx.lineTo(this.xpos+115,this.ypos-150)
        this.ctx.lineTo(this.xpos+81,this.ypos-150)
        this.ctx.lineTo(this.xpos+81,this.ypos-125)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()
        
    }

 }


 class School extends Object{


    Draw(){
        //School Body
        this.ctx.fillStyle = 'blue'
        this.ctx.beginPath()
        this.ctx.moveTo(this.xpos, this.ypos)
        this.ctx.lineTo(this.xpos+250,this.ypos)
        this.ctx.lineTo(this.xpos+250,this.ypos-350)
        this.ctx.lineTo(this.xpos,this.ypos-350)
        this.ctx.lineTo(this.xpos,this.ypos)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()
        //window
        this.ctx.fillStyle = 'gray'
        this.ctx.beginPath()
        this.ctx.moveTo(this.xpos+120, this.ypos-175)
        this.ctx.lineTo(this.xpos+170,this.ypos-175)
        this.ctx.lineTo(this.xpos+170,this.ypos-200)
        this.ctx.lineTo(this.xpos+120,this.ypos-200)
        this.ctx.lineTo(this.xpos+120,this.ypos-175)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()
        
    }

 }

class Person extends Object{
    color
    radius



    constructor (x, y, context, color) {
        super(x,y,context)
        this.color = color // face color yellow by default
        this.radius = 20 // need a radius for the head
        
   }

   Draw(){
    //body
    this.ctx.beginPath()
    this.ctx.moveTo(this.xpos, this.ypos)// end of body
    //this.ctx.lineTo(this.xpos,this.ypos-60)//-40 + -20, end of body
    this.ctx.lineTo(this.xpos+10,this.ypos-10)//right leg
    this.ctx.moveTo(this.xpos,this.ypos)//end of body
    this.ctx.lineTo(this.xpos-10,this.ypos-10)// left leg
    this.ctx.moveTo(this.xpos,this.ypos)//end of body
    this.ctx.lineTo(this.xpos, this.ypos+40) // middle of the body
    this.ctx.lineTo(this.xpos+10,this.ypos+30)//right arm
    this.ctx.moveTo(this.xpos, this.ypos+40)//back to middle body
    this.ctx.lineTo(this.xpos-10,this.ypos+30)//left arm
    this.ctx.moveTo(this.xpos, this.ypos+40)//back to middle body
    this.ctx.lineTo(this.xpos,this.ypos+50)//neck
    this.ctx.closePath()
    this.ctx.stroke()
    //Head
    this.ctx.fillStyle = this.color
    this.ctx.beginPath()
    this.ctx.arc(this.xpos, this.ypos+70, this.radius, 0, 2 * Math.PI) // creates a circle of color yellow
    this.ctx.closePath()
    this.ctx.fill()
    // eyes
    this.ctx.fillStyle = 'blue'
    this.ctx.beginPath()
    this.ctx.arc(this.xpos-7, this.ypos+75, this.radius-16, 0, 2*Math.PI)//left eye
    this.ctx.arc(this.xpos+7, this.ypos+75, this.radius-16, 0, 2*Math.PI)//right eye eye
    this.ctx.closePath()
    this.ctx.fill()
    //smile
    this.ctx.fillStyle = 'black'
    this.ctx.beginPath()
    this.ctx.arc(this.xpos, this.ypos+64, this.radius-12, 3, 2*Math.PI)// the smile
    this.ctx.closePath()
    this.ctx.fill()
   }

   SetPos(x,y){
    this.xpos = x
    this.ypos = y

   }

   SetRotate(t){
    this.theta = t
   }
   
}

class Fence extends Object{



    Draw(){
        //back board
        this.ctx.fillStyle = 'brown'
        this.ctx.beginPath()
        this.ctx.moveTo(this.xpos, this.ypos)
        this.ctx.lineTo(this.xpos+20,this.ypos)
        this.ctx.lineTo(this.xpos+20,this.ypos-60)
        this.ctx.lineTo(this.xpos,this.ypos-60)
        this.ctx.lineTo(this.xpos,this.ypos)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()
        // right board 1
        this.ctx.beginPath()
        this.ctx.moveTo(this.xpos+20, this.ypos-15)
        this.ctx.lineTo(this.xpos+70,this.ypos-15)// 20 +50 = 70
        this.ctx.lineTo(this.xpos+70,this.ypos-25)
        this.ctx.lineTo(this.xpos+20,this.ypos-25)
        this.ctx.lineTo(this.xpos+20,this.ypos-15)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()
        //right board 2
        this.ctx.beginPath()
        this.ctx.moveTo(this.xpos+20, this.ypos-35)
        this.ctx.lineTo(this.xpos+70,this.ypos-35)// 20 +50 = 70
        this.ctx.lineTo(this.xpos+70,this.ypos-45)
        this.ctx.lineTo(this.xpos+20,this.ypos-45)
        this.ctx.lineTo(this.xpos+20,this.ypos-35)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()

    }
}

class Star extends Object{


    Draw(){
        let i, x, y, t

        let r = 3
    
        let b = Math.PI/2
        let a = 2*Math.PI/5

        let sides=[0,2,4,1,3]

        t = 0

        this.ctx.beginPath()

        this.ctx.strokeStyle = 'rgb(255,244,79)' //lemon yellow
        this.ctx.fillStyle = 'rgb(255,244,79)'

        // compute the right place to start and move to it.
        let sx = r*Math.cos(b)
        let sy = r*Math.sin(b)

        this.ctx.moveTo(sx,sy);

        for(i = 1; i<=5;i++) {
            let s = sides[i]
            x = r*Math.cos(s*a + b)
            y = r*Math.sin(s*a + b)

            this.ctx.lineTo(x,y)
        }

        // go back to the start
        this.ctx.lineTo(sx,sy)

        this.ctx.closePath()
        this.ctx.stroke()
        this.ctx.fill()
    }

    SetRotate(t){
        this.theta = t
    }

    SetScale(s){
        this.scale = s
    }
}

class SeeSaw extends Object{
    color
    kid1
    kid2



    constructor (x, y, context) {
        super(x,y,context)
        this.color = "yellow" // face color yellow by default
        this.kid1 = new Person(this.xpos-50, this.ypos, this.ctx, this.color)
        this.kid2 = new Person(this.xpos+50, this.ypos, this.ctx, this.color)
        
   }

    DrawBase(){
        this.ctx.fillStyle = 'blue'
        this.ctx.beginPath()
        this.ctx.moveTo(this.xpos, this.ypos)
        this.ctx.lineTo(this.xpos+50,this.ypos-25)
        this.ctx.lineTo(this.xpos-50,this.ypos-25)
        this.ctx.lineTo(this.xpos,this.ypos)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()

    }
    DrawKid1(){
        //this.ypos = this.ypos -60
        this.kid1.Draw()

    }

    DrawKid2(){
        this.kid2.Draw()
    }

    DrawLine(){
        this.ctx.strokeStyle = 'black'
        this.ctx.beginPath()
        this.ctx.moveTo(this.xpos, this.ypos)
        this.ctx.lineTo(this.xpos+60, this.ypos)
        this.ctx.lineTo(this.xpos, this.ypos)
        this.ctx.lineTo(this.xpos+-60,this.ypos)
        ctx.closePath()
        ctx.stroke()
        //ctx.fill()

    }

    SetRotate(t){
        this.theta = t
    }
}

class Swing extends Object{
    color
    kid



    constructor (x, y, context) {
        super(x,y,context)
        this.color = "yellow" // face color yellow by default
        this.kid = new Person(this.xpos, this.ypos-200, this.ctx, this.color)
        
   }

    DrawBase(){
        this.ctx.beginPath()
        this.ctx.moveTo(this.xpos, this.ypos)
        this.ctx.lineTo(this.xpos+100,this.ypos-250)
        this.ctx.moveTo(this.xpos, this.ypos)
        this.ctx.lineTo(this.xpos-100,this.ypos-250)
        ctx.closePath()
        ctx.stroke()

    }

    DrawKid(){
        this.kid.Draw()
        

    }

    DrawSwing(){
        this.ctx.beginPath()
        this.ctx.moveTo(this.xpos, this.ypos)
        this.ctx.lineTo(this.xpos,this.ypos-200)
        this.ctx.lineTo(this.xpos+10, this.ypos-200)
        this.ctx.lineTo(this.xpos-10, this.ypos-200)
        this.ctx.moveTo(this.xpos, this.ypos-200)
        ctx.closePath()
        ctx.stroke()

    }

    SetRotate(t){
        this.theta = t
    }
}