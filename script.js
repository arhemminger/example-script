// Code goes here
class controller {
  constructor() {
    this.showfirst = false;
  }
  buttonclick() {
   // alert("button clicked!");
   this.showfirst =!this.showfirst;
   var e = document.getElementById("first");
   if (this.showfirst) {
   e.classname = e.classname.replace("hidden", "");
   }
   else{
    e.classname = e.classname + " hidden"; 
   }
   }
  }
  addHtml(){
    debugger;
    var e = document.getElementById("html");
    e.innerHTML="<p>some text inserted via JS</p>";
   // var x = $("#html"); x.html("<p>some text inserted via JS</p>");
  }
}

//const app=angular.module("app",[]); //angular 
//app.controller("controller", controller);


//after the class created 

var vm = new controller();
