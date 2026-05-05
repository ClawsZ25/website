"use strict"
let alienHorizontalDirection = false // this is to decide the direction the aliens move in
let alienVerticalDirection = false // determines aline direction
let alienKillCount = 0
let gameScore = 0
let lives = 3

// Game constants
const ALIEN_HIT_RADIUS = 25
const DEFENDER_HIT_RADIUS = 10
const SHIELD_HIT_RADIUS = 5
const RANDOM_MOVE_AMOUNT = 250


// For extra points game logic
function FillSpan(value, id) {
    let element = document.getElementById(id)
    element.innerHTML = value
}

function UpdateGame(){
    FillSpan(gameScore, "score")
    FillSpan(lives, "lives")
    FillSpan(alienKillCount, "kills")

}
//Making the aliens
function MakeAlien(x, y, container){
    let alienXPos = x
    let alienYPos = y
    let alienBox = container
    let alien = new Alien(alienXPos, alienYPos, theCanvas, alienBox)
    return alien
}
// making alune lasers
function MakeAlienLaser(spacing){
    let alienLaser = new Shot(box.x4 + spacing, box.y4, theCanvas, false) //false because it is an aliean laser
    return alienLaser
}
//making shields
function MakeShield(shieldSpacing){
    let shield = new Shield(shieldSpacing, 600, theCanvas)
    shield.FillXAndY()
    return shield
}

// shot logic
function DefenderShotLogic(){
    if(laser.shotFired == true){
        FireShot()
        if(laser.ypos > NORTH_SIDE_BORDER /*||*/ ){
            laser.Move()
            laser.Draw()
        } else if(laser.ypos < NORTH_SIDE_BORDER){
            //console.log("missed shot")
            laser.shotFired = false
            laser.xpos = ship.xpos
            laser.ypos = ship.ypos
    
        } 
    } else if(laser.shotFired == false){
        //console.log("hit and resetting laser coordinates")
        console.log(" found hit")
        laser.Explode()
        laser.xpos = ship.xpos
        laser.ypos = ship.ypos

    }
}
// Create a shot
function FireShot(){

    cooldown = true
      
        //console.log("called Fire shot")
    //let hitAlien = false    
    let hitOne = false
    let hitShield = false
    //console.log(" shotX is ", shotX, " and shotY is ", shotY)

    for(let j = Aliens.length-1; j >= 0; j--){
        if(hitOne == false){
            if(Aliens[j].IsDead == false){
                if(FindHit(j, laser.xpos, laser.ypos) == true){
                    Aliens[j].IsDead = true
                    hitOne = true
                    laser.shotFired = false
                    gameScore += 100
                    alienKillCount++
                }

            }

        }

    }
    
    for(let c = 0; c < Shields.length; c++){
        if(hitShield == false){
            if(FindShieldHit(c, laser.xpos, laser.ypos) == true){
                //console.log("Defender Hit shield ", c)
                hitShield = true
                Shields[c].Resize(true)
                laser.shotFired = false
                }

        }

    }

}
    



//Collision Game Logic
function FindHit(i, x, y){

    let alien = Aliens[i]
    let hit = false

    let dX = Math.abs(alien.xpos - x) // gets the x distance between the shot and the alien
    let dY = Math.abs(alien.ypos - y)

    //console.log("This is distance (d) ", d, ".")
    if( dX <= ALIEN_HIT_RADIUS && dY <= ALIEN_HIT_RADIUS){
        //console.log("Alien ", i, " has been hit")
        hit = true
    }


    //console.log("This is hit (", hit, ")")
    return hit
}

function FindShieldHit(i,x,y){
    let shield = Shields[i]
    let absorbContact = false

    for(let k = shield.shieldLength; k > 0; k--){
        if(absorbContact == false){
            let dX = Math.abs(shield.shieldX[k] - x) 
            let dY = Math.abs(shield.shieldY[k] - y)

            if( dX <= SHIELD_HIT_RADIUS && dY <= SHIELD_HIT_RADIUS){
        
                absorbContact = true

            }

        }
    }
    return absorbContact

}


