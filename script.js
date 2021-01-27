function printLine(text){
document.write("<br>" + text )
}

/*function sayHello (name) {
    document.write("hello" + name + "!");//kod
}
sayHello(aini);
sayHello(jirack);
*/
//2
/*
function sayHello (Firstname , lastname) {
    printLine("hello" + Firstname + " " + lastname + "!");
}

sayHello("aini", "Mallie");
sayHello("jirack", "jirack");
*/



//sayHello("aini", "Mallie"); 1chi dele koisok bolot
//sayBye("jirack", "jirack");
//3  
//decloration
/*
function sayHello (Firstname, lastname) {
    let fullname = firstname + " " + lastname;
    document.write("hello" + fullname + "!");
}
sayHello("aini", "Mallie");
sayHello("jirack", "jirack");
*/
//4
/*
function sayBye (Firstname , lastname) {
    let fullname = firstname + " " + lastname;
    document.write("hello" +  Firstname + " " + lastname + "!");
}
sayHello("aini", "Mallie");
sayBye("jirack", "jirack");
*/


//5
/*
let name = "aiym"
function howdy() {
    document.write("howdy" + name + "!");
}
howdy ();
sayHello("aini", "Mallie");
sayBye("jirack", "jirack");
*/

//exersize 
/*
 returnMax1 (10,6);//10
returnMax (-5,-3);//-3
 returnMax (15,15);//15
 returnMax (15,9);//9

function printMax( a, b) {
    if (a < b) {
        document.write(b  )
    }
    else{
document.write(a)
    }
}


//exersize #2
 function printsum( a, b) {
    printLine (a + b)  
}
printsum (10, 15); 
printsum (-5, 5);
 printsum (-10, -10);

*/

 //showbase
 /*
function getMax(a,b) {
    if (a < d){
        return b;
    }
    else{
        return a;
    }
}
function getsum(a,b) {
    return a + b;
}

let max = getMax(10,15)
printLine(max);
*/

//primer  first
/*
function printMessage(name, message = "[no message]") {
    printLine ( "<srtong>"+name + " </strong> :" + message)
}

printMessage (" <strong>aiym",  "hey, how are you ?"  )
printMessage (" kendji",  "i'm good thank yoou and you"  )
printMessage ("aiym",  "i'm good to  what's up"  )
printMessage ("kendji ",  "nothing much what's new"  )
*/


//exercize #3
/*
printCount(10);//1 2 3 4 5 6 7 8 9
printCount(5);// 1 2 3 4 5 
printCount(1);// 1


function printCount( a) {
for ( let i = 1; i <= a; i++ ){
printLine(i)
}
}
*/
/*
//s
printCount(35);//1 2 3 4 5 6 7 8 9
printCount(25);// 1 2 3 4 5 
printCount(11);// 1

function printCount( b) {
for ( let i = 1; i <= b; i++ ){
printLine(i)
}
}
*/


























/*
//1 funksya nazyvanya (scobka parametr or chislo )
//{} //parametr to shto bbodit polzovatel
function example (number){
    for (let i = 1; i <= number; i++){
        document.write (i + "<br>")
    }
}

example(10)

//vyzybaem funksiii



//posle funksii {} scobki idet!

function example (number){
    number = prompt("get number")
    for (let i = 1; i <= number; i++){
        document.write (i + "<br>")
    }
}

example()


//pos

function example (number){
    number = prompt("get number")
    for (let i = 1; i <= number; i++){
        document.write (i + "<br>")
    }
}
example()
//error function

let example2 = number2 => {
    number = prompt("get number")
    for (let i = 1; i <= number; i++){
        document.write (i + "<br>")
    }
}

function kdjkf (a,b){

}

//kak vyzyvat parametr
function name (ex ){
  console.log(ex)
}
name("this function")

*/
////////////////


function firstName (ex ){
    let firstName = "kendji";
    printLine(firstName)
  }
  firstName()


  
  function yourName (){
    let question = "whats your name";
    printLine(question )
  }
  yourName()


  function lastname (last) {
      last = prompt("whats your last name")
      printLine(last)
  }
  lastname()//esli ne pishem to nichego ne rabotaet 


  
  function howyouyear (year) {
    year = prompt("how old are you ")
    printLine(year)
}
howyouyear()