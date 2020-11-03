import React, { useRef, useEffect } from 'react'
import '../App.css';

class Node {
	constructor(canvas) {
        this.canvas = canvas
		this.reset();
		this.z = Math.random();
		this.radius= this.z  *7;
        this.xVel = -3 * this.z;
        
		if (Math.random() < 0.5) {
			this.yVel = -1 * this.z;
		} else {
			this.yVel = 1 * this.z;
		}
		let random = Math.random();
			if (random < 0.25){
				this.color = 'rgb(0, 0, 0)';
			} else if (random < 0.5) {
				this.color = 'rgb(234, 171, 0)';
			} else if (random < 0.75){
				this.color = 'rgb(152, 30, 50)';
			} else {
				this.color = 'rgb(0, 0, 0)';
			}
		}
	reset() {
		this.x = (Math.random() * 100) + this.canvas.width + this.radius*2;
		this.y = Math.random() * this.canvas.height;
	}

	move(){
		if (this.x + this.radius*2 < 0) {
			this.reset();
		}if (this.y > this.canvas.height + this.radius*2 || this.y + this.radius*2 < 0){
			this.reset();
		}
		this.x += this.xVel;
		this.y += this.yVel;
	}

	draw(c) {
		this.move();
		c.beginPath();
		//   (x, y, r, sAngle, eAngle, cc)
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
		c.fillStyle = this.color;
		
		c.strokeStyle = 'rgba(240, 240, 240, 0.05)';
  		c.fill();
		c.stroke();
	}

}


const Canvas = props => {
  
  const canvasRef = useRef(null)
  
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
    let frameCount = 0
    let animationFrameId

    var nodes = [];
    var i; 
    let totalDraw = 50;
    for (i = 0; i < totalDraw; i++){
        nodes.push(new Node(context.canvas));
    }
    
    //Our draw came here
    const render = () => {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height)
      for (i = 0; i < totalDraw; i++){
          nodes[i].draw(context)
      }

      //draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas height="1000" ref={canvasRef} {...props}/>
}

export default Canvas