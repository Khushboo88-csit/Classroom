console.log("Khushboo");
name ="Purvi";
console.log(name);
age = 16
console.log(age);
isFollow = false;
console.log(isFollow);
//Js is dynamically Typed(It means don't need to define data type int , string etc..)
console.log(2+3);
if(age>=18){
    console.log("You can vote");
}
else{
    console.log("You cannot vote");
}
let a=1;//let not be redeclared but can be update.block space variable(Not so much use)  
const b = 80;// It is also a scope variable.Var cannot be redeclared or updated (Can't change value).Mostly used..
for(i=0;i<=5;i++){
    console.log(i);
}
console.log(a);
let c = Symbol("Hello");
//We have 7 primitive datatype
console.log("cond1||cond2 =",!a<b||a==0);
let d = 0;
while(d<=5){
    console.log(d);
    d++;
}
let sum=0;
for(let e = 1;e<=5;e++){
    sum=sum+e;
}
console.log(sum);
let str = "Purvi";
let size = 0;
// for of loop -> used for strings and arrays
for(let j of str){
    console.log(j);
    size++;
}
console.log("size = ",size);
// for in loop
let student = {
    name: "Varun",
    age: 20,
    cgpa: 7.5,
    isPass: true,
};
for(let r in student){
    console.log(r ," = ",student[r]);
}
for(let k=0;k<=100;k=k+2){
    console.log(k);
}
// let gameNum = 13;
// let userNum = prompt("Guess the game number : ");
// console.log(userNum);
// while(userNum != gameNum){
//     userNum = prompt("You enter wrong number. Guess again : ");
// }
// console.log("Congratulations!!");
let str1 = "Mummy";
console.log(str1[3]);
console.log(str1.length);
//Template Literals
let template_string = `This is a template literal`;//backtick is used inplace of quotes
console.log(typeof template_string);
let obj = {
    MyName:"Purvi",
    MyClass:"8th",
}
let output = `My name is ${obj.MyName} and I study in class ${obj.MyClass} `;//String Interpolation
console.log(output);
console.log("Khushboo\n4sem");
console.log("Arun\tKumar");
let u = "Front Back";
console.log(u.length);
console.log(u.toUpperCase());
console.log(u.toLowerCase());
console.log(u.trim()); //It remove the extra space in starting and ending of string
console.log(u.slice(6,9));//Take a part from string
let w = "Kumar";
let v = "Arun ";
let result=v.concat(w); //Join two string
console.log(result);
console.log(v+w); //Join two string
let q = "Khus"+8827;
console.log(q);
let p = "Lapyru";
console.log(p.replace("yru","top"));//It replace string part and give new string part(it replace only one time)
// console.log(p.replaceAll("p","i")); replaceAll is used to replace more than one time
console.log(p.charAt(0)); //print letter of word according to index
console.log(p[0]);
//let userName = prompt("Enter your full name:");
//console.log(userName);

