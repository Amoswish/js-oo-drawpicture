function rectangle(){
  var o = graph()
  o.setType(rectangle)
  o.draw = function (){
    var myCanvas = document.getElementById("myCanvas")
    var context = myCanvas.getContext('2d')
    context.lineWidth=this.widthofdraw
    context.strokeStyle =this.color
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
