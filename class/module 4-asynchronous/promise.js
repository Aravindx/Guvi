// //promise day 2 task 1:
// var age=parseInt(prompt("Enter the age of the person!!"));
// var vote=new Promise((resolve,reject)=>{
//  if(age>=18){
//   resolve("you are eligible for voting!!!!");
//  } 
// else{
//   reject("you are not eligible for voting!!!!");
// }

// });

// console.log(vote);
// //.then and .catch method applied here for the above promise code:
// vote.then((data)=>console.log(data)).catch((error)=>console.log(error));




// // example 2:if rejected in between
// function mul(number){
//     return new Promise((resolve,reject)=>setTimeout(()=>{
//       resolve(2*number)
//     },3000));
//     }
    
//     function bar(number){
//       return new Promise((resolve,reject)=>setTimeout(()=>{
//         reject(2*number+"this is rejected state")
//       },3000));
//       }
    
//     mul(12)
//     .then((data)=>{
//       console.log(data);
//       //mul(24);
//       return mul(data);
//     }).then((data1)=>{
//       console.log(data1);
//       //bar(48);
//       return bar(data1);
//     })
//     .then((data2)=>console.log(data2))
//     .catch((error)=>console.log(error));


// //restcounties task:
// var container=document.createElement("div");
// container.setAttribute("class","container");
// var row=document.createElement("div");
// row.setAttribute("class","row");
// container.append(row);

// var res=fetch();
// res.then((data)=>data.json()).then((data1)=>foo(data1));

// function foo(data1){
//   for(var i=0;i<data1.length;i++){
//     row.innerHTML=`<div>`
//   }

// }


// //21.10.2022 on class task AWAIT AWAIT:
// async function cov(){
//   let res= await fetch("https://data.covid19india.org/v4/min/data.min.json")
//   let result=await res.json();
//   console.log(result);
// }
// cov();

//21.10.2022 on class task TRY-CATCH






//covid 19 hackathon trial|:
//26.10.2022

let div=document.createElement("div");
div.setAttribute("class","main1");



let formgroup=document.createElement("div");
formgroup.setAttribute("class","form-group");


let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class","form-control");
input.setAttribute("id","main");
input.setAttribute("placeholder","Covid 19 API");
input.style.width="520px";

let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="200px";
button.style.marginTop="20px";
button.addEventListener("click",foo);
//for active cases
let active=document.createElement("div");
active.setAttribute("id","active");
//<div id="active">Total Number Of Active cases:123455</div>
formgroup.append(input,button,active);

//For active cases

// div.append(formgroup);
// document.body.append(div);


// async function foo(){
// try { 
// let countryname=document.getElementById("main").value;
// console.log(countryname);
// let res=await fetch(`https://api.covid19api.com/dayone/country/${countryname}`);
// let res1= await res.json();
// console.log(res1);
// //998
// var index=res1.length-1;
// //res1[998].Active
// console.log(res1[index].Active);
// active.innerHTML=`Total Active cases:${res1[index].Active}`;
// } catch (error) {
//   console.log(error);
// }

// }
