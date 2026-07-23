import { db } from "./firebase.js";

import {
    doc,
    setDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


const saveBtn = document.getElementById("saveProfile");


saveBtn.addEventListener("click", async (e)=>{

    e.preventDefault();


    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;


    const phone = localStorage.getItem("phone");


    if(name === "" || city === "" || !phone){

        alert("Please fill all details");
        return;

    }


    try{


        await setDoc(doc(db,"users",phone),{

            name:name,
            email:email,
            city:city,
            phone:phone,
            createdAt:serverTimestamp()

        });


        alert("Profile Created Successfully");


        window.location.href="index.html";


    }
    catch(error){

        console.log(error);
        alert(error.message);

    }


});