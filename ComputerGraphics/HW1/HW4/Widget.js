'use strict'
//Nicole helped me build the Orbit function

class Widget {
    //color variables
    red
    green
    blue
    alpha
    // position variables
    // rotateX
    // rotateY
    // rotateZ
    // scaleX
    // scaleY
    // scaleZ
    // translateX
    // translateY
    // translateZ
    //animation variables
    translateXKeepGoing
    translateYKeepGoing
    translateZKeepGoing
    scaleKeepGoing
    rotateXKeepGoing
    rotateYKeepGoing
    rotateZKeepGoing
    theta
    //which viewport
    modelNumber
    
    constructor(gl, program, posName, ltName, edges, red, green, blue, num) {
        this.visible = true
	    this.size = edges.length
	    this.SetupVBO(gl, edges, program)

        this.FindMove(edges)

	    this.vpos =  gl.getAttribLocation(program, posName)
	    this.localTransform = gl.getUniformLocation(program, ltName)

        this.Viewport(0,0,canvas.width, canvas.height)

        this.red = 0
        this.green = 0
        this. blue = 0
        this.alpha = 1.0
        this.SetUpColor(red,green,blue)

        this.rotateX = 0.0
        this.rotateY = 0.0
        this.rotateZ = 0.0
        this.scaleX = 1.0
        this.scaleY = 1.0
        this.scaleZ = 1.0
        this.translateX = 0.0
        this.translateY = 0.0
        this.translateZ = 0.0
        this.theta = 0.0
        //viewport/model number
        this.modelNumber = num

        //this.translateX(tx)
        //anim bool variable intialization
        this.translateXKeepGoing =  true
        this.translateYKeepGoing =  true
        this.translateZKeepGoing =  true
        this.scaleKeepGoing =  true
        this.rotateXKeepGoing = true
        this.rotateYKeepGoing = true
        this.rotateZKeepGoing = true
        
    }


    // I want the thing centered on 0,0 and scaled nicely to fit in the 
    // view cube.
    FindMove(edges) {
        // ... is a flatten operation
        // originally i did let upperRight = edges[0]
        // but that did not do a deep copy.
        let lowerLeft = [...edges[0]] 
        let upperRight = [...edges[0]];

        // find the corners of the bounding box.
        for(let i = 1; i< edges.length; ++i) {
            for(let j=0; j < 3; ++j) {
                lowerLeft[j] = Math.min(lowerLeft[j], edges[i][j]);
                upperRight[j] = Math.max(upperRight[j], edges[i][j]);
            }
        }

        // find the dimensions of the bounding box.
        //
        //console.log(lowerLeft)
        //console.log(upperRight);
        let diff = subtract(upperRight, lowerLeft);
        //console.log(diff);


        // start with the identity matrix.
        this.transform = mat4(1)

        // find the center of the bounding box.
       
        let diff2 = mult(diff, [1/2, 1/2, 1/2]);
        let center = add(lowerLeft,diff2);
        center = mult(center, [-1,-1,-1]);

        let max = Math.max(...diff);
        // this is a guess so it looks nice.
        let scale = 1.7/max;

        //Then scale it.
        this.transform = mult(this.transform, scalem(scale,scale,scale));
        // translate the center to 0,0,0
        this.transform = mult(this.transform, translate(center))
    }

    SetupVBO(gl, edges, program) {
        this.vbuf =  gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vbuf);
	    gl.bufferData(gl.ARRAY_BUFFER,flatten(edges),gl.STATIC_DRAW);

