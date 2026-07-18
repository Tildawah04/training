import {

auth

}

from "./firebase.js";



import {

createUserWithEmailAndPassword,

signInWithEmailAndPassword

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";





window.register=function(){


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;



createUserWithEmailAndPassword(
auth,
email,
password

)

.then(()=>{

message.innerHTML="Konto skapat!";

window.location="profile.html";

})


.catch(e=>{

message.innerHTML=e.message;

});


}





window.login=function(){


signInWithEmailAndPassword(

auth,

email.value,

password.value

)

.then(()=>{

window.location="profile.html";

})


.catch(e=>{

message.innerHTML=e.message;

});


}
