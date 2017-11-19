var shap = ""
var isMouseDown = false
var diagram = graph()
var circleButton = document.getElementById("circle")
var rectButton = document.getElementById("rect")
var lineButton = document.getElementById("line")
var curveButton = document.getElementById("curve")
var eraseButton = document.getElementById("erase")
//graphPool中存储着每个图形对象，deletePool中存储者每个点对应的对象
var graphPool = new Array()
var deletePool = new Array()
var graphname = 0
//diagram.aab()
//选择哪种图形需要画
function circleSelected(){
  shap = "circle"
}
function rectSelected(){
  shap = "rectangle"
}
function lineSelected(){
  shap = "line"
}
function curveSelected(){
  shap = "curve"
}
function eraseSelected(){
  shap = "erase"
}
function myCanvasMouseDown(event){
  if(event.button == 0) {
    //console.log("press");
    diagram = graph()
    diagram.setStart(event.offsetX,event.offsetY)
    if(shap == "erase"){
      var myCanvas = document.getElementById("myCanvas")
      var context = myCanvas.getContext('2d')
          var needDeleteName =  diagram.delete(event.offsetX,event.offsetY,deletePool)
          //console.log(event.offsetX+"abc"+event.offsetY);
          //console.log(needDeleteName);
          //console.log(graphPool);
          for(var i = 0;i < graphPool.length;i++){
            if(graphPool[i].name == needDeleteName){
              //console.log("sss");
              graphPool.splice(i,1)
            }
          }
          diagram.clearCanvas()
          for (var i = 0; i < graphPool.length; i++) {
            graphPool[i].draw()
          }
    }
    isMouseDown = true
  }

}
function myCanvasMouseMove(event){
  if(isMouseDown){
    diagram.clearCanvas()
    diagram.recordPath(event.offsetX,event.offsetY)
    for (var i = 0; i < graphPool.length; i++) {
      graphPool[i].draw()
    }
    switch (shap) {
      case "circle":
    //  console.log(event.offsetX,event.offsetY);
          var circle1 =new circle()
          circle1.setStart(diagram.startX,diagram.startY)
          circle1.setFinal(event.offsetX,event.offsetY)
          circle1.setWidthofdraw(diagram.widthofdraw)
          circle1.setColor(diagram.color)
          circle1.draw()
          break
      case "rectangle":
          var rectangle1 =new rectangle()
          rectangle1.setStart(diagram.startX,diagram.startY)
          rectangle1.setFinal(event.offsetX,event.offsetY)
          rectangle1.setWidthofdraw(diagram.widthofdraw)
          rectangle1.setColor(diagram.color)
          rectangle1.draw()
          break
      case "line":
          var line1 =new line()
          line1.setStart(diagram.startX,diagram.startY)
          line1.setFinal(event.offsetX,event.offsetY)
          line1.setWidthofdraw(diagram.widthofdraw)
          line1.setColor(diagram.color)
          line1.draw()
          break
      case "curve":
          var curve1 =new curve()
          curve1.setStart(diagram.startX,diagram.startY)
          curve1.setFinal(event.offsetX,event.offsetY)
          curve1.setWidthofdraw(diagram.widthofdraw)
          curve1.setColor(diagram.color)
          curve1.setPath(diagram.path)
          curve1.draw()
          break

        break
        break
        break
    }

  }

}
function myCanvasMouseUp(event){

  if(isMouseDown){
    // for (var i = 0; i < graph.length; i++) {
    //   graph[i]
    // }
    diagram.clearCanvas()
    for (var i = 0; i < graphPool.length; i++) {
      graphPool[i].draw()
      //console.log(graphPool[i]);
    }
    switch (shap) {
      case "circle":
          var circle1 =new circle()
          circle1.setStart(diagram.startX,diagram.startY)
          circle1.setFinal(event.offsetX,event.offsetY)
          circle1.setWidthofdraw(diagram.widthofdraw)
          circle1.setColor(diagram.color)
          circle1.draw()
          circle1.setName(graphname)
          graphPool.push(circle1)
          var temp2 = circle1.redraw(graphname)
          deletePool.push(temp2)
          graphname++
          //console.log(deletePool);
          break
      case "rectangle":
          var rectangle1 =new rectangle()
          rectangle1.setStart(diagram.startX,diagram.startY)
          rectangle1.setFinal(event.offsetX,event.offsetY)
          rectangle1.setWidthofdraw(diagram.widthofdraw)
          rectangle1.setColor(diagram.color)
          rectangle1.draw()
          rectangle1.setName(graphname)
          graphPool.push(rectangle1)
          var temp2 = rectangle1.redraw(graphname)
          deletePool.push(temp2)
          graphname++
          break
      case "line":
          var line1 =new line()
          line1.setStart(diagram.startX,diagram.startY)
          line1.setFinal(event.offsetX,event.offsetY)
          line1.setWidthofdraw(diagram.widthofdraw)
          line1.setColor(diagram.color)
          line1.draw()
          line1.setName(graphname)
          graphPool.push(line1)
          var temp2 = line1.redraw(graphname)
          deletePool.push(temp2)
          graphname++
          break
      case "curve":
          var curve1 =new curve()
          curve1.setStart(diagram.startX,diagram.startY)
          curve1.setFinal(event.offsetX,event.offsetY)
          curve1.setPath(diagram.path)
          curve1.draw()
          curve1.setName(graphname)
          graphPool.push(curve1)
          var temp2 = curve1.redraw(graphname)
          deletePool.push(temp2)
          graphname++
          break
    }
    //erase 存储到deletepool
    //var temp = graphPool.pop

    isMouseDown = false
  }
}
//绑定选择事件
circleButton.addEventListener("click", circleSelected, false)
rectButton.addEventListener("click", rectSelected, false)
lineButton.addEventListener("click", lineSelected, false)
curveButton.addEventListener("click", curveSelected, false)
eraseButton.addEventListener("click", eraseSelected, false)
//绑定画图事件
var myCanvas = document.getElementById("myCanvas")
myCanvas.addEventListener("mousedown", myCanvasMouseDown, false)
myCanvas.addEventListener("mousemove", myCanvasMouseMove, false)
window.addEventListener("mouseup", myCanvasMouseUp, false)
