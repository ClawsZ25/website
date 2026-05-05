"use strict"
// other constants
const TIME_UPDATE = 50
const FENCE_AMOUNT= 47 
const STAR_AMOUNT = 162
const RANDOM_X_AMOUNT = 3000
const RANDOM_POS_Y_AMOUNT = 35
const RANDOM_NEG_Y_AMOUNT = -35

//creating the canvas
const theCanvas = new Canvas("canvasHolder", 500, 500)
let height = theCanvas.height
let width = theCanvas.width
let ctx = theCanvas.context

theCanvas.AddListener("keydown", KeyGetter)

//Scene Variables
let sceneTx = 0
let originX = 0
let originY = 0
// Anim variables
let starTheta = 20
let starScale = 2
let starScaleDelta = 0
//see saw
let seeSawTheta = 0
let seeSawStepOne = 0
let seeSawStepTwo = 0
let seeSawStepThree = 0
//seesawkid1
let seeSawKid1Theta = 0
let seeSawKid1StepOne = 0
let seeSawKid1StepTwo = 0
let seeSawKid1StepThree = 0
//seesawkid2
let seeSawKid2Theta = 0
let seeSawKid2StepOne = 0
let seeSawKid2StepTwo = 0
let seeSawKid2StepThree = 0
//swing
let swingTheta = 0
let swingStepOne = 0
let swingStepTwo = 0
let swingStepThree = 0
//swing kid
let swingkidTheta = 0
let swingkidStepOne = 0
let swingkidStepTwo = 0
let swingkidStepThree = 0
// timer
let pause = false
let timer = setTimeout(Default, TIME_UPDATE)

function KeyGetter(event){
    let key = event.key

    switch(key){
        case 'g':
            if (pause == false){
                clearTimeout(timer)
                timer = null
                //timer = setTimeout(PauseScene, TIME_UPDATE)
                pause = true
                //console.log("not working")
            } else{
                timer = setTimeout(Default, TIME_UPDATE)
                pause = false
                //console.log('working')
        
            }
            //console.log("Got key g which means pause is", pause)
            break
        case 'a':
            if(sceneTx < 0){
                sceneTx = sceneTx + 10
            }
            break
        case 'd':
            if(sceneTx > -2750){
                sceneTx= sceneTx - 10
            }
            break

    }
}

// test variables for pause


