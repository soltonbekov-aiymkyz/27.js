function dw(text){
    document.write( "<br>" + text)
}
//     //object 
//     //fundamentalnyi chast js 
//     //2 sposob
//     var object1 = new Object();
//1ex
    // var user = {
    //     firstName: "elon",
    //     lastname: "Musk",
    // //esli naz kluch soderjit probel ! : to mojno use " live in us "
    //     "Live in us": true,
    //         };

     //objickt in objeckt       
     
    var user = {
        firstName: "elon",
        lastname: "Musk",
    personalData:{
        favoriteToy: "tesla",
        usesTwitter: true,
        "live in us": true,
    }
            };/*
            alert(user.firstName);*/
dw(user.firstName)
dw(user.lastname)
dw(user.firstName + " " + user.lastname);
dw(user.personalData.usesTwitter);//always use
dw(user.personalData["liva in us"]);
dw(user.personalData["favoriteToy"]);
//dw(user["personalData"][favoriteToy]);

let what = prompt("what do wanna know about Elon?")
dw(user.personalData[what])





//create objeckt



/*
var user = {
    firstName: "elon",
    lastname: "Musk",
personalData:{
    favoriteToy: "tesa",
    usesTwitter: true,
    twitterHandler:"@ELon mask",
    "live in us": true,
    playGolf: true
},
*/


//funksii vnutri obektov
/*
sayHello: function(){
    dw("hello ")
   // dw("hello my name is" + this.firstName)
},//this ooznachaet etot obekt*/
  /*
        };
*/
        //vvod svoistv in Object
    /*    
dw(user.firstName)
dw(user.lastname)
dw(user.firstName + " " + user.lastname);
dw(user.personalData.usesTwitter);//always use
dw(user.personalData["liva in us"]);
dw(user.personalData["favoriteToy"]);
*/
// dw(user["personalData"][favoriteToy]);

//bbodit funksiu
//user.sayHello();

// let what = prompt("what do wanna know about Elon?")
// dw(user.personalData[what])

//added and changer in  objeckt 
/*
user.age = 45;
user.personalData.occupation = "CEO of everything";
userage = 49;
dw(user.age);
*/

// user.sayBye = function() {
//     dw("bye");
// };

//sost
//true or falth

//proverka svoistvo na sushestvovanie
/*
user.weaith = "a lot";

if ("wealth" in user) {
    dw("Wealth:" + user.wealth  );
}
else{
    dw("wealth: unknown")
}

*/

//udalenie svoistv obekta
/*
delete user ["live in us "];
*/
//dw("live in us" in user);

//sami obekty my ne mojem vvyvodit
//dw(user);


// //iterasiya sikl po obekty
// for (key in user.personalData) {
//   dw(key + ":" + user.personalData[key]  );
// }

/*
for (key in user) {
    if (typeof user[key] !="object"   ){
    dw(key + ":" + user[key]  );
  }
}
*/


//pochti ne imeet smysla 
/*
const example  = {text: "hello"};
exampme.text = "bye";   
*/

//cvyazy obektov i peremennyh
//    let = example1 = {text: "hello"};
//    let = example2 = example1;
//    example1.text = "bye";
//    dw(example2.text);



/*
let user = {
    lampochka: "belaya ",
    veshalka: "steklyannaya",
    medved: "dikaya",
    yabloko: "krasnaya",

personalData:{
    sobaka: "bolshaya",
    pogodaOblachno: true,
    "live in kg": true,
}
        };
         dw(user.lampochka)
        dw(user.veshalka)
        dw(user.lampochka+ " " + user.veshalka);
        dw(user.personalData.sobaka);
        dw(user.personalData["live in kg"]);
       
let user = {
    snow: "white",
    belka: ""
}*/