import { db } from "./firebase.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


const inputs = document.querySelectorAll(".otp-input");
const verifyBtn = document.getElementById("verifyBtn");


// OTP boxes control
inputs.forEach((input,index)=>{

    input.addEventListener("input",()=>{

        input.value = input.value.replace(/\D/g,'');

        if(input.value && index < 5){
            inputs[index+1].focus();
        }

        checkOTP();

    });


});


function checkOTP(){

    let otp="";

    inputs.forEach(input=>{
        otp += input.value;
    });

    verifyBtn.disabled = otp.length !== 6;

}



// Verify OTP

verifyBtn.addEventListener("click", async ()=>{


    let otp="";

    inputs.forEach(input=>{
        otp += input.value;
    });


    try{


        const result = await window.confirmationResult.confirm(otp);


        const phone = result.user.phoneNumber;


        localStorage.setItem("phone", phone);


        // Check user exists

        const userRef = doc(db,"users",phone);

        const userSnap = await getDoc(userRef);


        if(userSnap.exists()){

            window.location.href="index.html";

        }
        else{

            window.location.href="profile.html";

        }


    }
    catch(error){

        console.log(error);

        alert("Invalid OTP");

    }


});