function Default(){


    starTheta = (starTheta + 1) %360

    if (starScale >= 2) {
        starScaleDelta = -0.05
     } else if (starScale < 1) {
        starScaleDelta = 0.05
     }
 
     starScale += starScaleDelta
     // dictating the rotating of the see saw
     
     if (seeSawStepOne <= 10) {
        seeSawTheta = (seeSawTheta + 1)
        //console.log("+")
        seeSawStepOne++
     } else if (seeSawStepTwo <= 20) {
        seeSawTheta = (seeSawTheta - 1)
        //console.log("-")
        seeSawStepTwo++
     }else if(seeSawStepThree <= 20){
            seeSawTheta = (seeSawTheta + 1)
            //console.log("+")
            seeSawStepThree++
    }
      else{
        seeSawStepThree = 0
        seeSawStepTwo = 0
     }
    //Movement(seeSawTheta, seeSawStepOne, seeSawStepTwo, seeSawStepThree, 10, 20, 20, 1)
     //see saw kid 1

     
     

     // dictating the rotating of the swing
     //Movement(swingTheta, swingStepOne, swingStepTwo, swingStepThree, 40, 80, 80, 1)
     
     if (swingStepOne <= 40) {
        swingTheta = (swingTheta - 1)
        //console.log("+")
        swingStepOne++
     } else if (swingStepTwo <= 80) {
        swingTheta = (swingTheta + 1)
        //console.log("-")
        swingStepTwo++
     }else if(swingStepThree <= 80){
            swingTheta = (swingTheta - 1)
            //console.log("+")
            swingStepThree++
    }
      else{
        swingStepThree = 0
        swingStepTwo = 0
     }
    //Movement(swingkidTheta, swingkidStepOne, swingkidStepTwo, swingkidStepThree, 40, 80, 80, 0.25)
     // swing kid rotates
     
     if (swingkidStepOne <= 40) {
        swingkidTheta = (swingkidTheta + 0.25)
        //console.log("+")
        swingkidStepOne++
     } else if (swingkidStepTwo <= 80) {
        swingkidTheta = (swingkidTheta - 0.25)
        //console.log("-")
        swingkidStepTwo++
     }else if(swingkidStepThree <= 80){
            swingkidTheta = (swingkidTheta + 0.25)
            //console.log("+")
            swingkidStepThree++
    }
      else{
        swingkidStepThree = 0
        swingkidStepTwo = 0
     }

    // Drawing the scene (make this a function later)
    theCanvas.Clear()
    ctx.save()

    //Box(ctx)
    //flipping the canvas
    ctx.setTransform(1, 0, 0, -1, 0, height)
    // center the origin (0,0) should be at center
    ctx.translate(width/2, height/2)

    //stack of things to draw, grass, sky, fence, stars, House, school, couple, swing, teeter totter, smiley

    //user movement
    ctx.translate(sceneTx, 0)
    //console.log("sceneTx is", sceneTx)

    DrawSky(ctx)
    DrawGrass(ctx)
    for(let f = 0; f < fenceArray.length; f++){
        let fence = fenceArray[f]
        fence.Draw()
    }
    // drawing all the stars
    //console.log("amount of stars is ", starArray.length)
    for(let s = 0; s < starArray.length; s++){
        let star = starArray[s]
        FillSky(star)
    }


    CoupleWalk(coupleB, coupleG)
    CoupleWalk(coupleB2, coupleG2)
    //coupleB.Draw()
    //coupleG.Draw()
    //fillSky(star)
    SeeSawing(seeSawOne)
    SeeSawing(seeSawTwo)
    Swinging(swingOne)
    Swinging(swingTwo)

    house.Draw()
    school.Draw()
   

    //NewBox(ctx)

    //Box(ctx)


    ctx.restore()
    ctx.save()

    //Box(ctx)
    //flipping the canvas
    ctx.setTransform(1, 0, 0, -1, 0, height)
    // center the origin (0,0) should be at center
    ctx.translate(width/2, height/2)

    smiley.Draw()

    ctx.restore()
    timer = setTimeout(Default, TIME_UPDATE)
}
//Pause Timer
/*
function PauseScene(){

    ctx.save()

    //Box(ctx)
    //flipping the canvas
    ctx.setTransform(1, 0, 0, -1, 0, height)
    // center the origin (0,0) should be at center
    ctx.translate(width/2, height/2)

    smiley.Draw()

    ctx.restore()
    timer = setTimeout(Default, TIME_UPDATE)

}*/









// INtializing all the objects
let fenceArray = [] // array of fences
let fenceSpacing = 0


for(let i = 0; i < FENCE_AMOUNT; i++){
    let fenceX = originX - 250 + fenceSpacing
    let fenceY = originY + 86

    let tempFence = new Fence(fenceX, fenceY, ctx)
    fenceArray.push(tempFence)
    fenceSpacing += 70 // amount of x pixels between fences
}

let starArray = []
let starXSpacing = 75
let starYSpacing = 25
let swap = 0


for(let i = 0; i < STAR_AMOUNT; i++){
    let starX = originX - 200
    let starY = originY + 200

    starX = starX + Math.random() * RANDOM_X_AMOUNT
    if(swap == 0){
        starY = starY + Math.random() * RANDOM_POS_Y_AMOUNT
        swap++
    } else{
        starY = starY + Math.random() * RANDOM_NEG_Y_AMOUNT
        swap--
    }


    let tempStar = new Star(starX, starY, ctx)
    starArray.push(tempStar)
    
}

//let star = new Star(starX, starY, ctx)

let houseX = originX - 240
let houseY = originY + 100

let house = new House(houseX, houseY, ctx)

let schoolX = originX + 2750
let schoolY = originY + 60

let school = new School(schoolX, schoolY, ctx)

let coupleBX = originX + 750
let coupleBY = originY - 50

let coupleGX = originX + 800
let coupleGY = originY - 50


let coupleB = new Person(coupleBX, coupleBY, ctx, 'orange')
let coupleG = new Person(coupleGX, coupleGY, ctx, 'pink')

let coupleBX2 = originX + 2350
let coupleBY2 = originY

let coupleGX2 = originX + 2400
let coupleGY2 = originY 


let coupleB2 = new Person(coupleBX2, coupleBY2, ctx, 'red')
let coupleG2 = new Person(coupleGX2, coupleGY2, ctx, 'purple')
// 2 see saws
let seeSawX = originX + 100
let seeSawY = originY - 100

let seeSawX2 = originX + 1000
let seeSawY2 = originY - 50

