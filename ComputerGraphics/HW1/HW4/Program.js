'use strict'
// for translation, scaling, and rotation
let rx = 0
let ry = 0
let rz = 0
let sx = 1
let sy = 1
let sz = 1
let tx = 0
let ty = 0
let tz = 0
let Objects = []


//setting up timer
let timer = setInterval(Default, 50)
let pause = false
//let keepGoing = true


function MakeItems() {
    let cx = canvas.width/2;
    let cy = canvas.height/2;
    //numbers at the end of each object intialization are red, green, and blue
    // the very last number is the model number

    //dragon
    let tea= new Widget(canvas.GL(), canvas.Program(), 
                           "vPosition", "firstT",Teapot_Triangles, 0.0, 0.0, 1.0, 1.0);
    tea.Viewport(cx,cy, cx,cy);
    Objects.push(tea);

    // tea
    let tea2 = new Widget(canvas.GL(), canvas.Program(), 
                           "vPosition", "firstT",Teapot_Triangles, 1.0, 0.0, 1.0, 2.0);
    tea2.Viewport(0,cy, cx,cy);
    
    Objects.push(tea2);
    // Where, behind the bunny?
    let bunny = new Widget(canvas.GL(), canvas.Program(), 
                           "vPosition","firstT", Bunny_Triangles, 1.0, 0.0, 0.0, 3.0);
    bunny.Viewport(0,0, cx, cy);
    Objects.push(bunny);

    //console.log("bunny model number is ", Objects[2].getModelNumber)  Model number works
    // there goes Tokyo 
    let cone = new Widget(canvas.GL(), canvas.Program(), 
                           "vPosition", "firstT",Cone_Triangles, 0.0, 1.0, 0.0, 4.0);
    cone.Viewport(cx,0, cx,cy);
    Objects.push(cone);

    let cone2 = new Widget(canvas.GL(), canvas.Program(), 
                           "vPosition", "firstT",Cone_Triangles, 0.0, 0.0, 0.0, 4.1);
    cone2.Viewport(cx,0, cx,cy);
    //scaling cone
    cone2.setScaleX = 0.25
    cone2.setScaleY = 0.25
    cone2.setScaleZ = 0.25


    Objects.push(cone2);

    let cone3 = new Widget(canvas.GL(), canvas.Program(), 
                           "vPosition", "firstT",Cone_Triangles, 0.5, 0.5, 0.5, 4.2);
    cone3.Viewport(cx,0, cx,cy);

    //scaling cone2
    cone3.setScaleX = 0.5
    cone3.setScaleY = 0.5
    cone3.setScaleZ = 0.5

    Objects.push(cone3);


    

}

// probably wrong but everyone needs to rotate by the same amount.

// function SetUPMidTrans() {
//     let loc = canvas.GL().getUniformLocation(canvas.Program(), "midT")
//     //console.log("sx ", sx, " sy ", sy, " sz ", sz)
//     let scaleFactors = [sx,sy,sz]
//     let translateFactors = [tx,ty,tz]

//     let trans = mat4(1);//This is the identity matrix
//     trans = mult(trans, rotate(rx, [1,0,0]))
//     trans = mult(trans, rotate(ry, [0,1,0]))
//     trans = mult(trans, rotate(rz, [0,0,1]))
//     trans = mult(trans, scalem(scaleFactors))
//     trans = mult(trans, translate(translateFactors))
//     canvas.GL().uniformMatrix4fv(loc, false, flatten(trans))
// }

function SetUPMidTrans(item) {
    let loc = canvas.GL().getUniformLocation(canvas.Program(), "midT")
    //console.log("sx ", sx, " sy ", sy, " sz ", sz)
    //console.log("item scaleX is ", item.getScaleX, " and item rotateX is ", item.getRotateX, " amd item translateX is ", item.getTranslateX)
    //translating the objects
    /*
    if(item.getTranslateX < .5 && keepGoing == true){
        item.setTranslateX = item.getTranslateX + 0.01
    } else{
        keepGoing = false
        item.setTranslateX = item.getTranslateX - 0.01
        if(item.getTranslateX < 0){
            keepGoing = true
        }
    }*/

    //setter works
    let scaleFactors = [item.getScaleX,item.getScaleY,item.getScaleZ]
    let translateFactors = [item.getTranslateX,item.getTranslateY,item.getTranslateZ]

    let trans = mat4(1);//This is the identity matrix
    trans = mult(trans, rotate(item.getRotateX, [1,0,0]))
    trans = mult(trans, rotate(item.getRotateY, [0,1,0]))
    trans = mult(trans, rotate(item.getRotateZ, [0,0,1]))
    trans = mult(trans, scalem(scaleFactors))
    trans = mult(trans, translate(translateFactors))
    canvas.GL().uniformMatrix4fv(loc, false, flatten(trans))
}

