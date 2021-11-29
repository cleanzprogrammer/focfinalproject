function myFunction() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;

  
    text = x;
    unicode = ("&#x" + x)
  
  document.getElementById("demo").innerHTML = unicode;
}