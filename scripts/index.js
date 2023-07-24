const loginForm = document.getElementById("loginForm")
openEye = document.getElementById('togglePasswordOpen')
closeEye = document.getElementById('togglePasswordClose')
email = document.getElementById("email")
password = document.getElementById("password")



loginForm.addEventListener('submit', function(event){
    event.preventDefault();
    const emailValue = email.value
    const passwordValue = password.value
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;
    
    if(!emailPattern.test(emailValue) ){
        alert('Email pattern tidak sesuai');
        return;
    }

    if(!passwordPattern.test(passwordValue) ){
        alert('Password harus minimal 8 caracter, 1 huruf besar, 1 huruf kecil dan 1 non-alphanumeric ');
        return;
    }
    
    //loginForm.submit();
    alert('sukses melakukan login');
    location.reload();

} );

openEye.addEventListener("click",function(){
    password.type = "text";
    openEye.style.display = "none";
    closeEye.style.display ="inline-block"

});

closeEye.addEventListener("click",function(){
    password.type = "password";
    closeEye.style.display ="none";
    openEye.style.display = "inline-block";
});


