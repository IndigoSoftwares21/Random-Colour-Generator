function change() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
  var body =  document.getElementById('body');
  var color =  document.getElementById('color');

  body.style.background = "#"+randomColor
  color.value = body.style.background.toString()
    
}