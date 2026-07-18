import {

auth,

db

}

from "./firebase.js";



import {

collection,

addDoc,

getDocs

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";





window.addWorkout=function(){


let user=auth.currentUser;



addDoc(

collection(db,"workouts"),

{
userId:user.uid,

user:user.email,

groupId:"DIN_GRUPP_ID",

date:date.value,

training:training.value
}


)

.then(load);


}





async function load(){


list.innerHTML="";


let data=

await getDocs(

collection(db,"workouts")

);



data.forEach(x=>{


let w=x.data();


list.innerHTML +=

`

<p>

📅 ${w.date}

<br>

👤 ${w.user}

<br>

🏃 ${w.training}

</p>


`;


});


}



auth.onAuthStateChanged(()=>{

load();

});
