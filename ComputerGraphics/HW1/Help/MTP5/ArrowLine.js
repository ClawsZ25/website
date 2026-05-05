"use strict"


let x0,y0
let x1, y1
let state= 0
let PixelCount = 0


function SetPixel(x, y, color) {

    x = Math.round(x)
    y = Math.round(y)

    ctx.beginPath()
    ctx.fillStyle = color
    ctx.fillRect(x,y,1,1)
    ctx.fill()

    return
}

function DrawHorizontalLine(x, y0, y1){
    let tmp

    if (y0 > y1) {
       tmp = y1
       y1 = y0
       y0 = tmp
    }

    for(let y = y0; y <= y1; y++) {
        PixelCount++
        SetPixel(x,y, "black")
    }

    return
}

function DrawVerticalLine(y, x0, x1) {
    let tmp

    if (x0 > x1) {
       tmp = x1
       x1 = x0
       x0 = tmp
    }

    for(let x = x0; x <= x1; x++) {
        PixelCount++
        SetPixel(x,y, "black")
    }

    return
}

function DrawLine(x0, y0, x1, y1) {
    let dx, dy

    if (x1 == x0) {
       DrawHorizontalLine(x0, y0, y1)
    } else if (y0 == y1) {
       DrawVerticalLine(y0, x0, x1)
    } else {
       DrawOtherLine(x0,y0,x1,y1)
    }

    return;
}

function Midpoint(x0, y0, x1, y1){
    //let lineLength = x1
    let midX = (x1+x0)/2
    let midY = (y1+y0)/2
    //console.log("midpoint is (", midX, ",", midY, ").")
    SetPixel(midX, midY, "red")
    const angle = Math.atan2(y1-y0, x1-x0)

    //console.log("Math.atan2 of my midpoint produces ", angle)
    DrawArrow(midX, midY, angle)

}

function DrawArrow(x, y, angle){
    let r = 0 // radius
    if(PixelCount > 200){
        r = PixelCount * 0.1 // 10% of the Pixels in the line
    } else{
        r = 20
    }
    
    let theta = Math.PI/4 // 45 degrees
    let x1 = x - r * Math.cos(angle + theta)
    let x2 = x - r * Math.cos(angle - theta)
    let y1 = y - r * Math.sin(angle + theta)
    let y2 = y - r * Math.sin(angle - theta)
    ///need theat based off the current line
     //finding my 2 points

    ctx.strokeStyle = "red"

    ctx.beginPath()
    ctx.moveTo(x, y)
    //console.log("comparing points (", x1 + r * Math.cos(angle), ",", y1 + r * Math.sin(angle), " with (", x1, ",", y1, ").")
    ctx.lineTo(x1, y1)
    ctx.moveTo(x, y)
    ctx.lineTo(x2, y2)
   // ctx.lineTo(x1 + r * Math.cos(angle - Math.PI / 6), y1 + r * Math.sin(angle - Math.PI / 6))
   
    
    ctx.stroke()
    
}

function ClickHandler(event) {
    switch(state) {
      case 0:
           x0= event.offsetX
           y0 = event.offsetY
           state = 1
           break
      case 1:
           x1= event.offsetX
           y1 = event.offsetY
           state = 0
           DrawLine(x0, y0, x1, y1)
           //console.log("PixelCount is ", PixelCount)
           Midpoint(x0,y0,x1,y1)
           PixelCount = 0
    }

    return
}