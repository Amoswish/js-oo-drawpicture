function curve(){
  var o = graph()
  o.draw = function (){
    var myCanvas = document.getElementById("myCanvas")
    var context = myCanvas.getContext('2d')
    //context.clearRect(0,0,width,height)
    context.lineWidth=this.widthofdraw
    context.strokeStyle =this.color
    for (var i = 0; i < this.path.length-1; i++) {
      //path[i]
      context.beginPath()
      context.moveTo(this.path[i].x,this.path[i].y)
      context.lineTo(this.path[i+1].x,this.path[i+1].y)
      context.stroke()
      context.closePath()
    }
  }
  o.redraw = function(_name){

    // function tempcheck(context,_name){
    //   if(staX<=finX){
    //     if(staY<=finY){
    //       for(var i = staX-10;i<=finX+10 ;i++){
    //         for (var j = staY-10;j<=finY+10;j++){
    //           if(context.isPointInStroke(i,j)){
    //             var temp = {
    //               nowx:i,
    //               nowy:j,
    //               name:_name,
    //             }
    //             trace.push(temp)
    //           }
    //         }
    //       }
    //     }
    //     else if (staY>finY) {
    //       for(var i = staX-10;i<=staY+10 ;i++){
    //         for (var j = finY-10;j<=staY+10;j++){
    //           if(context.isPointInStroke(i,j)){
    //             var temp = {
    //               nowx:i,
    //               nowy:j,
    //               name:_name,
    //             }
    //             trace.push(temp)
    //           }
    //         }
    //       }
    //     }
    //   }
    //
    //   else if (staX>finX) {
    //     if(staY<=finY){
    //       for(var i = finX-10;i<=staX+10 ;i++){
    //         for (var j = staY-10;j<=finY+10;j++){
    //           if(context.isPointInStroke(i,j)){
    //             var temp = {
    //               nowx:i,
    //               nowy:j,
    //               name:_name,
    //             }
    //             trace.push(temp)
    //           }
    //         }
    //       }
    //     }
    //     else if (staY>finY) {
    //       for(var i = finX-10;i<=staX+10 ;i++){
    //         for (var j = finY-10;j<=staY+10;j++){
    //           if(context.isPointInStroke(i,j)){
    //             var temp = {
    //               nowx:i,
    //               nowy:j,
    //               name:_name,
    //             }
    //             trace.push(temp)
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    //找到搜索的范围矩形
    var serchStartX = this.startX
    var serchStartY = this.startY
    var serchFinalX = this.finalX
    var serchFinalY = this.finalY
    for (var i = 0; i < this.path.length; i++) {
      if(this.path[i].x<this.serchStartX){
        serchStartX = this.path[i].x
      }
      if(this.path[i].x>this.serchFinalX){
        serchFinalX = this.path[i].x
      }
      if(this.path[i].y<this.serchStartY){
        serchStartY = this.path[i].y
      }
      if(this.path[i].y>this.serchFinalY){
        serchFinalY = this.path[i].y
      }
    }
    var trace = new Array()
    var staX = serchStartX
    var staY = serchStartY
    var finX = serchFinalX
    var finY = serchFinalY
    function tempcheck(context,_name){
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
    var myCanvas = document.getElementById("myCanvas")
    var context = myCanvas.getContext('2d')
    context.beginPath()
    context.moveTo(staX,staY)
    context.lineTo(finX,finY)
    // context.moveTo(this.path[i].x,this.path[i].y)
    // context.lineTo(this.path[i+1].x,this.path[i+1].y)
    tempcheck(context,_name)
    context.closePath()
    // var myCanvas = document.getElementById("myCanvas")
    // var context = myCanvas.getContext('2d')
    // context.beginPath()
    // for (var i = 0; i < this.path.length-1; i++) {
    //   //path[i]
    //   context.beginPath()
    //   context.moveTo(this.path[i].x,this.path[i].y)
    //   context.lineTo(this.path[i+1].x,this.path[i+1].y)
    //   tempcheck(context,_name)
    //   context.closePath()
    // }
    // context.closePath()
    return trace
  }
  return o
}
