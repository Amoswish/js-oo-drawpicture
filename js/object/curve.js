function curve(){
  var o = graph()
  // var route = {
  //    x : o.startX,
  //    y : o.startY,
  // }
  // var temppath = new Array()
  // o.path = temppath
  // temppath.push(route)
  // o.path = temppath
  // var o = graph()
  o.draw = function (){
    // route.x = this.finalX
    // route.y = this.finalX
    // temppath.push(route)
    // o.path = temppath
    var myCanvas = document.getElementById("myCanvas")
    var context = myCanvas.getContext('2d')
    //context.clearRect(0,0,width,height)
    //context.lineWidth=1
    for (var i = 0; i < o.path.length-1; i++) {
      //path[i]
      context.beginPath()
      context.moveTo(o.path[i].x,o.path[i].y)
      context.lineTo(o.path[i+1].x,o.path[i+1].y)
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
    for (var i = 0; i < o.path.length-1; i++) {
      //path[i]
      context.beginPath()
      context.moveTo(o.path[i].x,o.path[i].y)
      context.lineTo(o.path[i+1].x,o.path[i+1].y)
      tempcheck(context,_name)
      context.closePath()
    }
    context.closePath()
    //console.log(trace);
    return trace
  }
  return o
  return o
}