//console.log("@"+userName+userName.length);
// ARRAY
// typeof array is object
let marks=[98,78,66,88];
console.log(marks);
console.log(marks[0]);
for(let f=0;f<marks.length;f++){
    console.log(marks[f]);
}
console.log(marks.length);
let family = ["Papa","Mummy","Brother","Sister","Me"];
// Print each value of array
for(let fami of family){
    console.log(fami.toUpperCase());
}
let marks_Student = [85,97,44,37,76,60];
let sum1 = marks_Student[0];
for(let l=1;l<marks_Student.length;l++){
    sum1 = sum1+marks_Student[l];
}
let avg =sum1/marks_Student.length;
console.log(avg);
//using for of loop to find avg
let sum2 = 0;
for(let val of marks_Student){
    sum += val;
}
// let average = sum2 / marks_Student.length;
// console.log(`Avg of class is : ${average}`);
let prices =[250,645,300,900,50];
let offer = 0;
for(let h=0;h<prices.length;h++){
    offer =prices[h]*(90/100);
    console.log("Price ",prices[h], "after discount",offer);
}
for(let s =0;s<prices.length;s++){
    let offe = prices[s]/10;
    prices[s] -= offe;
}  
console.log(prices);
family.push("Grandfather","Grandmother");//It add new element in array
console.log(family);
family.pop();//It delete the last element from array
console.log(family);
let deletedItem = family.pop();
console.log(deletedItem);
console.log(family.toString());//Array all items are write in  string
console.log(marks.concat(marks_Student));//concat is used to join two or more array
family.unshift("Grandfather");//It add item at starting in array
console.log(family);
family.shift("Me");//It delete item from end
console.log(family);
alert("Hellooo");
window.console.log("hii");
//DOM(Document Object Model)is a way to show html by javascript..
// DOM is used to do dynamic changes in html by javascript
console.dir(document.body);
//this keywords->it references object that is executing current function.It references the global object.
//If fnx that is being referenced is a method in object in object , this refernces object itself 
var value = 50
function My_function(){
    var value = 100
    alert("Value:" + this.value)
}
My_function()
const object = { //object
    name : "Purvi",
    video: ["Javascript","this","keyword"],
    info(){
        console.log("Hii!! My sis name is "+ this.name)
        this.video.forEach(function(tag){
            console.log(this.name, tag)
        })
    }
}
object.info()
function Function1(s,t){
    document.getElementById("demo").innerHTML = s+t;
    console.log("Sum :" + (s+t));
    }
    Function1(4,5) //call fnx
    //function expression
    let x1 = function(){
        alert("Hello Purvi");
    }
    let y1 = x1;
    document.getElementById("demo").innerHTML = y1();
    //Function Constructor
    var Function_2 = new Function("a1","b1","return a1-b1"); //syntax
    var c1 = Function_2(13,7);
    document.getElementById("demo").innerHTML = "The sub is :"+c1;//show on web page
    //Self Involking fuction -> no need to call
    (function(){
        console.log("This is a self involke function..");
    })()
    //Function as values
    function Product(p1,q1){
        return p1*q1
    }
    let r1 = Product(3,8);
    document.getElementById("demo").innerHTML = "The product of two number is : "+ r1;//only this line show on webpage now the upper line donot print 
    
    //Function as object -> including string
    var body = "return Math.PI * rad * rad";
    var circle = new Function("rad",body);
    console.log("Area of circle : " + circle(7));

    //Arrow Function 
    const Myfun = (s2,d2,f2) => {return s2+d2+f2 }
    let Add = Myfun(5,8,3)
    document.getElementById("demo").innerHTML = "The addition of three number is : "+ Add;
    //Generator function -> multiple values yield val
    function* generateFunc(){
        yield 1;
        yield 2;
        return 3;
    }
    let generator = generateFunc();
    let one = generator.next();
    let two = generator.next();
    let three = generator.next();
    alert(JSON.stringify(one));
    alert(JSON.stringify(one));
    alert(JSON.stringify(one));
    //Pre-define functions
    //eval -> string
    let g1 = 5;
    let h1 = 4;
    let k1 = 8;
    console.log(eval("g1+h1"));
    console.log(eval(k1));
    //parseint -> string argument and return int,radix,base
    //parseFloat -> Parses  string argument and floating-point no.
    //escape -> return hexadecimal encoding of argument
    //unescape -> return ASCII string

    //FORM VALIDATION
    function Validate1(){
        if(document.MyForm.Email.value ==""){
            alert("Please provide your Email ID");  
            var Email = document.getElementById("text").value;
            document.MyForm.Email.focus();
            return false;
        }
        else if(document.MyForm.password.value ==""){
            alert("Please provide your password");
            document.MyForm.password.focus();
            return false;
        }
        else{
            return true;
        }
    }
    function Validate2(){
        if(document.MyForm.Email.value ==""){
           var mail = document.getElementById("text").value; 
           var regx = /^([a-zA-Z0-9\._])+@([a-zA-Z0-9])+.([a-zA-Z]+)(.[a-z]+)?$/; //regular expression
            if(regx.text(Email)){
            alert("You have provided a valid Email ID")
            return true;
            }
            else{
                alert("Sorry! Incorrect Email ID")
                return false;
            }
        }
    }


    //Regular expressions-> sequences of characters(string,int,char) that form search pattern
    // User can define what need to be searched, commonly used for text search and text replacement operation,case sensitive
    // syntax = /pattern/flag
    //Flags-> alter behaviour of R.Ex
    //pattern -> alphabets,numbers,characters
    //Quantifier ->number of occurences of string, N+ - one or more occurences,
    // N* - 0 or more occurences , N? - 0 or 1 occurences

//JavaScript Promises -> single threaded(one commond at at a time)(slow & restricted)
//To vercome these problems we use "Asynchronous action" it complete at some point in future and produce value
// If Asynchronous action is successful then we call ".then"method and if not we call ".catch" method
let car = new Promise(function(resolve,reject){ // Syntax
    fuel_fullTank = true;
    if(fuel_fullTank)
        resolve()
    else
        reject()
});
car.then(function(){ // for resolve
    document.write("The fuel tank is full. Happy Driving!!")
}).catch(function(){ // for reject
    document.write("Fuel Tank is not empty.")
})
let msg;
let empty_tank = function(){
    return new Promise(function(resolve,reject){
        resolve("The car doesn't have enough fuel.")
    })
}
let engine = function(msg){
    return new Promise(function(resolve,reject){
        resolve(msg + "The engine is over heating.")
    })
}
let travel = function(msg){
    return new Promise(function(resolve,reject){
        resolve(msg + "The car is not safe for travelling.")
    })
}
empty_tank().then(function(result){
    return engine(result)
}).then(function(result){
    return travel(result)
}).then(function(result){
    console.log("Done!! + result")
})
//JavaScript Async fnx (await/async)
let res = function(score){
    return new Promise(function(resolve,reject){
        console.log("Calculation Result...")
        if(score>50)
            resolve("Congratulation! You have passed")
        else
            reject("You haved failed")
    })
}
let grade = function(response){
    return new Promise(function(resolve,reject){
        console.log("Calculating your grade...")
        resolve("Your grade is A." + response)
    })
}
// res(80).then(response =>{
//     console.log("Results recevied")
//     return grade(response)
// }).then(finalgrade => {
//     console.log(finalgrade)
// }).catch(err => {
//     console.log(err)
// })
console.log("Now use async function");
async function calculateResults(){
    try{
    const response = await res(80)
    console.log("Result received")
    const finalgrade = await grade(response)
    console.log(finalgrade)
    }
    catch(err){
        console.log(err)
    }
}




            