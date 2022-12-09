// var div1= document.createElement("div");
// div1.setAttribute("class","container");

// var div2= document.createElement("div");
// div2.setAttribute("class","row");

// var div3= document.createElement("div");
// div3.setAttribute("class","col");


// div1.append(div2);
// div2.append(div3);
// document.body.append(div1);




//BUTTON CLICK OUTPUT
//let button=document.createElement("button");
//button.innerHTML="Click me";
//button.addEventListener("click",func);
//document.body.append(button);

//function func(){
//    let ele=document.createElement("span");
//    ele.innerHTML="Welcome to GUvi"
//    ele.style.color="blue";
//    ele.style.fontSize="20px"
//    document.body.append(ele);
//}

//TABLE IN AN DOM:
/* <table class="table">
<thead class="thead-dark">
  <tr>
    <th scope="col">First</th>
    <th scope="col">Middle</th>
    <th scope="col">Last</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
</tbody>
</table> */

var tab=document.createElement("table");
var tab1=document.createElement("thead");
tab.setAttribute("class","table");
tab1.setAttribute("class","thead-dark");
var tab2=document.createElement("tr");
var th1=document.createElement("th");
var th2=document.createElement("th");
var th3=document.createElement("th");
th1.setAttribute("scope","col");
th2.setAttribute("scope","col");
th3.setAttribute("scope","col");
th1.innerText="First";
th2.innerText="Middle";
th3.innerText="Last";
tab2.append(th1,th2,th3);
tab1.append(tab2);
var tab3=document.createElement("tbody");
var tab4=document.createElement("tr");
var td1=document.createElement("td");
var td2=document.createElement("td");
var td3=document.createElement("td");
td1.innerText="Mark";
td2.innerText="otto";
td3.innerText="@mdo";
tab4.append(td1,td2,td3);
tab3.append(tab4);
tab.append(tab1,tab3);
document.body.append(tab);





//TASK:Color a span/div element content when a user moves the mouse over the element.
// var res=document.createElement("div");
// res.setAttribute("Id","myID")
// res.innerHTML=("click to change colour");
// document.getElementById("myID").addEventListener("mouseover",function(){
//   document.getElementById("myID").style.backgroundColor="skyblue"
// });

// document.getElementById("myID").addEventListener("mouseout",function(){
//   document.getElementById("myID").style.backgroundColor="skyblue"
// });







