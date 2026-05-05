'use strict'

const CP1 = [-0.4, -0.4, -0.4]
const CP2 = [ 0.4, -0.4, -0.4]
const CP3 = [ 0.4,  0.4, -0.4]
const CP4 = [-0.4,  0.4, -0.4]
const CP5 = [-0.4, -0.4,  0.4]
const CP6 = [ 0.4, -0.4,  0.4]
const CP7 = [ 0.4,  0.4,  0.4]
const CP8 = [-0.4,  0.4,  0.4]

const CUBE=[
         CP1, CP2, CP3, CP4,  //front
	     CP1, CP5, CP8, CP4,  // left
	     CP3, CP7, CP8,       //top
	     CP5, CP6, CP7,       // back
	     CP3, CP2, CP6,       //right
	     CP5, CP1             // go home
           ];

const TP1 = [-0.5, -0.5, -0.5]
const TP2 = [0.5, -0.5, -0.5]
const TP3 = [0.0, -0.5, 0.5]
const TP4 = [0.0, 0.5, 0.0]

const TET=[ TP1, TP2, TP3,     TP1, TP2, TP4,
            TP2, TP3, TP4,     TP3, TP1, TP4];

function MakeItems() {
    let cube  = new Widget(canvas.GL(), canvas.Program(), "vPosition", CUBE);
    let tet  = new Widget(canvas.GL(), canvas.Program(), "vPosition", TET);
    tet.Hide();
    Objects.push(cube);
    Objects.push(tet);
}

function Keypress(evnt) {
    if (evnt.key >= '0' && evnt.key <= '9') {
        ToggleItemVis(evnt.key-'0');
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