import {

auth,

db

}

from "./firebase.js";


import {

collection,

addDoc,

doc,

getDoc,

updateDoc

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";





function randomCode(){

return Math.floor(10000 + Math.random()*90000)
.toString();

}





window.createGroup=function(){


let user=auth.currentUser;


if(!user){

location="login.html";

return;

}



let code=randomCode();



addDoc(

collection(db,"groups"),

{


name:
groupName.value,


code:code,


members:[user.uid]


}


)

.then(()=>{


message.innerHTML=

"Grupp skapad! Din kod är: "

+code;


});


}





window.joinGroup=function(){


let user=auth.currentUser;


let code =
groupCode.value;



findGroup(code,user);


}






async function findGroup(code,user){


let groups =

await getDocs(

collection(db,"groups")

);



groups.forEach(async g=>{


let data=g.data();



if(data.code==code){



let ref=

doc(db,"groups",g.id);



await updateDoc(

ref,

{


members:

[

...data.members,

user.uid

]


}

);



message.innerHTML=

"Du är nu med i gruppen!";



}



});


}
