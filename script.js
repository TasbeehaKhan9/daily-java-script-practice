// ternary operator

// let age = 15;

// let result = age >=18 ? "adult" : "not adult";
// console.log(result);



// prompt


// let name = prompt("enter your name here");
// console.log(name) ;



// let num = prompt ("enter a number")

// if( num % 5 === 0) {
//     console.log( num, "5 is multiply of 5");
// } else{
//     console.log(num, "is not divisible by 5" );
// }


// let num = prompt ("enter a number  (0-100")

// let grades;

// if(num  >= 90 &&  num <= 100 ) {
// grades = "A";
// }else if (num  >= 70 && num <=89 ){
// grades ="B";
// }else if( num  >= 60 && num <=69 ){
//  grades ="c";
// }else if (num  >= 50 && num <=59){
//    grades ="d";
// } else if (num  >= 40 && num <=49){
//     grades ="f";
//  }


//  console.log("according to your scores, your grades was:" , grades);


// for (let i = 1; i <=100; i++) {
//     console.log("MY NAME IS TASBEEHA");
// }


// CALCULATE SONME NUMBER

// let sum  = 0
// for (let i= 1; i<=5; i++ ){
//     sum = sum +i;
// }
// console.log(sum);


// print 1 to 5


// for (let i =1; i <=5; i++){
//     console.log("i =" , i );
// }


//  for (var i =1; i <=5; i++){
//      console.log("i =" , i );
//  }

//   console.log("i =" , i );


// while loop

// let i = 1;
// while(i <=10) {
//     console.log("runn");
//     i++;
// }

// false while loop

// let i = 20;
// while(i <=10) {
//     console.log("tasbeeha");
//     i++;
// }


// do while loop


// let i = 11 ;
// do{
//     console.log("name tasbeeha");
//     i++

// }while (i <=10);


// let i = 1 ;
// do{
//     console.log("name tasbeeha");
//     i++

// }while (i <=10);



// for of loop 

// for of(stings or arrays laganey key liye madad karta hai) 
// for in


// let sting = "tasbeeha"
// for (let i of sting){
//     console.log(i)
// }



// let sting = "my name is tasbeeha"
// for (let i of sting){
//     console.log(i)
// }




// let sting = "tasbeeha";

// let length = 0

// for (let i of sting){
//     console.log(i)
//     length++;

// }
// console.log("length size =" , length);




// for in loop(object key liye use karey gai)

// let student = {
//     name: "tasbeeha",
//     gpa:2.67,
//     ispass:true,
//     rollmo:128762387,
// };
// for(let i in student){
//     console.log(i);
// }


// let student = {
//     name: "tasbeeha",
//     gpa:2.67,
//     ispass:true,
//     rollmo:128762387,
// };
// for(let i in student){
//     console.log("key",i , "value =", student[i] );
// }


// practicee 2

// let score = prompt("enter uour score {0-100}");
// let grade;
// if (score >=90 && score <=89){
// grade = "A"
// }else if (score >=70 && score <=79){
//     grade = "B"
// }else if (score >=60 && score <=69){
//     grade = "C"
// }else if (score >=50 && score <=59){
//     grade = "D"
// }else if (score >=40 && score <=49){
//     grade = "F"
// }

// console.log("according to your scores, your grade was:", grade);


// // class practicee
// for (var i=0 ; i <= 10 ; i++){
//     console.log(i);
// };


// table of 2

// let table = prompt("genrate the table(2 to 10)");

// table = Number(table) 


// if(table >=2 && table<=10){
//    for(let i=1 ; i<=10; i++){
//     document.write(table + "×" + i + "=" + (table*i) + "<br>" );
//    }
// }else {
//     document.write("please enter the number between 2 to 10.");
// }


// // var flag loops
// // index number start with 0
// // length is start with 1
// var names=["hina","sana" , "warisha" , "iqra",[3,4,5]]
// console.log(names[3])

// // Step 3 – names[4][1] ka matlab:
// // Ab tumne index 4 pe jo array mila uska index 1 wala element liya:

// var names =["hina","sana" , "warisha" , "iqra",[3,4,5]]
// console.log(names[4][1]);



// 	// [3, 4, [true, false]] ← yeh ek inner array hai
// var names = ["hina","sana" , "warisha" , "iqra",[3,4[true,false]]]

// // names = ["hina",  "sana",  "warisha",  "iqra",  [3,     4,     [true, false]]]
// // Index     0        1        2           3        ↑
// //                                               names[4]



// // [3,     4,     [true, false]]
// //  0      1           2  ← yeh ek aur array hai



// // [true, false]
// //   0       1


// console.log(names [4][2][1]);




// array+loop

// var names = ["hina","sana" , "warisha" , "iqra"]
// for(var i=0 ; i<5; i++){
//     console.log(names[i]);
// }


// var names = ["hina","sana" , "warisha" , "iqra" ,"tasbeeha", "","khan"]
// for(var i=0 ; i<7; i++){
//     console.log(names[i]);
// }


// var names =["hina","sana" , "warisha" , "iqra"]
// for (var i=0; i < names.length  ; i++){
//     console.log(names[i]);
// }


