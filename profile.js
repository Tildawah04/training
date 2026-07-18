import {

auth,

db

}

from "./firebase.js";



import {

doc,

setDoc

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



auth.onAuthStateChanged(user=>{


if(!user){

location="login.html";

}


});





window.saveProfile=function(){


let user=auth.currentUser;


setDoc(

doc(db,"users",user.uid),

{


name:name.value,

goal:goal.value,

email:user.email


}

)

.then(()=>{

status.innerHTML="Profil sparad";

});


}
