var handleClick = function(event) {
    // do something!
  };
  var button = document.querySelector("#big-button");
  button.addEventListener("click", handleClick);
  
  var req = new XMLHttpRequest();
  req.onload = function (event) { . . . };
  req.open('get', 'some-file.txt', true);
  req.send();
  // JSON (JavaScript Object Notation):
  { "name": "Yoda", age: 894, "lightsaber" : { "color": "green" } }
  //
  var jsonString = JSON.stringify({
      make: "McLaren",
      model: "MP4-12C",
      miles: 5023
  });
  var car = JSON.parse(jsonString); //convert back to JS
  //Scopes
  var doSomething = function () {
      var a = 10;
  var doSomethingElse = function () {
      console.log(a); // child scope of doSomething
  };
  doSomethingElse();
  };
  
  doSomething();
  
  