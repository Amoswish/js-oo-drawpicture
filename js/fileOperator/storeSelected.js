function storeSelected(){
  shap = "store"
  var myCanvas = document.getElementById("myCanvas")
  var context = myCanvas.getContext('2d')
   localStorage['graphPool'] = JSON.stringify(graphPool, function(key, val) {
      if (typeof val === 'function') {
        return val + ''
      }
      return val
    })
    localStorage['deletePool'] = JSON.stringify(deletePool, function(key, val) {
      if (typeof val === 'function') {
       return val + ''
      }
      return val
    })
}
