'use strict'

class Widget {
    constructor(gl, program, posName, edges) {
        this.visible = true;
	this.size = edges.length;
	this.SetupVBO(gl,edges);

	this.pos =  gl.getAttribLocation(program, posName);
    }

    SetupVBO(gl, edges) {
        this.vbuf =  gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vbuf);

	gl.bufferData(gl.ARRAY_BUFFER,flatten(edges),gl.STATIC_DRAW);
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

    Display(gl) {
          if (this.visible) {
              gl.bindBuffer(gl.ARRAY_BUFFER, this.vbuf);

              gl.vertexAttribPointer(this.pos, 3, gl.FLOAT, false, 0, 0);
              gl.enableVertexAttribArray(this.pos);

              gl.drawArrays(gl.LINE_LOOP, 0, this.size);
	  }
    }
}