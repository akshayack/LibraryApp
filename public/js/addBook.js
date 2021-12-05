const { name } = require("ejs");

const form=document.getElementById('form');
const name=document.getElementById('name');
const email=document.getElementById('email');
const mob=document.getElementById('mob');
const username=document.getElementById('username');
const pswd=document.getElementById('pswd');
const cpswd=document.getElementById('cpswd');
const date = document.getElementById('date');



function checkInput(){
    //get th evalues from the inputs
    const nameValue=name.value.trim();
    const emailValue=email.value.trim();
    const mobValue=mob.value.trim();
    const usernameValue=username.value.trim();
    const pswdValue=pswd.value.trim();
    const cpswdValue=cpswd.value.trim();
    const dateValue = date.value.trim();
    if(nameValue===''){
        //show error
        //add error class
        setErrorFor(name, 'Name cannot be blank');
        validation = false;}
        else{
        //add success class
        setSuccessFor(name);
    }
    if(emailValue===''){
        //show error
        //add error class
        setErrorFor(email, 'Email cannot be blank');
        validation = false;}
        else {
        //add success class
        setSuccessFor(email);
        }
    
    if(usernameValue===''){
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank');
        var validation = false;}
        else{
        //add success class
        setSuccessFor(username);
    }
    

    if(dateValue===''){
        setErrorFor(date,'Date cannot be blank');
    }
    else{
        setSuccessFor(date);
    }

    return validation; 

}

function setErrorFor(input, message){
    const formControl= input.parentElement; //.form-control
    const small= formControl.querySelector('small');

    //add error message inside small tag
    small.innerText=message;

    //add error class
    formControl.className='form-control error';
}

function setSuccessFor(input){
    const formControl= input.parentElement;
    formControl.className='form-control success';
    
}



    
   

