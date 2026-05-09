// console.log(undefined >= 0)
// console.log(undefined == 0)
// console.log(undefined <= 0)

                                        //Lecture - 10

// let a = 53

// let b=a

// a=63

//console.log(a)          // 63
//console.log(b)          // 53 aisa isliye jbb hamne b=a kia tha to a ki ek copy bni thi aur use b k equal 
                        // kia gya naaki original a ko , a is primitive datatype stored in stack aur 
                        // stack me aisa hi hota hai 


// let userOne = {
//     email : 'abc@gmail.com',
//     upi : 123
// }

// let userTwo = userOne

// userTwo.email = 'arpit@gmail.com'

// console.log(userOne.email)      // arpit@gmail.com
// console.log(userTwo.email)      // arpit@gmail.com --- aisa isliye hota hai kyuki object , array , function
//                                 // ye non-primitive datatype hote hai aur heap memory use krte hai inme 
//                                 // agar kisi dusre valriable ko assign krte hai to original value ka reference
//                                 // jaata hai naaki copy ka to ek me change krne se dusri jagah bhi change hojata 
//                                 // hai 


//                                 //Lecture 11

//     // Related to strings and string functions : toUpperCase , toLowerCase , split , reduce , trim , slice etc
                                
//                                 //Lecture 12

//     // Related to numbers and number functions

// let number = 100 // define a number 

// let secNumber = new Number(100)  //another way to define a number (Here type secNumber is number definitely , 
                                //  in the same way you can define string)


//console.log(number)         // 100
//console.log(secNumber)      // [Number : 100]

// some methods

//console.log(secNumber.toString())    // output is 100 but type converted to string
//console.log(secNumber.toFixed(2))    // 100.00


// let otherNum = 123.8966
// console.log(otherNum.toPrecision(4))  //  123.9
// console.log(otherNum.toPrecision(3))  //  124
// console.log(otherNum.toPrecision(2))  //  1.2e+2 so use wisely , use value greater than number of digits 
//                                         // left side of decimal

// let num = 1000000
// console.log(num.toLocaleString())       // 1,000,000    // us standard
// console.log(num.toLocaleString('en-IN'))       // 10,00,000    // indian standard



                                //    Lecture - 13

// const myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(typeof myDate)          // object

// let myCreatedDate = new Date(2026,4,7)          // month index k hisaab se chalta hai isliye may ko 4 likhna pdega
// console.log(myCreatedDate.toDateString())       // Thu May 07 2026

// let myCreatedDate2 = new Date(2026,4,7,5,3) 
// console.log(myCreatedDate2.toString())          // Thu May 07 2026 05:03:00 GMT+0530 (India Standard Time)



                                // Lecture - 14
                                // About Arrays

//Shallow copy - mtlb original reference jaata hai , jo bhi change kroge original me bhi change hoga
                // Occur in non-primitive datatype like array
                // --> Property share the same reference

//Deep copy - mtlb original reference nhi jaata , copy ka reference jaata hai , agar kuchh change kroge to 
//            original me change nhi hoga copy me hoga
                // occur in primitive datatype
                // --> Property do not share the same reference

// join method 
// arr.join()       -> join method array ko string me convert krr deta hai 
// eg let arr = [1,2,3]
// console.log(arr.join())     -> '1,2,3'


// imp : slice() and splice() methods of array

    // let arr = [0,1,2,3,4,5]
    // console.log(arr)

    // console.log(arr.slice(1,3))         // index 1 se 2 tkk print krega (slice return new array from index 1 to 2
    //                                     // and no change in the original array)
    // console.log(arr)                    // [0,1,2,3,4,5]

    // console.log(arr.splice(1,3))        // index 1 se 3 tkk print krega (splice return new array from index 1 to 2
    //                                     // and changes original array by removing the element from index 1 to 3)
    // console.log(arr)                    // [0,4,5]



                                    // Lecture - 15

    // push vs concat 

    //let marvel_heroes = ['ironman' , 'spiderman' , 'captain-america' , 'thor']
    // let marvel_heroes2 = ['ironman' , 'spiderman' , 'captain-america' , 'thor']

    //let dc_heroes = ['batman' , 'superman' , 'flash']

    //let push_arr = marvel_heroes.push(dc_heroes)        // push new array ki lenght return krdeta hai
    // console.log(push_arr)                               // output : 5

    // push function : returns the size of the new array , in the above case it is 5 , and changes the original
    //                  array as add a single element in this case ['ironman' , 'spiderman' , 'captain-america' , 'thor',
                                                                //      ['batman' , 'superman' , 'flash'] ]

    //console.log(marvel_heroes)          //[
                                        //   'ironman',
                                        //   'spiderman',
                                        //   'captain-america',
                                        //   'thor',
                                        //   [ 'batman', 'superman', 'flash' ]
                                        // ]


    //let concat_arr = marvel_heroes2.concat(dc_heroes) // it returns a new array


    //console.log(concat_arr)             //[
                                        //   'ironman',
                                        //   'spiderman',
                                        //   'captain-america',
                                        //   'thor',
                                        //   'batman',
                                        //   'superman',
                                        //   'flash'
                                        // ]


