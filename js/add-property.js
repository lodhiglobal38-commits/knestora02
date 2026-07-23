import { db } from "./firebase.js";

import {
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const imageInput = document.getElementById("propertyImages");
const preview = document.getElementById("imagePreview");

if(imageInput){

imageInput.addEventListener("change",function(){

preview.innerHTML="";

const files=this.files;

for(let i=0;i<files.length;i++){

const reader=new FileReader();

reader.onload=function(e){

const img=document.createElement("img");

img.src=e.target.result;

preview.appendChild(img);

}

reader.readAsDataURL(files[i]);

}

});

}

const form=document.querySelector(".property-form");

form.addEventListener("submit",function(e){

e.preventDefault();

const popup=document.createElement("div");

popup.className="success-popup";

popup.innerHTML="✅ Property Submitted Successfully";

document.body.appendChild(popup);

popup.style.display="block";

setTimeout(()=>{

popup.remove();

},3000);

});