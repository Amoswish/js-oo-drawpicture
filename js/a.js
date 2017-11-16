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
  o.redraw = function(){
    var trace = new Array()
    var staX = this.startX
    var staY = this.startY
    var finX = this.finalY
    var finY = this.finalY
    var dir=[[0,1],[0,-1],[1,0],[-1,0]]
    //var map[finX-staX][finY-staY]
    var map=new Array(); //定义一维数组
    for(i=1;i<=finX-staX;i++)
    {
        map[i]=new Array(); //将每一个子元素又定义为数组
        for(n=0;n<finY-staY;n++){
            map[i][n]=2; //此时aa[i][n]可以看作是一个二级数组
            console.log(map[i][n]);
        }
    }
    function CheckEdge(x,y){
      //if(map[x][y]!=3 && x>=staX && x<=finX && y>=staY && y<=finY){
      if(x>=staX && x<=finX && y>=staY && y<=finY){
        return 1
      }
      else {
        return 0
      }
    }
    function dfs(x,y){
        //map[x-staX][y-staY] = 3
        if(context.isPointInStroke(x,y)){
          var temp = {
            nowx:x,
            nowy:y,
            name:1,
          }
          console.log(x+"ss"+y);
          console.log(temp)
          trace.push(temp)
          return
        }
        for(var i = 0; i < 4;i++){
          if(CheckEdge(x+dir[i][0],y+dir[i][1])){ // 按照规则生成下一个节点
            dfs(x+dir[i][0],y+dir[i][1])
          }
        }
        return
    }
    var myCanvas = document.getElementById("myCanvas")
    var context = myCanvas.getContext('2d')
    // context.strokeRect(this.startX, this.startY, this.finalX-this.startX, this.finalY-this.startY)
    console.log("begin");
    context.beginPath()
    context.arc(this.startX+(this.finalX-this.startX)/2,this.startY+(this.finalY-this.startY)/2,Math.abs(this.finalX-this.startX)/2,0,Math.PI * 2,true)
    //context.stroke()
    console.log("begin1");
    context.closePath()
    dfs(staX,staY)
    return trace
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