function SetUP() {
    MakeItems();

    canvas.AddKeypress(Keypress);
    Objects[0].Reset()
    Objects[1].Reset()
    Objects[2].Reset()
    Objects[3].Reset()

}
/*
function Reset() {
    rx = 0
    ry = 0
    rz = 0
    sx = 1
    sy = 1
    sz = 1
    tx = 0
    ty = 0
    tz = 0

    SetUPMidTrans();
}*/

function Keypress(evnt) {
    if (evnt.key >= '0' && evnt.key <= '9') {
        ToggleItemVis(evnt.key-'0');
    } else {
       switch(evnt.key) {
            case 'g':
                if (pause == false){
                    //clearTimeout(timer)
                    clearInterval(timer)
                    timer = null
                    //timer = setTimeout(PauseScene, TIME_UPDATE)
                    pause = true
                    //console.log("not working")
                } else{
                    timer = setInterval(Default, 50)
                    pause = false
                    //console.log('working')
            
                }
                //console.log("Got key g which means pause is", pause)
                break

            case 'r':
                console.log("resetting")
                //resetting all of the models individually
                for(let i = 0; i < Objects.length; i++){
                    Objects[i].Reset()
                    //console.log(Objects[i])
                }

                break
       }
       //applies the transformation mmatricies
       //SetUPMidTrans();
    }
    //Display all the items
    //Display();
}

function ToggleItemVis(id) {
    if (id < Objects.length) {
         if (Objects[id].Visible() ) {
	     Objects[id].Hide();
	 } else {
	     Objects[id].Show();
	 }
    }
}

function DisplayItem(item) {
    
    //console.log(canvas.NewEdgeColor[red, green, blue, 1.0])
    //console.log(" item scaleX is ", item.getScaleX)
    canvas.NewEdgeColor([item.red, item.green, item.blue, item.alpha])
    //determing what the model does
    if(item.getModelNumber == 1.0){
        //model one rotates about the y-axis
        //console.log("rotate y is ", item.getRotateY)
        item.RotateY(360,0)
        //item.TranslateX(.5, -.5)

    }else if(item.getModelNumber == 2.0){
        //model two walks back and forth
        item.TranslateX(.5,-.5)

    }else if(item.getModelNumber == 3.0){
        //model 3 scales
        item.Scale(1.1,0.6)

    }else if(item.getModelNumber == 4.0){
        item.setScaleX = 0.5
        item.setScaleY = 0.5
        item.setScaleZ = 0.5

        item.TranslateX(1.5,-1.5)
        //item.RotateY(360,0)
        item.RotateZ(360,0)
        item.RotateX(360,0)
        

    } else if(item.getModelNumber == 4.1){
        
            //item.Scale(1.1,0.6)


            item.TranslateY(1.2,-1.2)

            item.Orbit(100.0,50.0)
            //item.RotateY(360,0)
            //item.RotateX(360,0)

        
    } else if(item.getModelNumber == 4.2){
        
        item.Scale(1.1,0.6)


        item.Orbit(50.0,30.0)
        //item.RotateY(360,0)
        //item.RotateX(360,0)
        // This is the complex model viewport
        //pending thought
    }
    


    SetUPMidTrans(item)
    item.Display(canvas.GL());
}
/*
function Display() {
    canvas.Clear();
    Objects.forEach(DisplayItem);
}*/

function Default(){
    canvas.Clear();

   // console.log("hello")

    
    
    //SetUPMidTrans()

    //SetUP()
    Objects.forEach(DisplayItem);

    

}

// what does SetUp do?
SetUP()
//Display();