// // var scope

// // break 

// for (var i=0; i<4; i++){
//     console.log(i);
//     if (i ==2){
//         break;
//     }

// }


// // Execution flow:

// // i = 0 → console.log(0) → if(0 == 2) ❌ false → loop continue

// // i = 1 → console.log(1) → if(1 == 2) ❌ false → loop continue

// // i = 2 → console.log(2) → if(2 == 2) ✅ true → break; → loop yahin stop 🚫

// // i = 3 par kabhi jaata hi nahi, kyunki break ne loop tod diya.




// for (var i=0; i<4; i++){
//     console.log(i);
//     break;
// }

// // Step-by-step samjho:

// // i = 0 → console.log(0) print karega.

// // Turant break; chalega → loop tod dega.

// // Baaki i = 1, 2, 3 ka chance hi nahi aayega.




// for(var i=0; i<4; i++){
//     if (i<3){
//         console.log(i);
//         break;
//     }
// }


// // i = 0 → (0 < 3) true → console.log(0) print karega

// // Phir break; mil gaya → loop turant ruk jaayega

// // Baaki i = 1, 2, 3 kabhi execute hi nahi honge



// for (var i=0; i<4; i++){
//     if(i<2){
//         console.log(i);
//         break;
//     }
// }


// // Step-by-step execution:
// // Loop start:

// // i = 0

// // Condition check: i < 4 → ✅ true, loop start hoga.

// // If condition:

// // Check: i < 2 → 0 < 2 ✅ true

// // console.log(i) → print karega 0

// // break; milte hi loop turant stop ho jaayega.

// // Loop end:

// // Baaki i = 1, 2, 3 kabhi execute hi nahi honge.





// for(var i=0; i<4; i++){
//     if (i>2){
//         console.log(i);
//         break;
//     }
// }



// " " (space ke saath string) → true hoti hai

// for(var i=0; i<4; i++){
//     if(" "){
//         console.log(i);
//         break;
//     }

//     console.log(i);
// }



// "" (empty string) → false hoti hai


// for(var i=0; i<4; i++){
//     if(""){
//         console.log(i);
//         break;
//     }

//     console.log(i);
// }




// key points:
// "" → bilkul khaali string (length = 0) → false

// " " → ek space character (length = 1) → true


// console.log(Boolean(""));  // false
// console.log(Boolean(" ")); // true



// for (var i=0; i<4; i++){
//     if ("hi"){
//         console.log(i);
//         break;
//     }
//     console.log(i);
// }


// saturday class practice 9/8/2025


// var userCity =prompt()
// var arr =["karachi","lahore","islamabad","peshawar","quetta"]
// for (var i=0; i<arr.length ; i++){
//     if (userCity === arr [i]){
//         console.log("Your City is Cleaned");


// } else {
//     console.log("Need to be cleaned");
// }
// }



// var userCity =prompt()
// var arr=["karachi","lahore","islamabad","peshawar","quetta"]
// var flag= false

// for (var i =0; i < arr.length ; i++ ){
//     if (userCity === arr[i]){
//         console.log("Your City is the cleanest City");
//         flag=true
//     }
// }
// if (flag == false){
//     console.log("your city is not cleaned");
// }




// nested loop

// for (var i=0; i<4; i++ ){
//     for (var j=0; j<3; j++){
//         console.log(i,j);
//     }
// }


// for (var i=0; i<4; i++ ){
//     for (var j=0; j<3; j++){
//         console.log(i,j);
//     }
//     break;
// }



// 2d array


// var nums= [[1,2,3],[2,3,1]]
// for (var i=0; i<nums.length; i++){
//     console.log(i);
// }


// var nums =[[1,2,3],[6,3,1]]
// for (var i=0; i<nums.length; i++){
//     for(var j=0; j<nums[i].length; j++)
//         console.log(nums[i][j])
// }




// var nums =[[1,2,3],[6,3,1,5]]
// for (var i=0; i<nums.length; i++){
//     for(var j=0; j<nums[i].length; j++)
//         console.log(nums[i][j]*2)
// }




// var nums =[[1,2,3],[6,3,1,5]]
// for (var i=0; i<nums.length; i++){
//     for(var j=0; j<nums[i].length; j++)
//         console.log(nums[i][j]/2)
// }


// var intro = "hi my name is tasbeeha";
// var copy = intro.slice(13)
// console.log(copy);



// var name = "Tasbeeha"
// console.log(name.toLowerCase());





// var name = "Tasbeeha"
// console.log(name.toUpperCase());



// var name = "Tasbeeha"
// name = name.toLowerCase()
// console.log(name);




// var abc = "hello world"
// for (var i=0; i<abc.length; i++)
//     console.log(abc[i]);


// last class practce 


//    if we want to show sana first letter capital


/*var name = "sana"
var newName= name.slice(0,1)
console.log(newName);*/



/*var name= "sana"
var newName =name.slice(0,1);
var remaining =name.slice(1);
console.log(newName.toUpperCase()+remaining )*/


// practice

/*var name = "tasbeeha"
var myName =name.slice(0,1);
var capital =name.slice(1)
console.log(myName.toUpperCase()+capital)*/