// concat ki jagah prr spread operator use krna sbse shi hai

//const all_heroes = [...marvel_heroes,...dc_heroes]
//console.log(all_heroes)



//let arr = [1,3,4,5,[2,3],[2,4,6,[4,7]]]   // agar iss array ko flat krna chahte ho , mtlb nested array hatake simple
                                            // array bnana chahte ho , kisi particular level tkk bhi kr skte ho

//console.log(arr.flat(Infinity))         // arr.flat(level like 1,2,3 or infinity)


//kabhi kabhi data aarha hota hai hame pta nhi hota ki array hai ya nhi then
// console.log(Array.isArray("Arpit"))   //false
// console.log(Array.from("Arpit"))        //[ 'A', 'r', 'p', 'i', 't' ]

// console.log(Array.from({name:"Arpit"}))     // [] -> give empty array , hame batana pdega ki key ka array bnau
//                                             //                          ya value ka

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1,score2,score3))     // [ 100, 200, 300 ] 




                                            // Lecture - 16

        //  Singleton Object   : let obj = new Object()   -> aise define krte hai to singleton object bnta hai
        //  Object Literals    : let onj = {}   --> aise define krne se object literal bnta hai       

//  const mySym = Symbol("key1")

// const JsUser = {
//     name : "Arpit",
//     "full name" : "Arpit Rajput",
//     [mySym] : "mykey1",
//     age : 18,
//     location : "Jaipur",
//     email : "arpit@gmail.com",
//     isLoggedIn : false,
//     LastLoginDays : ["Monday","Saturday"]
// }

// we can access values of object in two ways : 
//console.log(JsUser.name)            //Arpit
//console.log(JsUser["name"])         //Arpit     -> kyuki internally js key ko "-" double quotes k ander hi leta 
                                    //              hai as a string 

// ye dono ways pta hona jaruri hai kabhi kabhi pehle wale se value access nhi ho paati eg full name , you cannot
// access full name by first or dot method
// console.log(JsUser.full name)        wrong
//console.log(JsUser["full name"])    //Arpit Rajput


// using symbol as key - check third key of object
//console.log(typeof JsUser.mySym)            // agar squal bracket nhi lgayenge mySym me then wo normal key rahega symbol nhi

//console.log(JsUser[mySym])          // ye jbb as a symbol key use krte hai tbb aise access krte hai


// freeze function : object ko freeze krdeta hai , ab object ki value change nhi hogi, agar change krne ka 
//                      try kroge to error nhi aayega but change nhi hogi
//    Object.freeze(JsUser)
//    JsUser.email = "abc@gmail.com"
//    console.log(JsUser.email)     //arpit@gmail.com  

// console.log(JsUser)          //{
                                //   name: 'Arpit',
                                //   'full name': 'Arpit Rajput',
                                //   age: 18,
                                //   location: 'Jaipur',
                                //   email: 'arpit@gmail.com',
                                //   Symbol(key1): 'mykey1'
                                // }


// JsUser.Greeting = function(){
//     console.log(`Hello User , ${this.name}`)
// }

//console.log(JsUser.Greeting)        // output : [Function (anonymous)] - function ka reference aaya , function
                                    //              function run nhi hua
//console.log(JsUser.Greeting())      // output : Hello User , Arpit
                                    //          undefined



                                        // Lecture - 17

// combining of objects

// let obj1 = {1:"a",2:"b"}
// let obj2 = {3:"a",4:"b"}
// let obj3 = {5:"a",6:"b"}

// let objFinal = Object.assign({},obj1,obj2,obj3)
// console.log(objFinal)       // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// // in sbb kaam ko krne k liye same array ki tarah spread operator use krna sabse achha way hai
// let finalObj = {...obj1,...obj2,...obj3}
// console.log(finalObj)       // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


// agar hame kisi objects ki keys nikalni ho , jo ki use me aati hai jbb data database se as a object aarha 
// hota hai tbb ye way bhut use aata hai
// let arr = Object.keys(JsUser)         // ye return krta hai ek array of keys
// console.log(arr)                // ye symbol key ko array me nhi return krta hai

//same for values
//Object.values(JsUser)  // ye values ka array return krke dedega
//Object.entries(JsUser) // ye key-value pair ka array return krke dedega ,returns array of arrays of key value pair


