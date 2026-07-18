let currentUser="";


let users={

Johan:"#2563eb",
Tilda:"#db2777",
Julia:"#16a34a",
Ulrika:"#9333ea"

};



let trainings =
JSON.parse(localStorage.getItem("trainings"))
|| {};




function login(){


currentUser =
document.getElementById("userSelect").value;



if(currentUser==="") return;



document.getElementById("app")
.classList.remove("hidden");


document.getElementById("welcome")
.innerHTML =
"Loggad in som "+currentUser;


updateStats();

renderCalendar();


}





function addTraining(){


let date =
document.getElementById("date").value;


let workout =
document.getElementById("training").value;



if(!date || !workout){

alert("Fyll i allt");

return;

}




if(!trainings[date])
trainings[date]=[];




trainings[date].push({

person:currentUser,

workout:workout

});



save();


renderCalendar();

updateStats();


}




function save(){

localStorage.setItem(

"trainings",

JSON.stringify(trainings)

);

}





function renderCalendar(){


let calendar =
document.getElementById("calendar");


calendar.innerHTML="";



let now=new Date();


let year=now.getFullYear();

let month=now.getMonth();



document.getElementById("month")
.innerHTML =
now.toLocaleString(
"sv-SE",
{
month:"long",
year:"numeric"
});




let start =
new Date(year,month,1)
.getDay();



if(start===0)
start=7;



let days =
new Date(
year,
month+1,
0
).getDate();




for(let i=1;i<start;i++){

calendar.innerHTML+="<div></div>";

}





for(let d=1;d<=days;d++){


let box=document.createElement("div");

box.className="day";


let key=

year+
"-"+
String(month+1).padStart(2,"0")
+
"-"+
String(d).padStart(2,"0");



box.innerHTML="<b>"+d+"</b>";



if(trainings[key]){


trainings[key].forEach((t,index)=>{


let div=document.createElement("div");


div.className=
"event "+t.person;



div.innerHTML=

`
<b>${t.person}</b>
<br>
${t.workout}
<br>
<button onclick="removeTraining('${key}',${index})">
❌
</button>
`;



box.appendChild(div);



});


}



calendar.appendChild(box);



}



}





function removeTraining(date,index){


trainings[date].splice(index,1);



if(trainings[date].length===0)

delete trainings[date];



save();

renderCalendar();

updateStats();

}




function updateStats(){


let all=[];


Object.keys(trainings)
.forEach(date=>{


trainings[date]
.forEach(t=>{

if(t.person===currentUser)

all.push({

date:date,
workout:t.workout

});

});


});



document.getElementById("total")
.innerHTML=
"Totalt antal pass: "+all.length;



let month=
new Date()
.toISOString()
.slice(0,7);



let monthCount=
all.filter(x=>
x.date.startsWith(month)
).length;



document.getElementById("monthTotal")
.innerHTML=
"Pass denna månad: "+monthCount;




document.getElementById("last")
.innerHTML=
all.length
?
"Senaste: "+
all[all.length-1].workout
:
"Ingen träning ännu";



}
