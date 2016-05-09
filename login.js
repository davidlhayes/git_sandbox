function prompt(phrase) {
   var password = "uncle";
   var key = true;
   if (phrase==password && key) {
      alert("You are allowed access!");
   } else if (phrase==password) {
      alert("Key is bad!");
   } else {
      alert("Access prohibited!");
   }
}