function graph(){
  var o = {
    startX:0,
    startY:0,
    finalX:0,
    finalY:0,
    widthofdraw:2,
    color:"",
    name:0,
    path:Array(),
  }
  o.recordPath = function (_x,_y){
    var temp = {
      x:_x,
      y:_y,
    }
    o.path.push(temp)
  }
  o.getPath = function (){
    return o.path
  }
  o.setPath = function(_path){
    o.path = _path
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
  o.setName = function(_name){
    o.name = _name
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
  o.delete = function(x,y,deletePool){
    var tempname = -1
    //传入当前摁下的x,y，并且找到摁下的对象名
    for (var i = 0; i < deletePool.length; i++) {
      for(var m = 0; m < deletePool[i].length;m++){
        for(var j = -10;j<10;j++){
          for(var k = -10; k<10;k++){
            var tempx = x+j
            var tempy = y+k
            if(tempx == deletePool[i][m].nowx && tempy == deletePool[i][m].nowy){
              tempname = deletePool[i][m].name
              break
            }
          }
        }
      }
    }
    return tempname
  }
  return o
}