function AlienShotLogic(s){
    let alienShot = AlienLaser[s]
    if(alienShot.shotFired == true){
        //console.log("in shotFired is true if with alienShot  ", s, "")
        AlienFireShot(s)
        //console.log("alienShot y position is ", alienShot.ypos)
        if(alienShot.ypos < SOUTH_SIDE_BORDER){
            //console.log("In the draw alien shot if statement")
            alienShot.Move()
            alienShot.Draw()
        } else if(alienShot.ypos > SOUTH_SIDE_BORDER){
            //console.log("alienShot ", s, " is ", alienShot.shotFired)
            alienShot.shotFired = false
            alienShot.xpos = box.x4 + Math.random() * RANDOM_MOVE_AMOUNT // respawn a random x
            alienShot.ypos = box.y4
    
        } 
    } else if(alienShot.shotFired == false){
        //console.log("hit and resetting laser coordinates")
        alienShot.Explode()
        console.log(" contact and resetting alien laser ", s)
        alienShot.xpos = box.x4 + Math.random() * RANDOM_MOVE_AMOUNT // respond a random x
        alienShot.ypos = box.y4

    }

}

function AlienFireShot(s){
    let alienShot = AlienLaser[s]
    let collided = false
    let shieldCollided = false

    if(collided == false){
        if(FindAlienShotHitShip(alienShot.xpos, alienShot.ypos) == true){
            //console.log("Colliison has been found  by alien shot ", s)
            collided = true
            lives -= 0.5
            //console.log("AlienShotFired before ", alienShot.shotFired)
            alienShot.shotFired = false
           // console.log("AlienShotFired after ", alienShot.shotFired)
            alienShot.Explode()
        }
    }

    for(let c = 0; c < Shields.length; c++){
        if(FindShieldHit(c, alienShot.xpos, alienShot.ypos) == true){
            //console.log("Alien shot ", s, " Hit shield ", c)
            shieldCollided = true
            Shields[c].Resize(false)
            alienShot.Explode()
            alienShot.shotFired = false
        }
    
    
    }
    
}

function FindAlienShotHitShip(x,y){

    let collision = false

    let dX = Math.abs(ship.xpos - x) // gets the x distance between the shot and the alien
    let dY = Math.abs(ship.ypos - y)

    if( dX <= DEFENDER_HIT_RADIUS && dY <= DEFENDER_HIT_RADIUS){
        //console.log("Alien ", i, " has been hit")
        collision = true
    }
    return collision

}
/*
function UpdateAlienShots(){
    let refire = false
    let count = 0
    for(let b = 0; b < AlienLaser.length; b++){

        if(AlienLaser[b].shotFired == false){
            count ++ 
        }
    }
    if(count == 4){
        refire = true
    }

    return refire
}*/




// finding the min and max values of the aliens
function AlienXMinimum(){
    let xMin = 1001 // canvas in x direction is 1000 pixels so this will reset xMin on first run
    for(let i = 0; i < Aliens.length; i++){
        if(Aliens[i].IsDead == false){
            if(Aliens[i].xTwoLeft < xMin){
                xMin = Aliens[i].xTwoLeft
            }
        }
    }

    return xMin

}

function AlienXMaximum(){
    let xMax = 0 // canvas in x direction is 0 pixels so this will reset xMax on first run
    for(let i = 0; i < Aliens.length; i++){
        if(Aliens[i].IsDead == false){
            if(Aliens[i].xTwoRight > xMax){
                xMax = Aliens[i].xTwoRight
            }
        }
    }

    return xMax

}

function AlienYMinimum(){
    let yMin = 701 // canvas in y direction is 700 pixels so this will reset yMin on first run
    for(let i = 0; i < Aliens.length; i++){
        if(Aliens[i].IsDead == false){
            if(Aliens[i].ypos < yMin){          // using ypos because y = 0 close to the top
                yMin = Aliens[i].ypos
            }
        }
    }

    return yMin


}

function AlienYMaximum(){
    let yMax = 0 // canvas in y direction is 0 pixels so this will reset yMax on first run
    for(let i = 0; i < Aliens.length; i++){
        if(Aliens[i].IsDead == false){ // if alien is alive check it
            if(Aliens[i].yThree > yMax){
                yMax = Aliens[i].yThree
            }
        }
    }

    return yMax


}
// Speed Aliens up
function AdjustAlienSpeed(){
    if(alienKillCount > 5){
        box.dx = box.dx + 1
        alienKillCount = 0
    }
}


