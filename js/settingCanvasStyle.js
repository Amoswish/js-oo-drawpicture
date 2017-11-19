var widthButton = document.getElementById("widthofcanvas")
var colorButton = document.getElementById("colorofcanvas")
function submitWidth(){
  //console.log(document.getElementById('colorofcanvasDiv'));
  var width = document.getElementById('widthtext').value
  diagram.setWidthofdraw(width)
  document.getElementById('colorofcanvasDiv').remove(this)
  //document.getElementById('colorofcanvasDiv').style.display = "none"
}
function seleteWidth(){

  var div = document.createElement("div")
  var div = document.createElement("div")
  var divattr = document.createAttribute("class")
  var divattr1 = document.createAttribute("style")
  var divattr2 = document.createAttribute("id")
  divattr2.value = "colorofcanvasDiv"
  divattr.value = "colorofcanvasDiv"
  divattr1.value = "display:block;"
  //div.innerHTML = student.id
  div.setAttributeNode(divattr)
  div.setAttributeNode(divattr1)
  div.setAttributeNode(divattr2)
  //创建选择线条
  var input = document.createElement("input")
  var inputattr = document.createAttribute("type")
  inputattr.value = "text"
  var inputattr1 = document.createAttribute("id")
  inputattr1.value = "widthtext"
  input.setAttributeNode(inputattr)
  input.setAttributeNode(inputattr1)
  //创建提交按钮
  var button = document.createElement("button")
  button.innerHTML = "提交"
  var buttonattr = document.createAttribute("id")
  buttonattr.value = "submitWidth"
  var buttonattr1 = document.createAttribute("onclick")
  buttonattr1.value = "submitWidth()"
  button.setAttributeNode(buttonattr)
  button.setAttributeNode(buttonattr1)
  div.appendChild(input)
  div.appendChild(button)
  document.getElementsByTagName("body").item(0).appendChild(div);
}
function submitColor(){
  //console.log(document.getElementById('colorofcanvasDiv'));
  var color = document.getElementById('colortext').value
  diagram.setColor(color)
  document.getElementById('colorofcanvasDiv').remove(this)
  //document.getElementById('colorofcanvasDiv').style.display = "none"
}
function seleteColor(){
  var div = document.createElement("div")
  var div = document.createElement("div")
  var divattr = document.createAttribute("class")
  var divattr1 = document.createAttribute("style")
  var divattr2 = document.createAttribute("id")
  divattr2.value = "colorofcanvasDiv"
  divattr.value = "colorofcanvasDiv"
  divattr1.value = "display:block;"
  //div.innerHTML = student.id
  div.setAttributeNode(divattr)
  div.setAttributeNode(divattr1)
  div.setAttributeNode(divattr2)
  //创建选择线条
  var input = document.createElement("input")
  var inputattr = document.createAttribute("type")
  inputattr.value = "color"
  var inputattr1 = document.createAttribute("id")
  inputattr1.value = "colortext"
  input.setAttributeNode(inputattr)
  input.setAttributeNode(inputattr1)
  //创建提交按钮
  var button = document.createElement("button")
  button.innerHTML = "提交"
  var buttonattr = document.createAttribute("id")
  buttonattr.value = "colortext"
  var buttonattr1 = document.createAttribute("onclick")
  buttonattr1.value = "submitColor()"
  button.setAttributeNode(buttonattr)
  button.setAttributeNode(buttonattr1)
  div.appendChild(input)
  div.appendChild(button)
  document.getElementsByTagName("body").item(0).appendChild(div);
}

widthButton.addEventListener("click", seleteWidth, false)
colorButton.addEventListener("click", seleteColor, false)
