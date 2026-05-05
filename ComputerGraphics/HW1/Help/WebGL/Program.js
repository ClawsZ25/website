'use strict'

let rx = 0;
let ry = 0;
let rz = 0;
let Objects = []

function MakeItems() {
    let cx = canvas.width/2;
    let cy = canvas.height/2;

    // Where, behind the bunny?
    let obj = new Widget(canvas.GL(), canvas.Program(), 
                           "vPosition","firstT", Bunny_Triangles );
    obj.Viewport(0,0, cx, cy);
    Objects.push(obj);

    // there goes Tokyo 
    obj = new Widget(canvas.GL(), canvas.Program(), 
                           "vPosition", "firstT",Lizard_Triangles );
    obj.Viewport(cx,0, cx,cy);
    Objects.push(obj);

     //dragon
    obj = new Widget(canvas.GL(), canvas.Program(), 
                           "vPosition", "firstT",Dragon_Triangles );
    obj.Viewport(cx,cy, cx,cy);
    Objects.push(obj);

    // tea
    obj = new Widget(canvas.GL(), canvas.Program(), 
                           "vPosition", "firstT",Teapot_Triangles );
    obj.Viewport(0,cy, cx,cy);
    
    Objects.push(obj);
}

// probably wrong but everyone needs to rotate by the same amount.
function SetUPMidTrans() {
    let loc = canvas.GL().getUniformLocation(canvas.Program(), "midT");

    let trans = mat4(1);
    trans = mult(trans, rotate(rx, [1,0,0]));
    trans = mult(trans, rotate(ry, [0,1,0]));
    trans = mult(trans, rotate(rz, [0,0,1]));
    canvas.GL().uniformMatrix4fv(loc, false, flatten(trans))
}

function SetUP() {
    MakeItems();

    canvas.AddKeypress(Keypress);
    Reset();
}

function Reset() {
    rx = 0;
    ry = 0;
    rz = 0;

    SetUPMidTrans();
}

function Keypress(evnt) {
    if (evnt.key >= '0' && evnt.key <= '9') {
        ToggleItemVis(evnt.key-'0');
    } else {
       switch(evnt.key) {
          case 'x': ++rx; break;
          case 'X': --rx; break;
          case 'y': ++ry; break;
          case 'Y': --ry; break;
          case 'z': ++rz; break;
          case 'Z': --rz; break;
          case 'r': Reset(); break;
       }
       SetUPMidTrans();
    }

    Display();
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
    item.Display(canvas.GL());
}

function Display() {
    canvas.Clear();
    Objects.forEach(DisplayItem);
}

SetUP()
Display();