        //can declare variables that need to be in teh buffer object here
        this.aBC = gl.getAttribLocation(program, "attributeBC"); //I have attribuetBC now
        //gl.vertexAttribPointer()
        //gl.enableVertexAttribArray()
        //gl.bufferData()
        
    }

    SetUpColor(r,g,b){
        this.red = r
        this.green = g
        this.blue = b
    }

    Show() {
        this.visible = true;
    }

    Hide() {
        this.visible = false;
    }

    Visible() {
        return this.visible;
    }

    Viewport(x,y,w,h) {
         this.vx = x;
         this.vy = y;
         this.vw = w;
         this.vh = h;
    }
    //getter for color variables

    get getRed(){
        return this.red
    }
    
    get getBlue(){
        return this.blue
    }

    get getGreen(){
        return this.green
    }

    get getAlpha(){
        return this.alpha
    }

    // getters for position variables

    get getRotateX(){
        return this.rotateX
    }

    get getRotateY(){
        return this.rotateY
    }

    get getRotateZ(){
        return this.rotateZ
    }

    get getScaleX(){
        return this.scaleX
    }

    get getScaleY(){
        return this.scaleY
    }

    get getScaleZ(){
        return this.scaleZ
    }

    get getTranslateX(){
        return this.translateX
    }

    get getTranslateY(){
        return this.translateY
    }

    get getTranslateZ(){
        return this.translateZ
    }

    get getTheta(){
        return this.theta
    }
    //getter for model number
    get getModelNumber(){
        return this.modelNumber
    }

    //setters for position variables
    set setRotateX(rx){
        this.rotateX = rx
        return
    }

    set setRotateY(ry){
        this.rotateY = ry
        return
    }

    set setRotateZ(rz){
        this.rotateX = rz
        return
    }

    set setScaleX(sx){
        this.scaleX = sx
        return
    }

    set setScaleY(sy){
        this.scaleY = sy
        return
    }

    set setScaleZ(sz){
        this.scaleZ = sz
        return
    }

    set setTranslateX(tx){
        this.translateX = tx
        return
    }

    set setTranslateY(ty){
        this.translateX = ty
        return
    }

    set setTranslateZ(tz){
        this.translateZ = tz
        return

    }

    set setTheta(t){
        this.theta= t
        return

    }

    Reset(){
        //console.log("helloooo")
        this.translateX = 0.0
        this.translateY = 0.0
        this.translateZ = 0.0
        this.scaleX = this.scaleX
        this.scaleY = this.scaleY
        this.scaleZ = this.scaleZ
        this.rotateX = 0.0
        this.rotateY = 0.0
        this.rotateZ = 0.0
        this.theta = 0.0
    }

    Scale(boundryOne, boundryTwo){
        // swap input if the boundry condition are not good
        if(boundryTwo > boundryOne){
            let temp = boundryTwo
            boundryTwo = boundryOne
            boundryOne = temp
        }

        if(this.scaleX < boundryOne && this.scaleKeepGoing == true){
            this.scaleX = this.scaleX + 0.01
            this.scaleY = this.scaleY + 0.01
            this.scaleZ = this.scaleZ + 0.01
        } else{
            this.scaleKeepGoing = false
            this.scaleX = this.scaleX - 0.01
            this.scaleY = this.scaleY - 0.01
            this.scaleZ = this.scaleZ - 0.01
            if(this.scaleX < boundryTwo){
                this.scaleKeepGoing = true
            }
        }

    }

    TranslateX(boundryOne, boundryTwo){
        if(boundryTwo > boundryOne){
            let temp = boundryTwo
            boundryTwo = boundryOne
            boundryOne = temp
        }

        if(this.translateX < boundryOne && this.translateXKeepGoing == true){
            this.translateX = this.translateX + 0.01
        } else{
            this.translateXKeepGoing = false
            this.translateX = this.translateX - 0.01
            if(this.translateX < boundryTwo){
                this.translateXKeepGoing = true
            }
        }

    }

    TranslateY(boundryOne, boundryTwo){
        if(boundryTwo > boundryOne){
            let temp = boundryTwo
            boundryTwo = boundryOne
            boundryOne = temp
        }

        if(this.translateY < boundryOne && this.translateYKeepGoing == true){
            this.translateY = this.translateY + 0.01
        } else{
            this.translateYKeepGoing = false
            this.translateY = this.translateY - 0.01
            if(this.translateY < boundryTwo){
                this.translateYKeepGoing = true
            }
        }

    }

    TranslateZ(boundryOne, boundryTwo){
        if(boundryTwo > boundryOne){
            let temp = boundryTwo
            boundryTwo = boundryOne
            boundryOne = temp
        }

        if(this.translateZ < boundryOne && this.translateZKeepGoing == true){
            this.translateZ = this.translateZ + 0.01
        } else{
            this.translateZKeepGoing = false
            this.translateZ = this.translateZ - 0.01
            if(this.translateZ < boundryTwo){
                this.translateZKeepGoing = true
            }
        }

    }

    RotateY(boundryOne, boundryTwo){
        if(boundryTwo > boundryOne){
            let temp = boundryTwo
            boundryTwo = boundryOne
            boundryOne = temp
        }

        if(this.rotateY < boundryOne && this.rotateYKeepGoing == true){
            this.rotateY = this.rotateY + 1
        } else{
            this.rotateYKeepGoing = false
            this.rotateY = this.rotateY - 1
            if(this.rotateY < boundryTwo){
                this.rotateYKeepGoing = true
            }
        }


    }

    RotateX(boundryOne, boundryTwo){
        if(boundryTwo > boundryOne){
            let temp = boundryTwo
            boundryTwo = boundryOne
            boundryOne = temp
        }

        if(this.rotateX < boundryOne && this.rotateXKeepGoing == true){
            this.rotateX = this.rotateX + 1
        } else{
            this.rotateXKeepGoing = false
            this.rotateX = this.rotateX - 1
            if(this.rotateX < boundryTwo){
                this.rotateXKeepGoing = true
            }
        }


    }

    RotateZ(boundryOne, boundryTwo){
        if(boundryTwo > boundryOne){
            let temp = boundryTwo
            boundryTwo = boundryOne
            boundryOne = temp
        }

        if(this.rotateZ < boundryOne && this.rotateZKeepGoing == true){
            this.rotateZ = this.rotateZ + 1
        } else{
            this.rotateZKeepGoing = false
            this.rotateZ = this.rotateZ - 1
            if(this.rotateZ < boundryTwo){
                this.rotateZKeepGoing = true
            }
        }


    }

    Orbit(r, offset){
        //console.log("in orbit")

        this.rotateX = r * Math.cos(this.theta)
        this.rotateY = r * Math.sin(this.theta) * Math.sin(offset)
        this.rotateZ = r * Math.sin(this.theta) * Math.cos(offset)


        this.theta += 0.05
        if(this.theta >= 2 * Math.PI){
            this.theta -= 2 * Math.PI

        }



    }
    

    Display(gl) {
          if (this.visible) {
            

              // send over the first transformation matrix
              gl.uniformMatrix4fv(this.localTransform, false,
                                                flatten(this.transform));

              gl.viewport(this.vx, this.vy, this.vw, this.vh);

              gl.bindBuffer(gl.ARRAY_BUFFER, this.vbuf);

              gl.vertexAttribPointer(this.vpos, 3, gl.FLOAT, false, 0, 0);
              gl.enableVertexAttribArray(this.vpos);

              for(let i =0; i < this.size;++i) {
                  gl.drawArrays(gl.LINE_LOOP, 3*i, 3);
              }
	  }
    }
}