// 导航栏动态
var nav = document.getElementById("nav").childNodes;
for (var i=0;i<nav.length;i++){
  if (nav[i].className=="menu"){
    nav[i].onmouseover = function(){fnNav(this,"block","100px")};
    nav[i].onmouseout = function(){fnNav(this,"none","0px")};
  }
}
function fnNav(obj,flag,flag1){
obj.getElementsByTagName("dl")[0].style.display = flag;
obj.getElementsByTagName("dl")[0].style.height = flag1;
}
// 导航栏动态结束