let seeSawOne = new SeeSaw(seeSawX, seeSawY, ctx)
let seeSawTwo = new SeeSaw(seeSawX2, seeSawY2, ctx)


// 2 swings
let swingX = originX + 1675
let swingY = originY + 200

let swingX2 = originX + 2225
let swingY2 = originY + 50

let swingOne = new Swing(swingX, swingY, ctx)
let swingTwo = new Swing(swingX2, swingY2, ctx)



let smileyX = originX - 100
let smileyY = originY - 150

let smiley = new Person(smileyX, smileyY, ctx, 'yellow')


//Drawing functions
function DrawGrass(ctx){

    
    ctx.fillStyle = 'rgb(0,255,0)'

    ctx.beginPath()

    ctx.moveTo(-250,25) //origin of the canvas
    ctx.lineTo(2750,25)
    ctx.lineTo(2750,-250)
    ctx.lineTo(-250,-250)
    ctx.lineTo(-250,25)
    ctx.closePath()
    ctx.stroke()
    ctx.fill()

    
}

function DrawSky(ctx){

    
    ctx.fillStyle = 'gray'

    ctx.beginPath()

    ctx.moveTo(-250,26) //origin of the canvas
    ctx.lineTo(3000,26)
    ctx.lineTo(3000,250)
    ctx.lineTo(-250,250)
    ctx.lineTo(-250,26)
    ctx.closePath()
    ctx.stroke()
    ctx.fill()

    
}
// fill the sky with rotating twinkiling stars
function FillSky(s){
    s.SetRotate(starTheta)
    s.SetScale(starScale)
    ctx.save()

    //console.log("star scale is ", s.scale)
    //console.log("star's xpos is ", s.xpos, " and star's ypos is ", s.ypos)

    ctx.translate(s.xpos, s.ypos)
    ctx.rotate(s.theta* Math.PI/180)
    ctx.scale(s.scale, s.scale)

    s.Draw()
    ctx.restore()

}


let countX = 0 // global
let countY = 0
let counterX = 0
let counterY = 0

function CoupleWalk(boy, girl){
    ctx.save()
    // a zig zag
    

    if(counterX < 100 && counterY == 0){
        countX = 2
        countY = 0
        counterX++
    } else if(counterY > -50 && counterX == 100){
        countX = 0
        countY = -2
        counterY--
    } else if(counterX > 0 && counterY == -50){
        countX = -2
        countY = 0
        counterX--
    } else{
        countX = 0
        countY = +2
        counterY++
    }
    //console.log("countX is ", countX)
    boy.SetPos(boy.xpos + countX, boy.ypos + countY)
    girl.SetPos(girl.xpos + countX, girl.ypos + countY)



    ctx.translate(countX, countY)
    boy.Draw()
    girl.Draw()

    ctx.restore()
}

function Movement(theta, one, two, three, num1, num2, num3, num4){
    if (one <= num1) {
        theta = (theta + num4)
        //console.log("+")
        one++
     } else if (two <= num2) {
        theta = (theta - num4)
        //console.log("-")
        two++
     }else if(three <= num3){
            theta = (theta + num4)
            //console.log("+")
            three++
    }

}


function SeeSawing(c){
    ctx.save()
    //console.log("Why")
    //ctx.translate(c.xpos, c.ypos)
    c.DrawBase()
    c.SetRotate(seeSawTheta)
    //console.log("xpos is ", c.xpos, " and ypos is", c.ypos)
    //c.DrawLine()
    //ctx.translate(c.xpos, c.ypos)
    ctx.translate(c.xpos, c.ypos)
    ctx.rotate(c.theta * Math.PI/180)
    ctx.translate(c.xpos*-1, c.ypos * -1)
    //c.DrawBase()
    c.DrawLine()
    //kids moving
    //kid 1
    c.DrawKid1()
    //
    c.DrawKid2()


    //end of the whole thing
    ctx.restore()

}

function Swinging(s){
    ctx.save()

    s.DrawBase()
    s.SetRotate(swingTheta)
    s.kid.SetRotate(swingkidTheta)

    //ctx.rotate()
    ctx.translate(s.xpos, s.ypos)
    ctx.rotate(s.theta * Math.PI/180)
    ctx.translate(s.xpos*-1, s.ypos * -1)

    s.DrawSwing()

    ctx.translate(s.kid.xpos, s.kid.ypos)
    ctx.rotate(s.kid.theta * Math.PI/180)
    ctx.translate(s.kid.xpos*-1, s.kid.ypos * -1)
    s.DrawKid()




    ctx.restore()
}
