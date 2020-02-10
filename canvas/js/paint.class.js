import { Point } from './point.model.js';
import { Tool } from './tool.class.js';

import { getMouseCoordsOnCanvas, findDistance } from './utility.js';
import { Fill } from './fill.class.js';
export class Paint {
 constructor (canvasId){
   this.canvas = document.querySelector(canvasId);
   this.context = canvas.getContext('2d');
   this.undoStack = [];
   this.undoLimit = 3;
 }

  set activeTool(tool){
    this.tool = tool;
    // console.log(this.tool);
  } 
  
  set lineWidth(linewidth){
    this._lineWidth = linewidth;
    this.context.lineWidth = this._lineWidth;
  }

  set brushSize(brushsize){
    this._brushSize = brushsize;
  }

  set selectedColor(color){
    this.color = color;
    this.context.strokeStyle = this.color;
  }
  init(){
    this.canvas.onmousedown = e => this.onMouseDown(e);
  }

  onMouseDown(e){
    this.savedData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height)
    
    if (this.undoStack.length >= this.undoLimit) this.undoStack.shift();
    this.undoStack.push(this.savedData);
    
    this.canvas.onmousemove = e => this.onMouseMove(e);
    document.onmouseup = e => this.onMouseUp(e);
    // console.log(e.clientX, e.clientY); 
    this.startPos = getMouseCoordsOnCanvas(e, this.canvas);
    // console.log(this.startPos);
    if(this.tool == Tool.TOOL_PENCIL || this.tool == Tool.TOOL_BRUSH){
      this.context.beginPath();
      this.context.moveTo(this.startPos.x, this.startPos.y);
    } else if (this.tool == Tool.TOOL_PAINT_BUCKET){
     new Fill(this.canvas, this.startPos, this.color);
    } else if(this.tool == Tool.TOOL_ERASER){
      this.context.clearRect(this.startPos.x, this.startPos.y,
        this._brushSize, this._brushSize);

    }

  }

  onMouseMove(e){
   this.currentPos = getMouseCoordsOnCanvas(e, this.canvas);
  //  console.log(this.currentPos);
   switch(this.tool){
     case Tool.TOOL_LINE:
     case Tool.TOOL_RECTANGLE:
     case Tool.TOOL_CIRCLE:
     case Tool.TOOL_TRIANGLE:
       this.drawShape();
      break;
     case Tool.TOOL_PENCIL:
       this.drawFreeLine(this._lineWidth);
       break;
     case Tool.TOOL_BRUSH:
       this.drawFreeLine(this._brushSize);
        break;
    case Tool.TOOL_ERASER:
        this.context.clearRect(this.currentPos.x, this.currentPos.y,
        this._brushSize, this._brushSize);
       break;
     default: 
      break;
    }
  }

  onMouseUp(e){
    this.canvas.onmousemove = null;
    document.onmouseup = null;
  }

  drawShape(){
   this.context.putImageData(this.savedData, 0, 0);

   this.context.beginPath();
   
   if (this.tool == Tool.TOOL_LINE){
     this.context.moveTo(this.startPos.x, this.startPos.y);
     this.context.lineTo(this.currentPos.x, this.currentPos.y);
   }else if(this.tool == Tool.TOOL_RECTANGLE){
     this.context.rect(this.startPos.x, this.startPos.y, this.currentPos.x - this.startPos.x, this.currentPos.y - this.startPos.y);
   }else if(this.tool == Tool.TOOL_CIRCLE){
     let distance = findDistance(this.startPos, this.currentPos);
    //  let distance = 20;
     this.context.arc(this.startPos.x, this.startPos.y, distance, 0, 2*Math.PI, false);
    } else if(this.tool == Tool.TOOL_TRIANGLE){
      this.context.moveTo((this.startPos.x + (this.currentPos.x - this.startPos.x) / 2), this.startPos.y);
      this.context.lineTo(this.startPos.x, this.currentPos.y);
      this.context.lineTo(this.currentPos.x, this.currentPos.y);
      this.context.closePath();
    }
   this.context.stroke();
  }
   drawFreeLine(lineWidth){
     this.context.lineWidth = lineWidth;
     this.context.lineTo(this.currentPos.x, this.currentPos.y);
     this.context.stroke();
 }

   undoPaint(){
     if(this.undoStack.length > 0){
       this.context.putImageData(this.undoStack[this.undoStack.length - 1], 0,0);
       this.undoStack.pop();
     } else {
       alert ('Отмена недоступна');
     }
     

  }


}

