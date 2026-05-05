"use strict"

// canvas related constants
const theCanvas = new Canvas("canvasHolder", 1000, 700)

const ALIEN_SPACING = 30
const PADDING = 10
const MAX_ALIEN_ROWS = 5
const MAX_ALIEN_COLS = 11
const RIGHT_SIDE_BORDER = 980 // The canvas right side border
const LEFT_SIDE_BORDER = 20 // canvas left side border
const SOUTH_SIDE_BORDER =  694// bottom of the canvas
const NORTH_SIDE_BORDER = 26
const MAX_ALIEN_LASERS = 4
const MAX_SHIELD_AMOUNT = 4



// Time/Interval constants
const UPDATE_TIME = 50 // in milliseconds for the timer

//Pause button
let PAUSE = false // to stop and start game
const pauseButton = document.getElementById("PauseButton")
pauseButton.addEventListener("click", Pause)

function Pause(){
    if (PAUSE == false){
        clearTimeout(timer)
        timer = null
        PAUSE = true
    } else{
        timer = setTimeout(Default, UPDATE_TIME)
        PAUSE = false

    }
}



//functions
function Default(){


    theCanvas.Clear()

    //Move the aliens
    if(alienVerticalDirection == true){
        alienVerticalDirection = false
    } else if(alienHorizontalDirection == false){ // moving to the right
        //console.log("moving right and box x3 is ", box.x3, "    ", RIGHT_SIDE_BORDER)
        
        if(box.x3 > RIGHT_SIDE_BORDER){
            alienHorizontalDirection = true
            alienVerticalDirection = true
        }

    } else if(alienHorizontalDirection == true){
        //console.log("moving left and box x1 is ", box.x1, "    ", LEFT_SIDE_BORDER)
        
        if(box.x1 < LEFT_SIDE_BORDER){
            alienHorizontalDirection = false
            alienVerticalDirection = true
        }  
    } 
    
  /*  console.log("alienbox (x1,y1) is (", box.x1, ",", box.y1, ") alienbox (x2,y2) is (", box.x2, ",", box.y2,
                 ") alienbox (x3,y3) is ", box.x3, ",", box.y3, ") alienbox (x4,y4) is", box.x4, ",", box.y4, ")" ) */

    //console.log("alienbox (x1,y1) before move is (", box.x1, ",", box.y1, ")")
    //console.log("Aliens length is ", Aliens.length)
    let maxX = AlienXMaximum()
    let maxY = AlienYMaximum()
    let minX = AlienXMinimum()
    let minY = AlienYMinimum()
    //console.log("maxX is ", maxX, ", maxY is ", maxY, ", minX is ", minX, ", and minY is ", minY, ".")
    box.Move()
    box.Draw(maxX, maxY, minX, minY) //remove when put aliens in

    //console.log("alienbox (x1,y1) after move is (", box.x1, ",", box.y1, ")")
    for(let i = 0; i < Aliens.length; i++){
        if(Aliens[i].IsDead == false){
            Aliens[i].Draw()
        } else {
            Aliens[i].DeathAnim()
        }
        
        /*console.log("Alien ", i, " points are at (", Aliens[i].xpos, ",", Aliens[i].ypos, ") + (", Aliens[i].xTwoRight, " or ", Aliens[i].xTwoLeft,
                    ",", Aliens[i].yTwo, ") + (", Aliens[i].xThree, ",", Aliens[i].yThree, ").")*/
   }
    //Draw the ship
    ship.Draw()

    // aline shot logic
    
    
   // defenders shot logic
    DefenderShotLogic()
    for(let s = 0; s < AlienLaser.length; s++){
        //console.log("s is", s, "so AlienLaser[s] is ", AlienLaser[s])
        //console.log(AlienLaser[s].shotFired)
        //console.log("Alien shot ", s ," is ", AlienLaser[s].shotFired)
        AlienShotLogic(s)
        
        if(AlienLaser[s].shotFired == false){
            
            AlienLaser[s].shotFired = true  
        }
        
        
    }

    AdjustAlienSpeed()

    for(let g = 0; g < Shields.length; g++){
        Shields[g].Draw()
    }
    //console.log("The alienKillcount is ", alienKillCount, " therfore the aliens speed is", box.dx, ".")

    //console.log("My laser is at x ", laser.xpos, " and y ", laser.ypos, ".")



    //reset the fire cooldown and the timer
    cooldown = false
    UpdateGame()
    if(lives <= 0 || box.y3 > SOUTH_SIDE_BORDER){
        clearTimeout(timer)
        timer = null
        theCanvas.Clear()
        theCanvas.DrawL()
    }
    timer = setTimeout(Default, UPDATE_TIME)

}






// What happens when the canvas recieves input
function KeyGetter(event){

    //console.log(event.key)
    //ship.Move(event.key)

   
    
    if (event.key == 'f' && !cooldown)  {
        laser.shotFired = true
     } else {
        ship.Move(event.key)
     }

}

// Letting the Canvas recieve events
theCanvas.AddListener("keydown", KeyGetter)
//theCanvas.AddListener("keyup", KeyGetterTwo)

// Creating visual elements



let ship = new Defender(theCanvas.width/2, theCanvas.height, theCanvas)
let laser = new Shot(ship.xpos, ship.ypos, theCanvas, true)

let Shields = []
let shieldSpacing = 200

for(let e = 0; e < MAX_SHIELD_AMOUNT; e++){
    Shields.push(MakeShield(shieldSpacing))
    shieldSpacing += 200
}
//Aliens' setup

let startX = 10
let startY = 10
let box = new AlienBox(startX, startY, theCanvas)
// alien hoarde shots
let AlienLaser = [] // array of alien lasers
let spacing = 60 //intialial spacing of the shots

for(let t = 0; t < MAX_ALIEN_LASERS; t++){
    AlienLaser.push(MakeAlienLaser(spacing))
    spacing += 30
}
/*
let alienLaser1 = new Shot(box.x4 + 60, box.y4, theCanvas, false)
let alienLaser2 = new Shot(box.x4 + 120, box.y4, theCanvas, false)
let alienLaser3 = new Shot(box.x4 + 150, box.y4, theCanvas, false)
let alienLaser4 = new Shot(box.x4 + 210, box.y4, theCanvas, false)
*/
let Aliens = [] // An array of the Alienc child class objects
//global
let alienX = box.x1 // starting coordinates of (10,10)
let alienY = box.y1
let offsetX = 30
let offsetY = 25
// Intializing our array of aliens
for (let i = 0; i < MAX_ALIEN_ROWS; i++){
    alienX = box.x1 + 20
    alienY += offsetY // increment down to the next row of aliens
    for(let j = 0; j < MAX_ALIEN_COLS; j++){
        Aliens.push(MakeAlien(alienX, alienY, box))
        alienX += offsetX // increment to the next alien
    }
}




// creating the timer related variables
let timer = setTimeout(Default, UPDATE_TIME)
//let shotFired = false
//let alienShotsFired = false

let cooldown = false
