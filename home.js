function printLine(text){
    document.write("<br>" + text )
    }


/*
    function showSay (name ) {
    printLine("hello kendji");
    }
   showSay();
*/
/*
   function getsum () {
       let numone, numtwo;

       function getnumone(){
           numone = 1;
       }
    function getnumtwo(){
        numtwo2
    }
    getnumone()
    getnumtwo()

    let numsum = numtwo + numone;
    printLine (numsum)
   }
   gutsum();
*/
/*
let message;
function showMessage() {
    message = "dfhkfj"
}
showMessage()
console.log(message)//posle funksii bolboso undefined bp kalat
*/
// //
// function calcSum (numOne = 2, numTwo = 4) {
//     console.log (`peremennaya numone: ${numOne}`);
//     console.log (`peremennaya numtwo: ${numTwo}`);

//     let numSum = numTwo + numOne;
//     console.log(`summa:${numSum}`);
// }
// calcSum(12, 34);


// function colbaki 
/*
function calcSum (numSum, more, less) {
if(numSum > 3){
    more()
} else{
    less()
}
}
 function showMoreMessage() {
     console.log("bolshe chem 3")
 }

 function showLessMessage() {
    console.log("menshe chem 3");
}
calcSum(56, showMoreMessage, showLessMessage)
*/

// //return1
// function calcSum (numOne, numTwo){
//   let numSum = numOne + numTwo;
//   //vozvrat
// return numSum;
// //dalshe kod ne vyponetsya 
// }
// let funcResult = calcSum (5,2 );
//  console.log(`summa: ${funcResult}`);




//  function getSum (numOne, numTwo){
//    let numSum =  calcSum(numOne, numTwo);
//    console.log(numSum)
//  }
//  function calcSum(numOne, numTwo){
//      return numOne + numTwo;
//  }
//   getSum(3,6)
/*
function calcSum(numOne, numTwo) {
    let result = 1;

    for(let i = 0; i < numTwo; i++){
         result = numOne;
     }
    return result;
 }
 console.log(calcSum(2,3));
*/



//function expressition

// function getSum() {
//     let = 1 + 2;
//     console.log(getSum);
// };
// let someVar = getSum;

// someVar()
// getSum()




// let getSum;
// if (2 > 1) {
//     getSum = function(){
//         let sumn = 1 + 2;
//         console.log(sumn)
//     };
// }
// getSum()

//1
// let getMessage = (text, name) => text + "," + name + '!';
// console.log(getMessage('hello vasya ', "kendji")); 

//2

//  let getMessage = (text, name) => {
//      let message = text + "," + name + '!';
//      return message;
//  };

//  console.log(getMessage('hello vasya ', "kendji")); 



// //timeout 
// function showMessage(text,name){
//     console.log(`${text}, ${name}`);

// }
// setInterval(showMessage, 3000, 'hello', 'vasya'   );

//2
/*
 function showMessage(text,name){
    console.log(`${text}, ${name}`);
  //tochnyi ubakyt beret
    setTimeout(showMessage, 3000, text, name   );
 }
setTimeout(showMessage, 3000, 'hello', 'vasya'   );
*/


function shownumber (num) {
    console.log(num)
    if(num<5)
    setTimeout(shownumber, 1000, ++num);
}
setTimeout(shownumber, 1000, 1);

const KG_INDEPENDED_YEAR = 1991;
let year= prompt("what is independed day kyrgyzstan?"  );
if (year < KG_INDEPENDED_YEAR  ){
console.log("too early !");
}
 else if ( year >  KG_INDEPENDED_YEAR  ){
console.log("too late  ");
}
else {
    console.log("exacktly ");
    }

    for(let i = 0; i < numTwo; i++)


    for (let i3 =5; i3 >= 1; i3++){
        document.write (i3 + "<br>")
    }
    