// kabhi kabhi ham koi property object me dhoondh rahe hote hai ya work krr rhe hote hai aur wo present nhi 
// hai to application crash ho jaayega so we check first by
//console.log(JsUser.hasOwnProperty("full name"))     //true



                                            // Lecture 18

// object destructing ways

// let course = {
//     courseName : "Js in hindi",
//     price : "999",
//     courseInstructor : "Hitesh"
// }

// console.log(course.courseInstructor)        // one way

// let {courseInstructor} = course             // second way
// console.log(courseInstructor)

// let {courseInstructor : inst} = course      // second way hi hai , use ek small name bhi de skte hai ye
// console.log(inst)                           // show kia hai

// yahi second way ham react me use krte hai props k time 
// export default funtion({title}){
//      return()
//          }



                                    // Lecture - 19

    // function sum(num1,num2){
    //     console.log(num1+num2)          // parameters
    // }
    // sum(2,3)                            //arguments



                                    // Lecture - 20

    // aisi situation jbb hame pta nhi hota ki kitne argument aayenge tbb ham use krte hai rest operator ka

    // function sum(...num1){          // ...num1 is rest operator ye ek bundle bna deta hai saare arguments ka
    //     return num1                 //      code is same as spread operator bss use case agag hai , spread me
    // }                               //      bhi teen dot aage lgate the isme bhi same but different use case
    // console.log(sum(2,3,4))



                                    // Lecture - 21
    // Scope of let , var , const



                                    // Lecture - 22 
    
    //About functions etc
    // Main topic is Closure - Closure in JavaScript = jab ek function apne outer function ke variables 
    //                          ko yaad rakhta hai, even after outer function execute ho chuka ho.
    
        // example of closure
        // function makeFunc() {
        //     const name = "Mozilla";
        //     function displayName() {
        //         console.log(name);
        //     }
        //     return displayName;
        // }

        // const myFunc = makeFunc();
        // myFunc();


        // example 2 :
        // function outer() {
        //     let count = 0;

        //     return function inner() {
        //         count++;
        //         console.log(count);
        //     };
        // }
        // const counter = outer();
        // counter(); // 1
        // counter(); // 2
        // counter(); // 3


        //------------ imp ---- Hoisting 

        //Hoisting in JavaScript = variables aur functions ko code execution se pehle memory me move/allocate kar dena.
        //Isliye kuch variables/functions declaration se pehle bhi access ho jaate hain.


        // console.log(addOne(5))              // yaha bhi kaam krta hai aur function k neeche likho
        // function addOne(num){               // tbb bhi kaam krta hai 
        //     return num+1
        // }
        //console.log(addOne(5))

        //console.log(addTwo(5))            // yaha kaam nhi krega bcz this is expression and declared
        // const addTwo = function(num){       // line by line but function is global which is declared 
        //     return num+2                    // before the code compilation
        // }
        //console.log(addTwo(5))              // yaha kaam krega but declaration k upar nhi



                                    // Lecture - 23

        // this word k alag alg context hai
        // agar ham kisi object k andar use krte hai , jaise this.username to us object k username
        // ko access krega , agar ham browser me this use krte hai ya console.log(this) krte hai
        // to window object denote krega 
        // aur agar ham code editor me console.log(this) likhte hai to empty object print hoga

        // arrow function       (num1,num2)=>{
        //                          return num1+num2     
        //                          }

        // -> implicit return : isme return keyword use nhi krte
        //              (num1,num2) => (num1+num2)  // isme default return ho jaayega num1+num2 isiko
        //                                              bolte hai implicit return , agar parenthisis 
        //                                              use krloge then return use krna hi pdega




                                            // Lecture 24

        // IIFE (Immediately Invoked Function Expression) - turant function invoke ho jaaye application
        //                                                  k run hote hi
        //      main kaam iska hota hai global scope k variables wagera se ye polluted naa ho isliye
        //  syntax : ()() - pehle braces me function ki definition likhte hai then sec paranthesis 
        //                  lga dete hai
        // ye use krte hai jaise application start hote hi db se connction bnn jaaye iss type ki situation me
        // isme semicolon bhi use krna hota hai to pause context

        // eg : 
        // (function(){
        //     console.log("DB connected")
        // })();




                                        // Lecture - 25

                                    //JavaScript Execution Context
                            
    // Js me code execute kaise hota hai uss baare me hai ye lecture

    // Do main execution context hote hai 
    // 1 - Global Execution Context (isko this se denote krte hai)
    // 2 - Functional Execution Context
    // 3 - Eval Execution Context (Mongoose wagera ki documentation me dia hota hai , 
    //                              waise ye ek global ki hi property hai)
    
    // Js code do phase me run hota hai  : 1 - Memory Creation Phase
    //                                     2 - Execution Phase


                                        // Lecture - 26
                                        // Control Flow
    
    // If else k baare me pda
    // Switch case k baare me : agar break use nhi kroge to jiss case se value match ho jaati hai to uske 
    // aage ka saara code run krr jaata hai isliye break use krte hai

    // Truthy and Falsy Values
    // let mail = "arpit@gmail.com"
    // if(mail){
    //     console.log("Mail present")
    // }
    // else{
    //     console.log("mail not present")
    // }

    // falsy values :- false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

    // empty array truthy hoti hai

    // some truthy values which can confuse
    // "0" , "false" , " " , [] , {} , function(){}

    // array empty hai to kaise condition lgau
    // let arr = []
    // if(arr.length===0){
    //     console.log("Array is empty")
    // }

    // array empty hai to kaise condition lgau
    // let obj = {}
    // if(Object.keys(obj).length===0){
    //     console.log("Object is empty")
    // }


    // ---------- Nullish Coalecing Operator(??) : Null , Undefined ----------

    // ye use me aata hai jbb database wagera se data maga rhe ho aur null ya undefined return me 
    // aajaye to application crash naa kre uske liye , agar aajata hai to ye another given value 
    // assign krdeta hai 

    // let num = null ?? 10 // now first value is null so it assign 10 to num
    // console.log(num)


    // Terniary Operator --- dekhne me thoda aisa hi lgta hai so dont confuse
    //          condition ? true : false 
    // let price = 80
    // price > 60 ? console.log("Price > 60") : console.log("Price < 60")



                                        // Lecture - 27
            // Lecture is about for loop , break and continue



                                        // Lecture - 28 
            // Lecture is about while and do-while loop



                                        // Lecture - 29
    
    // Array specific loops 
    // 1 - for-of loop
    // const arr = [1,2,3,4,5]
    // for(const num of arr){                   // for-of can be used for iterating arrays , strings
    //     console.log(num)
    // }
    // const obj = {1:"a",2:"b",3:"c"}
    // for(const ob of obj){                    // error , for-of is not for object
    //     console.log(ob)
    // }


    // Maps
    // const map = new Map()
    // map.set("IN","India")
    // map.set("USA","America")
    // map.set("Fr","France")
    // map.set("IN","India")
    //console.log(map)           // Map(3) { 'IN' => 'India', 'USA' => 'America', 'Fr' => 'France' }
                                // Map duplicate remove rdeta hai

    // agar for-of se map print kroge to pura hi aajayega
    //for(let key of map){
    //    console.log(key)             //[ 'IN', 'India' ]      
    //    }                            //[ 'USA', 'America' ]
                                       //[ 'Fr', 'France' ]
    
    // agar key value dono pe control chahiye then
    // for(let [key , value] of map){
    //     console.log(`${key} : ${value}`)        // ye object prr kaam nhi krega
    // }


    //ojects kaise iterate honge -- for-in loop se

    // let obj = {in : "india" , us : "england" , usa : "america"}
    // for(let key in obj){
    //     console.log(`${key} : ${obj[key]}`)
    // }
    //this loop also works for arrays but key acces keys(index)
    // map iterable nhi hai isliye isse print nhi hoga


    // for-each loop
    //const arr = [1,2,3,4,5]
    //arr.forEach((e)=>console.log(e))

    // for each k paas sirf element ka access nhi hota , index aur arr ka bhi access hota hai
    //arr.forEach((element,index,arr)=>{console.log(element+" "+index+" "+arr)})



                                            // Lecture - 30


    // hamne pichle lecture me for-each loop pda tha jo har ek element access krr skta tha but agar 
    // element return krne ho to nhi krr skta (nhi krta hai) , to return krne k liye ham use krte 
    // hai filter ka like
    let arr = [1,2,3,4,5]
    // let modifiedArr = arr.filter((e)=>(2*e))
    // console.log(modifiedArr)


    // map function
    //let modifiedArr = arr.map((e)=>e+10)
    //console.log(modifiedArr)

    // functions ki chaining bhi krr skte ho like
    // let modifiedArr = arr
    //                 .map((e)=>e*10)
    //                 .map((e)=>e+1)              // chaining of functions
    //                 .filter((e)=>e>20)
    // console.log(modifiedArr)

    // Reduce function : array k elements add krne k liye use krte hai
    let sum = arr.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
    console.log(sum)

    // reduce function ek callback leta hai aur ek initiator , call me do argument paas krte hai
    // accumulator and currentValue ,accumulator stating me initiator k equal hota hai but baad me 
    // update hota rehta hai according to answer