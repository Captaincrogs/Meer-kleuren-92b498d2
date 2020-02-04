

  
var matches = document.querySelector("h1");
var button0;


var matches2 = document.querySelector(".body");
var button1;

//return document.body.style.backgroundColor = kleur1;
function myFunction(){

    matches.style.backgroundColor= button0;
    matches2.style.backgroundColor= button1;
}
function saveUserData(){
    button0 = document.getElementById("kleur0").value;
    button1 = document.getElementById("kleur1").value;

}

console.log(calc(8,9));


function calc(a,b)
{
    return a * b;
}
