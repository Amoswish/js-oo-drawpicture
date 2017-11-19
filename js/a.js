function graph(){
  var o = {
    startX:0,
    startY:0,
    finalX:0,
    finalY:0,
    widthofdraw:10,
    color:"",
    name:0,
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
function circle(){
  var o = new graph()
  o.radius = 0
  o.draw = function (){
    var myCanvas = document.getElementById("myCanvas")
    var context = myCanvas.getContext('2d')
    // context.strokeRect(this.startX, this.startY, this.finalX-this.startX, this.finalY-this.startY)
    context.beginPath()
    context.arc(this.startX+(this.finalX-this.startX)/2,this.startY+(this.finalY-this.startY)/2,Math.abs(this.finalX-this.startX)/2,0,Math.PI*2,true)
    context.stroke()
    context.closePath()
    //context.strokeRect(0, 0, 100, 100)
    //o.name = _name
  }
  o.redraw = function(_name){
    var trace = new Array()
    var staX = this.startX
    var staY = this.startY
    var finX = this.finalX
    var finY = this.finalY
    // var dir=[[0,1],[0,-1],[1,0],[-1,0]]
    // //var map[finX-staX][finY-staY]
    // var map=new Array(); //定义一维数组
    // //console.log(staX+"sa"+fin);
    // for(i=1;i<=Math.abs(finX-staX);i++)
    // {
    //     map[i]=new Array(); //将每一个子元素又定义为数组
    //     for(n=0;n<Math.abs(finY-staY);n++){
    //         map[i][n]=2 //此时aa[i][n]可以看作是一个二级数组
    //         //console.log(i+"s"+n);
    //     }
    // }
    // function CheckEdge(x,y){
    //   //console.log(x+"adad"+y);
    // //  console.log(staX+"sasa"+staY);
    //   if((x-staX)>0&&(y-staY>=0)){
    //     if(map[x-staX][y-staY]!=3 && x>=staX && x<=finX && y>=staY && y<=finY){
    //     //if(x>=staX && x<=finX && y>=staY && y<=finY){
    //       return 1
    //     }
    //     else {
    //       return 0
    //     }
    // }
    // }
    // function dfs(x,y,context){
    //   console.log(x+"s"+y);
    //   if (x == finX && y == finY) {
    //     return
    //   }
    //     if((x-staX)>0&&(y-staY>0)){
    //       map[x-staX][y-staY] = 3
    //     }
    //     if(context.isPointInStroke(x,y)){
    //       var temp = {
    //         nowx:x,
    //         nowy:y,
    //         name:1,
    //       }
    //       //console.log(x+"ss"+y);
    //       //console.log(temp)
    //       trace.push(temp)
    //       return
    //     }
    //     for(var i = 0; i < 4;i++){
    //       if(CheckEdge(x+dir[i][0],y+dir[i][1])){ // 按照规则生成下一个节点
    //         dfs(x+dir[i][0],y+dir[i][1],context)
    //       }
    //     }
    //     return
    // }
    function tempcheck(context,_name){
      if(staX<=finX){
        if(staY<=finY){
          for(var i = staX-10;i<=finX+10 ;i++){
            for (var j = staY-10;j<=finY+10;j++){
              if(context.isPointInStroke(i,j)){
                var temp = {
                  nowx:i,
                  nowy:j,
                  name:_name,
                }
                trace.push(temp)
              }
            }
          }
        }
        else if (staY>finY) {
          for(var i = staX-10;i<=staY+10 ;i++){
            for (var j = finY-10;j<=staY+10;j++){
              if(context.isPointInStroke(i,j)){
                var temp = {
                  nowx:i,
                  nowy:j,
                  name:_name,
                }
                trace.push(temp)
              }
            }
          }
        }
      }

      else if (staX>finX) {
        if(staY<=finY){
          for(var i = finX-10;i<=staX+10 ;i++){
            for (var j = staY-10;j<=finY+10;j++){
              if(context.isPointInStroke(i,j)){
                var temp = {
                  nowx:i,
                  nowy:j,
                  name:_name,
                }
                trace.push(temp)
              }
            }
          }
        }
        else if (staY>finY) {
          for(var i = finX-10;i<=staX+10 ;i++){
            for (var j = finY-10;j<=staY+10;j++){
              if(context.isPointInStroke(i,j)){
                var temp = {
                  nowx:i,
                  nowy:j,
                  name:_name,
                }
                trace.push(temp)
              }
            }
          }
        }
      }

    }
    var myCanvas = document.getElementById("myCanvas")
    var context = myCanvas.getContext('2d')
    // context.strokeRect(this.startX, this.startY, this.finalX-this.startX, this.finalY-this.startY)
    //console.log("begin");
    context.beginPath()
    context.arc(this.startX+(this.finalX-this.startX)/2,this.startY+(this.finalY-this.startY)/2,Math.abs(this.finalX-this.startX)/2,0,Math.PI * 2,true)
    context.stroke()
    //console.log("begin1");
    //console.log(context.isPointInPath(this.startX+20,this.startY+20))
    //console.log("begin2");
    //dfs(staX,staY,context)
    tempcheck(context,_name)
    context.closePath()
    //console.log(trace);
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
  o.redraw = function(_name){
    var trace = new Array()
    var staX = this.startX
    var staY = this.startY
    var finX = this.finalX
    var finY = this.finalY
    function tempcheck(context,_name){
      if(staX<=finX){
        if(staY<=finY){
          for(var i = staX-10;i<=finX+10 ;i++){
            for (var j = staY-10;j<=finY+10;j++){
              if(context.isPointInStroke(i,j)){
                var temp = {
                  nowx:i,
                  nowy:j,
                  name:_name,
                }
                trace.push(temp)
              }
            }
          }
        }
        else if (staY>finY) {
          for(var i = staX-10;i<=staY+10 ;i++){
            for (var j = finY-10;j<=staY+10;j++){
              if(context.isPointInStroke(i,j)){
                var temp = {
                  nowx:i,
                  nowy:j,
                  name:_name,
                }
                trace.push(temp)
              }
            }
          }
        }
      }

      else if (staX>finX) {
        if(staY<=finY){
          for(var i = finX-10;i<=staX+10 ;i++){
            for (var j = staY-10;j<=finY+10;j++){
              if(context.isPointInStroke(i,j)){
                var temp = {
                  nowx:i,
                  nowy:j,
                  name:_name,
                }
                trace.push(temp)
              }
            }
          }
        }
        else if (staY>finY) {
          for(var i = finX-10;i<=staX+10 ;i++){
            for (var j = finY-10;j<=staY+10;j++){
              if(context.isPointInStroke(i,j)){
                var temp = {
                  nowx:i,
                  nowy:j,
                  name:_name,
                }
                trace.push(temp)
              }
            }
          }
        }
      }
    }
    var myCanvas = document.getElementById("myCanvas")
    var context = myCanvas.getContext('2d')
    context.beginPath()
    context.rect(this.startX, this.startY, this.finalX-this.startX, this.finalY-this.startY)
    tempcheck(context,_name)
    context.closePath()
    //console.log(trace);
    return trace
  }
  return o
}
function line(){
  var o = graph()
  o.draw = function (){
    var myCanvas = document.getElementById("myCanvas")
    var context = myCanvas.getContext('2d')
    //context.clearRect(0,0,width,height)
    context.lineWidth=1
    context.beginPath()
    context.moveTo(this.startX,this.startY);
    context.lineTo(this.finalX,this.finalY);
    //context.rect(this.startX, this.startY, this.finalX-this.startX, this.finalY-this.startY)
    context.stroke()
    context.closePath()
  }
  o.redraw = function(_name){
    var trace = new Array()
    var staX = this.startX
    var staY = this.startY
    var finX = this.finalX
    var finY = this.finalY
    function tempcheck(context,_name){
      if(staX<=finX){
        if(staY<=finY){
          for(var i = staX-10;i<=finX+10 ;i++){
            for (var j = staY-10;j<=finY+10;j++){
              if(context.isPointInStroke(i,j)){
                var temp = {
                  nowx:i,
                  nowy:j,
                  name:_name,
                }
                trace.push(temp)
              }
            }
          }
        }
        else if (staY>finY) {
          for(var i = staX-10;i<=staY+10 ;i++){
            for (var j = finY-10;j<=staY+10;j++){
              if(context.isPointInStroke(i,j)){
                var temp = {
                  nowx:i,
                  nowy:j,
                  name:_name,
                }
                trace.push(temp)
              }
            }
          }
        }
      }

      else if (staX>finX) {
        if(staY<=finY){
          for(var i = finX-10;i<=staX+10 ;i++){
            for (var j = staY-10;j<=finY+10;j++){
              if(context.isPointInStroke(i,j)){
                var temp = {
                  nowx:i,
                  nowy:j,
                  name:_name,
                }
                trace.push(temp)
              }
            }
          }
        }
        else if (staY>finY) {
          for(var i = finX-10;i<=staX+10 ;i++){
            for (var j = finY-10;j<=staY+10;j++){
              if(context.isPointInStroke(i,j)){
                var temp = {
                  nowx:i,
                  nowy:j,
                  name:_name,
                }
                trace.push(temp)
              }
            }
          }
        }
      }
    }
    var myCanvas = document.getElementById("myCanvas")
    var context = myCanvas.getContext('2d')
    context.beginPath()
    context.moveTo(this.startX,this.startY)
    context.lineTo(this.finalX,this.finalY)
    tempcheck(context,_name)
    context.closePath()
    //console.log(trace);
    return trace
  }
  return o
}
function curve(){
  var array = new Array()
  var o = graph()
  o.path = array
  var o = graph()
  o.draw = function (){
    var myCanvas = document.getElementById("myCanvas")
    var context = myCanvas.getContext('2d')
    //context.clearRect(0,0,width,height)
    //context.lineWidth=1
    for (var i = 0; i < path.length; i++) {
      //path[i]
      context.beginPath()
      context.moveTo(this.startX,this.startY)
      context.lineTo(this.finalX,this.finalY)
      context.stroke()
      context.closePath()
    }

  }
  o.redraw = function(_name){
    var trace = new Array()
    var staX = this.startX
    var staY = this.startY
    var finX = this.finalX
    var finY = this.finalY
    function tempcheck(context,_name){
      if(staX<=finX){
        if(staY<=finY){
          for(var i = staX-10;i<=finX+10 ;i++){
            for (var j = staY-10;j<=finY+10;j++){
              if(context.isPointInStroke(i,j)){
                var temp = {
                  nowx:i,
                  nowy:j,
                  name:_name,
                }
                trace.push(temp)
              }
            }
          }
        }
        else if (staY>finY) {
          for(var i = staX-10;i<=staY+10 ;i++){
            for (var j = finY-10;j<=staY+10;j++){
              if(context.isPointInStroke(i,j)){
                var temp = {
                  nowx:i,
                  nowy:j,
                  name:_name,
                }
                trace.push(temp)
              }
            }
          }
        }
      }

      else if (staX>finX) {
        if(staY<=finY){
          for(var i = finX-10;i<=staX+10 ;i++){
            for (var j = staY-10;j<=finY+10;j++){
              if(context.isPointInStroke(i,j)){
                var temp = {
                  nowx:i,
                  nowy:j,
                  name:_name,
                }
                trace.push(temp)
              }
            }
          }
        }
        else if (staY>finY) {
          for(var i = finX-10;i<=staX+10 ;i++){
            for (var j = finY-10;j<=staY+10;j++){
              if(context.isPointInStroke(i,j)){
                var temp = {
                  nowx:i,
                  nowy:j,
                  name:_name,
                }
                trace.push(temp)
              }
            }
          }
        }
      }
    }
    var myCanvas = document.getElementById("myCanvas")
    var context = myCanvas.getContext('2d')
    context.beginPath()
    context.rect(this.startX, this.startY, this.finalX-this.startX, this.finalY-this.startY)
    tempcheck(context,_name)
    context.closePath()
    //console.log(trace);
    return trace
  }
  return o
  return o
}
