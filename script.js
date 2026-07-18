const trainings = {

"2026-07-03":[
    {
        name:"Alex",
        workout:"Styrketräning",
        type:"strength"
    }
],

"2026-07-08":[
    {
        name:"Emma",
        workout:"5 km löpning",
        type:"run"
    }
],

"2026-07-12":[
    {
        name:"Johan",
        workout:"Intervaller",
        type:"cardio"
    }
],

"2026-07-18":[
    {
        name:"Alex",
        workout:"Gym överkropp",
        type:"strength"
    },
    {
        name:"Emma",
        workout:"Rörlighet",
        type:"run"
    }
]

};



const calendar = document.getElementById("calendar");
const monthTitle = document.getElementById("month");


let date = new Date();

let year = date.getFullYear();
let month = date.getMonth();


monthTitle.innerHTML =
date.toLocaleString("sv-SE", {
month:"long",
year:"numeric"
});



let firstDay =
new Date(year,month,1).getDay();


let days =
new Date(year,month+1,0).getDate();



for(let i=1;i<firstDay;i++){

let empty=document.createElement("div");
calendar.appendChild(empty);

}



for(let d=1; d<=days; d++){

let day=document.createElement("div");

day.className="day";


let dateKey =
`${year}-${String(month+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;


day.innerHTML =
`<h4>${d}</h4>`;


if(trainings[dateKey]){


trainings[dateKey].forEach(t=>{


let workout=document.createElement("div");

workout.className =
"training "+t.type;


workout.innerHTML =
`
<b>${t.name}</b><br>
${t.workout}
`;


day.appendChild(workout);


});


}


calendar.appendChild(day);


}
