"use strict"

function DrawOtherLine(x0, y0, x1, y1) {
    let m = (y0-y1)/(x0-x1)
    let mINV = 1/m
    // perpindicular line attempt
    let mP = -1/m // slope of the perpindicular line
    let mPINV = 1/mP
    //console.log("The slope is ", m, " and the inverse slope is ", mINV, ".")

    if (m >= -1 && m <= 1) {
        if (x0 > x1) {
            let tmp = x0
            x0 = x1
            x1 = tmp
            tmp = y0
            y0 = y1
            y1 = tmp
        }

        let y = y0
        for(let x = x0; x <= x1; x++) {
            
            y += m
            SetPixel(x,y, "black")
            PixelCount++
        }
    } else {
        if (y0 > y1) {
            let tmp = x0
            x0 = x1
            x1 = tmp
            tmp = y0
            y0 = y1
            y1 = tmp
        }
        let x = x0;
        for(let y = y0; y <= y1; y++) {
            x += mINV
           SetPixel(x,y, "black");
           PixelCount++
        }
    }

    return;
}