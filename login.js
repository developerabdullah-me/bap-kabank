document.getElementById("login-btn").addEventListener("click", function(){
  const inputEmail = document.getElementById("input-email");
  const emailFilt=inputEmail.value;
   const inputPassword = document.getElementById("input-password");
   const passwordFilt = inputPassword.value;
   if (emailFilt=='baap@.com' && passwordFilt == 'abbu'){
       console.log("100%")
       window.location.href='bank.html';
   }
})