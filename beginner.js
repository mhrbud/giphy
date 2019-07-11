alert("Hello, world.");
var add = function(a, b) {
  return a + b;
};
var result = add(1, 3);
alert(result);
var helloFrom = function(personName) {
  return "Hello from " + personName;
};
var people = ["Mike", "Bob", "Ross"];
for (i = 0; i < people.length; i++) {
  var greeting = helloFrom(people[i]);
  alert(greeting);
}
