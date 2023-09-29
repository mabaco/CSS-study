'use strict';

const form = document.getElementById('emailForm');
const email = document.getElementById('email');
const btn= document.getElementById('emailFormSubmit');
const errorMsg= document.getElementById('errorMsg');
const card= document.getElementById('card');
const confirmedMessage= document.getElementById('confirmedMessage');
const dismissBtn= document.getElementById('dismissBtn');
const successText= document.getElementById('successText');

function formFail(email){
    email.classList.add('error');
    errorMsg.removeAttribute("hidden");
};
function formSuccess(email){
    card.classList.add("hide");
    confirmedMessage.classList.remove("hide");
    successText.innerHTML= "A confirmation email has been sent to " + email.value + " Please open it and click the button inside to confirm your subscription.";
};
function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){ 
    formSuccess(email);
  } else{
      formFail(email);
  };
};

btn.addEventListener("click", function(e){
    e.preventDefault();
    validateEmail(email);
});

email.addEventListener("focus", function(){
    errorMsg.setAttribute("hidden" ,true);
    email.classList.remove("error");
});
dismissBtn.addEventListener("click", function(e){
    confirmedMessage.classList.add("hide");
    card.classList.remove("hide");
});