// additional operator

/*var num = 4;
num +=  5;
console.log(num);*/



/*var num = "4";
num +=  5;
console.log(num);*/





// var name = 'samiya khan'
// var result;
// var temp;


// for (var i = 0; i < name.length; i++) {

//     if (i === 0) {
//         result = name[i].toUpperCase()

//     }
//     else if (name[i] === ' ') {
//         temp = name[i + 1].toUpperCase()

//     }
//     else {
//         if (temp) {
//             result += temp
//             temp = ''

//         } else {
//             result += name[i]
//         }
//     }




// }

// console.log(result);






// var name = 'samiya khan'
// var result;
// var temp;
// //8

// for (var i = 0; i < name.length; i++) {


//     if (i === 0) {
//         result = name[i].toUpperCase()



//     }
//     else if (name[i] === ' ') {
//         temp = name[i + 1].toUpperCase()

//     }
//     else {
//         if (temp) {
//             result += " " + temp
//             temp = ''

//         } else {
//             result += name[i]
//         }
//     }
// }

// console.log(result);



// indexof usko word key character key index number  ko print karwae ga

/*var text = "hi my friend how are you ?"
var result= text.indexOf("friend")
console.log(result);

// lastindexof ussi line key last word  key index number  ko print karwae ga

var text = "hi my friend how are you ? hi my friend how are you ?"
var result= text.lastIndexOf("friend")
console.log(result);

// charAt mein hum us index number  ko likhe gai   or print  character hoga

var text = "hi my friend how are you ?"
var result= text.charAt("4")
console.log(result);



var text = "hi my friend how are you ?"
var result= text.replace("friend","student")
console.log(result);



var text = "hi my friend how are you ? hi my friend how are you"
var result= text.replaceAll("friend","student")
console.log(result);*/




// rounding number


/*var num = Math.round(6.4)
console.log(num);

var num = Math.round(6.7)
console.log(num);

var num = Math.ceil(6.3)
console.log(num);

var num = Math.floor(6.7)
console.log(num);


var num = Math.ceil(6.0)
console.log(num);



var num = Math.ceil(6.03)
console.log(num);*/



// randome number


// var  num = Math.random()
// console.log(num);

// var  num = Math.round (Math.random())
// console.log(num);

// var  num = Math.round (Math.random()*6)
// console.log(num);


// var  num = Math.ceil (Math.random()*6)
// console.log(num);


// var num = "123124"
// console.log(Number(num));

// var num = "123124a"
// console.log(Number(num));

// var num = "aaaaaaa"
// console.log(Number(num));


// var num = "aaaaaaa"
// console.log(parseInt(num));


// var num = "1.7324"
// console.log(parseInt(num));



// var num = "1.7324";
// console.log(parseFloat(num)); 



// var num = 17324;
// console.log(toString(num)); 

// // this one answer will occour in error


// var num = 17324;
// console.log(num.toString()); 


// var num = 1.7324;
// console.log(num.toFixed()); 


// var num = 1.7324;
// console.log(num.toFixed(4)); 


// var nowmonth = new Date();
// var month  =["jan", "feb","marc","apirl","may","june","july","aug"];
// var monresult = nowmonth.getMonth();
// console.log(monresult);




// var nowmonth = new Date();
// var month  =["jan", "feb","marc","apirl","may","june","july","aug"];            (YEH HUMEIN CURRENT MONTH SHOW KARWAYE GA JO CHAL RAHA HAI...)
// var monresult = nowmonth.getMonth();
// console.log(monresult);                                                           (YEH HUMEIN CURRENT MONTH ka index no show karey ga...)



// var nowmonth = new Date();
// var month  =["jan", "feb","marc","apirl","may","june","july","aug","sep","oct"];
// var monresult = nowmonth.getMonth();
// console.log(monresult)



// var newDate = new Date()
// var weekDays = ["sun","mon","tue","wed","thur","fri","sat"]
// //  (index number)    0    1     2      3    4      5    6 

// var stringdate = newDate.getDay()
// console.log(stringdate)


// var newDate = new Date()
// var stringdate = newDate.toString()
// console.log(stringdate)






// var newDate = new Date()
// var weekDays = ["sun","mon","tue","wed","thur","fri","sat"]
// //  (index number) 0    1     2      3    4      5    6 

// var stringdate = newDate.getDay()
// console.log(weekDays[4])



// var newYear = new Date()
// var year = newYear.getFullYear()
// console.log(year)



// var newYear = new Date()
// var year = newYear.getMinutes()
// console.log(year)



// var newYear = new Date()
// var year = newYear.getMilliseconds()
// console.log(year)


// var newYear = new Date()
// var year = newYear.getSeconds()
// console.log(year)


// var newYear = new Date()
// var year = newYear.getTime()
// console.log(year)


// var d = new Date();
// d.setMonth(3)
// console.log(d);


var nowdate = new Date ()
var birthday = new Date("November 9,2025");
document.write(birthday)

var time = nowdate.getTime();
var bt = birthday.getTime();
var diff = bt-time;
console.log(diff/(1000*60*60*24))
console.log(Math.round(diff/(1000*60*60*24)))