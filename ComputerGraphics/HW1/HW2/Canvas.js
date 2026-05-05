"use strict"

class Canvas {
    #context
    #width
    #canvas
    #height
    constructor(place, w, h) {

        this.#width = w
        this.#height = h
       
        this.#canvas = document.createElement("canvas")
        this.#canvas.width = w
        this.#canvas.height  = h
        this.#canvas.style = "border:1px solid black;"

        // without this line, the canvas will not receive keypress events
        this.#canvas.tabIndex = 0 

        console.log(place)
        // console.log(location)
        let location = document.getElementById(place)
        console.log(location)
        location.appendChild(this.#canvas)

        this.#context = this.#canvas.getContext("2d")

    }

    SetPixel(x,y,r,g,b) {
        //this.#context.strokeStyle = 'rgb(' + r + ',' + g + ',' + b + ')'
        //this.#context.strokeRect(x,y,1,1) 
        this.#context.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')'
        this.#context.fillRect(x,y,1,1) 
    }
    
    DrawTriangle(x1,y1,x2,y2,x3,y3, count){
        if( count%2 == 0){
            this.#context.strokeStyle = 'green'
        } else{
            this.#context.strokeStyle = 'red'
        }

        //console.log("Point One (", x1,x2, ") Point Two (", x2,y2, ") Point Three (", x3,y3, ")")
    
        this.#context.beginPath()
        this.#context.moveTo(x1, y1)
        this.#context.lineTo(x2, y2)
        this.#context.lineTo(x3,y3)
        this.#context.lineTo(x1, y1)
        this.#context.closePath()
        this.#context.stroke()
        
    }

    DrawBox(xOne,yOne,xTwo,yTwo,xThree,yThree,xFour,yFour){
        this.#context.strokeStyle = 'blue'

        this.#context.beginPath()
        this.#context.moveTo(xOne, yOne)
        this.#context.lineTo(xTwo, yTwo)
        this.#context.lineTo(xThree,yThree)
        this.#context.lineTo(xFour, yFour)
        //this.#context.moveTo(xOne, yOne);
        this.#context.closePath()
        this.#context.stroke()
    }

    DrawL(){
        this.#context.strokeStyle = 'red'

        this.#context.beginPath()
        this.#context.moveTo(250, 100)
        this.#context.lineTo(300, 100)
        this.#context.lineTo(300,550)
        this.#context.lineTo(800, 550)
        this.#context.lineTo(800, 600)
        this.#context.lineTo(250, 600)
        this.#context.lineTo(250, 100)
        this.#context.fillStyle = 'red'
        //this.#context.moveTo(xOne, yOne);
        this.#context.closePath()
        this.#context.stroke()

    }


    Clear() {
       this.#context.clearRect(0,0, this.#width, this.height)
    }

    get height(){
        return this.#height
    }

    get width() {
       return this.#width
    }

    AddListener(eventType, callBack) {
       this.#canvas.addEventListener(eventType, callBack)
    }
}