function graph(){
  var o = {
    startX:0,
    startY:0,
    finalX:0,
    finalY:0,
    widthofdraw:10,
    color:"",
  }
  o.setStart = function(_startX,_startY){
    o.startX = _startX
    o.startY = _startY
        // alert("s")
  }
  o.setFinal = function(_finalX,_finalY){
    o.finalX = _finalX
    o.finalY = _finalY

  }
  o.setWidthofdraw = function(_widthofdraw){
    o.widthofdraw = _widthofdraw
  }
  o.setColor = function(_color){
    o.color = _color
  }
  o.clearCanvas = function(){
    var myCanvas = document.getElementById("myCanvas")
    var context = myCanvas.getContext('2d')
    var width = myCanvas.width
    var height = myCanvas.height
    context.clearRect(0,0,width,height);
  }
  return o
}
function circle(){
  var o = new graph()
  o.radius = 0
  o.draw = function (){
    var myCanvas = document.getElementById("myCanvas")
    var context = myCanvas.getContext('2d')
    // context.strokeRect(this.startX, this.startY, this.finalX-this.startX, this.finalY-this.startY)
    context.beginPath()
    context.arc(this.startX+(this.finalX-this.startX)/2,this.startY+(this.finalY-this.startY)/2,Math.abs(this.finalX-this.startX)/2,0,Math.PI * 2,true)
    context.stroke()
    context.closePath()
    //context.strokeRect(0, 0, 100, 100)
  }
  return o
}
function rectangle(){
  var o = graph()
  o.draw = function (){
    var myCanvas = document.getElementById("myCanvas")
    var context = myCanvas.getContext('2d')
    //context.clearRect(0,0,width,height)
    context.lineWidth=1
    context.beginPath()
    context.rect(this.startX, this.startY, this.finalX-this.startX, this.finalY-this.startY)
    context.stroke()
    context.closePath()
  }
  return o
}
function curve(){
  var array = new Array()
  var o = graph()
  o.path = array
  o.drawcurve = function (){
    context.strokeRect(startX, startY, finalX-startX, finalY-startY)
  }

  return o
}
