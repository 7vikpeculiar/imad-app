var button = document.getElementById('counter');
var counter = 0;
button.onClick = function()
{
    
  counter += 1;
  var span = document.getElementById("count");
  span.innerHTML = counter.toString();
  console.log(span);
};
