function readStorageSelected(){
  shap = "readStorage"
  var tempGraphPool = JSON.parse(localStorage['graphPool'],function(k,v){
     if(v.indexOf && v.indexOf('function') > -1){
        return eval("(function(){return "+v+" })()")
     }
     return v
  })
  var tempDeletePool = JSON.parse(localStorage['deletePool'],function(k,v){
    if(v.indexOf && v.indexOf('function') > -1){
      return eval("(function(){return "+v+" })()")
    }
  return v
  })
  //先清空数组
   graphPool.splice(0,graphPool.length)
   deletePool.splice(0,deletePool.length)
  //复制
  for (var i = 0; i < tempGraphPool.length; i++) {
    graphPool.push(tempGraphPool[i])
  }
  for (var i = 0; i < tempDeletePool.length; i++) {
    deletePool.push(tempDeletePool[i])
  }
  //refresh
  diagram.clearCanvas()
  for (var i = 0; i < graphPool.length; i++) {
    graphPool[i].draw()
    //console.log(graphPool[i]);
  }
}
